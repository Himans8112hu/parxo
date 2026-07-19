// PARXO v7 reliable feature fixes
(function(){
'use strict';
const byId=id=>document.getElementById(id);
function bind(id,fn){const el=byId(id);if(!el)return;el.onclick=null;el.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();Promise.resolve(fn(e)).catch(err=>{console.error(id,err);alert('यह सुविधा खोलते समय समस्या आई: '+(err.message||err));});});}

// Image cropper
let crop={scale:1,x:0,y:0,startX:0,startY:0,baseX:0,baseY:0,drag:false};
function drawCropTransform(){const img=byId('cropImage');if(img)img.style.transform=`translate(calc(-50% + ${crop.x}px),calc(-50% + ${crop.y}px)) scale(${crop.scale})`;}
function openCrop(file){
 if(!file||!file.type.startsWith('image/'))return alert('कृपया सही फोटो चुनें।');
 const r=new FileReader();r.onload=()=>{const img=byId('cropImage');img.onload=()=>{const vp=byId('cropViewport');const fit=Math.max(vp.clientWidth/img.naturalWidth,vp.clientHeight/img.naturalHeight);crop.scale=fit;crop.x=0;crop.y=0;const z=byId('cropZoom');z.min=fit;z.max=fit*3;z.value=fit;z.step=fit/100;drawCropTransform();};img.src=r.result;byId('cropDialog').showModal();};r.readAsDataURL(file);
}
const input=byId('productImage');if(input)input.addEventListener('change',e=>{if(e.target.files?.[0])openCrop(e.target.files[0]);});
const vp=byId('cropViewport');if(vp){
 const start=e=>{crop.drag=true;const p=e.touches?e.touches[0]:e;crop.startX=p.clientX;crop.startY=p.clientY;crop.baseX=crop.x;crop.baseY=crop.y;e.preventDefault();};
 const move=e=>{if(!crop.drag)return;const p=e.touches?e.touches[0]:e;crop.x=crop.baseX+p.clientX-crop.startX;crop.y=crop.baseY+p.clientY-crop.startY;drawCropTransform();e.preventDefault();};
 const end=()=>crop.drag=false;vp.addEventListener('pointerdown',start);window.addEventListener('pointermove',move);window.addEventListener('pointerup',end);vp.addEventListener('touchstart',start,{passive:false});window.addEventListener('touchmove',move,{passive:false});window.addEventListener('touchend',end);
}
byId('cropZoom')?.addEventListener('input',e=>{crop.scale=+e.target.value;drawCropTransform();});
bind('cancelCrop',()=>{byId('cropDialog').close();if(input)input.value='';});
bind('applyCrop',()=>{const vp=byId('cropViewport'),img=byId('cropImage');if(!img?.naturalWidth)return;const out=document.createElement('canvas');out.width=600;out.height=600;const ctx=out.getContext('2d');const rect=vp.getBoundingClientRect();const dw=img.naturalWidth*crop.scale,dh=img.naturalHeight*crop.scale;const left=rect.width/2+crop.x-dw/2,top=rect.height/2+crop.y-dh/2;ctx.fillStyle='#fff';ctx.fillRect(0,0,600,600);ctx.drawImage(img,(0-left)/crop.scale,(0-top)/crop.scale,rect.width/crop.scale,rect.height/crop.scale,0,0,600,600);const data=out.toDataURL('image/jpeg',0.82);window.__parxoCroppedImage=data;window.__parxoImageScope=document.querySelector('input[name="imageScope"]:checked')?.value||'product';const prev=byId('imagePreview');prev.src=data;prev.style.display='block';byId('cropDialog').close();});

// Scanner: native BarcodeDetector first, jsQR fallback
let scanStream=null,scanRAF=0,scanTarget='search',detector=null;
function stopScannerV7(){if(scanRAF)cancelAnimationFrame(scanRAF);scanRAF=0;if(scanStream)scanStream.getTracks().forEach(t=>t.stop());scanStream=null;const d=byId('scannerDialog');if(d?.open)d.close();}
async function scanFrame(){const video=byId('scannerVideo');if(!video||!scanStream)return;try{let value='';if(detector){const codes=await detector.detect(video);value=codes?.[0]?.rawValue||'';}else if(window.jsQR&&video.readyState>=2){const c=byId('scannerCanvas');c.width=video.videoWidth;c.height=video.videoHeight;const x=c.getContext('2d');x.drawImage(video,0,0);const d=x.getImageData(0,0,c.width,c.height);value=window.jsQR(d.data,d.width,d.height)?.data||'';}if(value){stopScannerV7();if(scanTarget==='product')byId('productBarcode').value=value;else{const p=db.products.find(x=>x.barcode===value);p?addToParcha(p.id):alert('इस कोड से कोई प्रोडक्ट नहीं मिला।');}return;}}catch(e){console.warn(e)}scanRAF=requestAnimationFrame(scanFrame);}
async function openScannerV7(target){scanTarget=target||'search';if(!window.isSecureContext)return alert('कैमरा स्कैनर HTTPS/GitHub Pages पर ही चलता है।');if(!navigator.mediaDevices?.getUserMedia)return alert('इस ब्राउज़र में कैमरा उपलब्ध नहीं है।');try{detector='BarcodeDetector'in window?new BarcodeDetector():null;if(!detector&&!window.jsQR)return alert('Scanner library load नहीं हुई। इंटरनेट चालू करके app दोबारा खोलें।');byId('scannerDialog').showModal();scanStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'}},audio:false});const v=byId('scannerVideo');v.srcObject=scanStream;await v.play();scanFrame();}catch(e){stopScannerV7();alert(e.name==='NotAllowedError'?'कैमरा permission नहीं मिली। Chrome Settings में Camera Allow करें।':'कैमरा नहीं खुल सका: '+e.message);}}
window.openScanner=openScannerV7;window.stopScanner=stopScannerV7;bind('productScanBtn',()=>openScannerV7('product'));bind('parchaScanBtn',()=>openScannerV7('search'));bind('closeScannerBtn',stopScannerV7);

// Offline Excel-compatible CSV exports
function csvEscape(v){return '"'+String(v??'').replace(/"/g,'""')+'"';}
function downloadCSV(name,rows){if(!rows.length)return alert('Export करने के लिए डेटा नहीं है।');const heads=Object.keys(rows[0]);const csv='\uFEFF'+heads.map(csvEscape).join(',')+'\n'+rows.map(r=>heads.map(h=>csvEscape(r[h])).join(',')).join('\n');const b=new Blob([csv],{type:'text/csv;charset=utf-8'}),a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);}
window.exportProductsExcel=()=>downloadCSV('PARXO-Products.csv',db.products.map(p=>({Name:p.name,Brand:p.brand,Category:p.category,Size:p.size,Rate:p.rate,CostPrice:p.costPrice||0,Stock:p.stock,Barcode:p.barcode||''})));
window.exportSalesExcel=()=>downloadCSV('PARXO-Sales.csv',db.parchas.map(p=>({Invoice:p.invoiceNo||p.number,Date:p.date,Customer:p.customerName,Mobile:p.mobile,Total:p.total,Cost:p.totalCost||0,Profit:p.profit||0,PaymentStatus:p.paymentStatus,Paid:p.amountPaid,Due:p.amountDue})));
window.exportCustomersExcel=()=>{recalcCustomerLedger();downloadCSV('PARXO-Customers.csv',(db.customers||[]).map(c=>({Name:c.name,Mobile:c.mobile,TotalBilled:c.totalBilled,TotalDue:c.totalDue})));};
bind('productsExcelBtn',window.exportProductsExcel);bind('salesExcelBtn',window.exportSalesExcel);bind('customersExcelBtn',window.exportCustomersExcel);

// Reports
bind('profitReportBtn',()=>showProfitReport());bind('dailyReportBtn',()=>showReport('day'));bind('weeklyReportBtn',()=>showReport('week'));bind('monthlyReportBtn',()=>showReport('month'));bind('yearlyReportBtn',()=>showReport('year'));

// Bill actions
window.shareBillWhatsapp=()=>{if(!currentBill)return alert('पहले पर्चा खोलें।');if(!navigator.onLine)return alert('WhatsApp के लिए इंटरनेट चालू करें।');window.location.href='https://wa.me/?text='+encodeURIComponent(billTextSummary(currentBill));};
window.printBill=()=>{if(!currentBill)return alert('पहले पर्चा खोलें।');setTimeout(()=>window.print(),50);};
function wrapLines(ctx,text,maxWidth){const words=String(text).split(/\s+/),lines=[];let line='';for(const w of words){const t=line?line+' '+w:w;if(ctx.measureText(t).width>maxWidth&&line){lines.push(line);line=w}else line=t}if(line)lines.push(line);return lines;}
function makeBillCanvas(bill){const W=1240,pad=70,rowH=48,c=document.createElement('canvas');c.width=W;c.height=Math.max(1754,520+bill.items.length*rowH);const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);x.fillStyle='#111';x.font='bold 50px sans-serif';x.fillText('PARXO PARCHA',pad,90);x.font='28px sans-serif';let y=145;['Invoice: '+(bill.invoiceNo||bill.number),'Date: '+bill.date,'Customer: '+bill.customerName,'Mobile: '+(bill.mobile||'-')].forEach(t=>{x.fillText(t,pad,y);y+=42});y+=20;x.font='bold 25px sans-serif';x.fillText('ITEM',pad,y);x.fillText('QTY',780,y);x.fillText('RATE',900,y);x.fillText('AMOUNT',1040,y);y+=35;x.font='24px sans-serif';for(const it of bill.items){const lines=wrapLines(x,`${it.name} ${it.size||''}`,650);lines.forEach((line,j)=>x.fillText(line,pad,y+j*30));x.fillText(String(it.qty),800,y);x.fillText('Rs.'+it.rate,900,y);x.fillText('Rs.'+(it.qty*it.rate),1040,y);y+=Math.max(rowH,lines.length*30+14)}y+=15;x.font='bold 34px sans-serif';x.fillText('TOTAL: Rs.'+bill.total,pad,y);y+=48;if(bill.paymentStatus==='udhar'){x.font='26px sans-serif';x.fillText(`Paid: Rs.${bill.amountPaid}   Due: Rs.${bill.amountDue}`,pad,y);y+=40}if(bill.note){x.font='24px sans-serif';wrapLines(x,'Note: '+bill.note,W-pad*2).forEach(line=>{x.fillText(line,pad,y);y+=32})}return c;}
function jpegToPdf(dataUrl,w,h){const bin=atob(dataUrl.split(',')[1]),img=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)img[i]=bin.charCodeAt(i);const enc=new TextEncoder(),parts=[];let offset=0;const offs=[0],push=s=>{const b=typeof s==='string'?enc.encode(s):s;parts.push(b);offset+=b.length};push('%PDF-1.4\n%PARXO\n');const obj=(n,b)=>{offs[n]=offset;push(`${n} 0 obj\n${b}\nendobj\n`)};obj(1,'<< /Type /Catalog /Pages 2 0 R >>');obj(2,'<< /Type /Pages /Kids [3 0 R] /Count 1 >>');obj(3,'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /XObject << /Im0 5 0 R >> >> /Contents 4 0 R >>');const s=Math.min(595/w,842/h),dw=w*s,dh=h*s,dx=(595-dw)/2,dy=(842-dh)/2,stream=`q ${dw.toFixed(2)} 0 0 ${dh.toFixed(2)} ${dx.toFixed(2)} ${dy.toFixed(2)} cm /Im0 Do Q`;obj(4,`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`);offs[5]=offset;push(`5 0 obj\n<< /Type /XObject /Subtype /Image /Width ${w} /Height ${h} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${img.length} >>\nstream\n`);push(img);push('\nendstream\nendobj\n');const xref=offset;push('xref\n0 6\n0000000000 65535 f \n');for(let i=1;i<=5;i++)push(String(offs[i]).padStart(10,'0')+' 00000 n \n');push(`trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`);return new Blob(parts,{type:'application/pdf'});}
window.downloadBillPdf=()=>{if(!currentBill)return alert('पहले पर्चा खोलें।');try{const c=makeBillCanvas(currentBill),blob=jpegToPdf(c.toDataURL('image/jpeg',.9),c.width,c.height),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=(currentBill.invoiceNo||('PARXO-'+currentBill.number))+'.pdf';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),2000)}catch(e){console.error(e);alert('PDF नहीं बन सकी: '+e.message)}};
bind('whatsappBill',window.shareBillWhatsapp);bind('printBill',window.printBill);bind('downloadPdf',window.downloadBillPdf);bind('closeBill',()=>{const d=byId('billDialog');if(d?.open)d.close()});
})();


// ===== PARXO report + credit ledger reliability patch =====
(function(){
  const $id = id => document.getElementById(id);

  function normalizeNegativeStock(){
    try{
      if(!db || !Array.isArray(db.products)) return;
      let changed=false;
      for(const product of db.products){
        const stock=Number(product.stock);
        if(!Number.isFinite(stock) || stock < 0){
          product.stock=0;
          changed=true;
        }
      }
      if(changed){
        if(typeof save === 'function') save();
        if(typeof renderProducts === 'function') renderProducts();
        if(typeof updateStats === 'function') updateStats();
      }
    }catch(error){
      console.warn('Stock normalization skipped:', error);
    }
  }

  function bindReliableButtons(){
    const udharButton=$id('udharBtn');
    if(udharButton && !udharButton.dataset.parxoBound){
      udharButton.dataset.parxoBound='1';
      udharButton.addEventListener('click', function(event){
        event.preventDefault();
        event.stopPropagation();
        try{
          if(typeof window.openUdhar !== 'function'){
            throw new Error('उधार खाता function उपलब्ध नहीं है');
          }
          window.openUdhar();
        }catch(error){
          console.error(error);
          alert('उधार खाता नहीं खुल सका: '+error.message);
        }
      });
    }

    const closeReports=$id('closeReportsBtn');
    if(closeReports && !closeReports.dataset.parxoBound){
      closeReports.dataset.parxoBound='1';
      closeReports.addEventListener('click', function(){
        const dialog=$id('reportsDialog');
        if(dialog?.open) dialog.close();
      });
    }
  }

  function makeReadableReport(period){
    if(typeof groupSales !== 'function') return;
    const data=groupSales(period);
    const keys=Object.keys(data).sort();
    const canvas=$id('reportChart');
    const empty=$id('reportEmptyState');
    const details=$id('reportDetails');
    const summary=$id('reportSummary');
    const title=$id('reportTitle');
    const titleMap={day:'रोज़ाना',week:'साप्ताहिक',month:'मासिक',year:'सालाना'};

    if(title) title.textContent=(titleMap[period]||'बिक्री')+' बिक्री रिपोर्ट';

    if(!keys.length){
      if(canvas) canvas.hidden=true;
      if(empty) empty.hidden=false;
      if(details) details.innerHTML='';
      if(summary) summary.innerHTML='कुल बिक्री: <b>₹0</b>';
    }else{
      if(canvas){
        canvas.hidden=false;
        if(typeof drawBarChart === 'function') drawBarChart(canvas,data);
      }
      if(empty) empty.hidden=true;
      if(details){
        details.innerHTML=keys.slice(-12).reverse().map(key=>
          `<div class="reportDetailRow"><span>${escapeHtml(key)}</span><b>₹${Number(data[key]||0).toFixed(0)}</b></div>`
        ).join('');
      }
      const total=Object.values(data).reduce((a,b)=>a+(Number(b)||0),0);
      if(summary) summary.innerHTML=`चार्ट में दिख रही कुल बिक्री: <b>₹${total.toFixed(0)}</b>`;
    }

    const dialog=$id('reportsDialog');
    if(dialog && !dialog.open) dialog.showModal();
  }

  // Override only the report presentation. Existing grouping and saved data stay untouched.
  window.showReport = makeReadableReport;

  document.addEventListener('DOMContentLoaded', function(){
    normalizeNegativeStock();
    bindReliableButtons();

    const bindings = {
      dailyReportBtn:'day',
      weeklyReportBtn:'week',
      monthlyReportBtn:'month',
      yearlyReportBtn:'year'
    };
    for(const [id,period] of Object.entries(bindings)){
      const button=$id(id);
      if(button && !button.dataset.parxoReportBound){
        button.dataset.parxoReportBound='1';
        button.addEventListener('click', function(event){
          event.preventDefault();
          makeReadableReport(period);
        });
      }
    }
  });
})();
