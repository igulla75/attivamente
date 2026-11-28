// Giocogonia 3.54 – funzionamento senza connessione.
// - La pagina dell'app si chiede sempre prima alla rete (dopo un aggiornamento si vede subito la versione nuova);
//   la copia salvata si usa solo senza connessione.
// - Il dizionario si salva già all'installazione, in una cache separata, così i giochi di parole funzionano offline.
// - Se senza connessione manca un file, si risponde 503 (mai la pagina dell'app al posto di un altro file).
// - Questo service worker non tocca la versione inglese in /en/ né le sue cache.
// 3.53: nomi delle cache con il prefisso del nuovo nome. Il vecchio indirizzo (/attivamente/) è sullo stesso sito
// (igulla75.github.io), e le cache di un sito sono in comune: ognuna delle due app tocca solo le cache con il suo prefisso.
// 3.54: correzioni di testo e stile delle schede in Crea; nuova cache perché i telefoni scarichino la versione nuova.
const CACHE = 'giocogonia-v74';
const DIZ = 'giocogonia-diz-v1';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon.svg'];
const DIZ_FILES = ['./dizionario/comuni.txt', './dizionario/rare.txt'];
const fresh = u => new Request(u, { cache: 'reload' });

self.addEventListener('install', e => {
  e.waitUntil(Promise.all([
    caches.open(CACHE).then(c => c.addAll(FILES.map(fresh))),
    // il dizionario non deve bloccare l'installazione se per un momento non si scarica
    caches.open(DIZ).then(c => Promise.all(DIZ_FILES.map(u => c.add(fresh(u)).catch(() => {}))))
  ]));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k
    .filter(x => x.startsWith('giocogonia-') && !x.startsWith('giocogonia-en') && x !== CACHE && x !== DIZ)
    .map(x => caches.delete(x)))));
  self.clients.claim();
});

const SCOPE = new URL(self.registration.scope);
function isEnglish(url) { return url.pathname.startsWith(SCOPE.pathname + 'en/'); }
function isPage(req, url) { return req.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('/index.html'); }
const offline = () => new Response('Senza connessione: questo file non è ancora salvato sul dispositivo.',
  { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin || isEnglish(url)) return; // altri siti e versione inglese: nessun intervento
  if (isPage(e.request, url)) {
    e.respondWith(fetch(new Request(url.href, { cache: 'no-cache', credentials: 'same-origin' })).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
      return res;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')).then(r => r || offline())));
    return;
  }
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
    return res;
  }).catch(offline)));
});
