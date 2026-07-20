PARXO FIREBASE PACKAGE — पहले यह पढ़ें

यह ZIP आपकी पुरानी PARXO app की सभी files और images के साथ तैयार है।
मुख्य बदलाव:
1. Firebase Firestore cloud sync
2. Firebase Email/Password Admin Login
3. Firestore security rules
4. पुराना local data पहली login पर cloud में upload
5. सभी पुराने features और UI सुरक्षित

UPLOAD:
GitHub repository में पुरानी files हटाकर इस ZIP के अंदर की सभी files upload/replace करें।

FIREBASE में जरूरी 2 काम:
A) Authentication > Sign-in method > Email/Password को Enable करें।
B) Authentication > Users > Add user में अपना Admin email/password बनाएँ।

SECURITY RULES:
Firestore Database > Rules में firestore.rules की पूरी सामग्री paste करके Publish करें।
Storage > Rules में storage.rules की पूरी सामग्री paste करके Publish करें।

पहली बार app खोलें:
Admin email/password डालें। अगर Firestore में data नहीं है तो इसी browser का पुराना PARXO data अपने-आप cloud में save होगा।

महत्वपूर्ण:
- firebase-config.js पहले PARXO Web App का config उपयोग करता है।
- दूसरा “PARXO Web App” इस्तेमाल नहीं किया गया है।
- localStorage अब offline cache और local backup के लिए रखा गया है; cloud master data Firestore है।
