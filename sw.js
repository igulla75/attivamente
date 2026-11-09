// Funzionamento senza connessione.
// La pagina dell'app si chiede sempre prima alla rete (così dopo un aggiornamento si vede subito la versione nuova)
// e si usa la copia salvata solo senza connessione. Gli altri file (icona, dizionario…) si prendono dalla copia salvata.
const CACHE = 'attivamente-v47';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon.svg'];
// cache:'reload' scavalca la cache del browser: si salva davvero la versione appena pubblicata
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(u => new Request(u, { cache: 'reload' }))))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x))))); self.clients.claim(); });
function isPage(req, url) { return req.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('/index.html'); }
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin === location.origin && isPage(e.request, url)) {
    e.respondWith(fetch(new Request(url.href, { cache: 'no-cache', credentials: 'same-origin' })).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
      return res;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html'))));
    return;
  }
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => {
    if (res.ok && url.origin === location.origin) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
    return res;
  }).catch(() => caches.match('./index.html'))));
});
