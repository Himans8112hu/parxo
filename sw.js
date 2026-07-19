const CACHE='parxo-v16-final-product-images';
const FILES=['./','index.html','style.css','app.js','fixes.js','language.js','manifest.json','icon.svg','dp-lux-nitro-dynamic-long-trunk.png','dp-commander-outer-elastic.png','dp-rupa-jon-rn-white-vest.png','dp-essdee-flexi-trunks.png','dp-lux-cozi-xylo-333-gym-vest.png','dp-macho-sporto-smart-cut-brief.png','dp-lux-xylo-888-gym-vest.png','dp-macho-sporto-long-trunk.png','dp-lux-cozi-fine-long-plain.png','dp-dixcy-scott-replay-brief.png','dp-commander-inner-elastic.png','dp-young-india-glider-mini-trunk.png','dp-rupa-jon-amazing-panties.png','dp-young-india-premium-vest.png',

'young-india-rib-drawer.jpg',


'commander-plain-long-trunk.jpg',

// External libraries used by PDF / Excel / Barcode features. Precached best-effort so these
// keep working offline after the first successful online load; agar pehli baar internet na ho
// to sirf ye teen features (PDF, Excel, Scanner) tab tak kaam nahi karengi, baaki poora app chalega.
'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js',
'https://cdnjs.cloudflare.com/ajax/libs/jsQR/1.4.0/jsQR.min.js','dp-dixcy-scott-cross-trunk.jpg','dp-dixcy-scott-designer-vest.jpg','dp-rupa-jon-aishwarya-long-panty.jpg'];
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
