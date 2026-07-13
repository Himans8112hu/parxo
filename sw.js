const CACHE='parxo-v4-all-sizes-40-110';
const FILES=['./','index.html','style.css','app.js','manifest.json','icon.svg',
'images/lux-venus.jpg','images/rupa-jon.jpg','images/young-india.jpg','images/macho-sporto.jpg',
'images/dixcy-scott.jpg','images/lux-cozi.jpg','images/commander.jpg','images/kids-shorty.jpg','images/gold.jpg'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).catch(()=>caches.match('index.html')));return;}e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
