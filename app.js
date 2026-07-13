const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const DBKEY='parxo_db_v1';
let db=JSON.parse(localStorage.getItem(DBKEY)||'{"products":[],"parchas":[]}');
let parchaItems=[], currentBill=null, deferredPrompt=null;
const save=()=>{localStorage.setItem(DBKEY,JSON.stringify(db)); updateStats();};

function showPage(id){$$('.page').forEach(x=>x.classList.toggle('active',x.id===id)); if(id==='products')renderProducts(); if(id==='history')renderHistory(); if(id==='dashboard')updateStats();}
$$('[data-page]').forEach(b=>b.onclick=()=>showPage(b.dataset.page));

function updateStats(){
 $('#statProducts').textContent=db.products.length;
 $('#statStock').textContent=db.products.reduce((a,p)=>a+(+p.stock||0),0);
 $('#statParchas').textContent=db.parchas.length;
 $('#statSale').textContent='₹'+db.parchas.reduce((a,p)=>a+(+p.total||0),0);
}
function escapeHtml(s=''){return s.replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
function productCard(p){
 return `<div class="item">
 <img class="thumb" src="${p.image||'icon.svg'}">
 <div class="itemMain"><b>${escapeHtml(p.name)}</b><div class="muted">${escapeHtml(p.brand||'')} ${escapeHtml(p.category||'')} | साइज: ${escapeHtml(p.size||'-')} | ₹${p.rate||0} | स्टॉक: ${p.stock||0}</div></div>
 <div class="actions"><button onclick="editProduct('${p.id}')">बदलें</button><button onclick="deleteProduct('${p.id}')">हटाएँ</button></div>
 </div>`;
}
function renderProducts(){
 const q=$('#productSearch').value.toLowerCase();
 const rows=db.products.filter(p=>JSON.stringify(p).toLowerCase().includes(q));
 $('#productList').innerHTML=rows.length?rows.map(productCard).join(''):'<p class="muted">अभी कोई प्रोडक्ट नहीं है।</p>';
}
$('#productSearch').oninput=renderProducts;

$('#openAddProduct').onclick=()=>openProduct();
function openProduct(p={}){
 $('#productDialogTitle').textContent=p.id?'प्रोडक्ट बदलें':'नया प्रोडक्ट';
 $('#productId').value=p.id||''; $('#productName').value=p.name||''; $('#productBrand').value=p.brand||'';
 $('#productCategory').value=p.category||''; $('#productSize').value=p.size||''; $('#productRate').value=p.rate||'';
 $('#productStock').value=p.stock||''; $('#productImage').value='';
 const im=$('#imagePreview'); im.src=p.image||''; im.style.display=p.image?'block':'none';
 $('#productDialog').showModal();
}
window.editProduct=id=>openProduct(db.products.find(p=>p.id===id));
window.deleteProduct=id=>{if(confirm('यह प्रोडक्ट हटाएँ?')){db.products=db.products.filter(p=>p.id!==id);save();renderProducts();}};
function fileToDataURL(file){return new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(r.result);r.onerror=rej;r.readAsDataURL(file);});}
$('#productImage').onchange=async e=>{if(e.target.files[0]){const d=await fileToDataURL(e.target.files[0]);$('#imagePreview').src=d;$('#imagePreview').style.display='block';}};
$('#saveProduct').onclick=async e=>{
 e.preventDefault(); const name=$('#productName').value.trim(); if(!name)return alert('प्रोडक्ट का नाम भरें');
 const id=$('#productId').value||crypto.randomUUID(); const old=db.products.find(p=>p.id===id)||{};
 let image=old.image||''; if($('#productImage').files[0]) image=await fileToDataURL($('#productImage').files[0]);
 const p={id,name,brand:$('#productBrand').value.trim(),category:$('#productCategory').value.trim(),size:$('#productSize').value.trim(),rate:+$('#productRate').value||0,stock:+$('#productStock').value||0,image};
 const i=db.products.findIndex(x=>x.id===id); if(i>=0)db.products[i]=p; else db.products.push(p);
 save(); $('#productDialog').close(); renderProducts();
};

$('#chooseProduct').onclick=()=>{renderPicker();$('#pickerDialog').showModal();};
function renderPicker(){
 const q=$('#pickerSearch').value.toLowerCase();
 const rows=db.products.filter(p=>JSON.stringify(p).toLowerCase().includes(q));
 $('#pickerList').innerHTML=rows.length?rows.map(p=>`<div class="item" onclick="addToParcha('${p.id}')"><img class="thumb" src="${p.image||'icon.svg'}"><div class="itemMain"><b>${escapeHtml(p.name)}</b><div class="muted">${escapeHtml(p.size||'')} | ₹${p.rate}</div></div></div>`).join(''):'<p>कोई प्रोडक्ट नहीं</p>';
}
$('#pickerSearch').oninput=renderPicker;
window.addToParcha=id=>{const p=db.products.find(x=>x.id===id); const ex=parchaItems.find(x=>x.productId===id); if(ex)ex.qty++; else parchaItems.push({productId:id,name:p.name,size:p.size,rate:p.rate,qty:1,image:p.image}); $('#pickerDialog').close();renderParcha();};
function renderParcha(){
 $('#parchaItems').innerHTML=parchaItems.length?parchaItems.map((x,i)=>`<div class="item"><img class="thumb" src="${x.image||'icon.svg'}"><div class="itemMain"><b>${escapeHtml(x.name)}</b><div class="muted">साइज ${escapeHtml(x.size||'-')} | ₹<input style="width:80px;padding:6px" type="number" value="${x.rate}" onchange="setRate(${i},this.value)"></div></div><div class="qty"><button onclick="qty(${i},-1)">−</button><b>${x.qty}</b><button onclick="qty(${i},1)">+</button><button onclick="removeItem(${i})">✕</button></div></div>`).join(''):'<p class="muted">कोई प्रोडक्ट नहीं चुना</p>';
 $('#grandTotal').textContent='₹'+parchaItems.reduce((a,x)=>a+x.qty*x.rate,0);
}
window.qty=(i,d)=>{parchaItems[i].qty=Math.max(1,parchaItems[i].qty+d);renderParcha();};
window.setRate=(i,v)=>{parchaItems[i].rate=+v||0;renderParcha();};
window.removeItem=i=>{parchaItems.splice(i,1);renderParcha();};

$('#saveParcha').onclick=()=>{
 const name=$('#customerName').value.trim(); if(!name)return alert('ग्राहक का नाम भरें'); if(!parchaItems.length)return alert('कम से कम एक प्रोडक्ट जोड़ें');
 const total=parchaItems.reduce((a,x)=>a+x.qty*x.rate,0);
 const p={id:crypto.randomUUID(),number:Date.now().toString().slice(-6),date:new Date().toLocaleString('hi-IN'),customerName:name,mobile:$('#customerMobile').value.trim(),note:$('#parchaNote').value.trim(),items:structuredClone(parchaItems),total};
 db.parchas.unshift(p); parchaItems=[]; $('#customerName').value='';$('#customerMobile').value='';$('#parchaNote').value='';renderParcha();save();alert('पर्चा सेव हो गया');showPage('history');
};

function renderHistory(){
 const q=$('#historySearch').value.toLowerCase();
 const rows=db.parchas.filter(p=>(p.customerName+' '+p.mobile+' '+p.number).toLowerCase().includes(q));
 $('#historyList').innerHTML=rows.length?rows.map(p=>`<div class="item"><div class="itemMain"><b>${escapeHtml(p.customerName)} — ₹${p.total}</b><div class="muted">${p.date} | पर्चा #${p.number} | ${escapeHtml(p.mobile||'')}</div></div><div class="actions"><button onclick="openBill('${p.id}')">खोलें</button><button onclick="deleteBill('${p.id}')">हटाएँ</button></div></div>`).join(''):'<p class="muted">कोई पर्चा नहीं है।</p>';
}
$('#historySearch').oninput=renderHistory;
window.deleteBill=id=>{if(confirm('यह पर्चा हटाएँ?')){db.parchas=db.parchas.filter(p=>p.id!==id);save();renderHistory();}};
window.openBill=id=>{
 const p=db.parchas.find(x=>x.id===id);currentBill=p;
 $('#billContent').innerHTML=`<h2>PARXO पर्चा</h2><p><b>पर्चा:</b> #${p.number}<br><b>दिनांक:</b> ${p.date}<br><b>ग्राहक:</b> ${escapeHtml(p.customerName)}<br><b>मोबाइल:</b> ${escapeHtml(p.mobile||'-')}</p><table class="billTable"><tr><th>सामान</th><th>मात्रा</th><th>रेट</th><th>रकम</th></tr>${p.items.map(x=>`<tr><td>${escapeHtml(x.name)} ${escapeHtml(x.size||'')}</td><td>${x.qty}</td><td>₹${x.rate}</td><td>₹${x.qty*x.rate}</td></tr>`).join('')}</table><h3>कुल ₹${p.total}</h3><p>${escapeHtml(p.note||'')}</p>`;
 $('#billDialog').showModal();
};
$('#shareBill').onclick=async()=>{
 if(!currentBill)return;
 const text=`PARXO पर्चा #${currentBill.number}\nग्राहक: ${currentBill.customerName}\n${currentBill.items.map(x=>`${x.name} ${x.size||''} × ${x.qty} = ₹${x.qty*x.rate}`).join('\n')}\nकुल: ₹${currentBill.total}`;
 if(navigator.share) await navigator.share({title:'PARXO पर्चा',text}); else {await navigator.clipboard.writeText(text);alert('पर्चा कॉपी हो गया');}
};

$('#exportData').onclick=()=>{const blob=new Blob([JSON.stringify(db,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='PARXO-backup.json';a.click();};
$('#importData').onchange=async e=>{try{const t=await e.target.files[0].text();const x=JSON.parse(t);if(!x.products||!x.parchas)throw 0;db=x;save();alert('बैकअप वापस आ गया');}catch{alert('यह सही PARXO बैकअप नहीं है');}};
$('#clearAll').onclick=()=>{if(confirm('सारा डेटा हमेशा के लिए मिट जाएगा।')){db={products:[],parchas:[]};save();renderProducts();renderHistory();}};
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;$('#installBtn').hidden=false;});
$('#installBtn').onclick=async()=>{if(deferredPrompt){deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$('#installBtn').hidden=true;}};
if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js');
updateStats();renderParcha();