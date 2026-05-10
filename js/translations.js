/**
 * translations.js — Read to Lead Bookstore
 * Multilingual support: English, Dari (دری), Pashto (پښتو)
 */

const translations = {
  en: {
    // Navbar
    navHome: "Home",
    navCollection: "Collection",
    navTopSelling: "Top Selling",
    navAbout: "About",
    navContact: "Contact",
    navCart: "Cart",
    navSearchPlaceholder: "Search for books, authors…",
    navDarkMode: "Dark Mode",
    navLightMode: "Light Mode",

    // Hero
    heroFeaturedLabel: "Featured Book of the Month",
    heroAuthorPrefix: "by",
    heroGenre: "Self-Help / Productivity",
    heroReviews: "12,400 reviews",
    heroDescription: "A groundbreaking guide to building good habits and breaking bad ones. Tiny changes compound into remarkable results.",
    heroAddToCart: "Add to Cart",
    heroBuyNow: "Buy Now",

    // Sections
    sectionTopSelling: "Top Selling",
    sectionViewAll: "View all →",
    sectionEditorsPicks: "Editors' Picks",
    sectionCategories: "Browse Collection",

    // Filter tabs
    filterAll: "All",
    filterFiction: "Fiction",
    filterNonFiction: "Non-Fiction",
    filterDesign: "Design",
    filterBusiness: "Business",
    filterBiography: "Biography",

    // Search
    searchPlaceholder: "Search books or authors…",
    noResults: "No books found",
    noResultsSub: "Try a different search term or category.",

    // Product card
    addToCart: "Add to Cart",
    viewDetails: "Details",

    // Cart
    cartTitle: "Your Cart",
    cartEmpty: "Your cart is empty",
    cartEmptySub: "Browse our collection and add some books!",
    cartBrowse: "Browse Books",
    continueShopping: "← Continue Shopping",
    proceedCheckout: "Proceed to Checkout",
    cartSubtotal: "Subtotal",
    cartShipping: "Shipping",
    cartTax: "Tax (8%)",
    cartTotal: "Total",
    cartFreeShipping: "🎉 You qualify for free shipping!",
    cartShippingNote: "more for free shipping",
    cartAdd: "more for free shipping",
    removeItem: "Remove",

    // Checkout form
    checkoutTitle: "Checkout",
    backToCart: "← Back to Cart",
    personalInfo: "Personal Information",
    shippingInfo: "Shipping Address",
    paymentInfo: "Payment Details (Test)",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    phone: "Phone Number",
    address: "Street Address",
    city: "City",
    country: "Country",
    zipCode: "ZIP / Postal Code",
    cardNumber: "Card Number",
    expiryDate: "Expiry (MM/YY)",
    cvv: "CVV",
    sameAsBilling: "Billing address same as shipping",
    placeOrder: "Place Order",
    orderSummary: "Order Summary",
    selectCountry: "Select country…",

    // About
    aboutHeroTitle: "Our Story",
    aboutHeroSub: "Bringing the best books to curious minds since 2023.",
    aboutMission: "Our Mission",
    aboutMissionText: "We believe every book has the power to change a life. Our mission is to make quality reading accessible, affordable, and inspiring for everyone.",
    aboutWhyBooks: "Why Books Matter",
    aboutWhyBooksText: "Books are the foundation of knowledge, empathy, and growth. We carefully select titles that challenge and inspire.",
    aboutCuration: "Our Curation Process",
    aboutCurationText: "Every book in our store is reviewed by our editorial team. We focus on quality, relevance, and impact.",
    aboutCommunity: "Our Community",
    aboutCommunityText: "Join 10,000+ readers who trust Read to Lead for their next great read and lifelong learning journey.",
    aboutMilestones: "Our Journey",
    aboutTeam: "Meet the Team",
    tableTitle: "Our Collection by Numbers",
    tableCategory: "Category",
    tableBooks: "Books",
    tableAuthors: "Authors",
    tableAvgRating: "Avg. Rating",

    // Contact
    contactTitle: "Get in Touch",
    contactSubtitle: "We'd love to hear from you. Send us a message and we'll respond within 24 hours.",
    contactFullName: "Full Name",
    contactEmail: "Email Address",
    contactSubject: "Subject",
    contactMessage: "Message",
    contactSubmit: "Send Message",
    contactSuccessTitle: "Message Sent! ✓",
    contactSuccessText: "Thank you for reaching out. We'll get back to you within 24 hours.",
    contactAddress: "Book Street, Kabul, Afghanistan",
    contactEmailAddr: "shayestahaqjo@gmail.com",
    contactPhone: "+93 767 457 442",
    contactHours: "Mon – Fri: 9am – 6pm",

    // Footer
    footerTagline: "Curated books for curious minds. Grow your knowledge, one page at a time.",
    footerHome: "Home",
    footerShopBy: "Shop By",
    footerSupport: "Support",
    footerContact: "Get in Touch",
    footerCopyright: "© 2026 Read to Lead Bookstore. All rights reserved.",
    footerCredit: "Crafted with ♥ by Shayesta for book lovers",
    footerFAQ: "FAQ",
    footerShipping: "Shipping Info",
    footerReturns: "Returns",
    footerTrack: "Track Order",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Use",
    footerLanguage: "Language",
    footerCurrency: "Currency",

    // Validation errors
    errRequired: "This field is required.",
    errEmail: "Please enter a valid email address.",
    errPhone: "Please enter a valid phone number.",
    errMinLength: "Must be at least {min} characters.",
    errCard: "Card number must be exactly 16 digits.",
    errExpiry: "Please enter a valid future expiry date (MM/YY).",
    errCVV: "CVV must be exactly 3 digits.",
    errZip: "Please enter a valid ZIP/postal code.",

    // Modal
    orderConfirmed: "Order Confirmed! 🎉",
    orderNumber: "Order #",
    orderThankYou: "Thank you for shopping with Read to Lead! A confirmation has been noted. 📚",
    orderBook: "Book",
    orderQty: "Qty",
    orderPrice: "Price",
    closeModal: "Close",
    continueBrowsing: "Continue Shopping",

    // Product detail modal
    inStock: "In Stock",
    reviews: "reviews",
  },

  // ===== DARI (دری) =====
  fa: {
    navHome: "خانه",
    navCollection: "مجموعه",
    navTopSelling: "پرفروش‌ترین",
    navAbout: "درباره ما",
    navContact: "تماس",
    navCart: "سبد خرید",
    navSearchPlaceholder: "جستجوی کتاب یا نویسنده…",
    navDarkMode: "حالت تاریک",
    navLightMode: "حالت روشن",

    heroFeaturedLabel: "کتاب ویژه ماه",
    heroAuthorPrefix: "نوشته",
    heroGenre: "خودیاری / بهره‌وری",
    heroReviews: "۱۲٬۴۰۰ نظر",
    heroDescription: "راهنمایی اساسی برای ایجاد عادات خوب و ترک عادات بد. تغییرات کوچک به نتایج شگفت‌انگیز تبدیل می‌شوند.",
    heroAddToCart: "افزودن به سبد",
    heroBuyNow: "همین حالا بخر",

    sectionTopSelling: "پرفروش‌ترین",
    sectionViewAll: "مشاهده همه →",
    sectionEditorsPicks: "انتخاب ویراستاران",
    sectionCategories: "مرور مجموعه",

    filterAll: "همه",
    filterFiction: "داستانی",
    filterNonFiction: "غیرداستانی",
    filterDesign: "طراحی",
    filterBusiness: "تجارت",
    filterBiography: "زندگینامه",

    searchPlaceholder: "جستجوی کتاب یا نویسنده…",
    noResults: "کتابی یافت نشد",
    noResultsSub: "عبارت جستجو یا دسته‌بندی دیگری امتحان کنید.",

    addToCart: "افزودن به سبد",
    viewDetails: "جزئیات",

    cartTitle: "سبد خرید",
    cartEmpty: "سبد خرید شما خالی است",
    cartEmptySub: "مجموعه ما را ببینید و کتاب اضافه کنید!",
    cartBrowse: "مرور کتاب‌ها",
    continueShopping: "← ادامه خرید",
    proceedCheckout: "ادامه به پرداخت",
    cartSubtotal: "جمع جزء",
    cartShipping: "ارسال",
    cartTax: "مالیات (۸٪)",
    cartTotal: "مجموع",
    cartFreeShipping: "🎉 ارسال رایگان برای شما!",
    cartShippingNote: "برای ارسال رایگان",
    removeItem: "حذف",

    checkoutTitle: "پرداخت",
    backToCart: "← بازگشت به سبد",
    personalInfo: "اطلاعات شخصی",
    shippingInfo: "آدرس ارسال",
    paymentInfo: "اطلاعات پرداخت (آزمایشی)",
    firstName: "نام",
    lastName: "نام خانوادگی",
    email: "آدرس ایمیل",
    phone: "شماره تلفن",
    address: "آدرس خیابان",
    city: "شهر",
    country: "کشور",
    zipCode: "کد پستی",
    cardNumber: "شماره کارت",
    expiryDate: "انقضا (ماه/سال)",
    cvv: "CVV",
    sameAsBilling: "آدرس صدورصورت‌حساب مشابه آدرس ارسال",
    placeOrder: "ثبت سفارش",
    orderSummary: "خلاصه سفارش",
    selectCountry: "کشور را انتخاب کنید…",

    aboutHeroTitle: "داستان ما",
    aboutHeroSub: "ارائه بهترین کتاب‌ها به ذهن‌های کنجکاو از سال ۱۴۰۲.",
    aboutMission: "مأموریت ما",
    aboutMissionText: "ما معتقدیم هر کتاب می‌تواند زندگی را تغییر دهد. هدف ما دسترس‌پذیر کردن مطالعه باکیفیت است.",
    aboutWhyBooks: "چرا کتاب مهم است",
    aboutWhyBooksText: "کتاب‌ها پایه دانش، همدلی و رشد هستند. ما عناوینی را انتخاب می‌کنیم که چالش‌برانگیز و الهام‌بخش باشند.",
    aboutCuration: "فرآیند انتخاب ما",
    aboutCurationText: "هر کتاب در فروشگاه ما توسط تیم تحریریه بررسی می‌شود. ما بر کیفیت، مرتبط بودن و تأثیر تمرکز می‌کنیم.",
    aboutCommunity: "جامعه ما",
    aboutCommunityText: "به بیش از ۱۰٬۰۰۰ خواننده‌ای بپیوندید که برای مطالعه بعدی خود به ما اعتماد می‌کنند.",
    aboutMilestones: "سفر ما",
    aboutTeam: "با تیم آشنا شوید",
    tableTitle: "مجموعه ما به ارقام",
    tableCategory: "دسته‌بندی",
    tableBooks: "کتاب‌ها",
    tableAuthors: "نویسندگان",
    tableAvgRating: "میانگین امتیاز",

    contactTitle: "تماس با ما",
    contactSubtitle: "خوشحال می‌شویم از شما بشنویم. پیامی بفرستید و ظرف ۲۴ ساعت پاسخ خواهیم داد.",
    contactFullName: "نام کامل",
    contactEmail: "آدرس ایمیل",
    contactSubject: "موضوع",
    contactMessage: "پیام",
    contactSubmit: "ارسال پیام",
    contactSuccessTitle: "پیام ارسال شد! ✓",
    contactSuccessText: "ممنون از ارتباط شما. ظرف ۲۴ ساعت پاسخ خواهیم داد.",
    contactAddress: "خیابان کتاب ، کابل، افغانستان",
    contactEmailAddr: "shayestahaqjo@gmail.com",
    contactPhone: "‎+۹۳ ۷۶۷ ۴۵۷ ۴۴۲",
    contactHours: "دوشنبه – جمعه: ۹ صبح – ۶ بعدازظهر",

    footerTagline: "کتاب‌های منتخب برای ذهن‌های کنجکاو. دانش خود را صفحه به صفحه گسترش دهید.",
    footerHome: "خانه",
    footerShopBy: "خرید بر اساس",
    footerSupport: "پشتیبانی",
    footerContact: "تماس",
    footerCopyright: "© ۱۴۰۵ فروشگاه کتاب ریدتولید. تمام حقوق محفوظ است.",
    footerCredit: "با ♥  توسط شایسته برای کتاب‌دوستان ساخته شده",
    footerFAQ: "سوالات متداول",
    footerShipping: "اطلاعات ارسال",
    footerReturns: "بازگشت کالا",
    footerTrack: "پیگیری سفارش",
    footerPrivacy: "سیاست حریم خصوصی",
    footerTerms: "شرایط استفاده",
    footerLanguage: "زبان",
    footerCurrency: "ارز",

    errRequired: "این فیلد الزامی است.",
    errEmail: "لطفاً یک آدرس ایمیل معتبر وارد کنید.",
    errPhone: "لطفاً یک شماره تلفن معتبر وارد کنید.",
    errMinLength: "باید حداقل {min} کاراکتر باشد.",
    errCard: "شماره کارت باید دقیقاً ۱۶ رقم باشد.",
    errExpiry: "لطفاً یک تاریخ انقضای معتبر آینده وارد کنید (MM/YY).",
    errCVV: "CVV باید دقیقاً ۳ رقم باشد.",
    errZip: "لطفاً یک کد پستی معتبر وارد کنید.",

    orderConfirmed: "سفارش تأیید شد! 🎉",
    orderNumber: "شماره سفارش #",
    orderThankYou: "از خرید شما از فروشگاه کتاب ریدتولید متشکریم! 📚",
    orderBook: "کتاب",
    orderQty: "تعداد",
    orderPrice: "قیمت",
    closeModal: "بستن",
    continueBrowsing: "ادامه خرید",
    inStock: "موجود",
    reviews: "نظر",
  },

  // ===== PASHTO (پښتو) =====
  ps: {
    navHome: "کور",
    navCollection: "ټولګه",
    navTopSelling: "ډیر پلورل شوي",
    navAbout: "زموږ په اړه",
    navContact: "اړیکه",
    navCart: "ټوکر",
    navSearchPlaceholder: "د کتاب یا لیکوال لټون…",
    navDarkMode: "تیاره حالت",
    navLightMode: "رڼا حالت",

    heroFeaturedLabel: "د میاشتې ستره کتاب",
    heroAuthorPrefix: "لیکوال",
    heroGenre: "ځان سمولو / کار وړتیا",
    heroReviews: "۱۲٬۴۰۰ نظرونه",
    heroDescription: "د ښو عادتونو جوړولو او بدو عادتونو مات کولو لپاره یو بنسټیز لارښود. کوچني بدلونونه د عجیبو پایلو سبب کیږي.",
    heroAddToCart: "ټوکر ته اضافه کړئ",
    heroBuyNow: "اوس واخلئ",

    sectionTopSelling: "ډیر پلورل شوي",
    sectionViewAll: "ټول وګورئ →",
    sectionEditorsPicks: "د مدیرانو انتخابونه",
    sectionCategories: "ټولګه مرور کړئ",

    filterAll: "ټول",
    filterFiction: "افسانه",
    filterNonFiction: "غیر افسانه",
    filterDesign: "ډیزاین",
    filterBusiness: "سوداګري",
    filterBiography: "ژوندلیک",

    searchPlaceholder: "کتاب یا لیکوال لټون…",
    noResults: "هیڅ کتاب ونه موندل شو",
    noResultsSub: "بله لټون یا کټګوري هڅه وکړئ.",

    addToCart: "ټوکر ته اضافه کړئ",
    viewDetails: "توضیحات",

    cartTitle: "ستاسو ټوکر",
    cartEmpty: "ستاسو ټوکر خالي دی",
    cartEmptySub: "زموږ ټولګه وګورئ او کتابونه اضافه کړئ!",
    cartBrowse: "کتابونه وګورئ",
    continueShopping: "← خریداري ته دوام ورکړئ",
    proceedCheckout: "تادیې ته ورشئ",
    cartSubtotal: "فرعي مجموع",
    cartShipping: "لیږد",
    cartTax: "مالیه (۸٪)",
    cartTotal: "ټول",
    cartFreeShipping: "🎉 وړیا لیږد ستاسو لپاره!",
    cartShippingNote: "د وړیا لیږد لپاره",
    removeItem: "لرې کړئ",

    checkoutTitle: "تادیه",
    backToCart: "← ټوکر ته ستنیدل",
    personalInfo: "شخصي معلومات",
    shippingInfo: "د لیږد پته",
    paymentInfo: "د تادیې معلومات (آزمایشي)",
    firstName: "نوم",
    lastName: "د کورنۍ نوم",
    email: "د بریښنالیک پته",
    phone: "د تلیفون شمیره",
    address: "د کوڅې پته",
    city: "ښار",
    country: "هیواد",
    zipCode: "د پوستې کوډ",
    cardNumber: "د کارت شمیره",
    expiryDate: "د پایلو نیټه (MM/YY)",
    cvv: "CVV",
    sameAsBilling: "د بل پته د لیږد پته سره یوه ده",
    placeOrder: "امر ورکړئ",
    orderSummary: "د امر لنډیز",
    selectCountry: "هیواد غوره کړئ…",

    aboutHeroTitle: "زموږ کیسه",
    aboutHeroSub: "د ۲۰۱۸ راهیسې د کنجکاوو ذهنونو لپاره غوره کتابونه وړاندې کول.",
    aboutMission: "زموږ ماموریت",
    aboutMissionText: "موږ باور لرو چې هر کتاب کولی شي ژوند بدل کړي. زموږ موخه دا ده چې د کیفیت لوستل د ټولو لپاره لاسرسي وي.",
    aboutWhyBooks: "ولې کتابونه مهم دي",
    aboutWhyBooksText: "کتابونه د پوهې، همدردۍ او وده بنسټ دی. موږ هغه عنوانونه غوره کوو چې د فکر وهلو وړ او الهام بخښونکي وي.",
    aboutCuration: "زموږ د انتخاب پروسه",
    aboutCurationText: "زموږ پلورنځي کې هر کتاب زموږ د ایډیتوري ټیم لخوا بیاکتل کیږي. موږ د کیفیت، اړوند والي او اغیزې باندې تمرکز کوو.",
    aboutCommunity: "زموږ ټولنه",
    aboutCommunityText: "د ۱۰٬۰۰۰+ لوستونکو سره یوځای شئ چې د خپل بل ستر لوستلو لپاره موږ ته باور لري.",
    aboutMilestones: "زموږ سفر",
    aboutTeam: "د ټیم سره آشنا شئ",
    tableTitle: "زموږ ټولګه د شمیرو سره",
    tableCategory: "کټګوري",
    tableBooks: "کتابونه",
    tableAuthors: "لیکوالان",
    tableAvgRating: "اوسط ریټنګ",

    contactTitle: "اړیکه ونیسئ",
    contactSubtitle: "موږ خوښ یو چې له تاسو واورو. پیغام راولیږئ او موږ به د ۲۴ ساعتونو دننه ځواب درکړو.",
    contactFullName: "بشپړ نوم",
    contactEmail: "د بریښنالیک پته",
    contactSubject: "موضوع",
    contactMessage: "پیغام",
    contactSubmit: "پیغام ولیږئ",
    contactSuccessTitle: "پیغام ولیږل شو! ✓",
    contactSuccessText: "د اړیکې لپاره مننه. موږ به د ۲۴ ساعتونو دننه ځواب درکړو.",
    contactAddress: "د کتاب کوڅه ، کابل، افغانستان",
    contactEmailAddr: "shayestahaqjo@gmail.com",
    contactPhone: "‎+۹۳ ۷۶۷ ۴۵۷ ۴۴۲",
    contactHours: "دوشنبه – جمعه: ۹ سهار – ۶ ماسپښین",

    footerTagline: "د کنجکاوو ذهنونو لپاره غوره شوي کتابونه. خپله پوهه پاڼه پاڼه وده ورکړئ.",
    footerHome: "کور",
    footerShopBy: "د دې سره پیرود",
    footerSupport: "ملاتړ",
    footerContact: "اړیکه",
    footerCopyright: "© ۲۰۲۶ د ریدتولید کتاب پلورنځی. ټول حقوق خوندي دي.",
    footerCredit: "د کتاب مینه والو لپاره د شایسته لخوا په ♥ سره جوړ شوی",
    footerFAQ: "معمول پوښتنې",
    footerShipping: "د لیږد معلومات",
    footerReturns: "بیرته راستنول",
    footerTrack: "امر تعقیب کړئ",
    footerPrivacy: "د محرمیت پالیسي",
    footerTerms: "د کارولو شرایط",
    footerLanguage: "ژبه",
    footerCurrency: "اسعار",

    errRequired: "دا ساحه اړینه ده.",
    errEmail: "مهرباني وکړئ یوه معتبره بریښنالیک پته دننه کړئ.",
    errPhone: "مهرباني وکړئ یوه معتبره د تلیفون شمیره دننه کړئ.",
    errMinLength: "باید لږترلږه {min} توري وي.",
    errCard: "د کارت شمیره باید دقیقاً ۱۶ عدده وي.",
    errExpiry: "مهرباني وکړئ یوه معتبره راتلونکې د پای نیټه دننه کړئ (MM/YY).",
    errCVV: "CVV باید دقیقاً ۳ عدده وي.",
    errZip: "مهرباني وکړئ یو معتبر پوستي کوډ دننه کړئ.",

    orderConfirmed: "امر تایید شو! 🎉",
    orderNumber: "د امر شمیره #",
    orderThankYou: "د ریدتولید کتاب پلورنځي څخه د خریداری مننه! 📚",
    orderBook: "کتاب",
    orderQty: "اندازه",
    orderPrice: "بیه",
    closeModal: "بندول",
    continueBrowsing: "خریداري ته دوام",
    inStock: "موجود",
    reviews: "نظرونه",
  }
};

// RTL languages
const rtlLanguages = ['fa', 'ps'];

/**
 * Apply translations to the page
 * @param {string} lang - Language code: 'en', 'fa', 'ps'
 */
function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  // Save to localStorage
  localStorage.setItem('rtl-lang', lang);

  // Direction
  const isRTL = rtlLanguages.includes(lang);
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  document.body.classList.toggle('rtl', isRTL);

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  // Update aria-labels
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (t[key] !== undefined) {
      el.setAttribute('aria-label', t[key]);
    }
  });

  // Re-render products with new language
  if (typeof displayProducts === 'function' && document.getElementById('products-grid')) {
    displayProducts('products-grid');
  }

  // Update cart if on checkout page
  if (typeof renderCart === 'function' && document.getElementById('cart-items-container')) {
    renderCart();
  }
}

/**
 * Initialize language on page load
 */
function initLanguage() {
  const saved = localStorage.getItem('rtl-lang') || 'en';
  const select = document.getElementById('lang-select');
  if (select) select.value = saved;
  applyTranslations(saved);
}
