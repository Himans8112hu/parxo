(() => {
  "use strict";

  const KEY = "parxo_language_v1";
  const H = {
    "रेडीमेड गारमेंट्स पर्चा मैनेजर": "Readymade Garments Invoice Manager",
    "भाषा": "Language", "हिंदी": "Hindi", "ऐप की भाषा": "App Language",
    "भाषा बदलते ही पूरा ऐप हिंदी या English में बदल जाएगा।": "The whole app changes immediately between Hindi and English.",
    "ऐप इंस्टॉल करें": "Install App", "कुल प्रोडक्ट": "Total Products", "कुल स्टॉक": "Total Stock",
    "कुल पर्चे": "Total Invoices", "कुल बिक्री": "Total Sales", "आज की बिक्री": "Today's Sales",
    "कुल मुनाफ़ा": "Total Profit", "स्टॉक की कीमत": "Stock Value", "कम स्टॉक": "Low Stock",
    "स्टॉक खत्म": "Out of Stock", "डैशबोर्ड": "Dashboard", "नया पर्चा": "New Invoice",
    "प्रोडक्ट": "Products", "पुराने पर्चे": "Old Invoices", "सेटिंग": "Settings",
    "उधार खाता": "Credit Ledger", "प्रॉफिट रिपोर्ट": "Profit Report", "बिक्री रिपोर्ट": "Sales Report",
    "रोज़ाना": "Daily", "साप्ताहिक": "Weekly", "मासिक": "Monthly", "सालाना": "Yearly",
    "+ नया जोड़ें": "+ Add New", "नाम, ब्रांड, कैटेगरी या साइज से खोजें": "Search by name, brand, category or size",
    "सभी कैटेगरी": "All Categories", "सभी ब्रांड": "All Brands", "बदलें": "Edit", "हटाएँ": "Delete",
    "खोलें": "Open", "ग्राहक का नाम *": "Customer name *", "मोबाइल नंबर": "Mobile number",
    "+ प्रोडक्ट जोड़ें": "+ Add Product", "📷 स्कैन करें": "📷 Scan", "कोई प्रोडक्ट नहीं चुना": "No product selected",
    "नोट": "Note", "भुगतान की स्थिति": "Payment Status", "पूरा भुगतान (Paid)": "Paid in Full",
    "उधार (Udhar)": "Credit", "कितनी राशि अभी जमा हुई (उधार होने पर)": "Amount paid now (for credit sale)",
    "कुल:": "Total:", "पर्चा सेव करें": "Save Invoice", "पर्चा अपडेट करें": "Update Invoice",
    "नाम या मोबाइल से खोजें": "Search by name or mobile", "कोई पर्चा नहीं है।": "No invoice found.",
    "दुकान के सभी डेमो आइटम दोबारा जोड़ें": "Restore All Demo Products",
    "डेटा बैकअप डाउनलोड करें (Manual/Cloud)": "Download Data Backup (Manual/Cloud)",
    "बैकअप वापस लाएँ": "Restore Backup", "Local Auto-Backup देखें/Restore करें": "View/Restore Local Auto-Backup",
    "App Lock (PIN) सेट/हटाएँ": "Set/Remove App Lock (PIN)", "सारा डेटा मिटाएँ": "Delete All Data",
    "नया प्रोडक्ट": "New Product", "प्रोडक्ट बदलें": "Edit Product", "प्रोडक्ट फोटो": "Product Photo",
    "प्रोडक्ट का नाम *": "Product name *", "ब्रांड": "Brand", "कैटेगरी": "Category",
    "साइज / नंबर": "Size / Number", "रेट (बिक्री मूल्य)": "Rate (Selling Price)",
    "Cost Price (खरीद मूल्य) — Profit रिपोर्ट के लिए": "Cost Price — for Profit Report", "स्टॉक": "Stock",
    "बारकोड / QR कोड (वैकल्पिक)": "Barcode / QR code (optional)", "📷 स्कैन": "📷 Scan",
    "रद्द करें": "Cancel", "सेव करें": "Save", "प्रोडक्ट चुनें": "Choose Product",
    "प्रोडक्ट खोजें": "Search Products", "बंद करें": "Close", "शेयर करें": "Share",
    "Profit / Loss रिपोर्ट": "Profit / Loss Report", "उधार खाता (Customer Credit)": "Credit Ledger",
    "फोटो काटें (1:1)": "Crop Photo (1:1)", "ज़ूम": "Zoom",
    "फोटो को उंगली से खिसकाएँ और ज़ूम करें।": "Move the photo with your finger and zoom it.",
    "फोटो कहाँ लगानी है?": "Where should this photo be applied?",
    "केवल इस product/size पर": "Only this product/size", "इसी product के सभी sizes पर": "All sizes of this product",
    "इसी brand के सभी products पर": "All products of this brand", "फोटो लगाएँ": "Apply Photo",
    "बारकोड / QR स्कैन करें": "Scan Barcode / QR", "🔒 PARXO लॉक है": "🔒 PARXO is Locked",
    "PIN डालें": "Enter PIN", "अनलॉक करें": "Unlock", "सामान": "Item", "मात्रा": "Qty",
    "रेट": "Rate", "रकम": "Amount", "इनवॉइस:": "Invoice:", "दिनांक:": "Date:",
    "ग्राहक:": "Customer:", "मोबाइल:": "Mobile:", "भुगतान:": "Payment:", "जमा": "Paid",
    "बकाया": "Due", "पर्चा #": "Invoice #", "उधार": "Credit", "साइज": "Size",
    "बचा स्टॉक:": "Remaining stock:", "Restore करें": "Restore", "Backup restore हो गया": "Backup restored",
    "बैकअप वापस आ गया": "Backup restored", "यह backup restore करने पर मौजूदा डेटा उससे बदल जाएगा। जारी रखें?": "Restoring this backup will replace the current data. Continue?",
    "यह सही PARXO बैकअप नहीं है": "This is not a valid PARXO backup", "सही राशि डालें": "Enter a valid amount",
    "कितनी राशि जमा हुई? (₹)": "How much amount was paid? (₹)", "पर्चा कॉपी हो गया": "Invoice copied",
    "यह पर्चा हटाएँ? हटाने पर स्टॉक वापस जुड़ जाएगा।": "Delete this invoice? Its stock will be restored.",
    "पहले पर्चा खोलें।": "Open an invoice first.", "यह सुविधा खोलते समय समस्या आई: ": "There was a problem opening this feature: ",
    "PDF नहीं बन सकी: ": "PDF could not be created: ", "WhatsApp के लिए इंटरनेट चालू करें।": "Turn on the internet to use WhatsApp.",
    "इस कोड से कोई प्रोडक्ट नहीं मिला।": "No product was found for this code.",
    "कैमरा permission नहीं मिली। Chrome Settings में Camera Allow करें।": "Camera permission was denied. Allow Camera in Chrome Settings.",
    "कैमरा नहीं खुल सका: ": "Camera could not be opened: ", "कैमरा स्कैनर HTTPS/GitHub Pages पर ही चलता है।": "The camera scanner works only on HTTPS/GitHub Pages.",
    "इस ब्राउज़र में कैमरा उपलब्ध नहीं है।": "Camera is unavailable in this browser.",
    "Scanner library load नहीं हुई। इंटरनेट चालू करके app दोबारा खोलें।": "Scanner library did not load. Turn on the internet and reopen the app.",
    "कृपया सही फोटो चुनें।": "Please choose a valid photo.", "Export करने के लिए डेटा नहीं है।": "There is no data to export.",
    "स्टॉक कम है:": "Low stock:", "पुरुष बनियान": "Men's Vest", "पुरुष शॉर्ट ब्रीफ": "Men's Brief",
    "पुरुष लॉन्ग ट्रंक": "Men's Long Trunk", "पुरुष मिनी ट्रंक": "Men's Mini Trunk", "पुरुष ड्रॉअर": "Men's Drawer",
    "बच्चों की इनरवियर": "Kids' Innerwear", "लेडीज़ पैंटी": "Ladies Panty",
    "इस अवधि में कोई बिक्री नहीं है": "There are no sales in this period",
    "पर्चा सेव होने के बाद रिपोर्ट यहाँ दिखाई देगी।": "The report will appear here after an invoice is saved.",
    "कुल बिक्री:": "Total Sales:", "उधार खाता नहीं खुल सका: ": "Credit ledger could not be opened: "
  };

  const E = Object.fromEntries(Object.entries(H).map(([hi, en]) => [en, hi]));
  const sortedHi = Object.keys(H).sort((a,b) => b.length-a.length);
  const sortedEn = Object.keys(E).sort((a,b) => b.length-a.length);
  let language = localStorage.getItem(KEY) === "en" ? "en" : "hi";
  let observer = null;
  let translating = false;

  function translateString(value, target = language) {
    if (value == null || value === "") return value;
    let result = String(value);
    const map = target === "en" ? H : E;
    const keys = target === "en" ? sortedHi : sortedEn;
    for (const key of keys) {
      if (result.includes(key)) result = result.split(key).join(map[key]);
    }
    return result;
  }

  function skipNode(node) {
    const p = node.parentElement;
    return !p || ["SCRIPT", "STYLE", "TEXTAREA", "CANVAS"].includes(p.tagName);
  }

  function translateRoot(root = document.body) {
    if (!root || translating) return;
    translating = true;
    if (observer) observer.disconnect();
    try {
      const elements = root.nodeType === Node.ELEMENT_NODE
        ? [root, ...root.querySelectorAll("*")]
        : [...document.querySelectorAll("*")];

      for (const el of elements) {
        if (["SCRIPT", "STYLE", "CANVAS"].includes(el.tagName)) continue;
        for (const attr of ["placeholder", "title", "aria-label"]) {
          if (!el.hasAttribute?.(attr)) continue;
          const before = el.getAttribute(attr);
          const after = translateString(before);
          if (after !== before) el.setAttribute(attr, after);
        }
        for (const node of [...el.childNodes]) {
          if (node.nodeType !== Node.TEXT_NODE || skipNode(node)) continue;
          const before = node.nodeValue;
          const after = translateString(before);
          if (after !== before) node.nodeValue = after;
        }
      }
      document.documentElement.lang = language;
      document.title = language === "en" ? "PARXO - Garments Invoice Manager" : "PARXO - गारमेंट्स पर्चा मैनेजर";
      for (const id of ["languageSelect", "settingsLanguageSelect"]) {
        const select = document.getElementById(id);
        if (select) select.value = language;
      }
    } finally {
      translating = false;
      startObserver();
    }
  }

  function startObserver() {
    if (!document.body) return;
    if (!observer) {
      observer = new MutationObserver(records => {
        if (translating) return;
        for (const record of records) {
          // Only translate newly inserted UI. Watching characterData caused an endless
          // mutation loop in the previous version and froze the whole app.
          for (const node of record.addedNodes) {
            if (node.nodeType === Node.ELEMENT_NODE) translateRoot(node);
            else if (node.nodeType === Node.TEXT_NODE && !skipNode(node)) {
              const before = node.nodeValue;
              const after = translateString(before);
              if (after !== before) node.nodeValue = after;
            }
          }
        }
      });
    }
    observer.observe(document.body, {subtree:true, childList:true});
  }

  function setLanguage(value) {
    language = value === "en" ? "en" : "hi";
    localStorage.setItem(KEY, language);
    translateRoot(document.body);
  }

  const nativeAlert = window.alert.bind(window);
  const nativeConfirm = window.confirm.bind(window);
  const nativePrompt = window.prompt.bind(window);
  window.alert = message => nativeAlert(translateString(message));
  window.confirm = message => nativeConfirm(translateString(message));
  window.prompt = (message, defaultValue) => nativePrompt(translateString(message), defaultValue);

  document.addEventListener("DOMContentLoaded", () => {
    for (const id of ["languageSelect", "settingsLanguageSelect"]) {
      document.getElementById(id)?.addEventListener("change", event => setLanguage(event.target.value));
    }
    translateRoot(document.body);
  });

  window.PARXOLanguage = {set:setLanguage, get:() => language, t:translateString};
})();
