(() => {
  'use strict';

  const KEY = 'parxo_language_v2';
  const H = {
    'रेडीमेड गारमेंट्स पर्चा मैनेजर':'Readymade Garments Invoice Manager',
    'भाषा':'Language','हिंदी':'Hindi','ऐप की भाषा':'App Language',
    'ऐप इंस्टॉल करें':'Install App','कुल प्रोडक्ट':'Total Products','कुल स्टॉक':'Total Stock',
    'कुल पर्चे':'Total Invoices','कुल बिक्री':'Total Sales','आज की बिक्री':"Today's Sales",
    'कुल मुनाफ़ा':'Total Profit','स्टॉक की कीमत':'Stock Value','कम स्टॉक':'Low Stock','स्टॉक खत्म':'Out of Stock',
    'डैशबोर्ड':'Dashboard','नया पर्चा':'New Invoice','प्रोडक्ट':'Products','पुराने पर्चे':'Old Invoices',
    'सेटिंग':'Settings','उधार खाता':'Credit Ledger','प्रॉफिट रिपोर्ट':'Profit Report','बिक्री रिपोर्ट':'Sales Report',
    'रोज़ाना':'Daily','साप्ताहिक':'Weekly','मासिक':'Monthly','सालाना':'Yearly',
    '+ नया जोड़ें':'+ Add New','नाम, ब्रांड, कैटेगरी या साइज से खोजें':'Search by name, brand, category or size',
    'सभी कैटेगरी':'All Categories','सभी ब्रांड':'All Brands','बदलें':'Edit','हटाएँ':'Delete','खोलें':'Open',
    'ग्राहक का नाम *':'Customer name *','मोबाइल नंबर':'Mobile number','+ प्रोडक्ट जोड़ें':'+ Add Product',
    '📷 स्कैन करें':'📷 Scan','कोई प्रोडक्ट नहीं चुना':'No product selected','नोट':'Note',
    'भुगतान की स्थिति':'Payment Status','पूरा भुगतान (Paid)':'Paid in Full','उधार (Udhar)':'Credit',
    'कितनी राशि अभी जमा हुई (उधार होने पर)':'Amount paid now (for credit sale)','कुल:':'Total:',
    'पर्चा सेव करें':'Save Invoice','पर्चा अपडेट करें':'Update Invoice','नाम या मोबाइल से खोजें':'Search by name or mobile',
    'कोई पर्चा नहीं है।':'No invoice found.','नया प्रोडक्ट':'New Product','प्रोडक्ट बदलें':'Edit Product',
    'प्रोडक्ट फोटो':'Product Photo','प्रोडक्ट का नाम *':'Product name *','ब्रांड':'Brand','कैटेगरी':'Category',
    'साइज / नंबर':'Size / Number','रेट (बिक्री मूल्य)':'Rate (Selling Price)','स्टॉक':'Stock',
    'बारकोड / QR कोड (वैकल्पिक)':'Barcode / QR code (optional)','📷 स्कैन':'📷 Scan',
    'रद्द करें':'Cancel','सेव करें':'Save','प्रोडक्ट चुनें':'Choose Product','प्रोडक्ट खोजें':'Search Products',
    'बंद करें':'Close','शेयर करें':'Share','फोटो काटें (1:1)':'Crop Photo (1:1)','ज़ूम':'Zoom',
    'फोटो को उंगली से खिसकाएँ और ज़ूम करें।':'Move the photo with your finger and zoom it.',
    'फोटो कहाँ लगानी है?':'Where should this photo be applied?','केवल इस product/size पर':'Only this product/size',
    'इसी product के सभी sizes पर':'All sizes of this product','इसी brand के सभी products पर':'All products of this brand',
    'फोटो लगाएँ':'Apply Photo','बारकोड / QR स्कैन करें':'Scan Barcode / QR','सामान':'Item','मात्रा':'Qty',
    'रेट':'Rate','रकम':'Amount','दिनांक:':'Date:','ग्राहक:':'Customer:','मोबाइल:':'Mobile:',
    'भुगतान:':'Payment:','जमा':'Paid','बकाया':'Due','उधार':'Credit','साइज':'Size',
    'इस अवधि में कोई बिक्री नहीं है':'There are no sales in this period',
    'पर्चा सेव होने के बाद रिपोर्ट यहाँ दिखाई देगी।':'The report will appear here after an invoice is saved.',
    'चार्ट में दिख रही कुल बिक्री:':'Total sales shown in chart:','कुल बिक्री:':'Total Sales:',
    'पुरुष बनियान':"Men's Vest",'पुरुष शॉर्ट ब्रीफ':"Men's Brief",'पुरुष लॉन्ग ट्रंक':"Men's Long Trunk",
    'पुरुष मिनी ट्रंक':"Men's Mini Trunk",'पुरुष ड्रॉअर':"Men's Drawer",'बच्चों की इनरवियर':"Kids' Innerwear",
    'लेडीज़ पैंटी':'Ladies Panty'
  };
  const E = Object.fromEntries(Object.entries(H).map(([hi,en]) => [en,hi]));
  const hiKeys = Object.keys(H).sort((a,b)=>b.length-a.length);
  const enKeys = Object.keys(E).sort((a,b)=>b.length-a.length);
  let lang = localStorage.getItem(KEY) === 'en' ? 'en' : 'hi';
  let busy = false;

  function translateText(value, target=lang){
    if(value == null || value === '') return value;
    let result = String(value);
    const map = target === 'en' ? H : E;
    const keys = target === 'en' ? hiKeys : enKeys;
    for(const key of keys){
      if(result.includes(key)) result = result.split(key).join(map[key]);
    }
    return result;
  }

  // Product names, customer data and report values are business data, not interface text.
  function isBusinessData(el){
    return !!el.closest('.item, .list, #productsList, #pickerList, #historyList, #billContent, table, canvas, textarea');
  }

  function translateUI(root=document.body){
    if(!root || busy) return;
    busy = true;
    try{
      const all = [root, ...root.querySelectorAll('*')];
      for(const el of all){
        if(!el || ['SCRIPT','STYLE','CANVAS','TEXTAREA'].includes(el.tagName)) continue;
        if(isBusinessData(el)) continue;
        for(const attr of ['placeholder','title','aria-label']){
          if(el.hasAttribute?.(attr)){
            const before = el.getAttribute(attr);
            const after = translateText(before);
            if(before !== after) el.setAttribute(attr, after);
          }
        }
        for(const node of el.childNodes){
          if(node.nodeType !== Node.TEXT_NODE) continue;
          const before = node.nodeValue;
          const after = translateText(before);
          if(before !== after) node.nodeValue = after;
        }
      }
      document.documentElement.lang = lang;
      document.title = lang === 'en' ? 'PARXO - Garments Invoice Manager' : 'PARXO - गारमेंट्स पर्चा मैनेजर';
      document.getElementById('languageSelect')?.setAttribute('data-current-language', lang);
      const a = document.getElementById('languageSelect'); if(a) a.value = lang;
      const b = document.getElementById('settingsLanguageSelect'); if(b) b.value = lang;
    } finally { busy = false; }
  }

  function setLanguage(value){
    lang = value === 'en' ? 'en' : 'hi';
    localStorage.setItem(KEY, lang);
    // One controlled pass only. No MutationObserver: it was freezing phones.
    requestAnimationFrame(() => translateUI(document.body));
  }

  const nativeAlert = window.alert.bind(window);
  const nativeConfirm = window.confirm.bind(window);
  const nativePrompt = window.prompt.bind(window);
  window.alert = msg => nativeAlert(translateText(msg));
  window.confirm = msg => nativeConfirm(translateText(msg));
  window.prompt = (msg, def) => nativePrompt(translateText(msg), def);

  document.addEventListener('DOMContentLoaded', () => {
    for(const id of ['languageSelect','settingsLanguageSelect']){
      document.getElementById(id)?.addEventListener('change', e => setLanguage(e.target.value));
    }
    translateUI(document.body);
  });

  // Dynamic dialogs/pages are translated once after a user action, never continuously.
  document.addEventListener('click', () => {
    setTimeout(() => translateUI(document.body), 0);
  }, true);

  window.PARXOLanguage = { set:setLanguage, get:()=>lang, t:translateText, refresh:()=>translateUI(document.body) };
})();
