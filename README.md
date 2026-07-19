# PARXO — रेडीमेड गारमेंट्स के लिए स्मार्ट पर्चा और स्टॉक मैनेजमेंट ऐप

## v3 अपडेट में क्या नया जुड़ा

पुराना सब कुछ (products, parchas, stock deduction, images, UI, IDs) बिल्कुल वैसे का वैसा है — कुछ भी हटाया या rename नहीं हुआ। सिर्फ नया जोड़ा गया है।

### 1. PDF बिल — Print / Download / WhatsApp
Bill खोलने पर अब **Print**, **PDF Download**, और **WhatsApp** बटन मिलेंगे (मौजूदा "शेयर करें" बटन जस का तस है)।
> PDF library इंटरनेट से पहली बार लोड होती है (jsPDF, CDN से)। एक बार लोड होने के बाद वो offline भी cache में रहती है (service worker के ज़रिए)।

### 2. Excel Export
Products page में तीन बटन: **Products Excel**, **Sales Excel**, **Customers Excel** — पूरा डेटा `.xlsx` में डाउनलोड होता है (SheetJS library, CDN से)।

### 3. WhatsApp Share
Bill dialog में सीधा WhatsApp share बटन।

### 4. Barcode / QR Scanner
"नया पर्चा" और "प्रोडक्ट जोड़ें" दोनों जगह 📷 स्कैन बटन। कैमरा permission माँगेगा। प्रोडक्ट में अब एक वैकल्पिक **Barcode** field है — भरा हो तो स्कैन करते ही सीधा parcha में जुड़ जाएगा।

### 5. बिक्री रिपोर्ट (Daily/Weekly/Monthly/Yearly) + चार्ट
Dashboard से रोज़ाना/साप्ताहिक/मासिक/सालाना रिपोर्ट खुलती है, हर एक का simple bar chart (कोई भारी external chart library नहीं — hand-drawn canvas chart, ताकि offline भी भरोसेमंद रहे)।
> पुराने पर्चों (upgrade से पहले के) में exact timestamp सेव नहीं था, इसलिए वो इन charts में शामिल नहीं होंगे — पर वो History में पूरी तरह सुरक्षित और दिखते रहेंगे।

### 6. Profit / Loss रिपोर्ट
हर product में अब एक नया **Cost Price** (खरीद मूल्य) field है (डिफ़ॉल्ट ₹0)। Profit = बिक्री − लागत, हर बिल में snapshot के तौर पर सेव होता है।
> ⚠️ जब तक आप हर product में असली Cost Price नहीं भरते, तब तक Profit रिपोर्ट ग़लत/अधूरी रहेगी — मैं आपके खरीद रेट अंदाज़े से नहीं भर सकता।

### 7. उधार खाता (Customer Credit / Udhar)
नया पर्चा बनाते वक़्त "उधार" चुन सकते हैं + कितना जमा हुआ बता सकते हैं। Dashboard से "उधार खाता" खोलकर हर ग्राहक का बकाया और भुगतान इतिहास देख/जोड़ सकते हैं।

### 8. Low Stock / Out of Stock अलर्ट
Dashboard पर banner + counts, हर product card पर "कम स्टॉक" / "स्टॉक खत्म" badge।

### 9. Category/Brand Filter + Advanced Search
Products page में अब dropdown filters (कैटेगरी, ब्रांड) मौजूदा search के साथ मिलकर काम करते हैं।

### 10. App Lock (PIN) — ⚠️ ईमानदार चेतावनी
सेटिंग में PIN सेट कर सकते हैं। **यह असली security नहीं है** — यह client-side JavaScript app है, कोई भी browser dev-tools या localStorage खोलकर इसे bypass कर सकता है। यह सिर्फ किसी की नज़र अचानक पड़ने से बचाने के लिए एक हल्का "screen lock" है, business-critical/legal protection के लिए इस पर भरोसा न करें।

### 11. Backup — Local Auto-Backup + Manual "Cloud"
हर save पर (हर ~10 मिनट में ज़्यादा से ज़्यादा एक बार) एक rotating local backup (last 5) अपने आप बनता है — सेटिंग से restore कर सकते हैं। "Cloud Backup" बटन असल में वही JSON फ़ाइल डाउनलोड करता है — क्योंकि इस app का कोई सर्वर नहीं है, असली automatic cloud sync के लिए एक backend (जैसे Firebase) चाहिए होगा, जो एक अलग तकनीकी फैसला है।

### 12. Import/Export
मौजूदा फीचर वैसा ही है, बस अब नए fields (customers, settings, cost price, invoice numbers) भी शामिल होते हैं — कुछ खोता नहीं।

### 13. Invoice Number Auto-Generation
हर नए बिल पर अब एक sequential invoice number बनता है: `PARXO-2026-0001`, `PARXO-2026-0002`, ... (साल बदलने पर counter फिर से शुरू होता है)। पुराना 6-अंकों वाला number भी साथ में रहता है।

### 14. Edit/Delete Bills — automatic stock adjustment
अब History में "बदलें" बटन है — बिल के items/qty बदलकर सेव करने पर स्टॉक अपने आप सही adjust हो जाता है (पुराना qty वापस जुड़ता है, नया qty घटता है)। Delete पहले जैसा ही काम करता है।

### 15. Dashboard
अब Total Sales के साथ **आज की बिक्री**, **कुल मुनाफ़ा**, **स्टॉक की कीमत**, **कम स्टॉक/खत्म स्टॉक count** भी दिखते हैं।

## टेस्ट किया गया (सिर्फ दावा नहीं)
- 331 products बिल्कुल सुरक्षित, सभी image paths resolve होते हैं (कोई 404 नहीं)
- Invoice numbers सही sequence में बनते हैं
- Udhar/भुगतान/due की calculation सही
- Bill edit करने पर stock का सही diff adjust होता है (qty 1→3 करने पर सिर्फ 2 यूनिट घटी, पूरी 3 नहीं)
- Bill delete करने पर stock और customer due दोनों सही रीसेट होते हैं
- पुराने (upgrade-से-पहले के) localStorage data पर migration टेस्ट किया — कुछ टूटा नहीं, नए fields सही defaults के साथ जुड़े

## GitHub पर replace कैसे करें
1. ZIP extract करें, सभी फाइलें repo के root में upload/replace करें।
2. पुराने product images (जो इस ZIP में मौजूद नहीं) delete न करें, सिर्फ merge/replace करें।
3. Upload के बाद app खोलें — पुराना data अपने आप नए schema में migrate हो जाएगा।

## अगर इंटरनेट न हो
PDF, Excel, और Barcode Scanner — ये तीन features external libraries (CDN) पर निर्भर हैं। बाकी पूरा app (products, parcha, stock, bills, reports, udhar, backup) पूरी तरह offline काम करता है, PWA install करने के बाद भी।


## Hindi / English Language Switch
Header और Settings में भाषा बदलने का विकल्प जोड़ा गया है। चुनी हुई भाषा याद रहती है और business data नहीं बदलता।


## Report and Udhar Fix
- Zero-sales reports now show a clear empty-state instead of an apparently broken blank chart.
- Report charts are display-only; they are not text boxes, so the phone keyboard is not expected.
- Udhar Khata now uses a stable click listener and always opens its dialog, including when there is no outstanding credit.
- Any old negative stock values are normalized to 0 on app startup.


## Correct DP Mapping Update
- Uploaded circular product images are mapped by exact product name.
- Five requested product families were removed from seed data and existing localStorage catalog: Lux Venus RN White Vest, Dixcy Scott Designer Vest, Dixcy Scott Cross Trunk, Gold Premium Drawer, Deeco Shorty Kids Wear.
- Essdee Print Vest was corrected to Essdee Flexi Trunks because the supplied packaging image is a trunk, not a vest.
- Existing bills and retained product rate/stock values are preserved.


## Product Chooser Filters
- नया पर्चा बनाते समय “प्रोडक्ट चुनें” popup में Category और Brand dropdown जोड़े गए।
- Search, Category और Brand तीनों filters एक साथ काम करते हैं।
- Product list में Brand, Category, Size और Rate दिखाई देते हैं।


## Duplicate Image Cleanup
- पुरानी और नई दोनों copies में से केवल वही product image files रखी गई हैं जिन्हें app.js वास्तव में उपयोग करता है।
- Service Worker cache list भी साफ कर दी गई है।
