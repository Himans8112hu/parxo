const CACHE='parxo-v7-reliable-fixes';
const FILES=['./','index.html','style.css','app.js','fixes.js','manifest.json','icon.svg',
'lux-venus.jpg','lux-venus-rn-vest.jpg','rupa-jon.jpg','young-india.jpg','young-india-premium-vest.jpg',
'young-india-glider-mini-trunk.jpg','young-india-rib-drawer.jpg','macho-sporto.jpg','macho-sporto-long-trunk.jpg',
'dixcy-scott.jpg','dixcy-scott-designer-vest.jpg','dixcy-scott-replay-brief.jpg',
'dixcy-scott-cross-trunk.jpg','lux-cozi.jpg','lux-cozi-fine-long-plain.jpg','lux-cozi-xylo-333-vest.jpg',
'lux-xylo-888-vest.jpg','lux-nitro-long-trunk.jpg','commander.jpg','commander-plain-long-trunk.jpg',
'commander-inner-elastic.jpg','kids-shorty.jpg','deeco-shorty-kids.jpg','gold.jpg','essdee-flexi-trunks.jpg',
// External libraries used by PDF / Excel / Barcode features. Precached best-effort so these
// keep working offline after the first successful online load; agar pehli baar internet na ho
// to sirf ye teen features (PDF, Excel, Scanner) tab tak kaam nahi karengi, baaki poora app chalega.
'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js',
'https://cdnjs.cloudflare.com/ajax/libs/jsQR/1.4.0/jsQR.min.js'];
self.addEventListener('install',e=>{
 self.skipWaiting();
 e.waitUntil(caches.open(CACHE).then(async c=>{
  // Har file ko alag-alag cache karte hain taaki ek file (jaise ek CDN library) fail hone par
  // poora service-worker install fail na ho (cache.addAll ek fail hote hi sab rok deta hai).
  await Promise.all(FILES.map(f=>c.add(f).catch(()=>{})));
 }));
});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).catch(()=>caches.match('index.html')));return;}e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
