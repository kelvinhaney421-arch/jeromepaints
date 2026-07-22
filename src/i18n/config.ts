
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// UI translation keys shared across the app. Product names stay in English (proper nouns).
type Dict = Record<string, string>;

const en: Dict = {
  helpline: 'Helpline',
  login: 'Login',
  registration: 'Registration',
  dashboard: 'Dashboard',
  logout: 'Logout',
  searchPlaceholder: 'Search for construction chemicals, hardeners, water reducers...',
  cartEmpty: 'Your Cart is empty',
  items: 'Items',
  home: 'Home',
  categories: 'Categories',
  allCategories: 'All Categories',
  products: 'Products',
  hotCategories: 'Hot Categories',
  featuredProducts: 'Featured Products',
  featuredCategories: 'Featured Categories',
  bestSelling: 'Best Selling Products',
  todaysDeal: "Today's Deal",
  viewAll: 'View All',
  addToCart: 'Add to Cart',
  buyOnWhatsapp: 'Order on WhatsApp',
  requestQuote: 'Bid / Request Quote',
  quantity: 'Quantity',
  outOfStock: 'Out of Stock',
  inStock: 'In Stock',
  description: 'Technical Description',
  specifications: 'Specifications',
  shoppingCart: 'Shopping Cart',
  product: 'Product',
  price: 'Price',
  total: 'Total',
  subtotal: 'Subtotal',
  remove: 'Remove',
  proceedToCheckout: 'Proceed to Checkout',
  continueShopping: 'Continue Shopping',
  emptyCartMsg: 'Your cart is empty. Start adding products.',
  itemCount_one: '{{count}} item',
  itemCount_other: '{{count}} items',
  bidTitle: 'Bid For Product',
  placeBidPrice: 'Place Bid Price',
  submit: 'Submit',
  cancel: 'Cancel',
  profileInfo: 'Profile Information',
  orderHistory: 'Order History',
  trackOrder: 'Track Order',
  deleteAccount: 'Delete Your Account',
  cancelDelete: 'Cancel Delete Account',
  confirmDelete: 'Confirm Delete',
  chatWithUs: 'Chat with us!',
  cookieText: 'We use cookies for a better user experience, check our policy here.',
  cookieBtn: 'Ok. I Understood',
  quickLinks: 'Quick Links',
  myAccount: 'My Account',
  contactUs: 'Contact Us',
  terms: 'Terms & Conditions',
  returns: 'Return Policy',
  support: 'Support Policy',
  privacy: 'Privacy Policy',
  wishlist: 'My Wishlist',
  language: 'Language',
  currency: 'Currency',
  theme: 'Theme',
  itemsCount: 'items',
  noResults: 'No products found.',
  category: 'Category',
  addedToCart: 'Added to cart',
  aboutCompany: 'Building trust in industrial chemicals across Malaysia and beyond.'
};

// Helper to build a dictionary, falling back to English for any missing key.
const build = (partial: Dict): Dict => ({ ...en, ...partial });

const de = build({
  helpline: 'Hotline', login: 'Anmelden', registration: 'Registrierung', dashboard: 'Dashboard', logout: 'Abmelden',
  searchPlaceholder: 'Suche nach Bauchemikalien, Härtern, Wasserreduzierern...', cartEmpty: 'Ihr Warenkorb ist leer', items: 'Artikel',
  home: 'Startseite', categories: 'Kategorien', allCategories: 'Alle Kategorien', products: 'Produkte',
  hotCategories: 'Beliebte Kategorien', featuredProducts: 'Empfohlene Produkte', featuredCategories: 'Empfohlene Kategorien',
  bestSelling: 'Bestseller', todaysDeal: 'Angebot des Tages', viewAll: 'Alle ansehen', addToCart: 'In den Warenkorb',
  buyOnWhatsapp: 'Auf WhatsApp bestellen', requestQuote: 'Gebot / Angebot anfordern', quantity: 'Menge', outOfStock: 'Nicht vorrätig',
  inStock: 'Auf Lager', description: 'Technische Beschreibung', specifications: 'Spezifikationen', shoppingCart: 'Warenkorb',
  product: 'Produkt', price: 'Preis', total: 'Gesamt', subtotal: 'Zwischensumme', remove: 'Entfernen',
  proceedToCheckout: 'Zur Kasse', continueShopping: 'Weiter einkaufen', emptyCartMsg: 'Ihr Warenkorb ist leer. Fügen Sie Produkte hinzu.',
  bidTitle: 'Für Produkt bieten', placeBidPrice: 'Gebotspreis angeben', submit: 'Absenden', cancel: 'Abbrechen',
  profileInfo: 'Profilinformationen', orderHistory: 'Bestellverlauf', trackOrder: 'Bestellung verfolgen', deleteAccount: 'Konto löschen',
  cancelDelete: 'Löschen abbrechen', confirmDelete: 'Löschen bestätigen', chatWithUs: 'Chatte mit uns!',
  cookieText: 'Wir verwenden Cookies für ein besseres Nutzererlebnis, siehe unsere Richtlinie.', cookieBtn: 'Ok. Verstanden',
  quickLinks: 'Schnelllinks', myAccount: 'Mein Konto', contactUs: 'Kontakt', terms: 'AGB', returns: 'Rückgaberichtlinie',
  support: 'Support-Richtlinie', privacy: 'Datenschutz', wishlist: 'Meine Wunschliste', language: 'Sprache', currency: 'Währung',
  theme: 'Design', noResults: 'Keine Produkte gefunden.', category: 'Kategorie', addedToCart: 'Zum Warenkorb hinzugefügt',
  aboutCompany: 'Vertrauen in Industriechemikalien in Malaysia und darüber hinaus.'
});

const fr = build({
  helpline: 'Assistance', login: 'Connexion', registration: 'Inscription', dashboard: 'Tableau de bord', logout: 'Déconnexion',
  searchPlaceholder: 'Rechercher des produits chimiques, durcisseurs, réducteurs d\'eau...', cartEmpty: 'Votre panier est vide',
  home: 'Accueil', categories: 'Catégories', allCategories: 'Toutes les catégories', products: 'Produits', hotCategories: 'Catégories populaires',
  featuredProducts: 'Produits en vedette', featuredCategories: 'Catégories en vedette', bestSelling: 'Meilleures ventes', todaysDeal: 'Offre du jour',
  viewAll: 'Voir tout', addToCart: 'Ajouter au panier', buyOnWhatsapp: 'Commander sur WhatsApp', requestQuote: 'Enchère / Devis', quantity: 'Quantité',
  shoppingCart: 'Panier', product: 'Produit', price: 'Prix', total: 'Total', subtotal: 'Sous-total', remove: 'Retirer',
  proceedToCheckout: 'Passer à la caisse', continueShopping: 'Continuer les achats', emptyCartMsg: 'Votre panier est vide. Ajoutez des produits.',
  bidTitle: 'Enchérir sur le produit', placeBidPrice: 'Prix de l\'enchère', submit: 'Envoyer', cancel: 'Annuler',
  chatWithUs: 'Discutez avec nous !', cookieBtn: 'Ok. Compris', language: 'Langue', currency: 'Devise', theme: 'Thème',
  category: 'Catégorie', addedToCart: 'Ajouté au panier'
});

const es = build({
  helpline: 'Ayuda', login: 'Iniciar sesión', registration: 'Registro', dashboard: 'Panel', logout: 'Cerrar sesión',
  searchPlaceholder: 'Buscar productos químicos, endurecedores, reductores de agua...', cartEmpty: 'Tu carrito está vacío',
  home: 'Inicio', categories: 'Categorías', allCategories: 'Todas las categorías', products: 'Productos', hotCategories: 'Categorías populares',
  featuredProducts: 'Productos destacados', featuredCategories: 'Categorías destacadas', bestSelling: 'Más vendidos', todaysDeal: 'Oferta del día',
  viewAll: 'Ver todo', addToCart: 'Añadir al carrito', buyOnWhatsapp: 'Pedir por WhatsApp', requestQuote: 'Puja / Cotización', quantity: 'Cantidad',
  shoppingCart: 'Carrito de compras', product: 'Producto', price: 'Precio', total: 'Total', subtotal: 'Subtotal', remove: 'Quitar',
  proceedToCheckout: 'Proceder al pago', continueShopping: 'Seguir comprando', emptyCartMsg: 'Tu carrito está vacío. Añade productos.',
  bidTitle: 'Pujar por producto', placeBidPrice: 'Precio de puja', submit: 'Enviar', cancel: 'Cancelar',
  chatWithUs: '¡Chatea con nosotros!', cookieBtn: 'Ok. Entendido', language: 'Idioma', currency: 'Moneda', theme: 'Tema',
  category: 'Categoría', addedToCart: 'Añadido al carrito'
});

const it = build({
  helpline: 'Assistenza', login: 'Accedi', registration: 'Registrazione', dashboard: 'Cruscotto', logout: 'Esci',
  searchPlaceholder: 'Cerca prodotti chimici, induritori, riduttori d\'acqua...', cartEmpty: 'Il tuo carrello è vuoto',
  home: 'Home', categories: 'Categorie', allCategories: 'Tutte le categorie', products: 'Prodotti', hotCategories: 'Categorie popolari',
  featuredProducts: 'Prodotti in evidenza', featuredCategories: 'Categorie in evidenza', bestSelling: 'Più venduti', todaysDeal: 'Offerta del giorno',
  viewAll: 'Vedi tutto', addToCart: 'Aggiungi al carrello', buyOnWhatsapp: 'Ordina su WhatsApp', requestQuote: 'Offerta / Preventivo', quantity: 'Quantità',
  shoppingCart: 'Carrello', product: 'Prodotto', price: 'Prezzo', total: 'Totale', subtotal: 'Subtotale', remove: 'Rimuovi',
  proceedToCheckout: 'Procedi al pagamento', continueShopping: 'Continua lo shopping', emptyCartMsg: 'Il tuo carrello è vuoto. Aggiungi prodotti.',
  chatWithUs: 'Chatta con noi!', cookieBtn: 'Ok. Ho capito', language: 'Lingua', currency: 'Valuta', theme: 'Tema',
  category: 'Categoria', addedToCart: 'Aggiunto al carrello'
});

const pt = build({
  helpline: 'Ajuda', login: 'Entrar', registration: 'Registo', dashboard: 'Painel', logout: 'Sair',
  searchPlaceholder: 'Procurar produtos químicos, endurecedores, redutores de água...', cartEmpty: 'O seu carrinho está vazio',
  home: 'Início', categories: 'Categorias', allCategories: 'Todas as categorias', products: 'Produtos', hotCategories: 'Categorias populares',
  featuredProducts: 'Produtos em destaque', featuredCategories: 'Categorias em destaque', bestSelling: 'Mais vendidos', todaysDeal: 'Oferta do dia',
  viewAll: 'Ver tudo', addToCart: 'Adicionar ao carrinho', buyOnWhatsapp: 'Pedir no WhatsApp', requestQuote: 'Licitar / Orçamento', quantity: 'Quantidade',
  shoppingCart: 'Carrinho', product: 'Produto', price: 'Preço', total: 'Total', subtotal: 'Subtotal', remove: 'Remover',
  proceedToCheckout: 'Finalizar compra', continueShopping: 'Continuar a comprar', emptyCartMsg: 'O seu carrinho está vazio. Adicione produtos.',
  chatWithUs: 'Fale connosco!', cookieBtn: 'Ok. Entendi', language: 'Idioma', currency: 'Moeda', theme: 'Tema',
  category: 'Categoria', addedToCart: 'Adicionado ao carrinho'
});

const nl = build({
  helpline: 'Hulplijn', login: 'Inloggen', registration: 'Registratie', dashboard: 'Dashboard', logout: 'Uitloggen',
  searchPlaceholder: 'Zoek naar bouwchemicaliën, verharders, waterreduceerders...', cartEmpty: 'Uw winkelwagen is leeg',
  home: 'Home', categories: 'Categorieën', allCategories: 'Alle categorieën', products: 'Producten', hotCategories: 'Populaire categorieën',
  featuredProducts: 'Uitgelichte producten', featuredCategories: 'Uitgelichte categorieën', bestSelling: 'Best verkocht', todaysDeal: 'Aanbieding van de dag',
  viewAll: 'Bekijk alles', addToCart: 'In winkelwagen', buyOnWhatsapp: 'Bestel via WhatsApp', requestQuote: 'Bod / Offerte', quantity: 'Aantal',
  shoppingCart: 'Winkelwagen', product: 'Product', price: 'Prijs', total: 'Totaal', subtotal: 'Subtotaal', remove: 'Verwijderen',
  proceedToCheckout: 'Afrekenen', continueShopping: 'Verder winkelen', chatWithUs: 'Chat met ons!', cookieBtn: 'Ok. Begrepen',
  language: 'Taal', currency: 'Valuta', theme: 'Thema', category: 'Categorie', addedToCart: 'Toegevoegd aan winkelwagen'
});

const pl = build({
  helpline: 'Infolinia', login: 'Zaloguj', registration: 'Rejestracja', dashboard: 'Panel', logout: 'Wyloguj',
  searchPlaceholder: 'Szukaj chemii budowlanej, utwardzaczy, reduktorów wody...', cartEmpty: 'Twój koszyk jest pusty',
  home: 'Strona główna', categories: 'Kategorie', allCategories: 'Wszystkie kategorie', products: 'Produkty', hotCategories: 'Popularne kategorie',
  featuredProducts: 'Polecane produkty', featuredCategories: 'Polecane kategorie', bestSelling: 'Bestsellery', todaysDeal: 'Oferta dnia',
  viewAll: 'Zobacz wszystko', addToCart: 'Dodaj do koszyka', buyOnWhatsapp: 'Zamów na WhatsApp', requestQuote: 'Licytuj / Wycena', quantity: 'Ilość',
  shoppingCart: 'Koszyk', product: 'Produkt', price: 'Cena', total: 'Razem', subtotal: 'Suma częściowa', remove: 'Usuń',
  proceedToCheckout: 'Przejdź do kasy', continueShopping: 'Kontynuuj zakupy', chatWithUs: 'Napisz do nas!', cookieBtn: 'Ok. Rozumiem',
  language: 'Język', currency: 'Waluta', theme: 'Motyw', category: 'Kategoria', addedToCart: 'Dodano do koszyka'
});

const ru = build({
  helpline: 'Поддержка', login: 'Вход', registration: 'Регистрация', dashboard: 'Панель', logout: 'Выход',
  searchPlaceholder: 'Поиск стройхимии, отвердителей, водоредукторов...', cartEmpty: 'Ваша корзина пуста',
  home: 'Главная', categories: 'Категории', allCategories: 'Все категории', products: 'Товары', hotCategories: 'Популярные категории',
  featuredProducts: 'Рекомендуемые товары', featuredCategories: 'Рекомендуемые категории', bestSelling: 'Хиты продаж', todaysDeal: 'Предложение дня',
  viewAll: 'Смотреть все', addToCart: 'В корзину', buyOnWhatsapp: 'Заказать в WhatsApp', requestQuote: 'Ставка / Запрос', quantity: 'Количество',
  shoppingCart: 'Корзина', product: 'Товар', price: 'Цена', total: 'Итого', subtotal: 'Промежуточный итог', remove: 'Удалить',
  proceedToCheckout: 'Оформить заказ', continueShopping: 'Продолжить покупки', chatWithUs: 'Напишите нам!', cookieBtn: 'Ок. Понятно',
  language: 'Язык', currency: 'Валюта', theme: 'Тема', category: 'Категория', addedToCart: 'Добавлено в корзину'
});

const tr = build({
  helpline: 'Yardım Hattı', login: 'Giriş', registration: 'Kayıt', dashboard: 'Panel', logout: 'Çıkış',
  searchPlaceholder: 'Yapı kimyasalları, sertleştiriciler, su azaltıcılar arayın...', cartEmpty: 'Sepetiniz boş',
  home: 'Ana Sayfa', categories: 'Kategoriler', allCategories: 'Tüm Kategoriler', products: 'Ürünler', hotCategories: 'Popüler Kategoriler',
  featuredProducts: 'Öne Çıkan Ürünler', featuredCategories: 'Öne Çıkan Kategoriler', bestSelling: 'En Çok Satanlar', todaysDeal: 'Günün Fırsatı',
  viewAll: 'Tümünü Gör', addToCart: 'Sepete Ekle', buyOnWhatsapp: 'WhatsApp\'tan Sipariş', requestQuote: 'Teklif Ver', quantity: 'Adet',
  shoppingCart: 'Sepet', product: 'Ürün', price: 'Fiyat', total: 'Toplam', subtotal: 'Ara Toplam', remove: 'Kaldır',
  proceedToCheckout: 'Ödemeye Geç', continueShopping: 'Alışverişe Devam', chatWithUs: 'Bizimle sohbet edin!', cookieBtn: 'Tamam. Anladım',
  language: 'Dil', currency: 'Para Birimi', theme: 'Tema', category: 'Kategori', addedToCart: 'Sepete eklendi'
});

const ar = build({
  helpline: 'خط المساعدة', login: 'تسجيل الدخول', registration: 'التسجيل', dashboard: 'لوحة التحكم', logout: 'تسجيل الخروج',
  searchPlaceholder: 'ابحث عن المواد الكيميائية للبناء والمصلبات ومخفضات الماء...', cartEmpty: 'سلة التسوق فارغة',
  home: 'الرئيسية', categories: 'الفئات', allCategories: 'جميع الفئات', products: 'المنتجات', hotCategories: 'الفئات الرائجة',
  featuredProducts: 'المنتجات المميزة', featuredCategories: 'الفئات المميزة', bestSelling: 'الأكثر مبيعاً', todaysDeal: 'عرض اليوم',
  viewAll: 'عرض الكل', addToCart: 'أضف إلى السلة', buyOnWhatsapp: 'اطلب عبر واتساب', requestQuote: 'عطاء / طلب سعر', quantity: 'الكمية',
  shoppingCart: 'سلة التسوق', product: 'المنتج', price: 'السعر', total: 'المجموع', subtotal: 'المجموع الفرعي', remove: 'إزالة',
  proceedToCheckout: 'إتمام الشراء', continueShopping: 'متابعة التسوق', chatWithUs: 'تحدث معنا!', cookieBtn: 'حسناً. فهمت',
  language: 'اللغة', currency: 'العملة', theme: 'المظهر', category: 'الفئة', addedToCart: 'أضيف إلى السلة'
});

const zh = build({
  helpline: '热线', login: '登录', registration: '注册', dashboard: '仪表板', logout: '登出',
  searchPlaceholder: '搜索建筑化学品、硬化剂、减水剂...', cartEmpty: '您的购物车是空的',
  home: '首页', categories: '分类', allCategories: '所有分类', products: '产品', hotCategories: '热门分类',
  featuredProducts: '精选产品', featuredCategories: '精选分类', bestSelling: '热销产品', todaysDeal: '今日特惠',
  viewAll: '查看全部', addToCart: '加入购物车', buyOnWhatsapp: '在 WhatsApp 下单', requestQuote: '出价 / 询价', quantity: '数量',
  shoppingCart: '购物车', product: '产品', price: '价格', total: '合计', subtotal: '小计', remove: '移除',
  proceedToCheckout: '去结算', continueShopping: '继续购物', chatWithUs: '与我们聊天！', cookieBtn: '好的，我明白了',
  language: '语言', currency: '货币', theme: '主题', category: '分类', addedToCart: '已加入购物车'
});

const ja = build({
  helpline: 'ヘルプライン', login: 'ログイン', registration: '登録', dashboard: 'ダッシュボード', logout: 'ログアウト',
  searchPlaceholder: '建設用化学品、硬化剤、減水剤を検索...', cartEmpty: 'カートは空です',
  home: 'ホーム', categories: 'カテゴリ', allCategories: 'すべてのカテゴリ', products: '製品', hotCategories: '人気カテゴリ',
  featuredProducts: 'おすすめ製品', featuredCategories: 'おすすめカテゴリ', bestSelling: 'ベストセラー', todaysDeal: '本日の特価',
  viewAll: 'すべて見る', addToCart: 'カートに追加', buyOnWhatsapp: 'WhatsAppで注文', requestQuote: '入札 / 見積もり', quantity: '数量',
  shoppingCart: 'ショッピングカート', product: '製品', price: '価格', total: '合計', subtotal: '小計', remove: '削除',
  proceedToCheckout: 'レジに進む', continueShopping: '買い物を続ける', chatWithUs: 'チャットする！', cookieBtn: 'OK。了解しました',
  language: '言語', currency: '通貨', theme: 'テーマ', category: 'カテゴリ', addedToCart: 'カートに追加しました'
});

const ko = build({
  helpline: '헬프라인', login: '로그인', registration: '회원가입', dashboard: '대시보드', logout: '로그아웃',
  searchPlaceholder: '건설 화학제품, 경화제, 감수제 검색...', cartEmpty: '장바구니가 비어 있습니다',
  home: '홈', categories: '카테고리', allCategories: '전체 카테고리', products: '제품', hotCategories: '인기 카테고리',
  featuredProducts: '추천 제품', featuredCategories: '추천 카테고리', bestSelling: '베스트셀러', todaysDeal: '오늘의 특가',
  viewAll: '모두 보기', addToCart: '장바구니 담기', buyOnWhatsapp: 'WhatsApp으로 주문', requestQuote: '입찰 / 견적', quantity: '수량',
  shoppingCart: '장바구니', product: '제품', price: '가격', total: '합계', subtotal: '소계', remove: '삭제',
  proceedToCheckout: '결제하기', continueShopping: '쇼핑 계속하기', chatWithUs: '채팅하기!', cookieBtn: '확인. 이해했습니다',
  language: '언어', currency: '통화', theme: '테마', category: '카테고리', addedToCart: '장바구니에 담김'
});

const hi = build({
  helpline: 'हेल्पलाइन', login: 'लॉगिन', registration: 'पंजीकरण', dashboard: 'डैशबोर्ड', logout: 'लॉगआउट',
  searchPlaceholder: 'निर्माण रसायन, हार्डनर, वॉटर रिड्यूसर खोजें...', cartEmpty: 'आपकी कार्ट खाली है',
  home: 'होम', categories: 'श्रेणियाँ', allCategories: 'सभी श्रेणियाँ', products: 'उत्पाद', hotCategories: 'लोकप्रिय श्रेणियाँ',
  featuredProducts: 'विशेष उत्पाद', featuredCategories: 'विशेष श्रेणियाँ', bestSelling: 'सर्वाधिक बिकने वाले', todaysDeal: 'आज का सौदा',
  viewAll: 'सभी देखें', addToCart: 'कार्ट में डालें', buyOnWhatsapp: 'WhatsApp पर ऑर्डर करें', requestQuote: 'बोली / कोटेशन', quantity: 'मात्रा',
  shoppingCart: 'शॉपिंग कार्ट', product: 'उत्पाद', price: 'मूल्य', total: 'कुल', subtotal: 'उप-योग', remove: 'हटाएँ',
  proceedToCheckout: 'चेकआउट करें', continueShopping: 'खरीदारी जारी रखें', chatWithUs: 'हमसे चैट करें!', cookieBtn: 'ठीक है। समझ गया',
  language: 'भाषा', currency: 'मुद्रा', theme: 'थीम', category: 'श्रेणी', addedToCart: 'कार्ट में जोड़ा गया'
});

const ms = build({
  helpline: 'Talian Bantuan', login: 'Log Masuk', registration: 'Pendaftaran', dashboard: 'Papan Pemuka', logout: 'Log Keluar',
  searchPlaceholder: 'Cari bahan kimia binaan, pengeras, pengurang air...', cartEmpty: 'Troli anda kosong',
  home: 'Laman Utama', categories: 'Kategori', allCategories: 'Semua Kategori', products: 'Produk', hotCategories: 'Kategori Popular',
  featuredProducts: 'Produk Pilihan', featuredCategories: 'Kategori Pilihan', bestSelling: 'Paling Laris', todaysDeal: 'Tawaran Hari Ini',
  viewAll: 'Lihat Semua', addToCart: 'Tambah ke Troli', buyOnWhatsapp: 'Pesan di WhatsApp', requestQuote: 'Bida / Sebut Harga', quantity: 'Kuantiti',
  shoppingCart: 'Troli Beli-belah', product: 'Produk', price: 'Harga', total: 'Jumlah', subtotal: 'Jumlah Kecil', remove: 'Buang',
  proceedToCheckout: 'Teruskan Pembayaran', continueShopping: 'Terus Membeli-belah', chatWithUs: 'Sembang dengan kami!', cookieBtn: 'Ok. Saya Faham',
  language: 'Bahasa', currency: 'Mata Wang', theme: 'Tema', category: 'Kategori', addedToCart: 'Ditambah ke troli'
});

const id = build({
  helpline: 'Bantuan', login: 'Masuk', registration: 'Pendaftaran', dashboard: 'Dasbor', logout: 'Keluar',
  searchPlaceholder: 'Cari bahan kimia konstruksi, pengeras, pengurang air...', cartEmpty: 'Keranjang Anda kosong',
  home: 'Beranda', categories: 'Kategori', allCategories: 'Semua Kategori', products: 'Produk', hotCategories: 'Kategori Populer',
  featuredProducts: 'Produk Unggulan', featuredCategories: 'Kategori Unggulan', bestSelling: 'Terlaris', todaysDeal: 'Penawaran Hari Ini',
  viewAll: 'Lihat Semua', addToCart: 'Tambah ke Keranjang', buyOnWhatsapp: 'Pesan di WhatsApp', requestQuote: 'Tawar / Penawaran', quantity: 'Jumlah',
  shoppingCart: 'Keranjang Belanja', product: 'Produk', price: 'Harga', total: 'Total', subtotal: 'Subtotal', remove: 'Hapus',
  proceedToCheckout: 'Lanjut ke Pembayaran', continueShopping: 'Lanjut Belanja', chatWithUs: 'Ngobrol dengan kami!', cookieBtn: 'Ok. Saya Mengerti',
  language: 'Bahasa', currency: 'Mata Uang', theme: 'Tema', category: 'Kategori', addedToCart: 'Ditambahkan ke keranjang'
});

const th = build({
  helpline: 'สายด่วน', login: 'เข้าสู่ระบบ', registration: 'ลงทะเบียน', dashboard: 'แดชบอร์ด', logout: 'ออกจากระบบ',
  searchPlaceholder: 'ค้นหาเคมีก่อสร้าง สารทำให้แข็ง สารลดน้ำ...', cartEmpty: 'ตะกร้าของคุณว่างเปล่า',
  home: 'หน้าแรก', categories: 'หมวดหมู่', allCategories: 'ทุกหมวดหมู่', products: 'สินค้า', hotCategories: 'หมวดหมู่ยอดนิยม',
  featuredProducts: 'สินค้าแนะนำ', featuredCategories: 'หมวดหมู่แนะนำ', bestSelling: 'ขายดี', todaysDeal: 'ดีลวันนี้',
  viewAll: 'ดูทั้งหมด', addToCart: 'เพิ่มลงตะกร้า', buyOnWhatsapp: 'สั่งซื้อทาง WhatsApp', requestQuote: 'ประมูล / ขอราคา', quantity: 'จำนวน',
  shoppingCart: 'ตะกร้าสินค้า', product: 'สินค้า', price: 'ราคา', total: 'รวม', subtotal: 'ยอดรวมย่อย', remove: 'ลบ',
  proceedToCheckout: 'ดำเนินการชำระเงิน', continueShopping: 'เลือกซื้อต่อ', chatWithUs: 'แชทกับเรา!', cookieBtn: 'ตกลง เข้าใจแล้ว',
  language: 'ภาษา', currency: 'สกุลเงิน', theme: 'ธีม', category: 'หมวดหมู่', addedToCart: 'เพิ่มลงตะกร้าแล้ว'
});

const vi = build({
  helpline: 'Đường dây trợ giúp', login: 'Đăng nhập', registration: 'Đăng ký', dashboard: 'Bảng điều khiển', logout: 'Đăng xuất',
  searchPlaceholder: 'Tìm hóa chất xây dựng, chất làm cứng, chất giảm nước...', cartEmpty: 'Giỏ hàng của bạn trống',
  home: 'Trang chủ', categories: 'Danh mục', allCategories: 'Tất cả danh mục', products: 'Sản phẩm', hotCategories: 'Danh mục hot',
  featuredProducts: 'Sản phẩm nổi bật', featuredCategories: 'Danh mục nổi bật', bestSelling: 'Bán chạy nhất', todaysDeal: 'Ưu đãi hôm nay',
  viewAll: 'Xem tất cả', addToCart: 'Thêm vào giỏ', buyOnWhatsapp: 'Đặt hàng qua WhatsApp', requestQuote: 'Đấu giá / Báo giá', quantity: 'Số lượng',
  shoppingCart: 'Giỏ hàng', product: 'Sản phẩm', price: 'Giá', total: 'Tổng', subtotal: 'Tạm tính', remove: 'Xóa',
  proceedToCheckout: 'Tiến hành thanh toán', continueShopping: 'Tiếp tục mua sắm', chatWithUs: 'Trò chuyện với chúng tôi!', cookieBtn: 'Ok. Đã hiểu',
  language: 'Ngôn ngữ', currency: 'Tiền tệ', theme: 'Giao diện', category: 'Danh mục', addedToCart: 'Đã thêm vào giỏ'
});

const sv = build({
  helpline: 'Hjälplinje', login: 'Logga in', registration: 'Registrering', dashboard: 'Panel', logout: 'Logga ut',
  searchPlaceholder: 'Sök byggkemikalier, härdare, vattenreducerare...', cartEmpty: 'Din varukorg är tom',
  home: 'Hem', categories: 'Kategorier', allCategories: 'Alla kategorier', products: 'Produkter', hotCategories: 'Populära kategorier',
  featuredProducts: 'Utvalda produkter', featuredCategories: 'Utvalda kategorier', bestSelling: 'Bästsäljare', todaysDeal: 'Dagens erbjudande',
  viewAll: 'Visa alla', addToCart: 'Lägg i varukorg', buyOnWhatsapp: 'Beställ på WhatsApp', requestQuote: 'Bud / Offert', quantity: 'Antal',
  shoppingCart: 'Varukorg', product: 'Produkt', price: 'Pris', total: 'Totalt', subtotal: 'Delsumma', remove: 'Ta bort',
  proceedToCheckout: 'Gå till kassan', continueShopping: 'Fortsätt handla', chatWithUs: 'Chatta med oss!', cookieBtn: 'Ok. Jag förstår',
  language: 'Språk', currency: 'Valuta', theme: 'Tema', category: 'Kategori', addedToCart: 'Tillagd i varukorg'
});

const no = build({
  helpline: 'Hjelpelinje', login: 'Logg inn', registration: 'Registrering', dashboard: 'Dashbord', logout: 'Logg ut',
  searchPlaceholder: 'Søk byggkjemikalier, herdere, vannreduksjonsmidler...', cartEmpty: 'Handlekurven din er tom',
  home: 'Hjem', categories: 'Kategorier', allCategories: 'Alle kategorier', products: 'Produkter', hotCategories: 'Populære kategorier',
  featuredProducts: 'Utvalgte produkter', featuredCategories: 'Utvalgte kategorier', bestSelling: 'Bestselgere', todaysDeal: 'Dagens tilbud',
  viewAll: 'Se alle', addToCart: 'Legg i kurv', buyOnWhatsapp: 'Bestill på WhatsApp', requestQuote: 'Bud / Tilbud', quantity: 'Antall',
  shoppingCart: 'Handlekurv', product: 'Produkt', price: 'Pris', total: 'Totalt', subtotal: 'Delsum', remove: 'Fjern',
  proceedToCheckout: 'Gå til kassen', continueShopping: 'Fortsett å handle', chatWithUs: 'Chat med oss!', cookieBtn: 'Ok. Jeg forstår',
  language: 'Språk', currency: 'Valuta', theme: 'Tema', category: 'Kategori', addedToCart: 'Lagt i kurv'
});

const da = build({
  helpline: 'Hjælpelinje', login: 'Log ind', registration: 'Registrering', dashboard: 'Dashboard', logout: 'Log ud',
  searchPlaceholder: 'Søg byggekemikalier, hærdere, vandreduktionsmidler...', cartEmpty: 'Din kurv er tom',
  home: 'Hjem', categories: 'Kategorier', allCategories: 'Alle kategorier', products: 'Produkter', hotCategories: 'Populære kategorier',
  featuredProducts: 'Udvalgte produkter', featuredCategories: 'Udvalgte kategorier', bestSelling: 'Bedst sælgende', todaysDeal: 'Dagens tilbud',
  viewAll: 'Se alle', addToCart: 'Læg i kurv', buyOnWhatsapp: 'Bestil på WhatsApp', requestQuote: 'Bud / Tilbud', quantity: 'Antal',
  shoppingCart: 'Indkøbskurv', product: 'Produkt', price: 'Pris', total: 'Total', subtotal: 'Subtotal', remove: 'Fjern',
  proceedToCheckout: 'Gå til kassen', continueShopping: 'Fortsæt med at handle', chatWithUs: 'Chat med os!', cookieBtn: 'Ok. Jeg forstår',
  language: 'Sprog', currency: 'Valuta', theme: 'Tema', category: 'Kategori', addedToCart: 'Tilføjet til kurv'
});

const el = build({
  helpline: 'Γραμμή βοήθειας', login: 'Σύνδεση', registration: 'Εγγραφή', dashboard: 'Πίνακας', logout: 'Αποσύνδεση',
  searchPlaceholder: 'Αναζήτηση χημικών δόμησης, σκληρυντικών, μειωτών νερού...', cartEmpty: 'Το καλάθι σας είναι άδειο',
  home: 'Αρχική', categories: 'Κατηγορίες', allCategories: 'Όλες οι κατηγορίες', products: 'Προϊόντα', hotCategories: 'Δημοφιλείς κατηγορίες',
  featuredProducts: 'Επιλεγμένα προϊόντα', featuredCategories: 'Επιλεγμένες κατηγορίες', bestSelling: 'Κορυφαία σε πωλήσεις', todaysDeal: 'Προσφορά ημέρας',
  viewAll: 'Δείτε όλα', addToCart: 'Προσθήκη στο καλάθι', buyOnWhatsapp: 'Παραγγελία στο WhatsApp', requestQuote: 'Προσφορά', quantity: 'Ποσότητα',
  shoppingCart: 'Καλάθι', product: 'Προϊόν', price: 'Τιμή', total: 'Σύνολο', subtotal: 'Υποσύνολο', remove: 'Αφαίρεση',
  proceedToCheckout: 'Ολοκλήρωση αγοράς', continueShopping: 'Συνέχεια αγορών', chatWithUs: 'Μιλήστε μαζί μας!', cookieBtn: 'Εντάξει. Κατάλαβα',
  language: 'Γλώσσα', currency: 'Νόμισμα', theme: 'Θέμα', category: 'Κατηγορία', addedToCart: 'Προστέθηκε στο καλάθι'
});

const uk = build({
  helpline: 'Гаряча лінія', login: 'Увійти', registration: 'Реєстрація', dashboard: 'Панель', logout: 'Вийти',
  searchPlaceholder: 'Пошук будхімії, затверджувачів, водоредукторів...', cartEmpty: 'Ваш кошик порожній',
  home: 'Головна', categories: 'Категорії', allCategories: 'Усі категорії', products: 'Товари', hotCategories: 'Популярні категорії',
  featuredProducts: 'Рекомендовані товари', featuredCategories: 'Рекомендовані категорії', bestSelling: 'Хіти продажів', todaysDeal: 'Пропозиція дня',
  viewAll: 'Дивитися все', addToCart: 'До кошика', buyOnWhatsapp: 'Замовити в WhatsApp', requestQuote: 'Ставка / Запит', quantity: 'Кількість',
  shoppingCart: 'Кошик', product: 'Товар', price: 'Ціна', total: 'Разом', subtotal: 'Проміжний підсумок', remove: 'Видалити',
  proceedToCheckout: 'Оформити замовлення', continueShopping: 'Продовжити покупки', chatWithUs: 'Напишіть нам!', cookieBtn: 'Ок. Зрозуміло',
  language: 'Мова', currency: 'Валюта', theme: 'Тема', category: 'Категорія', addedToCart: 'Додано в кошик'
});

export interface LanguageMeta {
  code: string;
  label: string;
  flag: string;
  dir?: 'ltr' | 'rtl';
  currency: string;
}

// Each language ships with a sensible default currency.
export const LANGUAGES: LanguageMeta[] = [
{ code: 'en', label: 'English', flag: '🇬🇧', currency: 'USD' },
{ code: 'de', label: 'Deutsch', flag: '🇩🇪', currency: 'EUR' },
{ code: 'fr', label: 'Français', flag: '🇫🇷', currency: 'EUR' },
{ code: 'es', label: 'Español', flag: '🇪🇸', currency: 'EUR' },
{ code: 'it', label: 'Italiano', flag: '🇮🇹', currency: 'EUR' },
{ code: 'pt', label: 'Português', flag: '🇵🇹', currency: 'EUR' },
{ code: 'nl', label: 'Nederlands', flag: '🇳🇱', currency: 'EUR' },
{ code: 'pl', label: 'Polski', flag: '🇵🇱', currency: 'PLN' },
{ code: 'ru', label: 'Русский', flag: '🇷🇺', currency: 'RUB' },
{ code: 'uk', label: 'Українська', flag: '🇺🇦', currency: 'UAH' },
{ code: 'tr', label: 'Türkçe', flag: '🇹🇷', currency: 'TRY' },
{ code: 'ar', label: 'العربية', flag: '🇸🇦', dir: 'rtl', currency: 'SAR' },
{ code: 'el', label: 'Ελληνικά', flag: '🇬🇷', currency: 'EUR' },
{ code: 'zh', label: '中文', flag: '🇨🇳', currency: 'CNY' },
{ code: 'ja', label: '日本語', flag: '🇯🇵', currency: 'JPY' },
{ code: 'ko', label: '한국어', flag: '🇰🇷', currency: 'KRW' },
{ code: 'hi', label: 'हिन्दी', flag: '🇮🇳', currency: 'INR' },
{ code: 'ms', label: 'Bahasa Melayu', flag: '🇲🇾', currency: 'MYR' },
{ code: 'id', label: 'Bahasa Indonesia', flag: '🇮🇩', currency: 'IDR' },
{ code: 'th', label: 'ไทย', flag: '🇹🇭', currency: 'THB' },
{ code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳', currency: 'VND' },
{ code: 'sv', label: 'Svenska', flag: '🇸🇪', currency: 'SEK' },
{ code: 'no', label: 'Norsk', flag: '🇳🇴', currency: 'NOK' },
{ code: 'da', label: 'Dansk', flag: '🇩🇰', currency: 'DKK' }];


const resources = {
  en: { translation: en }, de: { translation: de }, fr: { translation: fr }, es: { translation: es },
  it: { translation: it }, pt: { translation: pt }, nl: { translation: nl }, pl: { translation: pl },
  ru: { translation: ru }, uk: { translation: uk }, tr: { translation: tr }, ar: { translation: ar },
  el: { translation: el }, zh: { translation: zh }, ja: { translation: ja }, ko: { translation: ko },
  hi: { translation: hi }, ms: { translation: ms }, id: { translation: id }, th: { translation: th },
  vi: { translation: vi }, sv: { translation: sv }, no: { translation: no }, da: { translation: da }
};

const savedLang = typeof window !== 'undefined' ? localStorage.getItem('kj_lang') : null;

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;