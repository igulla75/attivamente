// Vecchio indirizzo di AttivaMente: questo service worker sostituisce quello vecchio, cancella SOLO le copie salvate
// dalla vecchia app (cache che cominciano con «attivamente-») e si disattiva. Le cache di Giocogonia non vengono toccate.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(k => Promise.all(k.filter(x => x.startsWith('attivamente-')).map(x => caches.delete(x))))
    .then(() => self.registration.unregister())
    .then(() => self.clients.matchAll({ type: 'window' }))
    .then(cs => cs.forEach(c => c.navigate(c.url).catch(() => {}))));
});
