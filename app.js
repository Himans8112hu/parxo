const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const DBKEY='parxo_db_v1';
const LOW_STOCK_THRESHOLD=5;
const DEFAULT_PRODUCTS=[{"id":"seed-rupa-jon-rn-white-vest-40","name":"Rupa Jon RN White Vest","brand":"Rupa Jon","category":"पुरुष बनियान","size":"40","rate":0,"stock":0,"image":"dp-rupa-jon-rn-white-vest.png","seeded":true},{"id":"seed-rupa-jon-rn-white-vest-45","name":"Rupa Jon RN White Vest","brand":"Rupa Jon","category":"पुरुष बनियान","size":"45","rate":0,"stock":0,"image":"dp-rupa-jon-rn-white-vest.png","seeded":true},{"id":"seed-rupa-jon-rn-white-vest-50","name":"Rupa Jon RN White Vest","brand":"Rupa Jon","category":"पुरुष बनियान","size":"50","rate":0,"stock":0,"image":"dp-rupa-jon-rn-white-vest.png","seeded":true},{"id":"seed-rupa-jon-rn-white-vest-55","name":"Rupa Jon RN White Vest","brand":"Rupa Jon","category":"पुरुष बनियान","size":"55","rate":0,"stock":0,"image":"dp-rupa-jon-rn-white-vest.png","seeded":true},{"id":"seed-rupa-jon-rn-white-vest-60","name":"Rupa Jon RN White Vest","brand":"Rupa Jon","category":"पुरुष बनियान","size":"60","rate":0,"stock":0,"image":"dp-rupa-jon-rn-white-vest.png","seeded":true},{"id":"seed-rupa-jon-rn-white-vest-65","name":"Rupa Jon RN White Vest","brand":"Rupa Jon","category":"पुरुष बनियान","size":"65","rate":0,"stock":0,"image":"dp-rupa-jon-rn-white-vest.png","seeded":true},{"id":"seed-rupa-jon-rn-white-vest-70","name":"Rupa Jon RN White Vest","brand":"Rupa Jon","category":"पुरुष बनियान","size":"70","rate":0,"stock":0,"image":"dp-rupa-jon-rn-white-vest.png","seeded":true},{"id":"seed-rupa-jon-rn-white-vest-75","name":"Rupa Jon RN White Vest","brand":"Rupa Jon","category":"पुरुष बनियान","size":"75","rate":0,"stock":0,"image":"dp-rupa-jon-rn-white-vest.png","seeded":true},{"id":"seed-rupa-jon-rn-white-vest-80","name":"Rupa Jon RN White Vest","brand":"Rupa Jon","category":"पुरुष बनियान","size":"80","rate":0,"stock":0,"image":"dp-rupa-jon-rn-white-vest.png","seeded":true},{"id":"seed-rupa-jon-rn-white-vest-85","name":"Rupa Jon RN White Vest","brand":"Rupa Jon","category":"पुरुष बनियान","size":"85","rate":0,"stock":0,"image":"dp-rupa-jon-rn-white-vest.png","seeded":true},{"id":"seed-rupa-jon-rn-white-vest-90","name":"Rupa Jon RN White Vest","brand":"Rupa Jon","category":"पुरुष बनियान","size":"90","rate":0,"stock":0,"image":"dp-rupa-jon-rn-white-vest.png","seeded":true},{"id":"seed-rupa-jon-rn-white-vest-95","name":"Rupa Jon RN White Vest","brand":"Rupa Jon","category":"पुरुष बनियान","size":"95","rate":0,"stock":0,"image":"dp-rupa-jon-rn-white-vest.png","seeded":true},{"id":"seed-rupa-jon-rn-white-vest-100","name":"Rupa Jon RN White Vest","brand":"Rupa Jon","category":"पुरुष बनियान","size":"100","rate":0,"stock":0,"image":"dp-rupa-jon-rn-white-vest.png","seeded":true},{"id":"seed-rupa-jon-rn-white-vest-105","name":"Rupa Jon RN White Vest","brand":"Rupa Jon","category":"पुरुष बनियान","size":"105","rate":0,"stock":0,"image":"dp-rupa-jon-rn-white-vest.png","seeded":true},{"id":"seed-rupa-jon-rn-white-vest-110","name":"Rupa Jon RN White Vest","brand":"Rupa Jon","category":"पुरुष बनियान","size":"110","rate":0,"stock":0,"image":"dp-rupa-jon-rn-white-vest.png","seeded":true},{"id":"seed-young-india-premium-vest-rn-40","name":"Young India Premium Vest RN","brand":"Young India","category":"पुरुष बनियान","size":"40","rate":0,"stock":0,"image":"dp-young-india-premium-vest.png","seeded":true},{"id":"seed-young-india-premium-vest-rn-45","name":"Young India Premium Vest RN","brand":"Young India","category":"पुरुष बनियान","size":"45","rate":0,"stock":0,"image":"dp-young-india-premium-vest.png","seeded":true},{"id":"seed-young-india-premium-vest-rn-50","name":"Young India Premium Vest RN","brand":"Young India","category":"पुरुष बनियान","size":"50","rate":0,"stock":0,"image":"dp-young-india-premium-vest.png","seeded":true},{"id":"seed-young-india-premium-vest-rn-55","name":"Young India Premium Vest RN","brand":"Young India","category":"पुरुष बनियान","size":"55","rate":0,"stock":0,"image":"dp-young-india-premium-vest.png","seeded":true},{"id":"seed-young-india-premium-vest-rn-60","name":"Young India Premium Vest RN","brand":"Young India","category":"पुरुष बनियान","size":"60","rate":0,"stock":0,"image":"dp-young-india-premium-vest.png","seeded":true},{"id":"seed-young-india-premium-vest-rn-65","name":"Young India Premium Vest RN","brand":"Young India","category":"पुरुष बनियान","size":"65","rate":0,"stock":0,"image":"dp-young-india-premium-vest.png","seeded":true},{"id":"seed-young-india-premium-vest-rn-70","name":"Young India Premium Vest RN","brand":"Young India","category":"पुरुष बनियान","size":"70","rate":0,"stock":0,"image":"dp-young-india-premium-vest.png","seeded":true},{"id":"seed-young-india-premium-vest-rn-75","name":"Young India Premium Vest RN","brand":"Young India","category":"पुरुष बनियान","size":"75","rate":0,"stock":0,"image":"dp-young-india-premium-vest.png","seeded":true},{"id":"seed-young-india-premium-vest-rn-80","name":"Young India Premium Vest RN","brand":"Young India","category":"पुरुष बनियान","size":"80","rate":0,"stock":0,"image":"dp-young-india-premium-vest.png","seeded":true},{"id":"seed-young-india-premium-vest-rn-85","name":"Young India Premium Vest RN","brand":"Young India","category":"पुरुष बनियान","size":"85","rate":0,"stock":0,"image":"dp-young-india-premium-vest.png","seeded":true},{"id":"seed-young-india-premium-vest-rn-90","name":"Young India Premium Vest RN","brand":"Young India","category":"पुरुष बनियान","size":"90","rate":0,"stock":0,"image":"dp-young-india-premium-vest.png","seeded":true},{"id":"seed-young-india-premium-vest-rn-95","name":"Young India Premium Vest RN","brand":"Young India","category":"पुरुष बनियान","size":"95","rate":0,"stock":0,"image":"dp-young-india-premium-vest.png","seeded":true},{"id":"seed-young-india-premium-vest-rn-100","name":"Young India Premium Vest RN","brand":"Young India","category":"पुरुष बनियान","size":"100","rate":0,"stock":0,"image":"dp-young-india-premium-vest.png","seeded":true},{"id":"seed-young-india-premium-vest-rn-105","name":"Young India Premium Vest RN","brand":"Young India","category":"पुरुष बनियान","size":"105","rate":0,"stock":0,"image":"dp-young-india-premium-vest.png","seeded":true},{"id":"seed-young-india-premium-vest-rn-110","name":"Young India Premium Vest RN","brand":"Young India","category":"पुरुष बनियान","size":"110","rate":0,"stock":0,"image":"dp-young-india-premium-vest.png","seeded":true},{"id":"seed-lux-cozi-xylo-333-gym-vest-40","name":"Lux Cozi Xylo 333 Gym Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"40","rate":0,"stock":0,"image":"dp-lux-cozi-xylo-333-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-xylo-333-gym-vest-45","name":"Lux Cozi Xylo 333 Gym Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"45","rate":0,"stock":0,"image":"dp-lux-cozi-xylo-333-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-xylo-333-gym-vest-50","name":"Lux Cozi Xylo 333 Gym Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"50","rate":0,"stock":0,"image":"dp-lux-cozi-xylo-333-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-xylo-333-gym-vest-55","name":"Lux Cozi Xylo 333 Gym Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"55","rate":0,"stock":0,"image":"dp-lux-cozi-xylo-333-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-xylo-333-gym-vest-60","name":"Lux Cozi Xylo 333 Gym Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"60","rate":0,"stock":0,"image":"dp-lux-cozi-xylo-333-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-xylo-333-gym-vest-65","name":"Lux Cozi Xylo 333 Gym Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"65","rate":0,"stock":0,"image":"dp-lux-cozi-xylo-333-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-xylo-333-gym-vest-70","name":"Lux Cozi Xylo 333 Gym Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"70","rate":0,"stock":0,"image":"dp-lux-cozi-xylo-333-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-xylo-333-gym-vest-75","name":"Lux Cozi Xylo 333 Gym Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"75","rate":0,"stock":0,"image":"dp-lux-cozi-xylo-333-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-xylo-333-gym-vest-80","name":"Lux Cozi Xylo 333 Gym Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"80","rate":0,"stock":0,"image":"dp-lux-cozi-xylo-333-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-xylo-333-gym-vest-85","name":"Lux Cozi Xylo 333 Gym Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"85","rate":0,"stock":0,"image":"dp-lux-cozi-xylo-333-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-xylo-333-gym-vest-90","name":"Lux Cozi Xylo 333 Gym Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"90","rate":0,"stock":0,"image":"dp-lux-cozi-xylo-333-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-xylo-333-gym-vest-95","name":"Lux Cozi Xylo 333 Gym Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"95","rate":0,"stock":0,"image":"dp-lux-cozi-xylo-333-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-xylo-333-gym-vest-100","name":"Lux Cozi Xylo 333 Gym Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"100","rate":0,"stock":0,"image":"dp-lux-cozi-xylo-333-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-xylo-333-gym-vest-105","name":"Lux Cozi Xylo 333 Gym Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"105","rate":0,"stock":0,"image":"dp-lux-cozi-xylo-333-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-xylo-333-gym-vest-110","name":"Lux Cozi Xylo 333 Gym Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"110","rate":0,"stock":0,"image":"dp-lux-cozi-xylo-333-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-xylo-888-gym-vest-40","name":"Lux Cozi Xylo 888 Gym Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"40","rate":0,"stock":0,"image":"dp-lux-xylo-888-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-xylo-888-gym-vest-45","name":"Lux Cozi Xylo 888 Gym Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"45","rate":0,"stock":0,"image":"dp-lux-xylo-888-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-xylo-888-gym-vest-50","name":"Lux Cozi Xylo 888 Gym Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"50","rate":0,"stock":0,"image":"dp-lux-xylo-888-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-xylo-888-gym-vest-55","name":"Lux Cozi Xylo 888 Gym Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"55","rate":0,"stock":0,"image":"dp-lux-xylo-888-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-xylo-888-gym-vest-60","name":"Lux Cozi Xylo 888 Gym Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"60","rate":0,"stock":0,"image":"dp-lux-xylo-888-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-xylo-888-gym-vest-65","name":"Lux Cozi Xylo 888 Gym Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"65","rate":0,"stock":0,"image":"dp-lux-xylo-888-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-xylo-888-gym-vest-70","name":"Lux Cozi Xylo 888 Gym Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"70","rate":0,"stock":0,"image":"dp-lux-xylo-888-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-xylo-888-gym-vest-75","name":"Lux Cozi Xylo 888 Gym Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"75","rate":0,"stock":0,"image":"dp-lux-xylo-888-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-xylo-888-gym-vest-80","name":"Lux Cozi Xylo 888 Gym Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"80","rate":0,"stock":0,"image":"dp-lux-xylo-888-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-xylo-888-gym-vest-85","name":"Lux Cozi Xylo 888 Gym Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"85","rate":0,"stock":0,"image":"dp-lux-xylo-888-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-xylo-888-gym-vest-90","name":"Lux Cozi Xylo 888 Gym Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"90","rate":0,"stock":0,"image":"dp-lux-xylo-888-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-xylo-888-gym-vest-95","name":"Lux Cozi Xylo 888 Gym Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"95","rate":0,"stock":0,"image":"dp-lux-xylo-888-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-xylo-888-gym-vest-100","name":"Lux Cozi Xylo 888 Gym Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"100","rate":0,"stock":0,"image":"dp-lux-xylo-888-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-xylo-888-gym-vest-105","name":"Lux Cozi Xylo 888 Gym Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"105","rate":0,"stock":0,"image":"dp-lux-xylo-888-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-xylo-888-gym-vest-110","name":"Lux Cozi Xylo 888 Gym Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"110","rate":0,"stock":0,"image":"dp-lux-xylo-888-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-bigshot-vest-40","name":"Lux Cozi Bigshot Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"40","rate":0,"stock":0,"image":"dp-lux-cozi-xylo-333-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-bigshot-vest-45","name":"Lux Cozi Bigshot Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"45","rate":0,"stock":0,"image":"dp-lux-cozi-xylo-333-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-bigshot-vest-50","name":"Lux Cozi Bigshot Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"50","rate":0,"stock":0,"image":"dp-lux-cozi-xylo-333-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-bigshot-vest-55","name":"Lux Cozi Bigshot Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"55","rate":0,"stock":0,"image":"dp-lux-cozi-xylo-333-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-bigshot-vest-60","name":"Lux Cozi Bigshot Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"60","rate":0,"stock":0,"image":"dp-lux-cozi-xylo-333-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-bigshot-vest-65","name":"Lux Cozi Bigshot Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"65","rate":0,"stock":0,"image":"dp-lux-cozi-xylo-333-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-bigshot-vest-70","name":"Lux Cozi Bigshot Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"70","rate":0,"stock":0,"image":"dp-lux-cozi-xylo-333-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-bigshot-vest-75","name":"Lux Cozi Bigshot Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"75","rate":0,"stock":0,"image":"dp-lux-cozi-xylo-333-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-bigshot-vest-80","name":"Lux Cozi Bigshot Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"80","rate":0,"stock":0,"image":"dp-lux-cozi-xylo-333-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-bigshot-vest-85","name":"Lux Cozi Bigshot Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"85","rate":0,"stock":0,"image":"dp-lux-cozi-xylo-333-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-bigshot-vest-90","name":"Lux Cozi Bigshot Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"90","rate":0,"stock":0,"image":"dp-lux-cozi-xylo-333-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-bigshot-vest-95","name":"Lux Cozi Bigshot Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"95","rate":0,"stock":0,"image":"dp-lux-cozi-xylo-333-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-bigshot-vest-100","name":"Lux Cozi Bigshot Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"100","rate":0,"stock":0,"image":"dp-lux-cozi-xylo-333-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-bigshot-vest-105","name":"Lux Cozi Bigshot Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"105","rate":0,"stock":0,"image":"dp-lux-cozi-xylo-333-gym-vest.png","seeded":true},{"id":"seed-lux-cozi-bigshot-vest-110","name":"Lux Cozi Bigshot Vest","brand":"Lux Cozi","category":"पुरुष बनियान","size":"110","rate":0,"stock":0,"image":"dp-lux-cozi-xylo-333-gym-vest.png","seeded":true},{"id":"seed-essdee-print-vest-40","name":"Essdee Flexi Trunks","brand":"Essdee","category":"पुरुष लॉन्ग ट्रंक","size":"40","rate":0,"stock":0,"image":"dp-essdee-flexi-trunks.png","seeded":true},{"id":"seed-essdee-print-vest-45","name":"Essdee Flexi Trunks","brand":"Essdee","category":"पुरुष लॉन्ग ट्रंक","size":"45","rate":0,"stock":0,"image":"dp-essdee-flexi-trunks.png","seeded":true},{"id":"seed-essdee-print-vest-50","name":"Essdee Flexi Trunks","brand":"Essdee","category":"पुरुष लॉन्ग ट्रंक","size":"50","rate":0,"stock":0,"image":"dp-essdee-flexi-trunks.png","seeded":true},{"id":"seed-essdee-print-vest-55","name":"Essdee Flexi Trunks","brand":"Essdee","category":"पुरुष लॉन्ग ट्रंक","size":"55","rate":0,"stock":0,"image":"dp-essdee-flexi-trunks.png","seeded":true},{"id":"seed-essdee-print-vest-60","name":"Essdee Flexi Trunks","brand":"Essdee","category":"पुरुष लॉन्ग ट्रंक","size":"60","rate":0,"stock":0,"image":"dp-essdee-flexi-trunks.png","seeded":true},{"id":"seed-essdee-print-vest-65","name":"Essdee Flexi Trunks","brand":"Essdee","category":"पुरुष लॉन्ग ट्रंक","size":"65","rate":0,"stock":0,"image":"dp-essdee-flexi-trunks.png","seeded":true},{"id":"seed-essdee-print-vest-70","name":"Essdee Flexi Trunks","brand":"Essdee","category":"पुरुष लॉन्ग ट्रंक","size":"70","rate":0,"stock":0,"image":"dp-essdee-flexi-trunks.png","seeded":true},{"id":"seed-essdee-print-vest-75","name":"Essdee Flexi Trunks","brand":"Essdee","category":"पुरुष लॉन्ग ट्रंक","size":"75","rate":0,"stock":0,"image":"dp-essdee-flexi-trunks.png","seeded":true},{"id":"seed-essdee-print-vest-80","name":"Essdee Flexi Trunks","brand":"Essdee","category":"पुरुष लॉन्ग ट्रंक","size":"80","rate":0,"stock":0,"image":"dp-essdee-flexi-trunks.png","seeded":true},{"id":"seed-essdee-print-vest-85","name":"Essdee Flexi Trunks","brand":"Essdee","category":"पुरुष लॉन्ग ट्रंक","size":"85","rate":0,"stock":0,"image":"dp-essdee-flexi-trunks.png","seeded":true},{"id":"seed-essdee-print-vest-90","name":"Essdee Flexi Trunks","brand":"Essdee","category":"पुरुष लॉन्ग ट्रंक","size":"90","rate":0,"stock":0,"image":"dp-essdee-flexi-trunks.png","seeded":true},{"id":"seed-essdee-print-vest-95","name":"Essdee Flexi Trunks","brand":"Essdee","category":"पुरुष लॉन्ग ट्रंक","size":"95","rate":0,"stock":0,"image":"dp-essdee-flexi-trunks.png","seeded":true},{"id":"seed-essdee-print-vest-100","name":"Essdee Flexi Trunks","brand":"Essdee","category":"पुरुष लॉन्ग ट्रंक","size":"100","rate":0,"stock":0,"image":"dp-essdee-flexi-trunks.png","seeded":true},{"id":"seed-essdee-print-vest-105","name":"Essdee Flexi Trunks","brand":"Essdee","category":"पुरुष लॉन्ग ट्रंक","size":"105","rate":0,"stock":0,"image":"dp-essdee-flexi-trunks.png","seeded":true},{"id":"seed-essdee-print-vest-110","name":"Essdee Flexi Trunks","brand":"Essdee","category":"पुरुष लॉन्ग ट्रंक","size":"110","rate":0,"stock":0,"image":"dp-essdee-flexi-trunks.png","seeded":true},{"id":"seed-macho-sporto-smart-cut-brief-40","name":"Macho Sporto Smart Cut Brief","brand":"Macho Sporto","category":"पुरुष शॉर्ट ब्रीफ","size":"40","rate":0,"stock":0,"image":"dp-macho-sporto-smart-cut-brief.png","seeded":true},{"id":"seed-macho-sporto-smart-cut-brief-45","name":"Macho Sporto Smart Cut Brief","brand":"Macho Sporto","category":"पुरुष शॉर्ट ब्रीफ","size":"45","rate":0,"stock":0,"image":"dp-macho-sporto-smart-cut-brief.png","seeded":true},{"id":"seed-macho-sporto-smart-cut-brief-50","name":"Macho Sporto Smart Cut Brief","brand":"Macho Sporto","category":"पुरुष शॉर्ट ब्रीफ","size":"50","rate":0,"stock":0,"image":"dp-macho-sporto-smart-cut-brief.png","seeded":true},{"id":"seed-macho-sporto-smart-cut-brief-55","name":"Macho Sporto Smart Cut Brief","brand":"Macho Sporto","category":"पुरुष शॉर्ट ब्रीफ","size":"55","rate":0,"stock":0,"image":"dp-macho-sporto-smart-cut-brief.png","seeded":true},{"id":"seed-macho-sporto-smart-cut-brief-60","name":"Macho Sporto Smart Cut Brief","brand":"Macho Sporto","category":"पुरुष शॉर्ट ब्रीफ","size":"60","rate":0,"stock":0,"image":"dp-macho-sporto-smart-cut-brief.png","seeded":true},{"id":"seed-macho-sporto-smart-cut-brief-65","name":"Macho Sporto Smart Cut Brief","brand":"Macho Sporto","category":"पुरुष शॉर्ट ब्रीफ","size":"65","rate":0,"stock":0,"image":"dp-macho-sporto-smart-cut-brief.png","seeded":true},{"id":"seed-macho-sporto-smart-cut-brief-70","name":"Macho Sporto Smart Cut Brief","brand":"Macho Sporto","category":"पुरुष शॉर्ट ब्रीफ","size":"70","rate":0,"stock":0,"image":"dp-macho-sporto-smart-cut-brief.png","seeded":true},{"id":"seed-macho-sporto-smart-cut-brief-75","name":"Macho Sporto Smart Cut Brief","brand":"Macho Sporto","category":"पुरुष शॉर्ट ब्रीफ","size":"75","rate":0,"stock":0,"image":"dp-macho-sporto-smart-cut-brief.png","seeded":true},{"id":"seed-macho-sporto-smart-cut-brief-80","name":"Macho Sporto Smart Cut Brief","brand":"Macho Sporto","category":"पुरुष शॉर्ट ब्रीफ","size":"80","rate":0,"stock":0,"image":"dp-macho-sporto-smart-cut-brief.png","seeded":true},{"id":"seed-macho-sporto-smart-cut-brief-85","name":"Macho Sporto Smart Cut Brief","brand":"Macho Sporto","category":"पुरुष शॉर्ट ब्रीफ","size":"85","rate":0,"stock":0,"image":"dp-macho-sporto-smart-cut-brief.png","seeded":true},{"id":"seed-macho-sporto-smart-cut-brief-90","name":"Macho Sporto Smart Cut Brief","brand":"Macho Sporto","category":"पुरुष शॉर्ट ब्रीफ","size":"90","rate":0,"stock":0,"image":"dp-macho-sporto-smart-cut-brief.png","seeded":true},{"id":"seed-macho-sporto-smart-cut-brief-95","name":"Macho Sporto Smart Cut Brief","brand":"Macho Sporto","category":"पुरुष शॉर्ट ब्रीफ","size":"95","rate":0,"stock":0,"image":"dp-macho-sporto-smart-cut-brief.png","seeded":true},{"id":"seed-macho-sporto-smart-cut-brief-100","name":"Macho Sporto Smart Cut Brief","brand":"Macho Sporto","category":"पुरुष शॉर्ट ब्रीफ","size":"100","rate":0,"stock":0,"image":"dp-macho-sporto-smart-cut-brief.png","seeded":true},{"id":"seed-macho-sporto-smart-cut-brief-105","name":"Macho Sporto Smart Cut Brief","brand":"Macho Sporto","category":"पुरुष शॉर्ट ब्रीफ","size":"105","rate":0,"stock":0,"image":"dp-macho-sporto-smart-cut-brief.png","seeded":true},{"id":"seed-macho-sporto-smart-cut-brief-110","name":"Macho Sporto Smart Cut Brief","brand":"Macho Sporto","category":"पुरुष शॉर्ट ब्रीफ","size":"110","rate":0,"stock":0,"image":"dp-macho-sporto-smart-cut-brief.png","seeded":true},{"id":"seed-dixcy-scott-replay-brief-40","name":"Dixcy Scott Replay Brief","brand":"Dixcy Scott","category":"पुरुष शॉर्ट ब्रीफ","size":"40","rate":0,"stock":0,"image":"dp-dixcy-scott-replay-brief.png","seeded":true},{"id":"seed-dixcy-scott-replay-brief-45","name":"Dixcy Scott Replay Brief","brand":"Dixcy Scott","category":"पुरुष शॉर्ट ब्रीफ","size":"45","rate":0,"stock":0,"image":"dp-dixcy-scott-replay-brief.png","seeded":true},{"id":"seed-dixcy-scott-replay-brief-50","name":"Dixcy Scott Replay Brief","brand":"Dixcy Scott","category":"पुरुष शॉर्ट ब्रीफ","size":"50","rate":0,"stock":0,"image":"dp-dixcy-scott-replay-brief.png","seeded":true},{"id":"seed-dixcy-scott-replay-brief-55","name":"Dixcy Scott Replay Brief","brand":"Dixcy Scott","category":"पुरुष शॉर्ट ब्रीफ","size":"55","rate":0,"stock":0,"image":"dp-dixcy-scott-replay-brief.png","seeded":true},{"id":"seed-dixcy-scott-replay-brief-60","name":"Dixcy Scott Replay Brief","brand":"Dixcy Scott","category":"पुरुष शॉर्ट ब्रीफ","size":"60","rate":0,"stock":0,"image":"dp-dixcy-scott-replay-brief.png","seeded":true},{"id":"seed-dixcy-scott-replay-brief-65","name":"Dixcy Scott Replay Brief","brand":"Dixcy Scott","category":"पुरुष शॉर्ट ब्रीफ","size":"65","rate":0,"stock":0,"image":"dp-dixcy-scott-replay-brief.png","seeded":true},{"id":"seed-dixcy-scott-replay-brief-70","name":"Dixcy Scott Replay Brief","brand":"Dixcy Scott","category":"पुरुष शॉर्ट ब्रीफ","size":"70","rate":0,"stock":0,"image":"dp-dixcy-scott-replay-brief.png","seeded":true},{"id":"seed-dixcy-scott-replay-brief-75","name":"Dixcy Scott Replay Brief","brand":"Dixcy Scott","category":"पुरुष शॉर्ट ब्रीफ","size":"75","rate":0,"stock":0,"image":"dp-dixcy-scott-replay-brief.png","seeded":true},{"id":"seed-dixcy-scott-replay-brief-80","name":"Dixcy Scott Replay Brief","brand":"Dixcy Scott","category":"पुरुष शॉर्ट ब्रीफ","size":"80","rate":0,"stock":0,"image":"dp-dixcy-scott-replay-brief.png","seeded":true},{"id":"seed-dixcy-scott-replay-brief-85","name":"Dixcy Scott Replay Brief","brand":"Dixcy Scott","category":"पुरुष शॉर्ट ब्रीफ","size":"85","rate":0,"stock":0,"image":"dp-dixcy-scott-replay-brief.png","seeded":true},{"id":"seed-dixcy-scott-replay-brief-90","name":"Dixcy Scott Replay Brief","brand":"Dixcy Scott","category":"पुरुष शॉर्ट ब्रीफ","size":"90","rate":0,"stock":0,"image":"dp-dixcy-scott-replay-brief.png","seeded":true},{"id":"seed-dixcy-scott-replay-brief-95","name":"Dixcy Scott Replay Brief","brand":"Dixcy Scott","category":"पुरुष शॉर्ट ब्रीफ","size":"95","rate":0,"stock":0,"image":"dp-dixcy-scott-replay-brief.png","seeded":true},{"id":"seed-dixcy-scott-replay-brief-100","name":"Dixcy Scott Replay Brief","brand":"Dixcy Scott","category":"पुरुष शॉर्ट ब्रीफ","size":"100","rate":0,"stock":0,"image":"dp-dixcy-scott-replay-brief.png","seeded":true},{"id":"seed-dixcy-scott-replay-brief-105","name":"Dixcy Scott Replay Brief","brand":"Dixcy Scott","category":"पुरुष शॉर्ट ब्रीफ","size":"105","rate":0,"stock":0,"image":"dp-dixcy-scott-replay-brief.png","seeded":true},{"id":"seed-dixcy-scott-replay-brief-110","name":"Dixcy Scott Replay Brief","brand":"Dixcy Scott","category":"पुरुष शॉर्ट ब्रीफ","size":"110","rate":0,"stock":0,"image":"dp-dixcy-scott-replay-brief.png","seeded":true},{"id":"seed-macho-sporto-long-trunk-40","name":"Macho Sporto Long Trunk","brand":"Macho Sporto","category":"पुरुष लॉन्ग ट्रंक","size":"40","rate":0,"stock":0,"image":"dp-macho-sporto-long-trunk.png","seeded":true},{"id":"seed-macho-sporto-long-trunk-45","name":"Macho Sporto Long Trunk","brand":"Macho Sporto","category":"पुरुष लॉन्ग ट्रंक","size":"45","rate":0,"stock":0,"image":"dp-macho-sporto-long-trunk.png","seeded":true},{"id":"seed-macho-sporto-long-trunk-50","name":"Macho Sporto Long Trunk","brand":"Macho Sporto","category":"पुरुष लॉन्ग ट्रंक","size":"50","rate":0,"stock":0,"image":"dp-macho-sporto-long-trunk.png","seeded":true},{"id":"seed-macho-sporto-long-trunk-55","name":"Macho Sporto Long Trunk","brand":"Macho Sporto","category":"पुरुष लॉन्ग ट्रंक","size":"55","rate":0,"stock":0,"image":"dp-macho-sporto-long-trunk.png","seeded":true},{"id":"seed-macho-sporto-long-trunk-60","name":"Macho Sporto Long Trunk","brand":"Macho Sporto","category":"पुरुष लॉन्ग ट्रंक","size":"60","rate":0,"stock":0,"image":"dp-macho-sporto-long-trunk.png","seeded":true},{"id":"seed-macho-sporto-long-trunk-65","name":"Macho Sporto Long Trunk","brand":"Macho Sporto","category":"पुरुष लॉन्ग ट्रंक","size":"65","rate":0,"stock":0,"image":"dp-macho-sporto-long-trunk.png","seeded":true},{"id":"seed-macho-sporto-long-trunk-70","name":"Macho Sporto Long Trunk","brand":"Macho Sporto","category":"पुरुष लॉन्ग ट्रंक","size":"70","rate":0,"stock":0,"image":"dp-macho-sporto-long-trunk.png","seeded":true},{"id":"seed-macho-sporto-long-trunk-75","name":"Macho Sporto Long Trunk","brand":"Macho Sporto","category":"पुरुष लॉन्ग ट्रंक","size":"75","rate":0,"stock":0,"image":"dp-macho-sporto-long-trunk.png","seeded":true},{"id":"seed-macho-sporto-long-trunk-80","name":"Macho Sporto Long Trunk","brand":"Macho Sporto","category":"पुरुष लॉन्ग ट्रंक","size":"80","rate":0,"stock":0,"image":"dp-macho-sporto-long-trunk.png","seeded":true},{"id":"seed-macho-sporto-long-trunk-85","name":"Macho Sporto Long Trunk","brand":"Macho Sporto","category":"पुरुष लॉन्ग ट्रंक","size":"85","rate":0,"stock":0,"image":"dp-macho-sporto-long-trunk.png","seeded":true},{"id":"seed-macho-sporto-long-trunk-90","name":"Macho Sporto Long Trunk","brand":"Macho Sporto","category":"पुरुष लॉन्ग ट्रंक","size":"90","rate":0,"stock":0,"image":"dp-macho-sporto-long-trunk.png","seeded":true},{"id":"seed-macho-sporto-long-trunk-95","name":"Macho Sporto Long Trunk","brand":"Macho Sporto","category":"पुरुष लॉन्ग ट्रंक","size":"95","rate":0,"stock":0,"image":"dp-macho-sporto-long-trunk.png","seeded":true},{"id":"seed-macho-sporto-long-trunk-100","name":"Macho Sporto Long Trunk","brand":"Macho Sporto","category":"पुरुष लॉन्ग ट्रंक","size":"100","rate":0,"stock":0,"image":"dp-macho-sporto-long-trunk.png","seeded":true},{"id":"seed-macho-sporto-long-trunk-105","name":"Macho Sporto Long Trunk","brand":"Macho Sporto","category":"पुरुष लॉन्ग ट्रंक","size":"105","rate":0,"stock":0,"image":"dp-macho-sporto-long-trunk.png","seeded":true},{"id":"seed-macho-sporto-long-trunk-110","name":"Macho Sporto Long Trunk","brand":"Macho Sporto","category":"पुरुष लॉन्ग ट्रंक","size":"110","rate":0,"stock":0,"image":"dp-macho-sporto-long-trunk.png","seeded":true},{"id":"seed-young-india-glider-man-mini-trunk-40","name":"Young India Glider Man Mini Trunk","brand":"Young India","category":"पुरुष मिनी ट्रंक","size":"40","rate":0,"stock":0,"image":"dp-young-india-glider-mini-trunk.png","seeded":true},{"id":"seed-young-india-glider-man-mini-trunk-45","name":"Young India Glider Man Mini Trunk","brand":"Young India","category":"पुरुष मिनी ट्रंक","size":"45","rate":0,"stock":0,"image":"dp-young-india-glider-mini-trunk.png","seeded":true},{"id":"seed-young-india-glider-man-mini-trunk-50","name":"Young India Glider Man Mini Trunk","brand":"Young India","category":"पुरुष मिनी ट्रंक","size":"50","rate":0,"stock":0,"image":"dp-young-india-glider-mini-trunk.png","seeded":true},{"id":"seed-young-india-glider-man-mini-trunk-55","name":"Young India Glider Man Mini Trunk","brand":"Young India","category":"पुरुष मिनी ट्रंक","size":"55","rate":0,"stock":0,"image":"dp-young-india-glider-mini-trunk.png","seeded":true},{"id":"seed-young-india-glider-man-mini-trunk-60","name":"Young India Glider Man Mini Trunk","brand":"Young India","category":"पुरुष मिनी ट्रंक","size":"60","rate":0,"stock":0,"image":"dp-young-india-glider-mini-trunk.png","seeded":true},{"id":"seed-young-india-glider-man-mini-trunk-65","name":"Young India Glider Man Mini Trunk","brand":"Young India","category":"पुरुष मिनी ट्रंक","size":"65","rate":0,"stock":0,"image":"dp-young-india-glider-mini-trunk.png","seeded":true},{"id":"seed-young-india-glider-man-mini-trunk-70","name":"Young India Glider Man Mini Trunk","brand":"Young India","category":"पुरुष मिनी ट्रंक","size":"70","rate":0,"stock":0,"image":"dp-young-india-glider-mini-trunk.png","seeded":true},{"id":"seed-young-india-glider-man-mini-trunk-75","name":"Young India Glider Man Mini Trunk","brand":"Young India","category":"पुरुष मिनी ट्रंक","size":"75","rate":0,"stock":0,"image":"dp-young-india-glider-mini-trunk.png","seeded":true},{"id":"seed-young-india-glider-man-mini-trunk-80","name":"Young India Glider Man Mini Trunk","brand":"Young India","category":"पुरुष मिनी ट्रंक","size":"80","rate":0,"stock":0,"image":"dp-young-india-glider-mini-trunk.png","seeded":true},{"id":"seed-young-india-glider-man-mini-trunk-85","name":"Young India Glider Man Mini Trunk","brand":"Young India","category":"पुरुष मिनी ट्रंक","size":"85","rate":0,"stock":0,"image":"dp-young-india-glider-mini-trunk.png","seeded":true},{"id":"seed-young-india-glider-man-mini-trunk-90","name":"Young India Glider Man Mini Trunk","brand":"Young India","category":"पुरुष मिनी ट्रंक","size":"90","rate":0,"stock":0,"image":"dp-young-india-glider-mini-trunk.png","seeded":true},{"id":"seed-young-india-glider-man-mini-trunk-95","name":"Young India Glider Man Mini Trunk","brand":"Young India","category":"पुरुष मिनी ट्रंक","size":"95","rate":0,"stock":0,"image":"dp-young-india-glider-mini-trunk.png","seeded":true},{"id":"seed-young-india-glider-man-mini-trunk-100","name":"Young India Glider Man Mini Trunk","brand":"Young India","category":"पुरुष मिनी ट्रंक","size":"100","rate":0,"stock":0,"image":"dp-young-india-glider-mini-trunk.png","seeded":true},{"id":"seed-young-india-glider-man-mini-trunk-105","name":"Young India Glider Man Mini Trunk","brand":"Young India","category":"पुरुष मिनी ट्रंक","size":"105","rate":0,"stock":0,"image":"dp-young-india-glider-mini-trunk.png","seeded":true},{"id":"seed-young-india-glider-man-mini-trunk-110","name":"Young India Glider Man Mini Trunk","brand":"Young India","category":"पुरुष मिनी ट्रंक","size":"110","rate":0,"stock":0,"image":"dp-young-india-glider-mini-trunk.png","seeded":true},{"id":"seed-young-india-commander-plain-long-trunk-40","name":"Young India Commander Plain Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"40","rate":0,"stock":0,"image":"commander-plain-long-trunk.jpg","seeded":true},{"id":"seed-young-india-commander-plain-long-trunk-45","name":"Young India Commander Plain Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"45","rate":0,"stock":0,"image":"commander-plain-long-trunk.jpg","seeded":true},{"id":"seed-young-india-commander-plain-long-trunk-50","name":"Young India Commander Plain Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"50","rate":0,"stock":0,"image":"commander-plain-long-trunk.jpg","seeded":true},{"id":"seed-young-india-commander-plain-long-trunk-55","name":"Young India Commander Plain Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"55","rate":0,"stock":0,"image":"commander-plain-long-trunk.jpg","seeded":true},{"id":"seed-young-india-commander-plain-long-trunk-60","name":"Young India Commander Plain Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"60","rate":0,"stock":0,"image":"commander-plain-long-trunk.jpg","seeded":true},{"id":"seed-young-india-commander-plain-long-trunk-65","name":"Young India Commander Plain Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"65","rate":0,"stock":0,"image":"commander-plain-long-trunk.jpg","seeded":true},{"id":"seed-young-india-commander-plain-long-trunk-70","name":"Young India Commander Plain Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"70","rate":0,"stock":0,"image":"commander-plain-long-trunk.jpg","seeded":true},{"id":"seed-young-india-commander-plain-long-trunk-75","name":"Young India Commander Plain Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"75","rate":0,"stock":0,"image":"commander-plain-long-trunk.jpg","seeded":true},{"id":"seed-young-india-commander-plain-long-trunk-80","name":"Young India Commander Plain Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"80","rate":0,"stock":0,"image":"commander-plain-long-trunk.jpg","seeded":true},{"id":"seed-young-india-commander-plain-long-trunk-85","name":"Young India Commander Plain Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"85","rate":0,"stock":0,"image":"commander-plain-long-trunk.jpg","seeded":true},{"id":"seed-young-india-commander-plain-long-trunk-90","name":"Young India Commander Plain Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"90","rate":0,"stock":0,"image":"commander-plain-long-trunk.jpg","seeded":true},{"id":"seed-young-india-commander-plain-long-trunk-95","name":"Young India Commander Plain Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"95","rate":0,"stock":0,"image":"commander-plain-long-trunk.jpg","seeded":true},{"id":"seed-young-india-commander-plain-long-trunk-100","name":"Young India Commander Plain Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"100","rate":0,"stock":0,"image":"commander-plain-long-trunk.jpg","seeded":true},{"id":"seed-young-india-commander-plain-long-trunk-105","name":"Young India Commander Plain Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"105","rate":0,"stock":0,"image":"commander-plain-long-trunk.jpg","seeded":true},{"id":"seed-young-india-commander-plain-long-trunk-110","name":"Young India Commander Plain Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"110","rate":0,"stock":0,"image":"commander-plain-long-trunk.jpg","seeded":true},{"id":"seed-young-india-commander-outer-elastic-long-trunk-40","name":"Young India Commander Outer Elastic Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"40","rate":0,"stock":0,"image":"dp-commander-outer-elastic.png","seeded":true},{"id":"seed-young-india-commander-outer-elastic-long-trunk-45","name":"Young India Commander Outer Elastic Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"45","rate":0,"stock":0,"image":"dp-commander-outer-elastic.png","seeded":true},{"id":"seed-young-india-commander-outer-elastic-long-trunk-50","name":"Young India Commander Outer Elastic Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"50","rate":0,"stock":0,"image":"dp-commander-outer-elastic.png","seeded":true},{"id":"seed-young-india-commander-outer-elastic-long-trunk-55","name":"Young India Commander Outer Elastic Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"55","rate":0,"stock":0,"image":"dp-commander-outer-elastic.png","seeded":true},{"id":"seed-young-india-commander-outer-elastic-long-trunk-60","name":"Young India Commander Outer Elastic Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"60","rate":0,"stock":0,"image":"dp-commander-outer-elastic.png","seeded":true},{"id":"seed-young-india-commander-outer-elastic-long-trunk-65","name":"Young India Commander Outer Elastic Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"65","rate":0,"stock":0,"image":"dp-commander-outer-elastic.png","seeded":true},{"id":"seed-young-india-commander-outer-elastic-long-trunk-70","name":"Young India Commander Outer Elastic Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"70","rate":0,"stock":0,"image":"dp-commander-outer-elastic.png","seeded":true},{"id":"seed-young-india-commander-outer-elastic-long-trunk-75","name":"Young India Commander Outer Elastic Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"75","rate":0,"stock":0,"image":"dp-commander-outer-elastic.png","seeded":true},{"id":"seed-young-india-commander-outer-elastic-long-trunk-80","name":"Young India Commander Outer Elastic Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"80","rate":0,"stock":0,"image":"dp-commander-outer-elastic.png","seeded":true},{"id":"seed-young-india-commander-outer-elastic-long-trunk-85","name":"Young India Commander Outer Elastic Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"85","rate":0,"stock":0,"image":"dp-commander-outer-elastic.png","seeded":true},{"id":"seed-young-india-commander-outer-elastic-long-trunk-90","name":"Young India Commander Outer Elastic Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"90","rate":0,"stock":0,"image":"dp-commander-outer-elastic.png","seeded":true},{"id":"seed-young-india-commander-outer-elastic-long-trunk-95","name":"Young India Commander Outer Elastic Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"95","rate":0,"stock":0,"image":"dp-commander-outer-elastic.png","seeded":true},{"id":"seed-young-india-commander-outer-elastic-long-trunk-100","name":"Young India Commander Outer Elastic Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"100","rate":0,"stock":0,"image":"dp-commander-outer-elastic.png","seeded":true},{"id":"seed-young-india-commander-outer-elastic-long-trunk-105","name":"Young India Commander Outer Elastic Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"105","rate":0,"stock":0,"image":"dp-commander-outer-elastic.png","seeded":true},{"id":"seed-young-india-commander-outer-elastic-long-trunk-110","name":"Young India Commander Outer Elastic Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"110","rate":0,"stock":0,"image":"dp-commander-outer-elastic.png","seeded":true},{"id":"seed-young-india-commander-inner-elastic-long-trunk-40","name":"Young India Commander Inner Elastic Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"40","rate":0,"stock":0,"image":"dp-commander-inner-elastic.png","seeded":true},{"id":"seed-young-india-commander-inner-elastic-long-trunk-45","name":"Young India Commander Inner Elastic Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"45","rate":0,"stock":0,"image":"dp-commander-inner-elastic.png","seeded":true},{"id":"seed-young-india-commander-inner-elastic-long-trunk-50","name":"Young India Commander Inner Elastic Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"50","rate":0,"stock":0,"image":"dp-commander-inner-elastic.png","seeded":true},{"id":"seed-young-india-commander-inner-elastic-long-trunk-55","name":"Young India Commander Inner Elastic Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"55","rate":0,"stock":0,"image":"dp-commander-inner-elastic.png","seeded":true},{"id":"seed-young-india-commander-inner-elastic-long-trunk-60","name":"Young India Commander Inner Elastic Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"60","rate":0,"stock":0,"image":"dp-commander-inner-elastic.png","seeded":true},{"id":"seed-young-india-commander-inner-elastic-long-trunk-65","name":"Young India Commander Inner Elastic Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"65","rate":0,"stock":0,"image":"dp-commander-inner-elastic.png","seeded":true},{"id":"seed-young-india-commander-inner-elastic-long-trunk-70","name":"Young India Commander Inner Elastic Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"70","rate":0,"stock":0,"image":"dp-commander-inner-elastic.png","seeded":true},{"id":"seed-young-india-commander-inner-elastic-long-trunk-75","name":"Young India Commander Inner Elastic Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"75","rate":0,"stock":0,"image":"dp-commander-inner-elastic.png","seeded":true},{"id":"seed-young-india-commander-inner-elastic-long-trunk-80","name":"Young India Commander Inner Elastic Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"80","rate":0,"stock":0,"image":"dp-commander-inner-elastic.png","seeded":true},{"id":"seed-young-india-commander-inner-elastic-long-trunk-85","name":"Young India Commander Inner Elastic Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"85","rate":0,"stock":0,"image":"dp-commander-inner-elastic.png","seeded":true},{"id":"seed-young-india-commander-inner-elastic-long-trunk-90","name":"Young India Commander Inner Elastic Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"90","rate":0,"stock":0,"image":"dp-commander-inner-elastic.png","seeded":true},{"id":"seed-young-india-commander-inner-elastic-long-trunk-95","name":"Young India Commander Inner Elastic Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"95","rate":0,"stock":0,"image":"dp-commander-inner-elastic.png","seeded":true},{"id":"seed-young-india-commander-inner-elastic-long-trunk-100","name":"Young India Commander Inner Elastic Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"100","rate":0,"stock":0,"image":"dp-commander-inner-elastic.png","seeded":true},{"id":"seed-young-india-commander-inner-elastic-long-trunk-105","name":"Young India Commander Inner Elastic Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"105","rate":0,"stock":0,"image":"dp-commander-inner-elastic.png","seeded":true},{"id":"seed-young-india-commander-inner-elastic-long-trunk-110","name":"Young India Commander Inner Elastic Long Trunk","brand":"Young India Commander","category":"पुरुष लॉन्ग ट्रंक","size":"110","rate":0,"stock":0,"image":"dp-commander-inner-elastic.png","seeded":true},{"id":"seed-young-india-rib-drawer-40","name":"Young India Rib Drawer","brand":"Young India","category":"पुरुष ड्रॉअर","size":"40","rate":0,"stock":0,"image":"young-india-rib-drawer.jpg","seeded":true},{"id":"seed-young-india-rib-drawer-45","name":"Young India Rib Drawer","brand":"Young India","category":"पुरुष ड्रॉअर","size":"45","rate":0,"stock":0,"image":"young-india-rib-drawer.jpg","seeded":true},{"id":"seed-young-india-rib-drawer-50","name":"Young India Rib Drawer","brand":"Young India","category":"पुरुष ड्रॉअर","size":"50","rate":0,"stock":0,"image":"young-india-rib-drawer.jpg","seeded":true},{"id":"seed-young-india-rib-drawer-55","name":"Young India Rib Drawer","brand":"Young India","category":"पुरुष ड्रॉअर","size":"55","rate":0,"stock":0,"image":"young-india-rib-drawer.jpg","seeded":true},{"id":"seed-young-india-rib-drawer-60","name":"Young India Rib Drawer","brand":"Young India","category":"पुरुष ड्रॉअर","size":"60","rate":0,"stock":0,"image":"young-india-rib-drawer.jpg","seeded":true},{"id":"seed-young-india-rib-drawer-65","name":"Young India Rib Drawer","brand":"Young India","category":"पुरुष ड्रॉअर","size":"65","rate":0,"stock":0,"image":"young-india-rib-drawer.jpg","seeded":true},{"id":"seed-young-india-rib-drawer-70","name":"Young India Rib Drawer","brand":"Young India","category":"पुरुष ड्रॉअर","size":"70","rate":0,"stock":0,"image":"young-india-rib-drawer.jpg","seeded":true},{"id":"seed-young-india-rib-drawer-75","name":"Young India Rib Drawer","brand":"Young India","category":"पुरुष ड्रॉअर","size":"75","rate":0,"stock":0,"image":"young-india-rib-drawer.jpg","seeded":true},{"id":"seed-young-india-rib-drawer-80","name":"Young India Rib Drawer","brand":"Young India","category":"पुरुष ड्रॉअर","size":"80","rate":0,"stock":0,"image":"young-india-rib-drawer.jpg","seeded":true},{"id":"seed-young-india-rib-drawer-85","name":"Young India Rib Drawer","brand":"Young India","category":"पुरुष ड्रॉअर","size":"85","rate":0,"stock":0,"image":"young-india-rib-drawer.jpg","seeded":true},{"id":"seed-young-india-rib-drawer-90","name":"Young India Rib Drawer","brand":"Young India","category":"पुरुष ड्रॉअर","size":"90","rate":0,"stock":0,"image":"young-india-rib-drawer.jpg","seeded":true},{"id":"seed-young-india-rib-drawer-95","name":"Young India Rib Drawer","brand":"Young India","category":"पुरुष ड्रॉअर","size":"95","rate":0,"stock":0,"image":"young-india-rib-drawer.jpg","seeded":true},{"id":"seed-young-india-rib-drawer-100","name":"Young India Rib Drawer","brand":"Young India","category":"पुरुष ड्रॉअर","size":"100","rate":0,"stock":0,"image":"young-india-rib-drawer.jpg","seeded":true},{"id":"seed-young-india-rib-drawer-105","name":"Young India Rib Drawer","brand":"Young India","category":"पुरुष ड्रॉअर","size":"105","rate":0,"stock":0,"image":"young-india-rib-drawer.jpg","seeded":true},{"id":"seed-young-india-rib-drawer-110","name":"Young India Rib Drawer","brand":"Young India","category":"पुरुष ड्रॉअर","size":"110","rate":0,"stock":0,"image":"young-india-rib-drawer.jpg","seeded":true},{"id":"seed-lux-nitro-dynamic-long-trunk-40","name":"Lux Nitro Dynamic Long Trunk","brand":"Lux Nitro","category":"पुरुष लॉन्ग ट्रंक","size":"40","rate":0,"stock":0,"image":"dp-lux-nitro-dynamic-long-trunk.png","seeded":true},{"id":"seed-lux-nitro-dynamic-long-trunk-45","name":"Lux Nitro Dynamic Long Trunk","brand":"Lux Nitro","category":"पुरुष लॉन्ग ट्रंक","size":"45","rate":0,"stock":0,"image":"dp-lux-nitro-dynamic-long-trunk.png","seeded":true},{"id":"seed-lux-nitro-dynamic-long-trunk-50","name":"Lux Nitro Dynamic Long Trunk","brand":"Lux Nitro","category":"पुरुष लॉन्ग ट्रंक","size":"50","rate":0,"stock":0,"image":"dp-lux-nitro-dynamic-long-trunk.png","seeded":true},{"id":"seed-lux-nitro-dynamic-long-trunk-55","name":"Lux Nitro Dynamic Long Trunk","brand":"Lux Nitro","category":"पुरुष लॉन्ग ट्रंक","size":"55","rate":0,"stock":0,"image":"dp-lux-nitro-dynamic-long-trunk.png","seeded":true},{"id":"seed-lux-nitro-dynamic-long-trunk-60","name":"Lux Nitro Dynamic Long Trunk","brand":"Lux Nitro","category":"पुरुष लॉन्ग ट्रंक","size":"60","rate":0,"stock":0,"image":"dp-lux-nitro-dynamic-long-trunk.png","seeded":true},{"id":"seed-lux-nitro-dynamic-long-trunk-65","name":"Lux Nitro Dynamic Long Trunk","brand":"Lux Nitro","category":"पुरुष लॉन्ग ट्रंक","size":"65","rate":0,"stock":0,"image":"dp-lux-nitro-dynamic-long-trunk.png","seeded":true},{"id":"seed-lux-nitro-dynamic-long-trunk-70","name":"Lux Nitro Dynamic Long Trunk","brand":"Lux Nitro","category":"पुरुष लॉन्ग ट्रंक","size":"70","rate":0,"stock":0,"image":"dp-lux-nitro-dynamic-long-trunk.png","seeded":true},{"id":"seed-lux-nitro-dynamic-long-trunk-75","name":"Lux Nitro Dynamic Long Trunk","brand":"Lux Nitro","category":"पुरुष लॉन्ग ट्रंक","size":"75","rate":0,"stock":0,"image":"dp-lux-nitro-dynamic-long-trunk.png","seeded":true},{"id":"seed-lux-nitro-dynamic-long-trunk-80","name":"Lux Nitro Dynamic Long Trunk","brand":"Lux Nitro","category":"पुरुष लॉन्ग ट्रंक","size":"80","rate":0,"stock":0,"image":"dp-lux-nitro-dynamic-long-trunk.png","seeded":true},{"id":"seed-lux-nitro-dynamic-long-trunk-85","name":"Lux Nitro Dynamic Long Trunk","brand":"Lux Nitro","category":"पुरुष लॉन्ग ट्रंक","size":"85","rate":0,"stock":0,"image":"dp-lux-nitro-dynamic-long-trunk.png","seeded":true},{"id":"seed-lux-nitro-dynamic-long-trunk-90","name":"Lux Nitro Dynamic Long Trunk","brand":"Lux Nitro","category":"पुरुष लॉन्ग ट्रंक","size":"90","rate":0,"stock":0,"image":"dp-lux-nitro-dynamic-long-trunk.png","seeded":true},{"id":"seed-lux-nitro-dynamic-long-trunk-95","name":"Lux Nitro Dynamic Long Trunk","brand":"Lux Nitro","category":"पुरुष लॉन्ग ट्रंक","size":"95","rate":0,"stock":0,"image":"dp-lux-nitro-dynamic-long-trunk.png","seeded":true},{"id":"seed-lux-nitro-dynamic-long-trunk-100","name":"Lux Nitro Dynamic Long Trunk","brand":"Lux Nitro","category":"पुरुष लॉन्ग ट्रंक","size":"100","rate":0,"stock":0,"image":"dp-lux-nitro-dynamic-long-trunk.png","seeded":true},{"id":"seed-lux-nitro-dynamic-long-trunk-105","name":"Lux Nitro Dynamic Long Trunk","brand":"Lux Nitro","category":"पुरुष लॉन्ग ट्रंक","size":"105","rate":0,"stock":0,"image":"dp-lux-nitro-dynamic-long-trunk.png","seeded":true},{"id":"seed-lux-nitro-dynamic-long-trunk-110","name":"Lux Nitro Dynamic Long Trunk","brand":"Lux Nitro","category":"पुरुष लॉन्ग ट्रंक","size":"110","rate":0,"stock":0,"image":"dp-lux-nitro-dynamic-long-trunk.png","seeded":true},{"id":"seed-lux-cozi-fine-long-plain-trunk-40","name":"Lux Cozi Fine Long Plain Trunk","brand":"Lux Cozi","category":"पुरुष लॉन्ग ट्रंक","size":"40","rate":0,"stock":0,"image":"dp-lux-cozi-fine-long-plain.png","seeded":true},{"id":"seed-lux-cozi-fine-long-plain-trunk-45","name":"Lux Cozi Fine Long Plain Trunk","brand":"Lux Cozi","category":"पुरुष लॉन्ग ट्रंक","size":"45","rate":0,"stock":0,"image":"dp-lux-cozi-fine-long-plain.png","seeded":true},{"id":"seed-lux-cozi-fine-long-plain-trunk-50","name":"Lux Cozi Fine Long Plain Trunk","brand":"Lux Cozi","category":"पुरुष लॉन्ग ट्रंक","size":"50","rate":0,"stock":0,"image":"dp-lux-cozi-fine-long-plain.png","seeded":true},{"id":"seed-lux-cozi-fine-long-plain-trunk-55","name":"Lux Cozi Fine Long Plain Trunk","brand":"Lux Cozi","category":"पुरुष लॉन्ग ट्रंक","size":"55","rate":0,"stock":0,"image":"dp-lux-cozi-fine-long-plain.png","seeded":true},{"id":"seed-lux-cozi-fine-long-plain-trunk-60","name":"Lux Cozi Fine Long Plain Trunk","brand":"Lux Cozi","category":"पुरुष लॉन्ग ट्रंक","size":"60","rate":0,"stock":0,"image":"dp-lux-cozi-fine-long-plain.png","seeded":true},{"id":"seed-lux-cozi-fine-long-plain-trunk-65","name":"Lux Cozi Fine Long Plain Trunk","brand":"Lux Cozi","category":"पुरुष लॉन्ग ट्रंक","size":"65","rate":0,"stock":0,"image":"dp-lux-cozi-fine-long-plain.png","seeded":true},{"id":"seed-lux-cozi-fine-long-plain-trunk-70","name":"Lux Cozi Fine Long Plain Trunk","brand":"Lux Cozi","category":"पुरुष लॉन्ग ट्रंक","size":"70","rate":0,"stock":0,"image":"dp-lux-cozi-fine-long-plain.png","seeded":true},{"id":"seed-lux-cozi-fine-long-plain-trunk-75","name":"Lux Cozi Fine Long Plain Trunk","brand":"Lux Cozi","category":"पुरुष लॉन्ग ट्रंक","size":"75","rate":0,"stock":0,"image":"dp-lux-cozi-fine-long-plain.png","seeded":true},{"id":"seed-lux-cozi-fine-long-plain-trunk-80","name":"Lux Cozi Fine Long Plain Trunk","brand":"Lux Cozi","category":"पुरुष लॉन्ग ट्रंक","size":"80","rate":0,"stock":0,"image":"dp-lux-cozi-fine-long-plain.png","seeded":true},{"id":"seed-lux-cozi-fine-long-plain-trunk-85","name":"Lux Cozi Fine Long Plain Trunk","brand":"Lux Cozi","category":"पुरुष लॉन्ग ट्रंक","size":"85","rate":0,"stock":0,"image":"dp-lux-cozi-fine-long-plain.png","seeded":true},{"id":"seed-lux-cozi-fine-long-plain-trunk-90","name":"Lux Cozi Fine Long Plain Trunk","brand":"Lux Cozi","category":"पुरुष लॉन्ग ट्रंक","size":"90","rate":0,"stock":0,"image":"dp-lux-cozi-fine-long-plain.png","seeded":true},{"id":"seed-lux-cozi-fine-long-plain-trunk-95","name":"Lux Cozi Fine Long Plain Trunk","brand":"Lux Cozi","category":"पुरुष लॉन्ग ट्रंक","size":"95","rate":0,"stock":0,"image":"dp-lux-cozi-fine-long-plain.png","seeded":true},{"id":"seed-lux-cozi-fine-long-plain-trunk-100","name":"Lux Cozi Fine Long Plain Trunk","brand":"Lux Cozi","category":"पुरुष लॉन्ग ट्रंक","size":"100","rate":0,"stock":0,"image":"dp-lux-cozi-fine-long-plain.png","seeded":true},{"id":"seed-lux-cozi-fine-long-plain-trunk-105","name":"Lux Cozi Fine Long Plain Trunk","brand":"Lux Cozi","category":"पुरुष लॉन्ग ट्रंक","size":"105","rate":0,"stock":0,"image":"dp-lux-cozi-fine-long-plain.png","seeded":true},{"id":"seed-lux-cozi-fine-long-plain-trunk-110","name":"Lux Cozi Fine Long Plain Trunk","brand":"Lux Cozi","category":"पुरुष लॉन्ग ट्रंक","size":"110","rate":0,"stock":0,"image":"dp-lux-cozi-fine-long-plain.png","seeded":true},{"id":"seed-lux-cozi-bigshot-fine-long-plain-40","name":"Lux Cozi Bigshot Fine Long Plain","brand":"Lux Cozi","category":"पुरुष लॉन्ग ट्रंक","size":"40","rate":0,"stock":0,"image":"dp-lux-cozi-fine-long-plain.png","seeded":true},{"id":"seed-lux-cozi-bigshot-fine-long-plain-45","name":"Lux Cozi Bigshot Fine Long Plain","brand":"Lux Cozi","category":"पुरुष लॉन्ग ट्रंक","size":"45","rate":0,"stock":0,"image":"dp-lux-cozi-fine-long-plain.png","seeded":true},{"id":"seed-lux-cozi-bigshot-fine-long-plain-50","name":"Lux Cozi Bigshot Fine Long Plain","brand":"Lux Cozi","category":"पुरुष लॉन्ग ट्रंक","size":"50","rate":0,"stock":0,"image":"dp-lux-cozi-fine-long-plain.png","seeded":true},{"id":"seed-lux-cozi-bigshot-fine-long-plain-55","name":"Lux Cozi Bigshot Fine Long Plain","brand":"Lux Cozi","category":"पुरुष लॉन्ग ट्रंक","size":"55","rate":0,"stock":0,"image":"dp-lux-cozi-fine-long-plain.png","seeded":true},{"id":"seed-lux-cozi-bigshot-fine-long-plain-60","name":"Lux Cozi Bigshot Fine Long Plain","brand":"Lux Cozi","category":"पुरुष लॉन्ग ट्रंक","size":"60","rate":0,"stock":0,"image":"dp-lux-cozi-fine-long-plain.png","seeded":true},{"id":"seed-lux-cozi-bigshot-fine-long-plain-65","name":"Lux Cozi Bigshot Fine Long Plain","brand":"Lux Cozi","category":"पुरुष लॉन्ग ट्रंक","size":"65","rate":0,"stock":0,"image":"dp-lux-cozi-fine-long-plain.png","seeded":true},{"id":"seed-lux-cozi-bigshot-fine-long-plain-70","name":"Lux Cozi Bigshot Fine Long Plain","brand":"Lux Cozi","category":"पुरुष लॉन्ग ट्रंक","size":"70","rate":0,"stock":0,"image":"dp-lux-cozi-fine-long-plain.png","seeded":true},{"id":"seed-lux-cozi-bigshot-fine-long-plain-75","name":"Lux Cozi Bigshot Fine Long Plain","brand":"Lux Cozi","category":"पुरुष लॉन्ग ट्रंक","size":"75","rate":0,"stock":0,"image":"dp-lux-cozi-fine-long-plain.png","seeded":true},{"id":"seed-lux-cozi-bigshot-fine-long-plain-80","name":"Lux Cozi Bigshot Fine Long Plain","brand":"Lux Cozi","category":"पुरुष लॉन्ग ट्रंक","size":"80","rate":0,"stock":0,"image":"dp-lux-cozi-fine-long-plain.png","seeded":true},{"id":"seed-lux-cozi-bigshot-fine-long-plain-85","name":"Lux Cozi Bigshot Fine Long Plain","brand":"Lux Cozi","category":"पुरुष लॉन्ग ट्रंक","size":"85","rate":0,"stock":0,"image":"dp-lux-cozi-fine-long-plain.png","seeded":true},{"id":"seed-lux-cozi-bigshot-fine-long-plain-90","name":"Lux Cozi Bigshot Fine Long Plain","brand":"Lux Cozi","category":"पुरुष लॉन्ग ट्रंक","size":"90","rate":0,"stock":0,"image":"dp-lux-cozi-fine-long-plain.png","seeded":true},{"id":"seed-lux-cozi-bigshot-fine-long-plain-95","name":"Lux Cozi Bigshot Fine Long Plain","brand":"Lux Cozi","category":"पुरुष लॉन्ग ट्रंक","size":"95","rate":0,"stock":0,"image":"dp-lux-cozi-fine-long-plain.png","seeded":true},{"id":"seed-lux-cozi-bigshot-fine-long-plain-100","name":"Lux Cozi Bigshot Fine Long Plain","brand":"Lux Cozi","category":"पुरुष लॉन्ग ट्रंक","size":"100","rate":0,"stock":0,"image":"dp-lux-cozi-fine-long-plain.png","seeded":true},{"id":"seed-lux-cozi-bigshot-fine-long-plain-105","name":"Lux Cozi Bigshot Fine Long Plain","brand":"Lux Cozi","category":"पुरुष लॉन्ग ट्रंक","size":"105","rate":0,"stock":0,"image":"dp-lux-cozi-fine-long-plain.png","seeded":true},{"id":"seed-lux-cozi-bigshot-fine-long-plain-110","name":"Lux Cozi Bigshot Fine Long Plain","brand":"Lux Cozi","category":"पुरुष लॉन्ग ट्रंक","size":"110","rate":0,"stock":0,"image":"dp-lux-cozi-fine-long-plain.png","seeded":true},{"id":"seed-rupa-jon-amazing-panties-s-80","name":"Rupa Jon Amazing Panties","brand":"Rupa Jon","category":"लेडीज़ पैंटी","size":"S-80","rate":0,"stock":0,"image":"dp-rupa-jon-amazing-panties.png","seeded":true},{"id":"seed-rupa-jon-amazing-panties-m-85","name":"Rupa Jon Amazing Panties","brand":"Rupa Jon","category":"लेडीज़ पैंटी","size":"M-85","rate":0,"stock":0,"image":"dp-rupa-jon-amazing-panties.png","seeded":true},{"id":"seed-rupa-jon-amazing-panties-l-90","name":"Rupa Jon Amazing Panties","brand":"Rupa Jon","category":"लेडीज़ पैंटी","size":"L-90","rate":0,"stock":0,"image":"dp-rupa-jon-amazing-panties.png","seeded":true},{"id":"seed-rupa-jon-amazing-panties-xl-95","name":"Rupa Jon Amazing Panties","brand":"Rupa Jon","category":"लेडीज़ पैंटी","size":"XL-95","rate":0,"stock":0,"image":"dp-rupa-jon-amazing-panties.png","seeded":true},{"id":"seed-rupa-jon-amazing-panties-xxl-100","name":"Rupa Jon Amazing Panties","brand":"Rupa Jon","category":"लेडीज़ पैंटी","size":"XXL-100","rate":0,"stock":0,"image":"dp-rupa-jon-amazing-panties.png","seeded":true},{"id":"seed-rupa-jon-amazing-panties-3xl-105","name":"Rupa Jon Amazing Panties","brand":"Rupa Jon","category":"लेडीज़ पैंटी","size":"3XL-105","rate":0,"stock":0,"image":"dp-rupa-jon-amazing-panties.png","seeded":true},{"id":"seed-rupa-jon-amazing-panties-4xl-110","name":"Rupa Jon Amazing Panties","brand":"Rupa Jon","category":"लेडीज़ पैंटी","size":"4XL-110","rate":0,"stock":0,"image":"dp-rupa-jon-amazing-panties.png","seeded":true},{"id":"seed-dixcy-scott-cross-trunk-40","name":"Dixcy Scott Cross Trunk","brand":"Dixcy Scott","category":"पुरुष लॉन्ग ट्रंक","size":"40","rate":0,"stock":0,"image":"dp-dixcy-scott-cross-trunk.jpg","seeded":true},{"id":"seed-dixcy-scott-cross-trunk-45","name":"Dixcy Scott Cross Trunk","brand":"Dixcy Scott","category":"पुरुष लॉन्ग ट्रंक","size":"45","rate":0,"stock":0,"image":"dp-dixcy-scott-cross-trunk.jpg","seeded":true},{"id":"seed-dixcy-scott-cross-trunk-50","name":"Dixcy Scott Cross Trunk","brand":"Dixcy Scott","category":"पुरुष लॉन्ग ट्रंक","size":"50","rate":0,"stock":0,"image":"dp-dixcy-scott-cross-trunk.jpg","seeded":true},{"id":"seed-dixcy-scott-cross-trunk-55","name":"Dixcy Scott Cross Trunk","brand":"Dixcy Scott","category":"पुरुष लॉन्ग ट्रंक","size":"55","rate":0,"stock":0,"image":"dp-dixcy-scott-cross-trunk.jpg","seeded":true},{"id":"seed-dixcy-scott-cross-trunk-60","name":"Dixcy Scott Cross Trunk","brand":"Dixcy Scott","category":"पुरुष लॉन्ग ट्रंक","size":"60","rate":0,"stock":0,"image":"dp-dixcy-scott-cross-trunk.jpg","seeded":true},{"id":"seed-dixcy-scott-cross-trunk-65","name":"Dixcy Scott Cross Trunk","brand":"Dixcy Scott","category":"पुरुष लॉन्ग ट्रंक","size":"65","rate":0,"stock":0,"image":"dp-dixcy-scott-cross-trunk.jpg","seeded":true},{"id":"seed-dixcy-scott-cross-trunk-70","name":"Dixcy Scott Cross Trunk","brand":"Dixcy Scott","category":"पुरुष लॉन्ग ट्रंक","size":"70","rate":0,"stock":0,"image":"dp-dixcy-scott-cross-trunk.jpg","seeded":true},{"id":"seed-dixcy-scott-cross-trunk-75","name":"Dixcy Scott Cross Trunk","brand":"Dixcy Scott","category":"पुरुष लॉन्ग ट्रंक","size":"75","rate":0,"stock":0,"image":"dp-dixcy-scott-cross-trunk.jpg","seeded":true},{"id":"seed-dixcy-scott-cross-trunk-80","name":"Dixcy Scott Cross Trunk","brand":"Dixcy Scott","category":"पुरुष लॉन्ग ट्रंक","size":"80","rate":0,"stock":0,"image":"dp-dixcy-scott-cross-trunk.jpg","seeded":true},{"id":"seed-dixcy-scott-cross-trunk-85","name":"Dixcy Scott Cross Trunk","brand":"Dixcy Scott","category":"पुरुष लॉन्ग ट्रंक","size":"85","rate":0,"stock":0,"image":"dp-dixcy-scott-cross-trunk.jpg","seeded":true},{"id":"seed-dixcy-scott-cross-trunk-90","name":"Dixcy Scott Cross Trunk","brand":"Dixcy Scott","category":"पुरुष लॉन्ग ट्रंक","size":"90","rate":0,"stock":0,"image":"dp-dixcy-scott-cross-trunk.jpg","seeded":true},{"id":"seed-dixcy-scott-cross-trunk-95","name":"Dixcy Scott Cross Trunk","brand":"Dixcy Scott","category":"पुरुष लॉन्ग ट्रंक","size":"95","rate":0,"stock":0,"image":"dp-dixcy-scott-cross-trunk.jpg","seeded":true},{"id":"seed-dixcy-scott-cross-trunk-100","name":"Dixcy Scott Cross Trunk","brand":"Dixcy Scott","category":"पुरुष लॉन्ग ट्रंक","size":"100","rate":0,"stock":0,"image":"dp-dixcy-scott-cross-trunk.jpg","seeded":true},{"id":"seed-dixcy-scott-cross-trunk-105","name":"Dixcy Scott Cross Trunk","brand":"Dixcy Scott","category":"पुरुष लॉन्ग ट्रंक","size":"105","rate":0,"stock":0,"image":"dp-dixcy-scott-cross-trunk.jpg","seeded":true},{"id":"seed-dixcy-scott-cross-trunk-110","name":"Dixcy Scott Cross Trunk","brand":"Dixcy Scott","category":"पुरुष लॉन्ग ट्रंक","size":"110","rate":0,"stock":0,"image":"dp-dixcy-scott-cross-trunk.jpg","seeded":true},{"id":"seed-dixcy-scott-designer-vest-40","name":"Dixcy Scott Designer Vest","brand":"Dixcy Scott","category":"पुरुष बनियान","size":"40","rate":0,"stock":0,"image":"dp-dixcy-scott-designer-vest.jpg","seeded":true},{"id":"seed-dixcy-scott-designer-vest-45","name":"Dixcy Scott Designer Vest","brand":"Dixcy Scott","category":"पुरुष बनियान","size":"45","rate":0,"stock":0,"image":"dp-dixcy-scott-designer-vest.jpg","seeded":true},{"id":"seed-dixcy-scott-designer-vest-50","name":"Dixcy Scott Designer Vest","brand":"Dixcy Scott","category":"पुरुष बनियान","size":"50","rate":0,"stock":0,"image":"dp-dixcy-scott-designer-vest.jpg","seeded":true},{"id":"seed-dixcy-scott-designer-vest-55","name":"Dixcy Scott Designer Vest","brand":"Dixcy Scott","category":"पुरुष बनियान","size":"55","rate":0,"stock":0,"image":"dp-dixcy-scott-designer-vest.jpg","seeded":true},{"id":"seed-dixcy-scott-designer-vest-60","name":"Dixcy Scott Designer Vest","brand":"Dixcy Scott","category":"पुरुष बनियान","size":"60","rate":0,"stock":0,"image":"dp-dixcy-scott-designer-vest.jpg","seeded":true},{"id":"seed-dixcy-scott-designer-vest-65","name":"Dixcy Scott Designer Vest","brand":"Dixcy Scott","category":"पुरुष बनियान","size":"65","rate":0,"stock":0,"image":"dp-dixcy-scott-designer-vest.jpg","seeded":true},{"id":"seed-dixcy-scott-designer-vest-70","name":"Dixcy Scott Designer Vest","brand":"Dixcy Scott","category":"पुरुष बनियान","size":"70","rate":0,"stock":0,"image":"dp-dixcy-scott-designer-vest.jpg","seeded":true},{"id":"seed-dixcy-scott-designer-vest-75","name":"Dixcy Scott Designer Vest","brand":"Dixcy Scott","category":"पुरुष बनियान","size":"75","rate":0,"stock":0,"image":"dp-dixcy-scott-designer-vest.jpg","seeded":true},{"id":"seed-dixcy-scott-designer-vest-80","name":"Dixcy Scott Designer Vest","brand":"Dixcy Scott","category":"पुरुष बनियान","size":"80","rate":0,"stock":0,"image":"dp-dixcy-scott-designer-vest.jpg","seeded":true},{"id":"seed-dixcy-scott-designer-vest-85","name":"Dixcy Scott Designer Vest","brand":"Dixcy Scott","category":"पुरुष बनियान","size":"85","rate":0,"stock":0,"image":"dp-dixcy-scott-designer-vest.jpg","seeded":true},{"id":"seed-dixcy-scott-designer-vest-90","name":"Dixcy Scott Designer Vest","brand":"Dixcy Scott","category":"पुरुष बनियान","size":"90","rate":0,"stock":0,"image":"dp-dixcy-scott-designer-vest.jpg","seeded":true},{"id":"seed-dixcy-scott-designer-vest-95","name":"Dixcy Scott Designer Vest","brand":"Dixcy Scott","category":"पुरुष बनियान","size":"95","rate":0,"stock":0,"image":"dp-dixcy-scott-designer-vest.jpg","seeded":true},{"id":"seed-dixcy-scott-designer-vest-100","name":"Dixcy Scott Designer Vest","brand":"Dixcy Scott","category":"पुरुष बनियान","size":"100","rate":0,"stock":0,"image":"dp-dixcy-scott-designer-vest.jpg","seeded":true},{"id":"seed-dixcy-scott-designer-vest-105","name":"Dixcy Scott Designer Vest","brand":"Dixcy Scott","category":"पुरुष बनियान","size":"105","rate":0,"stock":0,"image":"dp-dixcy-scott-designer-vest.jpg","seeded":true},{"id":"seed-dixcy-scott-designer-vest-110","name":"Dixcy Scott Designer Vest","brand":"Dixcy Scott","category":"पुरुष बनियान","size":"110","rate":0,"stock":0,"image":"dp-dixcy-scott-designer-vest.jpg","seeded":true},{"id":"seed-rupa-jon-aishwarya-long-panty-s-80","name":"Rupa Jon Aishwarya Long Panty","brand":"Rupa Jon","category":"लेडीज़ पैंटी","size":"S-80","rate":0,"stock":0,"image":"dp-rupa-jon-aishwarya-long-panty.jpg","seeded":true},{"id":"seed-rupa-jon-aishwarya-long-panty-m-85","name":"Rupa Jon Aishwarya Long Panty","brand":"Rupa Jon","category":"लेडीज़ पैंटी","size":"M-85","rate":0,"stock":0,"image":"dp-rupa-jon-aishwarya-long-panty.jpg","seeded":true},{"id":"seed-rupa-jon-aishwarya-long-panty-l-90","name":"Rupa Jon Aishwarya Long Panty","brand":"Rupa Jon","category":"लेडीज़ पैंटी","size":"L-90","rate":0,"stock":0,"image":"dp-rupa-jon-aishwarya-long-panty.jpg","seeded":true},{"id":"seed-rupa-jon-aishwarya-long-panty-xl-95","name":"Rupa Jon Aishwarya Long Panty","brand":"Rupa Jon","category":"लेडीज़ पैंटी","size":"XL-95","rate":0,"stock":0,"image":"dp-rupa-jon-aishwarya-long-panty.jpg","seeded":true},{"id":"seed-rupa-jon-aishwarya-long-panty-xxl-100","name":"Rupa Jon Aishwarya Long Panty","brand":"Rupa Jon","category":"लेडीज़ पैंटी","size":"XXL-100","rate":0,"stock":0,"image":"dp-rupa-jon-aishwarya-long-panty.jpg","seeded":true},{"id":"seed-rupa-jon-aishwarya-long-panty-3xl-105","name":"Rupa Jon Aishwarya Long Panty","brand":"Rupa Jon","category":"लेडीज़ पैंटी","size":"3XL-105","rate":0,"stock":0,"image":"dp-rupa-jon-aishwarya-long-panty.jpg","seeded":true},{"id":"seed-rupa-jon-aishwarya-long-panty-4xl-110","name":"Rupa Jon Aishwarya Long Panty","brand":"Rupa Jon","category":"लेडीज़ पैंटी","size":"4XL-110","rate":0,"stock":0,"image":"dp-rupa-jon-aishwarya-long-panty.jpg","seeded":true},{"id":"seed-lux-venus-rn-white-vest-40","name":"Lux Venus RN White Vest","brand":"Lux Venus","category":"पुरुष बनियान","size":"40","rate":0,"stock":0,"image":"dp-lux-venus-rn-white-vest.jpg","seeded":true},{"id":"seed-lux-venus-rn-white-vest-45","name":"Lux Venus RN White Vest","brand":"Lux Venus","category":"पुरुष बनियान","size":"45","rate":0,"stock":0,"image":"dp-lux-venus-rn-white-vest.jpg","seeded":true},{"id":"seed-lux-venus-rn-white-vest-50","name":"Lux Venus RN White Vest","brand":"Lux Venus","category":"पुरुष बनियान","size":"50","rate":0,"stock":0,"image":"dp-lux-venus-rn-white-vest.jpg","seeded":true},{"id":"seed-lux-venus-rn-white-vest-55","name":"Lux Venus RN White Vest","brand":"Lux Venus","category":"पुरुष बनियान","size":"55","rate":0,"stock":0,"image":"dp-lux-venus-rn-white-vest.jpg","seeded":true},{"id":"seed-lux-venus-rn-white-vest-60","name":"Lux Venus RN White Vest","brand":"Lux Venus","category":"पुरुष बनियान","size":"60","rate":0,"stock":0,"image":"dp-lux-venus-rn-white-vest.jpg","seeded":true},{"id":"seed-lux-venus-rn-white-vest-65","name":"Lux Venus RN White Vest","brand":"Lux Venus","category":"पुरुष बनियान","size":"65","rate":0,"stock":0,"image":"dp-lux-venus-rn-white-vest.jpg","seeded":true},{"id":"seed-lux-venus-rn-white-vest-70","name":"Lux Venus RN White Vest","brand":"Lux Venus","category":"पुरुष बनियान","size":"70","rate":0,"stock":0,"image":"dp-lux-venus-rn-white-vest.jpg","seeded":true},{"id":"seed-lux-venus-rn-white-vest-75","name":"Lux Venus RN White Vest","brand":"Lux Venus","category":"पुरुष बनियान","size":"75","rate":0,"stock":0,"image":"dp-lux-venus-rn-white-vest.jpg","seeded":true},{"id":"seed-lux-venus-rn-white-vest-80","name":"Lux Venus RN White Vest","brand":"Lux Venus","category":"पुरुष बनियान","size":"80","rate":0,"stock":0,"image":"dp-lux-venus-rn-white-vest.jpg","seeded":true},{"id":"seed-lux-venus-rn-white-vest-85","name":"Lux Venus RN White Vest","brand":"Lux Venus","category":"पुरुष बनियान","size":"85","rate":0,"stock":0,"image":"dp-lux-venus-rn-white-vest.jpg","seeded":true},{"id":"seed-lux-venus-rn-white-vest-90","name":"Lux Venus RN White Vest","brand":"Lux Venus","category":"पुरुष बनियान","size":"90","rate":0,"stock":0,"image":"dp-lux-venus-rn-white-vest.jpg","seeded":true},{"id":"seed-lux-venus-rn-white-vest-95","name":"Lux Venus RN White Vest","brand":"Lux Venus","category":"पुरुष बनियान","size":"95","rate":0,"stock":0,"image":"dp-lux-venus-rn-white-vest.jpg","seeded":true},{"id":"seed-lux-venus-rn-white-vest-100","name":"Lux Venus RN White Vest","brand":"Lux Venus","category":"पुरुष बनियान","size":"100","rate":0,"stock":0,"image":"dp-lux-venus-rn-white-vest.jpg","seeded":true},{"id":"seed-lux-venus-rn-white-vest-105","name":"Lux Venus RN White Vest","brand":"Lux Venus","category":"पुरुष बनियान","size":"105","rate":0,"stock":0,"image":"dp-lux-venus-rn-white-vest.jpg","seeded":true},{"id":"seed-lux-venus-rn-white-vest-110","name":"Lux Venus RN White Vest","brand":"Lux Venus","category":"पुरुष बनियान","size":"110","rate":0,"stock":0,"image":"dp-lux-venus-rn-white-vest.jpg","seeded":true}];
let db=JSON.parse(localStorage.getItem(DBKEY)||'{"products":[],"parchas":[]}');
window.PARXO_GET_DB=()=>db;
let parchaItems=[], currentBill=null, deferredPrompt=null;

function mergeSeedProducts(){
  const existing=new Set(db.products.map(p=>p.id));
  let added=0;
  for(const p of DEFAULT_PRODUCTS){
    if(!existing.has(p.id)){db.products.push(p);added++;}
  }
  if(added) localStorage.setItem(DBKEY,JSON.stringify(db));
  return added;
}
const REMOVED_PRODUCT_NAMES=new Set(["Deeco Shorty Kids Wear"]);
const PRODUCT_DP_BY_NAME={"Rupa Jon RN White Vest":"dp-rupa-jon-rn-white-vest.png","Young India Premium Vest RN":"dp-young-india-premium-vest.png","Lux Cozi Xylo 333 Gym Vest":"dp-lux-cozi-xylo-333-gym-vest.png","Lux Cozi Xylo 888 Gym Vest":"dp-lux-xylo-888-gym-vest.png","Lux Cozi Bigshot Vest":"dp-lux-cozi-xylo-333-gym-vest.png","Essdee Flexi Trunks":"dp-essdee-flexi-trunks.png","Macho Sporto Smart Cut Brief":"dp-macho-sporto-smart-cut-brief.png","Dixcy Scott Replay Brief":"dp-dixcy-scott-replay-brief.png","Macho Sporto Long Trunk":"dp-macho-sporto-long-trunk.png","Young India Glider Man Mini Trunk":"dp-young-india-glider-mini-trunk.png","Young India Commander Plain Long Trunk":"commander-plain-long-trunk.jpg","Young India Commander Outer Elastic Long Trunk":"dp-commander-outer-elastic.png","Young India Commander Inner Elastic Long Trunk":"dp-commander-inner-elastic.png","Young India Rib Drawer":"young-india-rib-drawer.jpg","Lux Nitro Dynamic Long Trunk":"dp-lux-nitro-dynamic-long-trunk.png","Lux Cozi Fine Long Plain Trunk":"dp-lux-cozi-fine-long-plain.png","Lux Cozi Bigshot Fine Long Plain":"dp-lux-cozi-fine-long-plain.png","Rupa Jon Amazing Panties":"dp-rupa-jon-amazing-panties.png","Dixcy Scott Cross Trunk":"dp-dixcy-scott-cross-trunk.jpg","Dixcy Scott Designer Vest":"dp-dixcy-scott-designer-vest.jpg","Rupa Jon Aishwarya Long Panty":"dp-rupa-jon-aishwarya-long-panty.jpg","Lux Venus RN White Vest":"dp-lux-venus-rn-white-vest.jpg"};
function migrateCatalogAndDP(){
  let changed=false;
  const before=db.products.length;
  db.products=db.products.filter(p=>!REMOVED_PRODUCT_NAMES.has(p.name));
  if(db.products.length!==before) changed=true;
  for(const p of db.products){
    if(p.name==='Essdee Print Vest'){
      p.name='Essdee Flexi Trunks';
      p.brand='Essdee';
      p.category='पुरुष लॉन्ग ट्रंक';
      changed=true;
    }
    const wanted=PRODUCT_DP_BY_NAME[p.name];
    if(wanted && p.image!==wanted){p.image=wanted;changed=true;}
  }
  if(changed) localStorage.setItem(DBKEY,JSON.stringify(db));
  return changed;
}
function migrateProductImages(){
  // Purane localStorage data me galat/purane image paths ho sakte hain (jaise "images/xxx.jpg"
  // ya generic brand image jahan ab specific product image maujood hai). Ye function har startup
  // par seed products ke image path ko DEFAULT_PRODUCTS ke latest sahi path se sync karta hai,
  // taaki user ko browser data clear na karna pade.
  const seedImageById={};
  for(const p of DEFAULT_PRODUCTS) seedImageById[p.id]=p.image;
  let migrated=0;
  for(const p of db.products){
    if(p.image && p.image.startsWith('images/')){
      p.image=p.image.replace(/^images\//,'');
      migrated++;
    }
    if(p.seeded && seedImageById[p.id] && p.image!==seedImageById[p.id]){
      p.image=seedImageById[p.id];
      migrated++;
    }
  }
  if(migrated) localStorage.setItem(DBKEY,JSON.stringify(db));
  return migrated;
}
function migrateSchema(){
  // Naye features (profit, invoice number, udhar) ke liye purane data me
  // missing fields ko safe defaults ke saath jodta hai. Kuch bhi delete nahi hota.
  let changed=false;
  for(const p of db.products){
    if(p.costPrice===undefined){p.costPrice=0;changed=true;}
    if(p.barcode===undefined){p.barcode='';changed=true;}
  }
  for(const p of db.parchas){
    if(p.invoiceNo===undefined){p.invoiceNo='PARXO-'+(p.number||'000000');changed=true;}
    if(p.paymentStatus===undefined){p.paymentStatus='paid';changed=true;}
    if(p.amountPaid===undefined){p.amountPaid=+p.total||0;changed=true;}
    if(p.amountDue===undefined){p.amountDue=0;changed=true;}
    if(!Array.isArray(p.items)) p.items=[];
    for(const it of p.items){ if(it.costPrice===undefined){it.costPrice=0;changed=true;} }
    if(p.totalCost===undefined){ p.totalCost=p.items.reduce((a,x)=>a+(+x.costPrice||0)*(+x.qty||0),0); changed=true; }
    if(p.profit===undefined){ p.profit=(+p.total||0)-(+p.totalCost||0); changed=true; }
    if(p.ts===undefined){
      // Purane bill me exact timestamp nahi tha (sirf locale-formatted date string).
      // Isliye ise reports (daily/weekly/monthly/yearly chart) me shamil nahi karte,
      // par bill khud (total sale, history list) bilkul surakshit rehta hai.
      p.ts=null; p.dateApprox=true; changed=true;
    }
  }
  if(!db.customers){db.customers=[];changed=true;}
  if(!db.settings){db.settings={pin:'',invoiceSeq:0,invoiceYear:new Date().getFullYear()};changed=true;}
  if(changed) localStorage.setItem(DBKEY,JSON.stringify(db));
  return changed;
}
function nextInvoiceNo(){
  const yr=new Date().getFullYear();
  if(db.settings.invoiceYear!==yr){db.settings.invoiceYear=yr;db.settings.invoiceSeq=0;}
  db.settings.invoiceSeq=(db.settings.invoiceSeq||0)+1;
  return `PARXO-${yr}-${String(db.settings.invoiceSeq).padStart(4,'0')}`;
}
function recalcCustomerLedger(){
  // Customer ka udhar (due) hamesha scratch se recompute hota hai (bills ka total - amountPaid)
  // taaki edit/delete/backup restore me kabhi galat ya purana due na reh jaaye.
  const map={};
  for(const p of db.parchas){
    const key=(p.mobile&&p.mobile.trim())||p.customerName;
    if(!key) continue;
    if(!map[key]) map[key]={key,name:p.customerName,mobile:p.mobile||'',totalBilled:0,totalPaidAtBill:0};
    map[key].totalBilled+=(+p.total||0);
    map[key].totalPaidAtBill+=(+p.amountPaid||0);
    map[key].name=p.customerName; map[key].mobile=p.mobile||map[key].mobile;
  }
  const oldPayments={};
  for(const cst of (db.customers||[])) oldPayments[cst.key]=cst.payments||[];
  db.customers=Object.values(map).map(cst=>{
    const payments=oldPayments[cst.key]||[];
    const extraPaid=payments.reduce((a,x)=>a+(+x.amount||0),0);
    const totalDue=Math.max(0, cst.totalBilled-cst.totalPaidAtBill-extraPaid);
    return {...cst,payments,extraPaid,totalDue};
  });
}
function autoBackup(){
  // Har save() par local rotating backup (max 5 snapshots, kam se kam 10 min ke gap par)
  // taaki galti se data delete/corrupt hone par turant purana data wapas mil sake.
  // Yeh sirf isी browser/device tak local hai — real "cloud" sync ke liye backend chahiye.
  try{
    const now=Date.now();
    const last=+localStorage.getItem('parxo_last_autobackup')||0;
    if(now-last < 10*60*1000) return;
    let backups=JSON.parse(localStorage.getItem('parxo_backups')||'[]');
    backups.push({ts:now,data:JSON.stringify(db)});
    if(backups.length>5) backups=backups.slice(-5);
    localStorage.setItem('parxo_backups',JSON.stringify(backups));
    localStorage.setItem('parxo_last_autobackup',String(now));
  }catch(e){ /* storage full ho sakta hai — manual export/download hamesha kaam karega */ }
}
migrateCatalogAndDP();mergeSeedProducts();migrateProductImages();migrateSchema();

let cloudSaveTimer=null;
const save=()=>{
  // local copy केवल offline cache/backup है; मुख्य sync Firestore में होता है।
  localStorage.setItem(DBKEY,JSON.stringify(db));
  autoBackup(); updateStats();
  clearTimeout(cloudSaveTimer);
  cloudSaveTimer=setTimeout(()=>{
    if(window.PARXO_CLOUD && window.PARXO_CLOUD.user){
      window.PARXO_CLOUD.push(db).catch(err=>{console.error(err); alert('Cloud में डेटा सेव नहीं हुआ। इंटरनेट और Firebase Rules जाँचें।');});
    }
  },300);
};
window.addEventListener('parxo-cloud-data',e=>{
  const incoming=e.detail;
  if(!incoming || !Array.isArray(incoming.products) || !Array.isArray(incoming.parchas)) return;
  db=incoming;
  migrateCatalogAndDP(); mergeSeedProducts(); migrateProductImages(); migrateSchema();
  localStorage.setItem(DBKEY,JSON.stringify(db));
  updateStats(); renderProducts(); renderHistory(); renderParcha();
});
function showPage(id){$$('.page').forEach(x=>x.classList.toggle('active',x.id===id));if(id==='products')renderProducts();if(id==='history')renderHistory();if(id==='dashboard')updateStats();}
let suppressParchaReset=false;
function resetParchaForm(){
 parchaItems=[];
 if($('#customerName'))$('#customerName').value='';
 if($('#customerMobile'))$('#customerMobile').value='';
 if($('#parchaNote'))$('#parchaNote').value='';
 if($('#editingBillId'))$('#editingBillId').value='';
 if($('#paymentStatus'))$('#paymentStatus').value='paid';
 if($('#amountPaid'))$('#amountPaid').value='';
 if($('#saveParcha'))$('#saveParcha').textContent='पर्चा सेव करें';
 renderParcha();
}
$$('[data-page]').forEach(b=>b.onclick=()=>{
 if(b.dataset.page==='newParcha'){
  if(suppressParchaReset) suppressParchaReset=false; else resetParchaForm();
 }
 showPage(b.dataset.page);
});

function updateStats(){
 $('#statProducts').textContent=db.products.length;
 $('#statStock').textContent=db.products.reduce((a,p)=>a+(+p.stock||0),0);
 $('#statParchas').textContent=db.parchas.length;
 $('#statSale').textContent='₹'+db.parchas.reduce((a,p)=>a+(+p.total||0),0);
 const todayStr=new Date().toDateString();
 const todaySale=db.parchas.filter(p=>p.ts && new Date(p.ts).toDateString()===todayStr).reduce((a,p)=>a+(+p.total||0),0);
 const totalProfit=db.parchas.reduce((a,p)=>a+(+p.profit||0),0);
 const stockValue=db.products.reduce((a,p)=>a+(+p.stock||0)*(+p.rate||0),0);
 const lowCount=db.products.filter(p=>(+p.stock||0)>0 && (+p.stock||0)<=LOW_STOCK_THRESHOLD).length;
 const outCount=db.products.filter(p=>(+p.stock||0)<=0).length;
 if($('#statToday')) $('#statToday').textContent='₹'+todaySale;
 if($('#statProfit')) $('#statProfit').textContent='₹'+totalProfit;
 if($('#statStockValue')) $('#statStockValue').textContent='₹'+stockValue;
 if($('#statLowStock')) $('#statLowStock').textContent=lowCount;
 if($('#statOutStock')) $('#statOutStock').textContent=outCount;
 if($('#lowStockBanner')){
  if(outCount>0 || lowCount>0){
   $('#lowStockBanner').hidden=false;
   $('#lowStockBanner').textContent=`⚠️ ${outCount} प्रोडक्ट स्टॉक खत्म, ${lowCount} प्रोडक्ट में स्टॉक कम है — "प्रोडक्ट" में जाकर देखें।`;
  } else { $('#lowStockBanner').hidden=true; }
 }
}
function escapeHtml(s=''){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
function productCard(p){
 const stock=+p.stock||0;
 const badge = stock<=0 ? ' <span class="badge out">स्टॉक खत्म</span>' : (stock<=LOW_STOCK_THRESHOLD ? ' <span class="badge low">कम स्टॉक</span>' : '');
 return `<div class="item"><img class="thumb" src="${p.image||'icon.svg'}"><div class="itemMain"><b>${escapeHtml(p.name)}</b>${badge}<div class="muted">${escapeHtml(p.brand||'')} | ${escapeHtml(p.category||'')} | साइज: ${escapeHtml(p.size||'-')} | ₹${p.rate||0} | स्टॉक: ${p.stock||0}</div></div><div class="actions"><button onclick="editProduct('${p.id}')">बदलें</button><button onclick="deleteProduct('${p.id}')">हटाएँ</button></div></div>`;
}
function populateFilters(){
 if(!$('#filterCategory')||!$('#filterBrand')) return;
 const cats=[...new Set(db.products.map(p=>p.category).filter(Boolean))].sort();
 const brands=[...new Set(db.products.map(p=>p.brand).filter(Boolean))].sort();
 const curCat=$('#filterCategory').value, curBrand=$('#filterBrand').value;
 $('#filterCategory').innerHTML='<option value="">सभी कैटेगरी</option>'+cats.map(x=>`<option value="${escapeHtml(x)}">${escapeHtml(x)}</option>`).join('');
 $('#filterBrand').innerHTML='<option value="">सभी ब्रांड</option>'+brands.map(x=>`<option value="${escapeHtml(x)}">${escapeHtml(x)}</option>`).join('');
 $('#filterCategory').value=curCat; $('#filterBrand').value=curBrand;
}
function renderProducts(){
 populateFilters();
 const q=$('#productSearch').value.toLowerCase();
 const cat=$('#filterCategory')?$('#filterCategory').value:'';
 const brand=$('#filterBrand')?$('#filterBrand').value:'';
 const rows=db.products.filter(p=>JSON.stringify(p).toLowerCase().includes(q) && (!cat||p.category===cat) && (!brand||p.brand===brand));
 $('#productList').innerHTML=rows.length?rows.map(productCard).join(''):'<p class="muted">अभी कोई प्रोडक्ट नहीं है।</p>';
}
$('#productSearch').oninput=renderProducts;
if($('#filterCategory')) $('#filterCategory').onchange=renderProducts;
if($('#filterBrand')) $('#filterBrand').onchange=renderProducts;
$('#openAddProduct').onclick=()=>openProduct();

function openProduct(p={}){
 window.__parxoCroppedImage=''; window.__parxoImageScope='product';
 $('#productDialogTitle').textContent=p.id?'प्रोडक्ट बदलें':'नया प्रोडक्ट';
 $('#productId').value=p.id||'';$('#productName').value=p.name||'';$('#productBrand').value=p.brand||'';
 $('#productCategory').value=p.category||'';$('#productSize').value=p.size||'';$('#productRate').value=p.rate||'';
 $('#productStock').value=p.stock||'';$('#productImage').value='';
 if($('#productCostPrice')) $('#productCostPrice').value=p.costPrice||'';
 if($('#productBarcode')) $('#productBarcode').value=p.barcode||'';
 const im=$('#imagePreview');im.src=p.image||'';im.style.display=p.image?'block':'none';
 $('#productDialog').showModal();
}
window.editProduct=id=>openProduct(db.products.find(p=>p.id===id));
window.deleteProduct=id=>{if(confirm('यह प्रोडक्ट हटाएँ?')){db.products=db.products.filter(p=>p.id!==id);save();renderProducts();}};
function fileToDataURL(file){return new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(r.result);r.onerror=rej;r.readAsDataURL(file);});}
// v7 crop workflow handles product image selection.
$('#saveProduct').onclick=async e=>{
 e.preventDefault();const name=$('#productName').value.trim();if(!name)return alert('प्रोडक्ट का नाम भरें');
 const id=$('#productId').value||crypto.randomUUID();const old=db.products.find(p=>p.id===id)||{};
 let image=window.__parxoCroppedImage||old.image||'';
 const p={id,name,brand:$('#productBrand').value.trim(),category:$('#productCategory').value.trim(),size:$('#productSize').value.trim(),rate:+$('#productRate').value||0,stock:+$('#productStock').value||0,image,
  costPrice: $('#productCostPrice') ? (+$('#productCostPrice').value||0) : (old.costPrice||0),
  barcode: $('#productBarcode') ? $('#productBarcode').value.trim() : (old.barcode||'')};
 const i=db.products.findIndex(x=>x.id===id);if(i>=0)db.products[i]=p;else db.products.push(p);
 if(window.__parxoCroppedImage){
  const scope=window.__parxoImageScope||'product';
  db.products.forEach(x=>{
   if(scope==='single' && x.id===id) x.image=image;
   else if(scope==='product' && x.name===name) x.image=image;
   else if(scope==='brand' && p.brand && x.brand===p.brand) x.image=image;
  });
 }
 window.__parxoCroppedImage='';window.__parxoImageScope='product';
 save();$('#productDialog').close();renderProducts();
};

function fillPickerFilters(){
 const categorySelect=$('#pickerCategoryFilter');
 const brandSelect=$('#pickerBrandFilter');
 if(!categorySelect || !brandSelect) return;

 const selectedCategory=categorySelect.value;
 const selectedBrand=brandSelect.value;

 const categories=[...new Set(db.products.map(p=>(p.category||'').trim()).filter(Boolean))]
   .sort((a,b)=>a.localeCompare(b,'hi'));
 const brands=[...new Set(db.products.map(p=>(p.brand||'').trim()).filter(Boolean))]
   .sort((a,b)=>a.localeCompare(b,'hi'));

 categorySelect.innerHTML='<option value="">सभी कैटेगरी</option>'+
   categories.map(x=>`<option value="${escapeHtml(x)}">${escapeHtml(x)}</option>`).join('');
 brandSelect.innerHTML='<option value="">सभी ब्रांड</option>'+
   brands.map(x=>`<option value="${escapeHtml(x)}">${escapeHtml(x)}</option>`).join('');

 if(categories.includes(selectedCategory)) categorySelect.value=selectedCategory;
 if(brands.includes(selectedBrand)) brandSelect.value=selectedBrand;
}

$('#chooseProduct').onclick=()=>{
 fillPickerFilters();
 renderPicker();
 $('#pickerDialog').showModal();
};

function renderPicker(){
 const q=($('#pickerSearch')?.value||'').trim().toLowerCase();
 const category=$('#pickerCategoryFilter')?.value||'';
 const brand=$('#pickerBrandFilter')?.value||'';

 const rows=db.products.filter(p=>{
   const matchesSearch=!q || JSON.stringify(p).toLowerCase().includes(q);
   const matchesCategory=!category || (p.category||'')===category;
   const matchesBrand=!brand || (p.brand||'')===brand;
   return matchesSearch && matchesCategory && matchesBrand;
 });

 $('#pickerList').innerHTML=rows.length
   ? rows.map(p=>`<div class="item" onclick="addToParcha('${p.id}')"><img class="thumb" src="${p.image||'icon.svg'}"><div class="itemMain"><b>${escapeHtml(p.name)}</b><div class="muted">${escapeHtml(p.brand||'')} | ${escapeHtml(p.category||'')} | साइज ${escapeHtml(p.size||'')} | ₹${p.rate}</div></div></div>`).join('')
   : '<p class="muted">कोई प्रोडक्ट नहीं मिला</p>';
}

$('#pickerSearch').oninput=renderPicker;
$('#pickerCategoryFilter').onchange=renderPicker;
$('#pickerBrandFilter').onchange=renderPicker;
$('#closePickerBtn').onclick=()=>$('#pickerDialog').close();
window.addToParcha=id=>{const p=db.products.find(x=>x.id===id);const ex=parchaItems.find(x=>x.productId===id);if(ex)ex.qty++;else parchaItems.push({productId:id,name:p.name,size:p.size,rate:p.rate,costPrice:p.costPrice||0,qty:1,image:p.image});$('#pickerDialog').close();renderParcha();};
function renderParcha(){
 $('#parchaItems').innerHTML=parchaItems.length?parchaItems.map((x,i)=>`<div class="item"><img class="thumb" src="${x.image||'icon.svg'}"><div class="itemMain"><b>${escapeHtml(x.name)}</b><div class="muted">साइज ${escapeHtml(x.size||'-')} | ₹<input style="width:80px;padding:6px" type="number" value="${x.rate}" onchange="setRate(${i},this.value)"></div></div><div class="qty"><button onclick="qty(${i},-1)">−</button><b>${x.qty}</b><button onclick="qty(${i},1)">+</button><button onclick="removeItem(${i})">✕</button></div></div>`).join(''):'<p class="muted">कोई प्रोडक्ट नहीं चुना</p>';
 $('#grandTotal').textContent='₹'+parchaItems.reduce((a,x)=>a+x.qty*x.rate,0);
}
window.qty=(i,d)=>{parchaItems[i].qty=Math.max(1,parchaItems[i].qty+d);renderParcha();};
window.setRate=(i,v)=>{parchaItems[i].rate=+v||0;renderParcha();};
window.removeItem=i=>{parchaItems.splice(i,1);renderParcha();};

$('#saveParcha').onclick=()=>{
 const name=$('#customerName').value.trim();if(!name)return alert('ग्राहक का नाम भरें');if(!parchaItems.length)return alert('कम से कम एक प्रोडक्ट जोड़ें');
 const total=parchaItems.reduce((a,x)=>a+x.qty*x.rate,0);
 const totalCost=parchaItems.reduce((a,x)=>a+x.qty*(+x.costPrice||0),0);
 const paymentStatus=$('#paymentStatus')?($('#paymentStatus').value||'paid'):'paid';
 let amountPaid= paymentStatus==='udhar' ? (+($('#amountPaid')?$('#amountPaid').value:0)||0) : total;
 if(amountPaid>total) amountPaid=total; if(amountPaid<0) amountPaid=0;
 const amountDue=total-amountPaid;
 const editId=$('#editingBillId')?$('#editingBillId').value:'';
 const now=new Date();
 let number, invoiceNo;
 if(editId){
  const old=db.parchas.find(x=>x.id===editId);
  if(old){
   // Edit se pehle purane items ka stock wapas jod dete hain, phir naye items ka stock ghatate hain.
   for(const oi of old.items){const prod=db.products.find(x=>x.id===oi.productId);if(prod)prod.stock=(+prod.stock||0)+oi.qty;}
   number=old.number; invoiceNo=old.invoiceNo;
  }
 }
 if(!number) number=Date.now().toString().slice(-6);
 if(!invoiceNo) invoiceNo=nextInvoiceNo();
 const p={
  id:editId||crypto.randomUUID(), number, invoiceNo,
  date:now.toLocaleString('hi-IN'), ts:now.getTime(), dateApprox:false,
  customerName:name, mobile:$('#customerMobile').value.trim(), note:$('#parchaNote').value.trim(),
  items:structuredClone(parchaItems), total, totalCost, profit: total-totalCost,
  paymentStatus, amountPaid, amountDue
 };
 if(editId) db.parchas=db.parchas.map(x=>x.id===editId?p:x); else db.parchas.unshift(p);
 const lowStockWarnings=[]; const outOfStockWarnings=[];
 for(const item of p.items){
  const prod=db.products.find(x=>x.id===item.productId);
  if(prod){
   prod.stock=(+prod.stock||0)-item.qty;
   if(prod.stock<=0) outOfStockWarnings.push(`${prod.name} (साइज ${prod.size||'-'})`);
   else if(prod.stock<=LOW_STOCK_THRESHOLD) lowStockWarnings.push(`${prod.name} (साइज ${prod.size||'-'}) — बचा स्टॉक: ${prod.stock}`);
  }
 }
 recalcCustomerLedger();
 const wasEdit=!!editId;
 resetParchaForm(); save(); renderProducts(); renderHistory();
 let msg = wasEdit? `पर्चा #${invoiceNo} अपडेट हो गया` : `पर्चा #${invoiceNo} सेव हो गया`;
 if(outOfStockWarnings.length) msg+='\n\n❌ स्टॉक खत्म हो गया:\n'+outOfStockWarnings.join('\n');
 if(lowStockWarnings.length) msg+='\n\n⚠️ स्टॉक कम है:\n'+lowStockWarnings.join('\n');
 alert(msg);
 showPage('history');
};
window.editBillStart=id=>{
 const p=db.parchas.find(x=>x.id===id); if(!p) return;
 parchaItems=structuredClone(p.items);
 $('#customerName').value=p.customerName; $('#customerMobile').value=p.mobile||'';
 $('#parchaNote').value=p.note||'';
 if($('#editingBillId'))$('#editingBillId').value=p.id;
 if($('#paymentStatus'))$('#paymentStatus').value=p.paymentStatus||'paid';
 if($('#amountPaid'))$('#amountPaid').value=p.amountPaid||'';
 if($('#saveParcha'))$('#saveParcha').textContent='पर्चा अपडेट करें';
 renderParcha();
 suppressParchaReset=true;
 showPage('newParcha');
};

function renderHistory(){
 const q=$('#historySearch').value.toLowerCase();
 const rows=db.parchas.filter(p=>(p.customerName+' '+p.mobile+' '+p.number+' '+(p.invoiceNo||'')).toLowerCase().includes(q));
 $('#historyList').innerHTML=rows.length?rows.map(p=>{
  const udharBadge = p.paymentStatus==='udhar' ? ` <span class="badge low">उधार ₹${p.amountDue}</span>` : '';
  return `<div class="item"><div class="itemMain"><b>${escapeHtml(p.customerName)} — ₹${p.total}</b>${udharBadge}<div class="muted">${p.date} | पर्चा #${escapeHtml(p.invoiceNo||p.number)} | ${escapeHtml(p.mobile||'')}</div></div><div class="actions"><button onclick="openBill('${p.id}')">खोलें</button><button onclick="editBillStart('${p.id}')">बदलें</button><button onclick="deleteBill('${p.id}')">हटाएँ</button></div></div>`;
 }).join(''):'<p class="muted">कोई पर्चा नहीं है।</p>';
}
$('#historySearch').oninput=renderHistory;
window.deleteBill=id=>{
 if(!confirm('यह पर्चा हटाएँ? हटाने पर स्टॉक वापस जुड़ जाएगा।'))return;
 const p=db.parchas.find(x=>x.id===id);
 if(p){
  for(const item of p.items){
   const prod=db.products.find(x=>x.id===item.productId);
   if(prod) prod.stock=(+prod.stock||0)+item.qty;
  }
 }
 db.parchas=db.parchas.filter(p=>p.id!==id);
 recalcCustomerLedger();
 save();renderHistory();renderProducts();
};
window.openBill=id=>{
 const p=db.parchas.find(x=>x.id===id);currentBill=p;
 const udharLine = p.paymentStatus==='udhar' ? `<p><b>भुगतान:</b> उधार — जमा ₹${p.amountPaid}, बकाया ₹${p.amountDue}</p>` : '<p><b>भुगतान:</b> पूरा भुगतान</p>';
 $('#billContent').innerHTML=`<h2>PARXO पर्चा</h2><p><b>इनवॉइस:</b> #${escapeHtml(p.invoiceNo||p.number)}<br><b>दिनांक:</b> ${p.date}<br><b>ग्राहक:</b> ${escapeHtml(p.customerName)}<br><b>मोबाइल:</b> ${escapeHtml(p.mobile||'-')}</p><table class="billTable"><tr><th>सामान</th><th>मात्रा</th><th>रेट</th><th>रकम</th></tr>${p.items.map(x=>`<tr><td>${escapeHtml(x.name)} ${escapeHtml(x.size||'')}</td><td>${x.qty}</td><td>₹${x.rate}</td><td>₹${x.qty*x.rate}</td></tr>`).join('')}</table><h3>कुल ₹${p.total}</h3>${udharLine}<p>${escapeHtml(p.note||'')}</p>`;
 $('#billDialog').showModal();
};
function billTextSummary(bill){
 let t=`PARXO पर्चा #${bill.invoiceNo||bill.number}\nग्राहक: ${bill.customerName}\n${bill.items.map(x=>`${x.name} ${x.size||''} × ${x.qty} = ₹${x.qty*x.rate}`).join('\n')}\nकुल: ₹${bill.total}`;
 if(bill.paymentStatus==='udhar') t+=`\nजमा: ₹${bill.amountPaid} | बकाया: ₹${bill.amountDue}`;
 return t;
}
$('#shareBill').onclick=async()=>{
 if(!currentBill)return;
 const text=billTextSummary(currentBill);
 if(navigator.share)await navigator.share({title:'PARXO पर्चा',text});else{await navigator.clipboard.writeText(text);alert('पर्चा कॉपी हो गया');}
};
window.shareBillWhatsapp=()=>{
 if(!currentBill)return;
 window.open('https://wa.me/?text='+encodeURIComponent(billTextSummary(currentBill)),'_blank');
};
window.printBill=()=>{ window.print(); };
window.downloadBillPdf=()=>{
 if(!currentBill)return;
 if(!window.jspdf){alert('PDF सुविधा के लिए इंटरनेट चाहिए (पहली बार लोड होने पर) — कृपया इंटरनेट ऑन करके दोबारा कोशिश करें।');return;}
 const {jsPDF}=window.jspdf;
 const doc=new jsPDF({unit:'pt',format:'a5'});
 const bill=currentBill;
 doc.setFontSize(16); doc.text('PARXO पर्चा',40,40);
 doc.setFontSize(10);
 doc.text(`Invoice: ${bill.invoiceNo||bill.number}`,40,60);
 doc.text(`Date: ${bill.date}`,40,75);
 doc.text(`Customer: ${bill.customerName}`,40,90);
 doc.text(`Mobile: ${bill.mobile||'-'}`,40,105);
 let y=130;
 doc.setFont(undefined,'bold'); doc.text('Item',40,y); doc.text('Qty',260,y); doc.text('Rate',310,y); doc.text('Amount',370,y);
 doc.setFont(undefined,'normal'); y+=15;
 bill.items.forEach(it=>{
  doc.text((`${it.name} ${it.size||''}`).substring(0,35),40,y);
  doc.text(String(it.qty),260,y); doc.text(String(it.rate),310,y); doc.text(String(it.qty*it.rate),370,y);
  y+=15;
  if(y>760){doc.addPage();y=40;}
 });
 y+=10; doc.setFont(undefined,'bold'); doc.text(`Total: Rs.${bill.total}`,40,y);
 if(bill.paymentStatus==='udhar'){ y+=15; doc.text(`Paid: Rs.${bill.amountPaid} | Due: Rs.${bill.amountDue}`,40,y); }
 doc.save(`PARXO-${bill.invoiceNo||bill.number}.pdf`);
};

$('#restoreSeed').onclick=()=>{const n=mergeSeedProducts();save();renderProducts();alert(n?`${n} आइटम जोड़ दिए गए`:'सभी डेमो आइटम पहले से मौजूद हैं');};
$('#exportData').onclick=()=>{const blob=new Blob([JSON.stringify(db,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='PARXO-backup.json';a.click();};
$('#importData').onchange=async e=>{try{const t=await e.target.files[0].text();const x=JSON.parse(t);if(!x.products||!x.parchas)throw 0;db=x;migrateCatalogAndDP();mergeSeedProducts();migrateProductImages();migrateSchema();save();renderProducts();renderHistory();alert('बैकअप वापस आ गया');}catch{alert('यह सही PARXO बैकअप नहीं है');}};
$('#clearAll').onclick=()=>{if(confirm('सारा डेटा मिटेगा। बाद में सेटिंग से दुकान के डेमो आइटम दोबारा जोड़े जा सकते हैं।')){db={products:[],parchas:[],customers:[],settings:{pin:'',invoiceSeq:0,invoiceYear:new Date().getFullYear()}};sessionStorage.removeItem('parxo_unlocked');save();renderProducts();renderHistory();}};
// ===================== Excel Export (SheetJS) =====================
window.exportProductsExcel=()=>{
 if(!window.XLSX){alert('Excel सुविधा के लिए इंटरनेट चाहिए। कृपया इंटरनेट ऑन करके दोबारा कोशिश करें।');return;}
 const rows=db.products.map(p=>({Name:p.name,Brand:p.brand,Category:p.category,Size:p.size,Rate:p.rate,CostPrice:p.costPrice||0,Stock:p.stock,Barcode:p.barcode||''}));
 const ws=XLSX.utils.json_to_sheet(rows); const wb=XLSX.utils.book_new();
 XLSX.utils.book_append_sheet(wb,ws,'Products'); XLSX.writeFile(wb,'PARXO-Products.xlsx');
};
window.exportSalesExcel=()=>{
 if(!window.XLSX){alert('Excel सुविधा के लिए इंटरनेट चाहिए। कृपया इंटरनेट ऑन करके दोबारा कोशिश करें।');return;}
 const rows=db.parchas.map(p=>({Invoice:p.invoiceNo||p.number,Date:p.date,Customer:p.customerName,Mobile:p.mobile,Total:p.total,Cost:p.totalCost||0,Profit:p.profit||0,PaymentStatus:p.paymentStatus,Paid:p.amountPaid,Due:p.amountDue}));
 const ws=XLSX.utils.json_to_sheet(rows); const wb=XLSX.utils.book_new();
 XLSX.utils.book_append_sheet(wb,ws,'Sales'); XLSX.writeFile(wb,'PARXO-Sales.xlsx');
};
window.exportCustomersExcel=()=>{
 if(!window.XLSX){alert('Excel सुविधा के लिए इंटरनेट चाहिए। कृपया इंटरनेट ऑन करके दोबारा कोशिश करें।');return;}
 recalcCustomerLedger();
 const rows=(db.customers||[]).map(cst=>({Name:cst.name,Mobile:cst.mobile,TotalBilled:cst.totalBilled,TotalDue:cst.totalDue}));
 const ws=XLSX.utils.json_to_sheet(rows); const wb=XLSX.utils.book_new();
 XLSX.utils.book_append_sheet(wb,ws,'Customers'); XLSX.writeFile(wb,'PARXO-Customers.xlsx');
};

// ===================== Sales Reports + hand-drawn bar chart (no external chart lib, works offline) =====================
function groupSales(period){
 const buckets={};
 for(const p of db.parchas){
  if(!p.ts) continue; // purane bills me exact date nahi hai, isliye chart me shamil nahi (history list me phir bhi dikhte hain)
  const d=new Date(p.ts);
  let key;
  if(period==='day') key=d.toISOString().slice(0,10);
  else if(period==='week'){ const onejan=new Date(d.getFullYear(),0,1); const week=Math.ceil((((d-onejan)/86400000)+onejan.getDay()+1)/7); key=`${d.getFullYear()}-W${week}`; }
  else if(period==='month') key=d.toISOString().slice(0,7);
  else key=String(d.getFullYear());
  buckets[key]=(buckets[key]||0)+(+p.total||0);
 }
 return buckets;
}
function drawBarChart(canvas,dataObj){
 const ctx=canvas.getContext('2d');
 const keys=Object.keys(dataObj).sort().slice(-12);
 const vals=keys.map(k=>dataObj[k]);
 const max=Math.max(1,...vals);
 const w=canvas.width=canvas.clientWidth||300; const h=canvas.height=220;
 ctx.clearRect(0,0,w,h);
 if(!keys.length){ ctx.fillStyle='#6b7a72'; ctx.font='13px sans-serif'; ctx.fillText('इस अवधि में कोई बिक्री डेटा नहीं', 10, 30); return; }
 const barW=w/keys.length;
 keys.forEach((k,i)=>{
  const barH=(vals[i]/max)*(h-40);
  ctx.fillStyle='#17884a';
  ctx.fillRect(i*barW+4, h-barH-20, Math.max(4,barW-8), barH);
  ctx.fillStyle='#1c2b23'; ctx.font='9px sans-serif'; ctx.textAlign='left';
  ctx.fillText(k.slice(-5), i*barW+2, h-6);
  ctx.fillText('₹'+vals[i], i*barW+2, Math.max(10,h-barH-24));
 });
}
window.showReport=(period)=>{
 const data=groupSales(period);
 const titleMap={day:'रोज़ाना',week:'साप्ताहिक',month:'मासिक',year:'सालाना'};
 $('#reportTitle').textContent=titleMap[period]+' बिक्री रिपोर्ट';
 drawBarChart($('#reportChart'),data);
 const total=Object.values(data).reduce((a,b)=>a+b,0);
 const oldCount=db.parchas.filter(p=>!p.ts).length;
 $('#reportSummary').innerHTML=`चार्ट में दिख रही कुल बिक्री: ₹${total}`+(oldCount?`<br><span class="muted">${oldCount} पुराने पर्चे exact तारीख उपलब्ध न होने के कारण इस चार्ट में शामिल नहीं हैं (लेकिन History में मौजूद हैं)।</span>`:'');
 $('#reportsDialog').showModal();
};

// ===================== Profit / Loss Report =====================
window.showProfitReport=()=>{
 const totalSale=db.parchas.reduce((a,p)=>a+(+p.total||0),0);
 const totalCost=db.parchas.reduce((a,p)=>a+(+p.totalCost||0),0);
 const totalProfit=totalSale-totalCost;
 const noCostCount=db.products.filter(p=>!p.costPrice).length;
 $('#profitContent').innerHTML=`<p>कुल बिक्री (Sale): ₹${totalSale}</p><p>कुल लागत (Cost/Purchase Price): ₹${totalCost}</p><p><b>कुल मुनाफ़ा (Profit): ₹${totalProfit}</b></p>`+
  (noCostCount?`<p class="muted">⚠️ ${noCostCount} products में अभी Cost Price (खरीद रेट) नहीं भरा है — उनका profit ₹0 माना जा रहा है। सटीक रिपोर्ट के लिए प्रोडक्ट फॉर्म में Cost Price भरें।</p>`:'');
 $('#profitDialog').showModal();
};

// ===================== Customer Credit / उधार Management =====================
function renderUdhar(){
 recalcCustomerLedger(); save();
 const rows=(db.customers||[]).filter(cst=>cst.totalDue>0.001);
 $('#udharList').innerHTML=rows.length? rows.map(cst=>`<div class="item"><div class="itemMain"><b>${escapeHtml(cst.name)}</b><div class="muted">${escapeHtml(cst.mobile||'')} | बकाया: ₹${cst.totalDue.toFixed(0)} | अब तक जमा: ₹${(cst.totalPaidAtBill+cst.extraPaid).toFixed(0)}</div></div><div class="actions"><button onclick="recordPayment('${cst.key}')">भुगतान दर्ज करें</button><button onclick="showPaymentHistory('${cst.key}')">इतिहास</button></div></div>`).join('') : '<p class="muted">कोई उधार बकाया नहीं है 🎉</p>';
}
window.openUdhar=()=>{ renderUdhar(); $('#udharDialog').showModal(); };
window.recordPayment=(key)=>{
 const raw=prompt('कितनी राशि जमा हुई? (₹)');
 if(raw===null) return;
 const amt=+raw;
 if(!amt||amt<=0){ alert('सही राशि डालें'); return; }
 const cst=db.customers.find(x=>x.key===key); if(!cst) return;
 cst.payments=cst.payments||[];
 cst.payments.push({date:new Date().toLocaleString('hi-IN'),amount:amt});
 recalcCustomerLedger(); save(); renderUdhar();
};
window.showPaymentHistory=(key)=>{
 const cst=db.customers.find(x=>x.key===key); if(!cst) return;
 const list=(cst.payments||[]).map(pm=>`${pm.date} — ₹${pm.amount}`).join('\n')||'अभी कोई अतिरिक्त भुगतान दर्ज नहीं है।';
 alert(`${cst.name} का भुगतान इतिहास:\n\n${list}`);
};

// ===================== App Lock (PIN) — DETERRENT ONLY, NOT REAL SECURITY =====================
// Yeh sirf casual dekhne se app ko chhupata hai. Chunki yeh client-side JS/localStorage app hai,
// koi bhi browser devtools ya localStorage dekh kar isse bypass kar sakta hai. Sanvedansheel/legal
// data ke liye is par bharosa na karein.
function isLocked(){ return db.settings && db.settings.pin && sessionStorage.getItem('parxo_unlocked')!=='1'; }
function showLockScreen(){ if($('#lockOverlay')) $('#lockOverlay').style.display='flex'; }
function hideLockScreen(){ if($('#lockOverlay')) $('#lockOverlay').style.display='none'; }
if($('#unlockBtn')) $('#unlockBtn').onclick=()=>{
 const val=$('#lockPinInput').value;
 if(val && val===db.settings.pin){ sessionStorage.setItem('parxo_unlocked','1'); hideLockScreen(); $('#lockPinInput').value=''; }
 else alert('गलत PIN');
};
if($('#setPinBtn')) $('#setPinBtn').onclick=()=>{
 const p1=prompt('नया PIN डालें (खाली छोड़कर OK दबाने से App Lock हट जाएगा):');
 if(p1===null) return;
 db.settings.pin=p1.trim(); save();
 alert(p1.trim()? 'App Lock चालू हो गया। (ध्यान दें: यह सिर्फ आसान झलक रोकता है, असली security नहीं है।)':'App Lock हटा दिया गया।');
};
if(isLocked()) showLockScreen();

// ===================== Barcode / QR Scanner (camera + jsQR) =====================
let scannerStream=null, scannerRAF=null, scannerTarget='search';
window.openScanner=(target)=>{
 scannerTarget=target||'search';
 if(!$('#scannerDialog')){ alert('स्कैनर उपलब्ध नहीं है।'); return; }
 if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){ alert('इस डिवाइस/ब्राउज़र में कैमरा एक्सेस उपलब्ध नहीं है।'); return; }
 $('#scannerDialog').showModal();
 navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'}}).then(stream=>{
  scannerStream=stream; const video=$('#scannerVideo'); video.srcObject=stream; video.play(); scanLoop();
 }).catch(()=>{ alert('कैमरा एक्सेस नहीं मिला। कृपया कैमरा की permission दें।'); $('#scannerDialog').close(); });
};
function scanLoop(){
 const video=$('#scannerVideo'), canvas=$('#scannerCanvas');
 if(video && video.readyState===video.HAVE_ENOUGH_DATA){
  canvas.width=video.videoWidth; canvas.height=video.videoHeight;
  const ctx=canvas.getContext('2d'); ctx.drawImage(video,0,0,canvas.width,canvas.height);
  if(window.jsQR){
   const img=ctx.getImageData(0,0,canvas.width,canvas.height);
   const code=window.jsQR(img.data,img.width,img.height);
   if(code && code.data){ onScanSuccess(code.data); return; }
  }
 }
 scannerRAF=requestAnimationFrame(scanLoop);
}
window.stopScanner=()=>{
 if(scannerRAF) cancelAnimationFrame(scannerRAF);
 if(scannerStream) scannerStream.getTracks().forEach(t=>t.stop());
 scannerStream=null;
 if($('#scannerDialog')) $('#scannerDialog').close();
};
function onScanSuccess(data){
 window.stopScanner();
 if(scannerTarget==='product'){ if($('#productBarcode')) $('#productBarcode').value=data; }
 else{
  const prod=db.products.find(p=>p.barcode && p.barcode===data);
  if(prod){ window.addToParcha(prod.id); }
  else{ if($('#pickerSearch')){ $('#pickerSearch').value=data; renderPicker(); } alert('इस बारकोड से कोई प्रोडक्ट नहीं मिला — नाम से खोज दिखा रहे हैं।'); }
 }
}

// ===================== Auto-Backup restore UI =====================
window.listAutoBackups=()=>{
 const backups=JSON.parse(localStorage.getItem('parxo_backups')||'[]');
 if(!$('#autoBackupList')) return;
 $('#autoBackupList').innerHTML=backups.length? backups.slice().reverse().map((b,i)=>{
  const realIdx=backups.length-1-i;
  return `<div class="item"><div class="itemMain">${new Date(b.ts).toLocaleString('hi-IN')}</div><div class="actions"><button onclick="restoreAutoBackup(${realIdx})">Restore करें</button></div></div>`;
 }).join(''):'<p class="muted">अभी कोई local auto-backup नहीं बना (हर ~10 मिनट में अपने आप बनता है)।</p>';
 $('#autoBackupDialog').showModal();
};
window.restoreAutoBackup=(idx)=>{
 if(!confirm('यह backup restore करने पर मौजूदा डेटा उससे बदल जाएगा। जारी रखें?')) return;
 const backups=JSON.parse(localStorage.getItem('parxo_backups')||'[]');
 const b=backups[idx]; if(!b) return;
 db=JSON.parse(b.data);
 migrateCatalogAndDP();mergeSeedProducts();migrateProductImages();migrateSchema();
 save(); renderProducts(); renderHistory();
 alert('Backup restore हो गया');
 $('#autoBackupDialog').close();
};

window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;$('#installBtn').hidden=false;});
$('#installBtn').onclick=async()=>{if(deferredPrompt){deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$('#installBtn').hidden=true;}};
if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js');
updateStats();renderParcha();