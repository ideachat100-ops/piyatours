// =============================================
// PIYA TOURS SRI LANKA - Main JavaScript
// Author: W. Piyarathna Silva
// =============================================

// ---- DATA ----
// Unsplash free-to-use image URLs for Sri Lanka
const PHOTO_URLS = {
  // ── Hero banner slideshow: 4 iconic Sri Lanka tourism shots ──────────────
  hero: [
    // Nine Arches Bridge, Ella (Hendrik Cornelissen / Unsplash)
    "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // Sigiriya Rock Fortress aerial (Unsplash)
    "https://images.unsplash.com/photo-1588598198321-9735fd52455b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // Wild elephants herd Sri Lanka
    "https://images.unsplash.com/photo-1455157823797-3019317cbcf0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // Colombo city skyline / Lotus Tower
    "https://images.unsplash.com/photo-1665849050332-8d5d7e59afb6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  // ── About section — Beruwala beach ────────────────────────────────────────
  beruwala: "0003_piya.jpeg",
  // ── Package cards — exact location photos ─────────────────────────────────
  // Pkg 1 – Galle Fort / beach
  galle: "https://images.unsplash.com/photo-1650867715136-0774db12a0fb?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // Pkg 2 – Ella Nine Arches Bridge (Hendrik Cornelissen)
  ella: "https://images.unsplash.com/photo-1598955890270-d77cdb06d2bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // Pkg 3 – Yala wildlife
  yala: "https://images.unsplash.com/photo-1566708627877-859df13ae63e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // Pkg 4 – Elephants (Udawalawe/Pinnawala)
  elephant: "https://images.unsplash.com/photo-1736258813333-8a52d81776a9?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // Pkg 5 – Kandy Temple of the Tooth Relic / Dalada Maligawa (Chathura Anuradha Subasinghe)
  kandy: "https://images.unsplash.com/photo-1642095012223-65ee6d570974?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // Pkg 6 – Sigiriya Rock Fortress
  sigiriya: "https://plus.unsplash.com/premium_photo-1666254114402-cd16bc302aea?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // Pkg 7 – Colombo city / Lotus Tower
  colombo: "https://images.unsplash.com/photo-1740812517101-fee71e001ebc?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // Pkg 8 – Ella highlands / tea
  ella2: "https://plus.unsplash.com/premium_photo-1769871819635-517247b977f5?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // Pkg 9 – 3-day, same Ella highlands
  three_day: "https://images.unsplash.com/photo-1544015759-237f87d55ef3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

// Gallery photos - ONLY used in Gallery page, NOT in packages
const GALLERY_PHOTOS = [
  "0001_piya.jpeg",   // Guide + guests at Ella viewpoint
  "0002_piya.jpeg",   // Guide + couple at highland viewpoint
  "0003_piya.jpeg",   // Guide + group at tea plantation
  "0004_piya.jpeg",   // Guests picking tea leaves
  "0005 piya.jpeg",
  "0006 piya.jpeg",   // Guests riding elephant
  "0007 piya.jpeg",   // Guide + guests in jungle
  "0008 piya.jpeg",   // Guests in traditional dress
  "0009 piya.jpeg",   // Family + guide at Sigiriya with elephant
  "0010 piya.jpeg",
  "0011 piya.jpeg",   // Group at Nine Arches Bridge
  "0012 piya.jpeg",   // Safari jeep with leopard sighting
  "0013.jpeg",        // Wild peacock
  "0014 pia.jpeg",    // Leopard on ground
  "0016 piya.jpeg",   // Leopard in tree
  "0017 piya.jpeg",   // Eagle / hawk wildlife
  "0018 piya.jpeg",   // Elephant at sunset
  "0019 piya.jpeg",   // Wild elephant in jungle
];

const PACKAGES = [
  {
    id: 1, emoji: "🏖️",
    photo: PHOTO_URLS.galle,
    bg: "linear-gradient(135deg, #1a5276, #2e86ab)",
    name_en: "Galle Day Trip", name_ru: "Однодневный тур в Галле",
    type_en: "One Day Trip", type_ru: "Однодневная поездка",
    places_en: "Turtle Farm, Hikkaduwa Beach (Turtle), Moonstone Mines, Tsunami Photo Gallery, Galle Fort",
    places_ru: "Ферма Касба, Пляж Хикару (Черепахи), Шахты лунного камня, Фотогалерея цунами, Форт Галле",
    places_list_en: ["Turtle Farm", "Hikkaduwa Beach (Turtle watching)", "Moonstone Mines", "Tsunami Photo Gallery", "Galle Fort"],
    places_list_ru: ["Черепашьей ферме", "Хиккадува Хикару (наблюдение за черепахами)", "Шахты лунного камня", "Фотогалерея цунами", "Форт Галле"],
    price2: 120, price3: 130, oldPrice2: 145, oldPrice3: 160,
    desc_en: "Explore the historic Galle Fort, watch sea turtles on Hikkaduwa Beach, discover the fascinating moonstone mines, and learn about the 2004 tsunami at the moving photo gallery — all in one unforgettable day.",
    desc_ru: "Исследуйте исторический Форт Галле, понаблюдайте за морскими черепахами на пляже Хикару, откройте для себя увлекательные шахты лунного камня и узнайте о цунами 2004 года в трогательной фотогалерее — всё за один незабываемый день."
  },
  {
    id: 2, emoji: "🌿",
    photo: PHOTO_URLS.ella,
    bg: "linear-gradient(135deg, #1a3c0d, #2d6020)",
    name_en: "Ella Day Trip", name_ru: "Однодневный тур в Эллу",
    type_en: "One Day Trip", type_ru: "Однодневная поездка",
    places_en: "Rawana Waterfall, Adam's Peak, Nine Arches Bridge, Tea Plantations, Ride a train",
    places_ru: "Водопад Равана, Пик Адама, Мост Девяти Арок, Чайные плантации, Поездка на поезде",
    places_list_en: ["Rawana Waterfall", "Adam's Peak (Many viewpoints)", "Nine Arches Bridge", "Tea Plantations", "Ride a train"],
    places_list_ru: ["Водопад Равана", "Пик Адама (множество смотровых площадок)", "Мост Девяти Арок", "Чайные плантации", "Поездка на поезде"],
    price2: 220, price3: 250, oldPrice2: 265, oldPrice3: 300,
    desc_en: "Journey through the scenic highlands of Ella — stand before the stunning Nine Arches Bridge, feel the mist of Rawana Falls, and taste freshly made Ceylon tea straight from a working factory.",
    desc_ru: "Путешествуйте по живописным нагорьям Эллы — восхититесь потрясающим Мостом Девяти Арок, ощутите туман водопада Равана и попробуйте свежезаваренный цейлонский чай прямо с работающей фабрики."
  },
  {
    id: 3, emoji: "🐆",
    photo: PHOTO_URLS.yala,
    bg: "linear-gradient(135deg, #5c3317, #8b6914)",
    name_en: "Ella & Yala Day Trip", name_ru: "Элла и Яла — однодневный тур",
    type_en: "One Day Trip", type_ru: "Однодневная поездка",
    places_en: "Rawana Waterfall, Adam's Peak, Nine Arches, Tea Plantations, Ride a train, Yala Safari",
    places_ru: "Водопад Равана, Пик Адама, Девять Арок, Чайные плантации, Поездка на поезде, Сафари в Яла",
    places_list_en: ["Rawana Waterfall", "Adam's Peak viewpoints", "Nine Arches Bridge", "Tea Plantations", "Ride a train", "Yala National Park Safari (Leopards, Elephants, Crocodiles)"],
    places_list_ru: ["Водопад Равана", "Смотровые площадки Пика Адама", "Мост Девяти Арок", "Чайные плантации","Поездка на поезде", "Сафари в Нац. парке Яла (Леопарды, Слоны, Крокодилы)"],
    price2: 340, price3: 375, oldPrice2: 380, oldPrice3: 445,
    desc_en: "The ultimate combo — Ella's breathtaking scenery PLUS a thrilling Yala National Park safari. Home to one of the world's highest densities of leopards, Yala guarantees wildlife encounters you'll never forget.",
    desc_ru: "Идеальная комбинация — захватывающие пейзажи Эллы ПЛЮС захватывающее сафари в Национальном парке Яла. Яла — один из регионов мира с наибольшей плотностью леопардов, здесь вас ждут незабываемые встречи с дикой природой."
  },
  {
    id: 4, emoji: "🐘",
    photo: PHOTO_URLS.elephant,
    bg: "linear-gradient(135deg, #1a3c28, #0d7a3e)",
    name_en: "Ella & Udawalawe", name_ru: "Элла и Удавалаве",
    type_en: "One Day Trip", type_ru: "Однодневная поездка",
    places_en: "Rawana Waterfall, Adam's Peak, Nine Arches, Tea Plantations, Ride a train, Elephant Feeding, Udawalawe Safari",
    places_ru: "Водопад Равана, Пик Адама, Девять Арок, Чайные плантации,  Поездка на поезде, Кормление слонят молоком, Сафари Удавалаве",
    places_list_en: ["Rawana Waterfall", "Adam's Peak viewpoints", "Nine Arches Bridge", "Tea Plantations","Ride a train", "Baby Elephant Milk Feeding", "Udawalawe National Park Safari"],
    places_list_ru: ["Водопад Равана", "Смотровые площадки Пика Адама", "Мост Девяти Арок", "Чайные плантации"," Поездка на поезде", "Кормление слонят молоком", "Сафари в Нац. парке Удавалаве"],
    price2: 330, price3: 360, oldPrice2: 370, oldPrice3: 435,
    desc_en: "Experience the magic of Ella's highlands combined with the heartwarming experience of feeding baby elephants by hand and a thrilling Udawalawe safari to see wild elephant herds.",
    desc_ru: "Ощутите волшебство нагорий Эллы в сочетании с трогательным опытом кормления слонят из рук и захватывающим сафари в Удавалаве, где можно увидеть стада диких слонов."
  },
  {
    id: 5, emoji: "🏛️",
    photo: PHOTO_URLS.kandy,
    bg: "linear-gradient(135deg, #2d1a5a, #5a3099)",
    name_en: "Kandy Day Trip", name_ru: "Однодневный тур в Канди",
    type_en: "One Day Trip", type_ru: "Однодневная поездка",
    places_en: "Temple of Sacred Tooth Relic, Royal Botanic Gardens, Tea Plantation, Tea Factory",
    places_ru: "Храм Зуба Будды, Королевский ботанический сад, Чайная плантация, Чайная фабрика",
    places_list_en: ["Temple of the Sacred Tooth Relic", "Royal Botanic Gardens, Peradeniya", "Tea Plantation & Factory tour", "pinnawala Elephant Orphanage and Elephant feeding"],
    places_list_ru: ["Храм Зуба Будды", "Королевский ботанический сад, Перадения", "Экскурсия на чайную плантацию и фабрику", "Слоновий приют Пиннавала и кормление слонов"],
    price2: 270, price3: 310, oldPrice2: 325, oldPrice3: 375,
    desc_en: "Discover Kandy — the cultural capital of Sri Lanka. Home to the sacred Temple of the Tooth Relic, one of Buddhism's most important pilgrimage sites, plus the stunning Royal Botanic Gardens.",
    desc_ru: "Откройте для себя Канди — культурную столицу Шри-Ланки. Здесь находится священный Храм Зуба Будды — одно из важнейших буддийских мест паломничества, а также потрясающий Королевский ботанический сад."
  },
  {
    id: 6, emoji: "🗿",
    photo: PHOTO_URLS.sigiriya,
    bg: "linear-gradient(135deg, #3d1a00, #8b4000)",
    name_en: "Sigiriya Day Trip", name_ru: "Однодневный тур в Сигирию",
    type_en: "One Day Trip", type_ru: "Однодневная поездка",
    places_en: "Sigiriya Rock Fortress, Rangiri Dambulla Cave Temple, Golden Temple of Dambulla",
    places_ru: "Скальная крепость Сигирия, Пещерный храм Дамбулла, Золотой храм Дамбулла",
    places_list_en: ["Sigiriya Rock Fortress (UNESCO Heritage)", "Rangiri Dambulla Cave Temple (UNESCO Heritage)", "Golden Temple of Dambulla"],
    places_list_ru: ["Скальная крепость Сигирия (Наследие ЮНЕСКО)", "Пещерный храм Рангири Дамбулла (Наследие ЮНЕСКО)", "Золотой храм Дамбулла"],
    price2: 310, price3: 360, oldPrice2: 375, oldPrice3: 435,
    desc_en: "Climb the magnificent 200-metre Sigiriya Rock Fortress — one of Sri Lanka's most iconic UNESCO World Heritage Sites. Explore the ancient cave temples of Dambulla with their magnificent golden Buddha statues.",
    desc_ru: "Поднимитесь на великолепную 200-метровую скальную крепость Сигирия — один из самых знаковых объектов Всемирного наследия ЮНЕСКО в Шри-Ланке. Исследуйте древние пещерные храмы Дамбулла с их великолепными золотыми статуями Будды."
  },
  {
    id: 7, emoji: "🏙️",
    photo: PHOTO_URLS.colombo,
    bg: "linear-gradient(135deg, #0d2137, #1a6b8a)",
    name_en: "Colombo Day Trip", name_ru: "Однодневный тур в Коломбо",
    type_en: "One Day Trip", type_ru: "Однодневная поездка",
    places_en: "Park City, Gangarama Temple, Lotus Tower, Hindu Temple, Rathu Palliya Mosque, Viharamahadevi Park, Shopping Mall",
    places_ru: "Парк Сити, Храм Гангарама, Башня Лотоса, Индуистский храм, Мечеть Рату Палия, Парк Вихарамахадеви, Торговый центр",
    places_list_en: ["Port City Colombo", "Gangarama Buddhist Temple", "Lotus Tower (Nelum Kuluna)", "Hindu Temple", "Rathu Palliya Mosque", "Viharamahadevi Park", "Shopping Mall"],
    places_list_ru: ["Порт Сити Коломбо", "Буддийский храм Гангарама", "Башня Лотоса (Нелум Кулуна)", "Индуистский храм", "Мечеть Рату Палия", "Парк Вихарамахадеви", "Торговый центр"],
    price2: 110, price3: 130, oldPrice2: 135, oldPrice3: 160,
    desc_en: "Explore Colombo — Sri Lanka's vibrant capital. Discover the multicultural heart of the city with its stunning Buddhist temples, colonial mosques, Hindu shrines, and the iconic Lotus Tower soaring above the skyline.",
    desc_ru: "Исследуйте Коломбо — оживлённую столицу Шри-Ланки. Откройте для себя многокультурное сердце города с его потрясающими буддийскими храмами, колониальными мечетями, индуистскими святынями и знаменитой Башней Лотоса, возвышающейся над горизонтом."
  },
  {
    id: 8, emoji: "🌄",
    photo: PHOTO_URLS.ella2,
    bg: "linear-gradient(135deg, #0d2b0d, #1a5c1a)",
    name_en: "Ella 2-Day Trip (Standard)", name_ru: "Двухдневный тур в Эллу (Стандарт)",
    type_en: "Two Day Trip", type_ru: "Двухдневная поездка",
    places_en: "Day 1: Rawana Waterfall, Adam's Peak, Nine Arches, Tea Plantations & Factory, Nuwara Eliya City, Old Post Office | Day 2: Botanical Garden, Ambuluwawa, Sigiriya,",
    places_ru: "День 1: Водопад Равана, Пик Адама, Девять Арок, Чайные плантации и фабрика, Нувара Элия, Старое почтовое отделение | День 2: Ботанический сад, Амбулувава, Сигирия,",
    places_list_en: ["Day 1: Rawana Waterfall, Adam's Peak, Nine Arches, Tea Plantations & Factory, Nuwara Eliya City, Old Post Office", "Day 2: Botanical Garden, Ambuluwawa Tower, Sigiriya Rock Fortress,"],
    places_list_ru: ["День 1: Водопад Равана, Пик Адама, Мост Девяти Арок, Чайные плантации и фабрика, Город Нувара Элия, Старое почтовое отделение", "День 2: Ботанический сад, Башня Амбулувава, Скальная крепость Сигирия,"],
    price2: 625, price3: 680, oldPrice2: 755, oldPrice3: 820,
    desc_en: "A comprehensive two-day Highland & Cultural Tour. Immerse yourself in Sri Lanka's scenic hill country, meet elephants at Pinnawala, and conquer the iconic Sigiriya Rock Fortress on day two.",
    desc_ru: "Комплексный двухдневный тур по нагорьям и культурным достопримечательностям. Погрузитесь в живописную горную местность Шри-Ланки, познакомьтесь со слонами в Пиннавале и покорьте знаменитую скальную крепость Сигирия на второй день."
  },
  {
    id: 9, emoji: "✨",
    photo: PHOTO_URLS.three_day,
    bg: "linear-gradient(135deg, #2d1a5a, #8b1a4a)",
    name_en: "Ella 3-Day Premium (Your Pace)", name_ru: "Элла 3-дневный Премиум (В вашем темпе)",
    type_en: "Three Day Trip", type_ru: "Трёхдневная поездка",
    places_en: "Day 1: Rawana Waterfall, Adam's Peak, Nine Arches, Tea Plantations & Factory, Nuwara Eliya | Day 2: Botanical Garden, Ambuluwawa, Pinnawala, Sigiriya,  | ⭐ Same as 2-Day tour — but with 3 days you take as much time as you want at every place!",
    places_ru: "День 1: Водопад Равана, Пик Адама, Девять Арок, Чайные плантации, Нувара Элия | День 2: Ботанический сад, Амбулувава, Пиннавала, Сигирия,  | ⭐ Те же места что и в 2-дневном туре — но за 3 дня вы можете проводить столько времени, сколько хотите!",
    places_list_en: [
      "🌅 Day 1: Rawana Waterfall, Adam's Peak viewpoints, Nine Arches Bridge, Tea Plantations & Factory, Nuwara Eliya City, Old Post Office",
      "🗿 Day 2: Botanical Garden, Ambuluwawa Tower, Pinnawala Elephant Orphanage",
      "🌺 Day 3: , Sigiriya Rock Fortress, Rangiri Dambulla Cave Temple (UNESCO Heritage), Golden Temple of Dambulla",
      "⭐ SPECIAL: In addition to these three days, you can travel for as many days as you want and have the opportunity to add your favorite places to visit."
    ],
    places_list_ru: [
      "🌅 День 1: Водопад Равана, Смотровые площадки Пика Адама, Мост Девяти Арок, Чайные плантации и фабрика, Город Нувара Элия, Старое почтовое отделение",
      "🗿 День 2: Ботанический сад, Башня Амбулувава, Приют слонов Пиннавала",
      "🌺 День 3: Скальная крепость Сигирия, пещерный храм Рангири Дамбулла (Наследие ЮНЕСКО), Золотой храм Дамбуллы",
      "⭐ ОСОБЕННОСТЬ: Помимо этих трех дней, вы можете путешествовать столько дней, сколько захотите, и у вас будет возможность добавить в свой маршрут ваши любимые места для посещения."
    ],
    price2: 695, price3: 750, oldPrice2: 840, oldPrice3: 905,
    desc_en: "Same amazing route as our 2-Day Ella Tour — Rawana Waterfall, Nine Arches Bridge, Tea Plantations, Pinnawala Elephants, and Sigiriya Rock — but spread across 3 full days. The extra day means you never feel rushed. Spend an hour longer at Nine Arches, linger at the tea factory, or simply soak in the highland air. Perfect for travellers who want to truly savour every moment.",
    desc_ru: "Тот же удивительный маршрут, что и в нашем 2-дневном туре по Элле — водопад Равана, Мост Девяти Арок, чайные плантации, слоны Пиннавалы и скала Сигирия — но растянутый на 3 полных дня. Дополнительный день означает, что вы никогда не чувствуете спешки. Проведите лишний час у Девяти Арок, задержитесь на чайной фабрике или просто наслаждайтесь горным воздухом. Идеально для путешественников, которые хотят по-настоящему насладиться каждым моментом."
  },
  {
    id: 10, emoji: "🎨",
    photo: "https://images.unsplash.com/photo-1540202404-d0c7fe46a087?w=900&q=80",
    bg: "linear-gradient(135deg, #1a0a2e, #4a1060)",
    name_en: "Customize Your Own Tour", name_ru: "Создайте свой тур",
    type_en: "Fully Flexible — Any Duration", type_ru: "Полностью гибко — любая длительность",
    places_en: "You choose! Any destination in Sri Lanka — Ella, Sigiriya, Yala, Kandy, Galle, Colombo, Udawalawe, Nuwara Eliya, beaches, temples, wildlife & more",
    places_ru: "Вы выбираете! Любое направление в Шри-Ланке — Элла, Сигирия, Яла, Канди, Галле, Коломбо, Удавалаве, Нувара Элия, пляжи, храмы, дикая природа и многое другое",
    places_list_en: ["You choose! Any destination in Sri Lanka — Ella, Sigiriya, Yala, Kandy, Galle, Colombo, Udawalawe, Nuwara Eliya, beaches, temples, wildlife & more"],
    places_list_ru: ["День 1: Водопад Равана, Пик Адама, Мост Девяти Арок, Чайные плантации и фабрика, Город Нувара Элия, Старое почтовое отделение", "День 2: Ботанический сад, Башня Амбулувава, Приют слонов Пиннавала, Скальная крепость Сигирия, Чайная плантация"],
  } 
];

const GALLERY_ITEMS = [
  { emoji: "🏔️", label_en: "..", label_ru: "..", bg: "linear-gradient(135deg, #1a3c0d, #2d6020)" },
  { emoji: "🌄", label_en: "..", label_ru: "..", bg: "linear-gradient(135deg, #0d3322, #1a5c3a)" },
  { emoji: "🍵", label_en: "..", label_ru: "..", bg: "linear-gradient(135deg, #1a4a0d, #2d7020)" },
  { emoji: "🌱", label_en: "..", label_ru: "..", bg: "linear-gradient(135deg, #0d3a1a, #1a6030)" },
  { emoji: "🐘", label_en: "..", label_ru: "..", bg: "linear-gradient(135deg, #1a3c28, #0d7a3e)" },
  { emoji: "🌳", label_en: "..", label_ru: "..", bg: "linear-gradient(135deg, #0d2b0d, #1a5c1a)" },
  { emoji: "👘", label_en: "..", label_ru: "..", bg: "linear-gradient(135deg, #5c1a1a, #a03030)" },
  { emoji: "🗿", label_en: "..", label_ru: "..", bg: "linear-gradient(135deg, #3d1a00, #8b4000)" },
  { emoji: "👥", label_en: "..", label_ru: "..", bg: "linear-gradient(135deg, #1a2744, #2d4a8a)" },
  { emoji: "🚙", label_en: "..", label_ru: "..", bg: "linear-gradient(135deg, #4a3000, #8b6600)" },
  { emoji: "🦚", label_en: "..", label_ru: "..", bg: "linear-gradient(135deg, #0d3322, #1a6640)" },
  { emoji: "🐆", label_en: "..", label_ru: "..", bg: "linear-gradient(135deg, #5c3317, #a06020)" },
  { emoji: "🐆", label_en: "..", label_ru: "..", bg: "linear-gradient(135deg, #0d2137, #1a4a6a)" },
  { emoji: "🦅", label_en: "..", label_ru: "..", bg: "linear-gradient(135deg, #1a1a2d, #2d2d5a)" },
  { emoji: "🌅", label_en: "..", label_ru: "..", bg: "linear-gradient(135deg, #4a1a00, #8b3a00)" },
  { emoji: "🐘", label_en: "..", label_ru: "..", bg: "linear-gradient(135deg, #1a3c0d, #3a6020)" },
];

const DEFAULT_REVIEWS = [
  { name: "Anna K.", stars: 5, date: "2024-11", text_en: "Absolutely amazing experience! Piyarathna is an incredible guide — knowledgeable, funny, and caring. The Ella tour was breathtaking. 100% recommended!", text_ru: "Абсолютно потрясающий опыт! Пиятна — невероятный гид — знающий, веселый и заботливый. Тур в Эллу был захватывающим. Рекомендую на 100%!" },
  { name: "Sergei & Olga", stars: 5, date: "2024-10", text_en: "We did the Ella & Yala combo and it was the highlight of our Sri Lanka trip! Saw leopards, elephants and the views were stunning. Very professional service.", text_ru: "Мы делали комбо Элла и Яла, и это было главным событием нашей поездки в Шри-Ланку! Видели леопардов, слонов, виды были потрясающие. Очень профессиональный сервис." },
  { name: "Maria L.", stars: 5, date: "2024-09", text_en: "The Sigiriya tour was unforgettable. Piyarathna explained every detail about the history. The sunrise climb was worth every step! Will book again.", text_ru: "Тур в Сигирию был незабываемым. Пиятна подробно объяснял каждую деталь истории. Подъем на рассвете стоил каждого шага! Обязательно забронирую снова." },
];

// ---- LANGUAGE ----
let currentLang = 'ru';

function toggleLang() {
  currentLang = currentLang === 'en' ? 'ru' : 'en';
  const btn = document.getElementById('langBtn');
  btn.textContent = currentLang === 'en' ? '🇬🇧 EN' : '🇷🇺 RU';
  applyLang();
}

function applyLang() {
  document.body.setAttribute('data-lang', currentLang);
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute('data-' + currentLang) || el.textContent;
  });
  // Update package selects
  updatePackageSelects();
  // Re-render dynamic content
  renderHomePackages();
  renderFullPackages();
  renderGallery();
}

function t(obj) {
  return obj['_' + currentLang] || obj['_en'] || '';
}

function pkg(p, key) {
  return p[key + '_' + currentLang] || p[key + '_en'];
}

// ---- NAVIGATION ----
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-' + name);
  if (page) page.classList.add('active');
  // Close mobile menu
  document.getElementById('navLinks').classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Update active nav
  document.querySelectorAll('.nav-links a').forEach(a => a.style.color = '');
}

// Hamburger
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// Navbar scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 60) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

// ---- RENDER PACKAGES ----
function renderPackageCard(pkg, isHome) {
  const name = pkg['name_' + currentLang];
  const type = pkg['type_' + currentLang];
  const places = pkg['places_' + currentLang];
  const disc2 = Math.round((1 - pkg.price2 / pkg.oldPrice2) * 100);

  const imgContent = pkg.photo
    ? `<img src="${pkg.photo}" alt="${name}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'pkg-img-placeholder\\'>${pkg.emoji}</div>'">`
    : `<div class="pkg-img-placeholder">${pkg.emoji}</div>`;

  return `
    <div class="pkg-card" onclick="openPackage(${pkg.id})">
      <div class="pkg-img" style="background: ${pkg.bg}">
        ${imgContent}
        <div class="pkg-badge">${type}</div>
        <div class="pkg-discount">-${disc2}% OFF</div>
      </div>
      <div class="pkg-body">
        <h3>${name}</h3>
        <p class="pkg-places">${places.split(',').slice(0, 3).join(' • ')}</p>
        <div class="pkg-price">
          <span class="price-main">$${pkg.price2}</span>
          <span class="price-old">$${pkg.oldPrice2}</span>
          <span class="price-label">${currentLang === 'en' ? '2 persons' : '2 чел.'}</span>
        </div>
        <button class="btn-primary" onclick="openPackage(${pkg.id}); event.stopPropagation();">
          ${currentLang === 'en' ? 'View Details' : 'Подробнее'}
        </button>
      </div>
    </div>
  `;
}

function renderHomePackages() {
  const grid = document.getElementById('homePackagesGrid');
  if (!grid) return;
  const show = PACKAGES.slice(0, 4);
  grid.innerHTML = show.map(p => renderPackageCard(p, true)).join('');
}

function renderFullPackages() {
  const grid = document.getElementById('fullPackagesGrid');
  if (!grid) return;
  grid.innerHTML = PACKAGES.map(p => renderPackageCard(p, false)).join('');
}

function openPackage(id) {
  const p = PACKAGES.find(pk => pk.id === id);
  if (!p) return;
  const modal = document.getElementById('packageModal');
  const content = document.getElementById('modalContent');
  const name = p['name_' + currentLang];
  const type = p['type_' + currentLang];
  const desc = p['desc_' + currentLang];
  const places = p['places_list_' + currentLang];
  const disc2 = Math.round((1 - p.price2 / p.oldPrice2) * 100);
  const disc3 = Math.round((1 - p.price3 / p.oldPrice3) * 100);
  const bookLabel = currentLang === 'en' ? 'Book Now via WhatsApp' : 'Забронировать через WhatsApp';
  const inclLabel = currentLang === 'en' ? 'All prices include tickets & entrance fees' : 'Все цены включают билеты и входные сборы';
  const perLabel = currentLang === 'en' ? 'per person' : 'за чел.';
  const p2Label = currentLang === 'en' ? '2 Persons' : '2 Человека';
  const p3Label = currentLang === 'en' ? '3 Persons' : '3 Человека';
  const placesLabel = currentLang === 'en' ? 'Visit Places' : 'Места посещения';
  const pricingLabel = currentLang === 'en' ? 'Pricing (with tickets and comfottable rooms included)' : 'Цены (билеты включены)';

  const imgHtml = p.photo
    ? `<img src="${p.photo}" alt="${name}" style="width:100%;height:220px;object-fit:cover;" onerror="this.parentElement.innerHTML='<span style=\\'font-size:80px\\'>${p.emoji}</span>'">`
    : `<span style="font-size:80px">${p.emoji}</span>`;

  content.innerHTML = `
    <div class="modal-pkg-header" style="background: ${p.bg}">
      ${imgHtml}
    </div>
    <div class="modal-body">
      <h2>${name}</h2>
      <span class="modal-badge">${type}</span>
      <p style="color: var(--text-light); margin-bottom: 20px; font-size: 15px; line-height: 1.7">${desc}</p>
      <div class="modal-places">
        <strong>${placesLabel}</strong>
        <ul>${places.map(pl => `<li>${pl}</li>`).join('')}</ul>
      </div>
      <div class="modal-price-box">
        <h4>${pricingLabel}</h4>
        <div class="price-row">
          <span class="label">👥 ${p2Label}</span>
          <div class="prices">
            <span class="old-price">$${p.oldPrice2}</span>
            <span class="new-price">$${p.price2}</span>
            <span class="discount-tag">-${disc2}%</span>
          </div>
        </div>
        <div class="price-row">
          <span class="label">👥 ${p3Label}</span>
          <div class="prices">
            <span class="old-price">$${p.oldPrice3}</span>
            <span class="new-price">$${p.price3}</span>
            <span class="discount-tag">-${disc3}%</span>
          </div>
        </div>
        <p style="font-size:12px; color: var(--text-light); margin-top: 8px;">✅ ${inclLabel}</p>
      </div>
      <div class="modal-book-btn">
        <a href="https://wa.me/94777544354?text=${encodeURIComponent('Hello! I would like to book: ' + p.name_en)}" 
           class="whatsapp-btn" target="_blank">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          ${bookLabel}
        </a>
      </div>
    </div>
  `;
  modal.classList.add('open');
}

function closeModal(event) {
  if (!event || event.target === document.getElementById('packageModal') || event.currentTarget.classList.contains('modal-close')) {
    document.getElementById('packageModal').classList.remove('open');
  }
}

// ---- GALLERY ----
let galleryImages = [];
let lbIndex = 0;

function renderGallery() {
  const homeGrid = document.getElementById('homeGalleryGrid');
  const fullGrid = document.getElementById('fullGalleryGrid');

  galleryImages = GALLERY_ITEMS;

  // Home preview - 6 photos
  const homeHTML = GALLERY_ITEMS.slice(0, 6).map((item, i) => {
    const h = i === 0 ? '360px' : '180px';
    return `
    <div class="g-item" onclick="openLightbox(${i})" style="min-height:${h}">
      <img src="${GALLERY_PHOTOS[i]}" alt="${item['label_' + currentLang]}"
           style="width:100%;height:${h};object-fit:cover;display:block;transition:transform 0.4s ease;"
           loading="lazy"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="g-placeholder" style="background:${item.bg};min-height:${h};display:none;">
        <span style="font-size:${i===0?'80px':'50px'}">${item.emoji}</span>
        <span>${item['label_' + currentLang]}</span>
      </div>
    </div>`;
  }).join('');
  if (homeGrid) homeGrid.innerHTML = homeHTML;

  // Full gallery - all 10 photos in clean ordered grid
  const fullHTML = GALLERY_ITEMS.map((item, i) => `
    <div class="g-item g-item-full" onclick="openLightbox(${i})">
      <img src="${GALLERY_PHOTOS[i]}" alt="${item['label_' + currentLang]}"
           style="width:100%;height:260px;object-fit:cover;display:block;"
           loading="lazy"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="g-placeholder" style="background:${item.bg};min-height:260px;display:none;">
        <span style="font-size:60px">${item.emoji}</span>
        <span>${item['label_' + currentLang]}</span>
      </div>
      <div class="g-caption">${item['label_' + currentLang]}</div>
    </div>
  `).join('');
  if (fullGrid) fullGrid.innerHTML = fullHTML;
}

function openLightbox(index) {
  lbIndex = index;
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lbImg');
  img.src = GALLERY_PHOTOS[index];
  img.alt = galleryImages[index]['label_' + currentLang];
  lb.classList.add('open');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}

function lbNav(dir, event) {
  event && event.stopPropagation();
  lbIndex = (lbIndex + dir + galleryImages.length) % galleryImages.length;
  openLightbox(lbIndex);
}

// ---- REVIEWS — handled by Tagembed widget ----


// ---- PACKAGE SELECTS ----
function updatePackageSelects() {
  const selects = document.querySelectorAll('#hcPackage, #cPackage, #reviewTour');
  selects.forEach(sel => {
    const val = sel.value;
    sel.innerHTML = `<option value="">${currentLang === 'en' ? 'Select Package' : 'Выберите тур'}</option>`;
    PACKAGES.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p['name_en'];
      opt.textContent = p['name_' + currentLang];
      sel.appendChild(opt);
    });
    sel.value = val;
  });
}

// ---- WHATSAPP CONTACT ----
function sendWhatsApp(source) {
  let name, phone, pkg, message, date = '';
  
  if (source === 'home') {
    name = document.getElementById('hcName').value.trim();
    phone = document.getElementById('hcPhone').value.trim();
    pkg = document.getElementById('hcPackage').value;
    message = document.getElementById('hcMessage').value.trim();
  } else {
    name = document.getElementById('cName').value.trim();
    phone = document.getElementById('cPhone').value.trim();
    pkg = document.getElementById('cPackage').value;
    date = document.getElementById('cDate').value.trim();
    message = document.getElementById('cMessage').value.trim();
  }
  
  if (!name) {
    alert(currentLang === 'en' ? 'Please enter your name.' : 'Пожалуйста, введите ваше имя.');
    return;
  }

  let text = `🌴 *Piya Tours Sri Lanka — New Inquiry*\n\n`;
  text += `👤 Name: ${name}\n`;
  if (phone) text += `📱 Phone: ${phone}\n`;
  if (pkg) text += `🗺️ Package: ${pkg}\n`;
  if (date) text += `📅 Date: ${date}\n`;
  if (message) text += `💬 Message: ${message}\n`;
  text += `\n_Sent from Piya Tours Website_`;
  
  const url = `https://wa.me/94777544354?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// ---- FIREBASE GALLERY ----
let INITIAL_PHOTOS = null;
let INITIAL_ITEMS = null;

function loadFirebaseGallery() {
  if (typeof firebase === 'undefined' || !firebase.apps.length) return;
  
  if (!INITIAL_PHOTOS) {
    INITIAL_PHOTOS = [...GALLERY_PHOTOS];
    INITIAL_ITEMS = [...GALLERY_ITEMS];
  }

  const db = firebase.database();
  
  // Listen for both deleted_local and gallery
  db.ref('deleted_local').on('value', (delSnapshot) => {
    const deletedData = delSnapshot.val() || {};
    const deletedLocalPhotos = Object.values(deletedData);
    
    db.ref('gallery').once('value').then((snapshot) => {
      renderCombinedGallery(snapshot.val(), deletedLocalPhotos);
    });
  });

  db.ref('gallery').on('value', (snapshot) => {
    db.ref('deleted_local').once('value').then((delSnapshot) => {
      const deletedData = delSnapshot.val() || {};
      const deletedLocalPhotos = Object.values(deletedData);
      renderCombinedGallery(snapshot.val(), deletedLocalPhotos);
    });
  });
}

function renderCombinedGallery(galleryData, deletedLocalPhotos) {
  const localPhotos = [];
  const localItems = [];

  INITIAL_PHOTOS.forEach((photo, index) => {
    if (!deletedLocalPhotos.includes(photo)) {
      localPhotos.push(photo);
      localItems.push(INITIAL_ITEMS[index] || INITIAL_ITEMS[0]);
    }
  });

  const firebasePhotos = [];
  const firebaseItems = [];
  
  if (galleryData) {
    const photosArray = Object.keys(galleryData).map(key => galleryData[key]).sort((a, b) => b.timestamp - a.timestamp);
    
    photosArray.forEach(photo => {
      firebasePhotos.push(photo.url);
      firebaseItems.push({
        emoji: "📸", 
        label_en: photo.label_en || "Gallery Image",
        label_ru: photo.label_ru || "Галерея Изображение",
        bg: "linear-gradient(135deg, #1a2744, #2d4a8a)"
      });
    });
  }
  
  GALLERY_PHOTOS.splice(0, GALLERY_PHOTOS.length, ...localPhotos, ...firebasePhotos);
  GALLERY_ITEMS.splice(0, GALLERY_ITEMS.length, ...localItems, ...firebaseItems);
  
  // Only call renderGallery if we are on the main page (where grids exist)
  if (document.getElementById('homeGalleryGrid') || document.getElementById('fullGalleryGrid')) {
    renderGallery();
  }
}

// ---- INIT ----
function init() {
  if (!document.getElementById('homePackagesGrid')) {
    // If not on main page (e.g. admin panel), just load firebase logic to populate arrays
    loadFirebaseGallery();
    return;
  }
  
  renderHomePackages();
  renderFullPackages();
  renderGallery();
  updatePackageSelects();
  startHeroSlideshow();
  injectBeruwalPhoto();
  injectHeroBranding();
  loadFirebaseGallery();
  loadApprovedReviews();
  setupReviewsStars();
}

document.addEventListener('DOMContentLoaded', init);

// ---- HERO SLIDESHOW ----
let heroIndex = 0;
function startHeroSlideshow() {
  const heroBg = document.querySelector('.hero-bg');
  if (!heroBg) return;

  // Inject slideshow container
  heroBg.innerHTML = `
    <div id="heroSlides" style="position:absolute;inset:0;z-index:0;"></div>
    <div class="hero-overlay" style="z-index:1;position:absolute;inset:0;background:linear-gradient(to right, rgba(5,15,30,0.78) 0%, rgba(5,15,30,0.50) 55%, rgba(5,15,30,0.15) 100%),linear-gradient(to top, rgba(5,15,30,0.55) 0%, transparent 50%);"></div>
    <div class="hero-shapes" style="z-index:2;position:absolute;inset:0;overflow:hidden;">
      <div class="shape s1"></div><div class="shape s2"></div><div class="shape s3"></div>
    </div>
    <div class="hero-slide-dots" id="heroDots" style="position:absolute;bottom:80px;left:max(20px,5vw);z-index:3;display:flex;gap:8px;"></div>`;

  const slides = document.getElementById('heroSlides');
  PHOTO_URLS.hero.forEach((url, i) => {
    const div = document.createElement('div');
    div.style.cssText = `position:absolute;inset:0;background:url('${url}') center/cover no-repeat;transition:opacity 1.4s ease;opacity:${i===0?1:0};`;
    slides.appendChild(div);
  });

  // Dot indicators
  const dots = document.getElementById('heroDots');
  PHOTO_URLS.hero.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.style.cssText = `width:${i===0?'24px':'8px'};height:8px;border-radius:4px;background:${i===0?'var(--gold)':'rgba(255,255,255,0.4)'};transition:all 0.4s ease;cursor:pointer;`;
    dot.onclick = () => goToSlide(i);
    dots.appendChild(dot);
  });

  setInterval(() => {
    const allSlides = slides.children;
    allSlides[heroIndex].style.opacity = '0';
    heroIndex = (heroIndex + 1) % allSlides.length;
    allSlides[heroIndex].style.opacity = '1';
    // Update dots
    Array.from(dots.children).forEach((d, i) => {
      d.style.width = i === heroIndex ? '24px' : '8px';
      d.style.background = i === heroIndex ? 'var(--gold)' : 'rgba(255,255,255,0.4)';
    });
  }, 5000);
}

function goToSlide(idx) {
  const slides = document.getElementById('heroSlides');
  const dots = document.getElementById('heroDots');
  if (!slides || !dots) return;
  slides.children[heroIndex].style.opacity = '0';
  heroIndex = idx;
  slides.children[heroIndex].style.opacity = '1';
  Array.from(dots.children).forEach((d, i) => {
    d.style.width = i === heroIndex ? '24px' : '8px';
    d.style.background = i === heroIndex ? 'var(--gold)' : 'rgba(255,255,255,0.4)';
  });
}

// ---- INJECT LOGO + GUIDE PHOTO into hero right side ----
function injectHeroBranding() {
  const heroSection = document.querySelector('.hero');
  if (!heroSection) return;

  // Create floating branding card on the right side of hero
  const card = document.createElement('div');
  card.className = 'hero-branding-card';
  card.innerHTML = `
    <div class="hbc-inner">
      <img src="LOGO.jpg" alt="Piya Tours Logo" class="hbc-logo">
      <div class="hbc-divider"></div>
      <img src="guide_photo.png" alt="W. Piyarathna Silva" class="hbc-guide">
      <div class="hbc-name">W. Piyarathna Silva</div>
      <div class="hbc-role" id="hbcRole">Your Personal Guide</div>
    </div>`;
  heroSection.appendChild(card);
  // Apply lang
  card.querySelector('#hbcRole').setAttribute('data-en', 'Your Personal Guide');
  card.querySelector('#hbcRole').setAttribute('data-ru', 'Ваш личный гид');
}

// ---- BERUWALA PHOTO ----
function injectBeruwalPhoto() {
  const placeholder = document.querySelector('.about-img-bg');
  if (!placeholder) return;
  placeholder.innerHTML = '';
  placeholder.style.cssText = `border-radius:16px;height:420px;background:url('${PHOTO_URLS.beruwala}') center/cover no-repeat;position:relative;overflow:hidden;`;
  // overlay label
  const label = document.createElement('div');
  label.style.cssText = 'position:absolute;bottom:0;left:0;right:0;padding:16px 20px;background:linear-gradient(transparent,rgba(0,0,0,0.65));color:white;font-size:14px;font-weight:600;';
  label.innerHTML = '📍 Beruwala, Sri Lanka';
  placeholder.appendChild(label);
}

// =============================================
// CUSTOM REVIEWS LOGIC (FIREBASE BACKED)
// =============================================

function loadApprovedReviews() {
  const reviewsGrid = document.getElementById('reviewsGrid');
  if (!reviewsGrid) return;

  if (typeof firebase === 'undefined' || !firebase.apps.length) {
    renderReviewsList(DEFAULT_REVIEWS);
    return;
  }

  const db = firebase.database();
  db.ref('reviews').on('value', (snapshot) => {
    const data = snapshot.val();
    let reviewsList = [];
    
    if (data) {
      reviewsList = Object.keys(data)
        .map(key => ({ id: key, ...data[key] }));
    }
    
    reviewsList.sort((a, b) => {
      const timeA = a.timestamp || 0;
      const timeB = b.timestamp || 0;
      return timeB - timeA; // Newest first
    });

    // Merge with default reviews to ensure rich content
    const combined = [...reviewsList];
    DEFAULT_REVIEWS.forEach(dr => {
      const matchText = currentLang === 'ru' ? dr.text_ru : dr.text_en;
      if (!combined.some(r => r.name === dr.name && (r.text === matchText || r.text_en === dr.text_en))) {
        combined.push({
          name: dr.name,
          rating: dr.stars || 5,
          date: dr.date,
          text: matchText,
          tour: dr.tour || ''
        });
      }
    });
    
    renderReviewsList(combined);
  }, (error) => {
    console.error("Error loading reviews:", error);
    renderReviewsList(DEFAULT_REVIEWS);
  });
}

function renderReviewsList(reviews) {
  const reviewsGrid = document.getElementById('reviewsGrid');
  if (!reviewsGrid) return;
  
  if (reviews.length === 0) {
    reviewsGrid.innerHTML = `<div class="reviews-empty">${currentLang === 'en' ? 'No reviews yet.' : 'Отзывов пока нет.'}</div>`;
    return;
  }
  
  reviewsGrid.innerHTML = reviews.slice(0, 6).map(r => {
    const rating = r.rating || r.stars || 5;
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
      starsHtml += `<span class="star ${i <= rating ? 'filled' : ''}">★</span>`;
    }
    
    let text = r.text || '';
    if (!text) {
      text = currentLang === 'ru' ? (r.text_ru || r.text_en) : (r.text_en || r.text_ru);
    }
    
    const avatarChar = r.name ? r.name.charAt(0).toUpperCase() : '?';
    const tourText = r.tour ? `<div class="review-author-meta">${r.tour}</div>` : '';
    
    return `
      <div class="review-card">
        <div class="review-stars">
          ${starsHtml}
        </div>
        <div class="review-text">"${text}"</div>
        <div class="review-author">
          <div class="review-avatar">${avatarChar}</div>
          <div class="review-author-info">
            <div class="review-author-name">${r.name}</div>
            ${tourText}
            <div class="review-author-meta">${r.date || ''}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function openReviewModal() {
  const modal = document.getElementById('reviewModal');
  if (modal) {
    modal.classList.add('open');
    document.getElementById('reviewName').value = '';
    document.getElementById('reviewEmail').value = '';
    document.getElementById('reviewText').value = '';
    document.getElementById('reviewRating').value = '0';
    setRating(0);
    
    const statusDiv = document.getElementById('reviewSubmitStatus');
    if (statusDiv) {
      statusDiv.style.display = 'none';
      statusDiv.className = 'review-status';
    }
    
    const reviewTourSelect = document.getElementById('reviewTour');
    if (reviewTourSelect) {
      reviewTourSelect.innerHTML = `<option value="">${currentLang === 'en' ? 'Select a tour...' : 'Выберите тур...'}</option>`;
      PACKAGES.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p['name_en'];
        opt.textContent = p['name_' + currentLang];
        reviewTourSelect.appendChild(opt);
      });
    }
  }
}

function closeReviewModal(event) {
  if (!event || event.target === document.getElementById('reviewModal') || event.currentTarget.classList.contains('modal-close')) {
    document.getElementById('reviewModal').classList.remove('open');
  }
}

function setRating(val) {
  document.getElementById('reviewRating').value = val;
  const stars = document.querySelectorAll('#starRatingInput .star-input');
  stars.forEach((star, idx) => {
    if (idx < val) {
      star.classList.add('selected');
    } else {
      star.classList.remove('selected');
    }
  });
}

function setupReviewsStars() {
  const starContainer = document.getElementById('starRatingInput');
  if (!starContainer) return;
  
  const stars = starContainer.querySelectorAll('.star-input');
  stars.forEach((star, index) => {
    star.addEventListener('mouseover', () => {
      stars.forEach((s, idx) => {
        if (idx <= index) {
          s.classList.add('hovered');
        } else {
          s.classList.remove('hovered');
        }
      });
    });
    
    star.addEventListener('mouseout', () => {
      stars.forEach(s => s.classList.remove('hovered'));
    });
  });
}

function submitReview() {
  const nameInput = document.getElementById('reviewName');
  const emailInput = document.getElementById('reviewEmail');
  const textInput = document.getElementById('reviewText');
  const ratingInput = document.getElementById('reviewRating');
  const tourSelect = document.getElementById('reviewTour');
  const submitBtn = document.getElementById('submitReviewBtn');
  
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const text = textInput.value.trim();
  const rating = parseInt(ratingInput.value);
  const tour = tourSelect.value;
  
  if (!rating || rating < 1 || rating > 5) {
    showReviewStatus(currentLang === 'en' ? 'Please select a star rating.' : 'Пожалуйста, выберите оценку.', 'error');
    return;
  }
  
  if (!name) {
    showReviewStatus(currentLang === 'en' ? 'Please enter your name.' : 'Пожалуйста, введите ваше имя.', 'error');
    return;
  }
  
  if (!email || !validateEmail(email)) {
    showReviewStatus(currentLang === 'en' ? 'Please enter a valid email.' : 'Пожалуйста, введите корректный email.', 'error');
    return;
  }
  
  if (!text) {
    showReviewStatus(currentLang === 'en' ? 'Please write your review.' : 'Пожалуйста, напишите ваш отзыв.', 'error');
    return;
  }
  
  if (typeof firebase === 'undefined' || !firebase.apps.length) {
    showReviewStatus(currentLang === 'en' ? 'Firebase is not initialized.' : 'Firebase не инициализирован.', 'error');
    return;
  }
  
  submitBtn.disabled = true;
  submitBtn.textContent = currentLang === 'en' ? 'Submitting...' : 'Отправка...';
  
  const newReview = {
    name: name,
    email: email,
    rating: rating,
    tour: tour,
    text: text,
    date: new Date().toISOString().split('T')[0],
    approved: true,
    lang: currentLang,
    timestamp: firebase.database.ServerValue.TIMESTAMP
  };
  
  const db = firebase.database();
  db.ref('reviews').push(newReview)
    .then(() => {
      showReviewStatus(
        currentLang === 'en' 
          ? 'Thank you! Your review has been published.' 
          : 'Спасибо! Ваш отзыв опубликован.',
        'success'
      );
      
      // Clear inputs
      nameInput.value = '';
      emailInput.value = '';
      textInput.value = '';
      ratingInput.value = '0';
      setRating(0);
      
      // Attempt EmailJS notification
      sendReviewNotificationEmail(newReview);
      
      setTimeout(() => {
        closeReviewModal();
        submitBtn.disabled = false;
        submitBtn.textContent = currentLang === 'en' ? 'Submit Review' : 'Отправить отзыв';
      }, 3000);
    })
    .catch(err => {
      console.error("Error saving review:", err);
      showReviewStatus(
        currentLang === 'en' 
          ? 'Error submitting review: ' + err.message 
          : 'Ошибка при отправке отзыва: ' + err.message,
        'error'
      );
      submitBtn.disabled = false;
      submitBtn.textContent = currentLang === 'en' ? 'Submit Review' : 'Отправить отзыв';
    });
}

function showReviewStatus(msg, type) {
  const statusDiv = document.getElementById('reviewSubmitStatus');
  if (statusDiv) {
    statusDiv.textContent = msg;
    statusDiv.style.display = 'block';
    statusDiv.className = 'review-status ' + type;
  }
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function sendReviewNotificationEmail(review) {
  if (typeof emailjs === 'undefined') return;
  try {
    const templateParams = {
      reviewer_name: review.name,
      reviewer_email: review.email,
      rating: review.rating + " / 5",
      tour_taken: review.tour || "General Feedback",
      review_text: review.text,
      submitted_date: review.date,
      admin_email: "piyatuorsinfo@gmail.com"
    };
    
    // Attempt sending using typical emailjs service
    // Users can setup their public keys and service configs inside index.html or dashboard
    emailjs.send('default_service', 'new_review_notification', templateParams)
      .then(res => console.log('Notification sent', res))
      .catch(err => console.warn('EmailJS delivery failed', err));
  } catch(e) {
    console.warn("EmailJS notification failed:", e);
  }
}
