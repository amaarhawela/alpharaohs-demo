/* Default product data. In production this comes from the database (Cloudflare D1).
   In the demo, edits made in admin.html are stored in the browser (localStorage) and override this list. */
window.PH_DEFAULT_PRODUCTS = [
  { id: 'golden-sesame', cat: 'seeds', img: 'assets/img/golden-sesame.webp', active: true, showPrice: false, price: null, currency: 'USD',
    ar: { name: 'سمسم ذهبي مصري', desc: 'سمسم مصري بلون ذهبي، يُستخدم في الطحينة والحلويات والمخبوزات.' },
    en: { name: 'Egyptian Golden Sesame', desc: 'Golden-toned Egyptian sesame seeds, used for tahini, sweets and baked goods.' } },
  { id: 'sesame', cat: 'seeds', img: 'assets/img/sesame.webp', active: true, showPrice: false, price: null, currency: 'USD',
    ar: { name: 'سمسم مصري', desc: 'سمسم مصري معبأ في شكائر للتصدير.' },
    en: { name: 'Egyptian Sesame', desc: 'Egyptian sesame seeds, packed in sacks for export.' } },
  { id: 'cumin', cat: 'spices', img: 'assets/img/cumin.webp', active: true, showPrice: false, price: null, currency: 'USD',
    ar: { name: 'كمون مصري', desc: 'كمون مصري من المحاصيل الزراعية المصرية المخصصة للتصدير.' },
    en: { name: 'Egyptian Cumin', desc: 'Egyptian cumin from locally grown crops, prepared for export.' } },
  { id: 'clover', cat: 'seeds', img: 'assets/img/clover.webp', active: true, showPrice: false, price: null, currency: 'USD',
    ar: { name: 'بذور البرسيم', desc: 'بذور برسيم مصرية تُصدَّر إلى الأسواق العالمية.' },
    en: { name: 'Clover Seeds', desc: 'Egyptian clover seeds exported to international markets.' } },
  { id: 'white-beans', cat: 'legumes', img: 'assets/img/white-beans.webp', active: true, showPrice: false, price: null, currency: 'USD',
    ar: { name: 'فاصوليا بيضاء', desc: 'فاصوليا بيضاء مصرية للتصدير.' },
    en: { name: 'White Beans', desc: 'Egyptian white beans for export.' } },
  { id: 'pepper', cat: 'spices', img: 'assets/img/pepper.webp', active: true, showPrice: false, price: null, currency: 'USD',
    ar: { name: 'فلفل أسود حصى', desc: 'فلفل أسود حبوب كاملة (حصى) من منتجات الاستيراد.' },
    en: { name: 'Pebble Black Pepper', desc: 'Whole black peppercorns, part of our imported range.' } },
  { id: 'coconut', cat: 'other', img: 'assets/img/coconut.webp', active: true, showPrice: false, price: null, currency: 'USD',
    ar: { name: 'جوز الهند مبشور خشن عالي الدهون', desc: 'جوز هند مبشور خشن عالي الدهون، يُستخدم في الحلويات والمخبوزات.' },
    en: { name: 'Coarsely Grated Coconut (High Fat)', desc: 'Coarsely grated high-fat coconut, used in confectionery and baking.' } },
  { id: 'lupine', cat: 'legumes', img: 'assets/img/lupine.webp', active: true, showPrice: false, price: null, currency: 'USD',
    ar: { name: 'ترمس حلو', desc: 'ترمس حلو معبأ في شكائر.' },
    en: { name: 'Sweet Lupine', desc: 'Sweet lupine beans packed in sacks.' } },
  { id: 'indian-sesame', cat: 'seeds', img: 'assets/img/indian-sesame.webp', active: true, showPrice: false, price: null, currency: 'USD',
    ar: { name: 'سمسم هندي مقشور', desc: 'سمسم هندي مقشور من منتجات الاستيراد.' },
    en: { name: 'Indian Sesame, Peeled', desc: 'Peeled Indian sesame seeds, part of our imported range.' } },
  { id: 'chickpeas', cat: 'legumes', img: 'assets/img/chickpeas.webp', active: true, showPrice: false, price: null, currency: 'USD',
    ar: { name: 'حمص كندي', desc: 'حمص كندي مفحوص ومعبأ في شكائر 25 كجم.' },
    en: { name: 'Canadian Chickpeas', desc: 'Canadian chickpeas, screened and packed in 25 kg sacks.' } },
  { id: 'basmati', cat: 'rice', img: 'assets/img/basmati.webp', active: true, showPrice: false, price: null, currency: 'USD',
    ar: { name: 'أرز بسمتي ذهبي سيلا', desc: 'أرز بسمتي ذهبي سيلا، عبوة 10 كجم.' },
    en: { name: 'Golden Sella Basmati Rice', desc: 'Golden sella basmati rice, 10 kg packs.' } }
];
window.PH_CATS = { seeds:{ar:'بذور',en:'Seeds'}, legumes:{ar:'بقوليات',en:'Legumes'}, spices:{ar:'توابل',en:'Spices'}, rice:{ar:'أرز',en:'Rice'}, other:{ar:'أخرى',en:'Other'} };
window.PH_STORE_KEY = 'ph_products_v1';
window.phLoadProducts = function () {
  try { var s = localStorage.getItem(window.PH_STORE_KEY); if (s) return JSON.parse(s); } catch (e) {}
  return JSON.parse(JSON.stringify(window.PH_DEFAULT_PRODUCTS));
};
window.PH_CONTACT = { phone: '+201022289315', phoneDisplay: '+20 10 222 89 315', email: 'fara3na.co@gmail.com',
  whatsapp: 'https://wa.me/201022289315', facebook: 'https://www.facebook.com/alpharaohs.co',
  mapQuery: 'Elshafei tower, Nabaroh, Dakahlia, Egypt' };
