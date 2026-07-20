PARXO FINAL FIRESTORE UPDATE

इस ZIP में केवल बदली हुई files हैं। Images दोबारा upload नहीं करनी हैं।

GitHub repository के root में इन files को Replace/Upload करें:
1. index.html
2. app.js
3. style.css
4. firebase-config.js
5. firestore-service.js
6. sw.js

Firebase Console में अलग से यह करें:
A) Firestore Database > Rules में firestore.rules का पूरा code paste करके Publish करें।
B) Storage > Rules में storage.rules का पूरा code paste करके Publish करें।

महत्वपूर्ण:
- Login वही Firebase Authentication वाला Admin Email/Password है।
- पहली सफल Login पर पुराने phone/browser का local data Firestore में upload होगा,
  अगर Firestore का PARXO document खाली है।
- उसके बाद दूसरे device में उसी Admin login से वही cloud data दिखाई देगा।
- localStorage अब backup/offline cache के रूप में रहता है; मुख्य sync Firestore में होता है।
- Upload के बाद GitHub Pages को 2-5 मिनट दें और app को एक बार बंद करके दोबारा खोलें।
