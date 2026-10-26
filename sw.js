const CACHE_NAME = 'vocab-quiz-shared-v4-spacing-slash';
const APP_FILES = ['./', './index.html', './manifest.webmanifest', './icon.svg'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', event => {
  const req = event.request; if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  const url = new URL(req.url);
  if (url.pathname.endsWith('/vocabulary.json') || url.pathname === '/vocabulary.json') {
    event.respondWith(fetch(req, {cache:'no-store'}).then(res => { if (res && res.ok) { const copy=res.clone(); caches.open(CACHE_NAME).then(cache=>cache.put('./vocabulary.json',copy)); } return res; }).catch(async () => (await caches.match('./vocabulary.json')) || new Response(JSON.stringify({format:'vocab-master-v1',vocab:[]}), {headers:{'Content-Type':'application/json'}})));
    return;
  }
  event.respondWith(caches.match(req).then(cached => cached || fetch(req).then(res => { if (res && res.ok) { const copy=res.clone(); caches.open(CACHE_NAME).then(cache=>cache.put(req,copy)); } return res; }).catch(() => caches.match('./index.html'))));
});
