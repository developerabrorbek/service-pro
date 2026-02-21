// Mock data for Servis Pro website

// Complete list of all 35 brands
export const brands = [
  'Vaillant', 'Viessmann', 'Baxi', 'Navien', 'Ferroli',
  'Immergas', 'De Dietrich', 'Lamborghini', 'Samsung', 'Bugatti',
  'Neta', 'Zevlar', 'Royal Thermo', 'Expert', 'Monix',
  'Minorka', 'Fondital', 'Sandal', 'Chaffoteaux', 'Ariston',
  'Climate', 'Victory', 'Airfel', 'Akfa', 'Atlantic',
  'Baymak', 'Rulls', 'Kiturami', 'Unit', 'Everel',
  'Thermona', 'E.C.A', 'Vitech', 'Bosch', 'Orbek'
];

// Helper function to generate slug from brand name
const generateSlug = (name) => name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '');

// Comprehensive brand details with full multilingual support
export const brandDetails = {};

// Template for generating brand content in all languages
const generateBrandContent = (brandName, slug) => {
  return {
    name: brandName,
    slug: slug,
    
    // Russian content
    title_ru: `Ремонт котлов ${brandName} в Ташкенте`,
    description_ru: `Профессиональный ремонт и обслуживание газовых котлов ${brandName} в Ташкенте. Наши мастера имеют многолетний опыт работы с оборудованием ${brandName}, используют оригинальные запчасти и предоставляют гарантию на все виды работ. Выезд на дом в течение 1-2 часов, работаем 24/7.`,
    history_ru: `${brandName} – известный производитель отопительного оборудования с многолетней историей. Бренд заслужил доверие потребителей благодаря высокому качеству продукции, надёжности и долговечности. Котлы ${brandName} широко используются в частных домах и квартирах по всему Узбекистану.`,
    popularity_ru: `Котлы ${brandName} пользуются популярностью в Ташкенте благодаря оптимальному соотношению цена-качество, простоте эксплуатации и доступности сервисного обслуживания. Наши специалисты регулярно проходят обучение по ремонту оборудования ${brandName} и знают все особенности данного бренда.`,
    
    // Uzbek Latin content
    title_uz: `Toshkentda ${brandName} qozonlarini ta'mirlash`,
    description_uz: `Toshkentda ${brandName} gaz qozonlarini professional ta'mirlash va xizmat ko'rsatish. Ustalarimiz ${brandName} uskunalari bilan ko'p yillik tajribaga ega, original ehtiyot qismlardan foydalanadi va barcha ishlar uchun kafolat beradi. 1-2 soat ichida uyga chiqish, 24/7 ishlaymiz.`,
    history_uz: `${brandName} – ko'p yillik tarixga ega isitish uskunalari ishlab chiqaruvchisi. Brend yuqori sifatli mahsulotlar, ishonchlilik va uzoq xizmat muddati tufayli iste'molchilar ishonchini qozongan. ${brandName} qozonlari butun O'zbekiston bo'ylab xususiy uylarda va kvartiralarda keng qo'llaniladi.`,
    popularity_uz: `${brandName} qozonlari Toshkentda narx-sifat nisbati, foydalanish qulayligi va servis xizmatining mavjudligi tufayli mashhur. Mutaxassislarimiz ${brandName} uskunalarini ta'mirlash bo'yicha muntazam o'qitishdan o'tadi va ushbu brendning barcha xususiyatlarini biladi.`,
    
    // Uzbek Cyrillic content
    title_cyr: `Тошкентда ${brandName} қозонларини таъмирлаш`,
    description_cyr: `Тошкентда ${brandName} газ қозонларини профессионал таъмирлаш ва хизмат кўрсатиш. Усталаримиз ${brandName} ускуналари билан кўп йиллик тажрибага эга, оригинал эҳтиёт қисмлардан фойдаланади ва барча ишлар учун кафолат беради. 1-2 соат ичида уйга чиқиш, 24/7 ишлаймиз.`,
    history_cyr: `${brandName} – кўп йиллик тарихга эга иситиш ускуналари ишлаб чиқарувчиси. Бренд юқори сифатли маҳсулотлар, ишончлилик ва узоқ хизмат муддати туфайли истеъмолчилар ишончини қозонган. ${brandName} қозонлари бутун Ўзбекистон бўйлаб хусусий уйларда ва квартираларда кенг қўлланилади.`,
    popularity_cyr: `${brandName} қозонлари Тошкентда нарх-сифат нисбати, фойдаланиш қулайлиги ва сервис хизматининг мавжудлиги туфайли машҳур. Мутахассисларимиз ${brandName} ускуналарини таъмирлаш бўйича мунтазам ўқитишдан ўтади ва ушбу бренднинг барча хусусиятларини билади.`,
    
    models: [
      `${brandName} Comfort`,
      `${brandName} Premium`,
      `${brandName} Standard`,
      `${brandName} Elite`,
      `${brandName} Pro`
    ],
    
    boilerTypes: {
      ru: [
        {
          type: 'Настенные котлы',
          description: 'Компактные котлы для квартир и небольших домов. Мощность от 12 до 35 кВт.',
          models: [`${brandName} Comfort`, `${brandName} Standard`]
        },
        {
          type: 'Напольные котлы',
          description: 'Мощные котлы для больших домов и коттеджей. Мощность от 35 до 100+ кВт.',
          models: [`${brandName} Premium`, `${brandName} Elite`]
        },
        {
          type: 'Двухконтурные котлы',
          description: 'Обеспечивают отопление и горячее водоснабжение одновременно.',
          models: [`${brandName} Pro`, `${brandName} Comfort`]
        }
      ],
      uz: [
        {
          type: "Devorga o'rnatiladigan qozonlar",
          description: "Kvartiralar va kichik uylar uchun ixcham qozonlar. Quvvat 12 dan 35 kVt gacha.",
          models: [`${brandName} Comfort`, `${brandName} Standard`]
        },
        {
          type: "Polga o'rnatiladigan qozonlar",
          description: "Katta uylar va kottejlar uchun kuchli qozonlar. Quvvat 35 dan 100+ kVt gacha.",
          models: [`${brandName} Premium`, `${brandName} Elite`]
        },
        {
          type: 'Ikki konturli qozonlar',
          description: "Isitish va issiq suv ta'minotini bir vaqtning o'zida ta'minlaydi.",
          models: [`${brandName} Pro`, `${brandName} Comfort`]
        }
      ],
      cyr: [
        {
          type: 'Деворга ўрнатиладиган қозонлар',
          description: 'Квартиралар ва кичик уйлар учун ихчам қозонлар. Қуввати 12 дан 35 кВт гача.',
          models: [`${brandName} Comfort`, `${brandName} Standard`]
        },
        {
          type: 'Полга ўрнатиладиган қозонлар',
          description: 'Катта уйлар ва коттежлар учун кучли қозонлар. Қуввати 35 дан 100+ кВт гача.',
          models: [`${brandName} Premium`, `${brandName} Elite`]
        },
        {
          type: 'Икки контурли қозонлар',
          description: 'Иситиш ва иссиқ сув таъминотини бир вақтнинг ўзида таъминлайди.',
          models: [`${brandName} Pro`, `${brandName} Comfort`]
        }
      ]
    },
    
    commonProblems: {
      ru: [
        { problem: 'Котёл не включается или не зажигается', solution: 'Проблема может быть в газовом клапане, электродах розжига или плате управления. Требуется диагностика.', urgency: 'Высокая' },
        { problem: 'Падение давления в системе', solution: 'Проверка расширительного бака, утечек в системе, неисправность предохранительного клапана.', urgency: 'Средняя' },
        { problem: 'Шум и треск при работе', solution: 'Обычно вызвано накипью в теплообменнике. Требуется промывка системы.', urgency: 'Средняя' },
        { problem: 'Котёл часто отключается', solution: 'Может быть перегрев, проблемы с циркуляционным насосом или датчиками температуры.', urgency: 'Высокая' },
        { problem: 'Нет горячей воды', solution: 'Неисправность трёхходового клапана или вторичного теплообменника в двухконтурных моделях.', urgency: 'Средняя' },
        { problem: 'Ошибки на дисплее', solution: 'Требуется диагностика кодов ошибок. Наши мастера знают все коды ошибок данного бренда.', urgency: 'Средняя' }
      ],
      uz: [
        { problem: "Qozon yoqilmaydi yoki alanga chiqmaydi", solution: "Muammo gaz klapanida, yonish elektrodlarida yoki boshqaruv platasida bo'lishi mumkin. Diagnostika talab qilinadi.", urgency: "Yuqori" },
        { problem: 'Tizimdagi bosim pasayishi', solution: "Kengayish bakini, tizimdagi oqishlarni, xavfsizlik klapanining nosozligini tekshirish.", urgency: "O'rta" },
        { problem: 'Ishlash paytida shovqin', solution: "Odatda issiqlik almashtirgichdagi qatlam sabab. Tizimni yuvish talab qilinadi.", urgency: "O'rta" },
        { problem: "Qozon tez-tez o'chadi", solution: "Ortiqcha qizish, aylanma nasos yoki harorat sensorlari bilan muammolar bo'lishi mumkin.", urgency: 'Yuqori' },
        { problem: "Issiq suv yo'q", solution: "Ikki konturli modellarda uch yo'lli klapan yoki ikkilamchi issiqlik almashtirgich nosozligi.", urgency: "O'rta" },
        { problem: 'Displeyda xatolar', solution: "Xato kodlarini diagnostika qilish kerak. Ustalarimiz ushbu brendning barcha xato kodlarini biladi.", urgency: "O'rta" }
      ],
      cyr: [
        { problem: 'Қозон ёқилмайди ёки аланга чиқмайди', solution: 'Муаммо газ клапанида, ёниш электродларида ёки бошқарув платасида бўлиши мумкин. Диагностика талаб қилинади.', urgency: 'Юқори' },
        { problem: 'Тизимдаги босим пасайиши', solution: 'Кенгайиш бакини, тизимдаги оқишларни, хавфсизлик клапанининг носозлигини текшириш.', urgency: 'Ўрта' },
        { problem: 'Ишлаш пайтида шовқин', solution: 'Одатда иссиқлик алмаштиргичдаги қатлам сабаб. Тизимни ювиш талаб қилинади.', urgency: 'Ўрта' },
        { problem: 'Қозон тез-тез ўчади', solution: 'Ортиқча қизиш, айланма насос ёки ҳарорат сенсорлари билан муаммолар бўлиши мумкин.', urgency: 'Юқори' },
        { problem: 'Иссиқ сув йўқ', solution: 'Икки контурли моделларда уч йўлли клапан ёки иккиламчи иссиқлик алмаштиргич носозлиги.', urgency: 'Ўрта' },
        { problem: 'Дисплейда хатолар', solution: 'Хато кодларини диагностика қилиш керак. Усталаримиз ушбу бренднинг барча хато кодларини билади.', urgency: 'Ўрта' }
      ]
    },
    
    services: {
      ru: [
        `Диагностика котлов ${brandName} всех моделей`,
        'Ремонт электронной платы управления',
        'Замена и чистка теплообменников',
        'Ремонт и замена циркуляционного насоса',
        'Замена трёхходового клапана',
        'Настройка газового клапана',
        'Чистка от накипи и сажи',
        'Замена датчиков и сенсоров',
        'Профилактическое обслуживание',
        'Срочный ремонт 24/7'
      ],
      uz: [
        `Barcha ${brandName} qozon modellarini diagnostika qilish`,
        "Elektron boshqaruv platasini ta'mirlash",
        'Issiqlik almashtirgichlarni almashtirish va tozalash',
        "Aylanma nasosni ta'mirlash va almashtirish",
        "Uch yo'lli klapanni almashtirish",
        'Gaz klapanini sozlash',
        'Qatlam va kuyikdan tozalash',
        'Datchik va sensorlarni almashtirish',
        "Profilaktik xizmat ko'rsatish",
        "Shoshilinch ta'mir 24/7"
      ],
      cyr: [
        `Барча ${brandName} қозон моделларини диагностика қилиш`,
        'Электрон бошқарув платасини таъмирлаш',
        'Иссиқлик алмаштиргичларни алмаштириш ва тозалаш',
        'Айланма насосни таъмирлаш ва алмаштириш',
        'Уч йўлли клапанни алмаштириш',
        'Газ клапанини созлаш',
        'Қатлам ва куйикдан тозалаш',
        'Датчик ва сенсорларни алмаштириш',
        'Профилактик хизмат кўрсатиш',
        'Шошилинч таъмир 24/7'
      ]
    },
    
    pricing: {
      ru: [
        { service: `Диагностика котла ${brandName}`, price: 'от 99 000 сум', note: 'Бесплатно при заказе ремонта' },
        { service: 'Базовый ремонт', price: 'от 199 000 сум', note: 'Устранение типичных неисправностей' },
        { service: 'Замена теплообменника', price: 'от 349 000 сум', note: 'С оригинальной запчастью' },
        { service: 'Замена платы управления', price: 'от 399 000 сум', note: 'Оригинальная плата' },
        { service: 'Профилактическое обслуживание', price: 'от 149 000 сум', note: 'Чистка, настройка, проверка' },
        { service: 'Срочный выезд (24/7)', price: 'от 149 000 сум', note: 'Приезд в течение часа' }
      ],
      uz: [
        { service: `${brandName} qozonini diagnostika qilish`, price: "99 000 so'mdan", note: "Ta'mir buyurtma qilinganda bepul" },
        { service: "Asosiy ta'mir", price: "199 000 so'mdan", note: 'Oddiy nosozliklarni bartaraf etish' },
        { service: 'Issiqlik almashtirgichni almashtirish', price: "349 000 so'mdan", note: "Original ehtiyot qism bilan" },
        { service: 'Boshqaruv platasini almashtirish', price: "399 000 so'mdan", note: 'Original plata' },
        { service: "Profilaktik xizmat ko'rsatish", price: "149 000 so'mdan", note: 'Tozalash, sozlash, tekshirish' },
        { service: 'Shoshilinch chiqish (24/7)', price: "149 000 so'mdan", note: 'Bir soat ichida kelish' }
      ],
      cyr: [
        { service: `${brandName} қозонини диагностика қилиш`, price: '99 000 сўмдан', note: 'Таъмир буюртма қилинганда бепул' },
        { service: 'Асосий таъмир', price: '199 000 сўмдан', note: 'Оддий носозликларни бартараф этиш' },
        { service: 'Иссиқлик алмаштиргични алмаштириш', price: '349 000 сўмдан', note: 'Оригинал эҳтиёт қисм билан' },
        { service: 'Бошқарув платасини алмаштириш', price: '399 000 сўмдан', note: 'Оригинал плата' },
        { service: 'Профилактик хизмат кўрсатиш', price: '149 000 сўмдан', note: 'Тозалаш, созлаш, текшириш' },
        { service: 'Шошилинч чиқиш (24/7)', price: '149 000 сўмдан', note: 'Бир соат ичида келиш' }
      ]
    },
    
    faqs: {
      ru: [
        { q: `Сколько стоит ремонт котла ${brandName} в Ташкенте?`, a: 'Стоимость ремонта зависит от типа неисправности. Базовый ремонт начинается от 199 000 сум. Диагностика бесплатна при заказе ремонта. Окончательную цену мастер озвучит после осмотра.' },
        { q: `Как быстро вы можете приехать для ремонта ${brandName}?`, a: 'Мы работаем 24/7 и можем выехать в течение 1-2 часов после вашего звонка. В срочных случаях приезжаем ещё быстрее.' },
        { q: `Используете ли вы оригинальные запчасти для ${brandName}?`, a: 'Да, мы работаем только с оригинальными запчастями или качественными сертифицированными аналогами. Все запчасти имеют гарантию.' },
        { q: `Какая гарантия на ремонт котла ${brandName}?`, a: 'Мы предоставляем гарантию от 6 месяцев до 2 лет в зависимости от типа ремонта и установленных запчастей.' },
        { q: `Нужно ли регулярно обслуживать котёл ${brandName}?`, a: 'Да, рекомендуем проводить техническое обслуживание минимум раз в год перед отопительным сезоном. Это продлевает срок службы котла.' },
        { q: `Ремонтируете ли вы старые модели ${brandName}?`, a: 'Да, мы ремонтируем котлы любого года выпуска. Для старых моделей может потребоваться больше времени на поиск запчастей.' },
        { q: 'Работаете ли вы в выходные и праздники?', a: 'Да, мы работаем круглосуточно без выходных и праздников.' },
        { q: 'Что входит в профилактическое обслуживание?', a: 'В обслуживание входит: чистка теплообменника, проверка и настройка горелки, проверка всех датчиков, чистка фильтров, измерение давления газа.' }
      ],
      uz: [
        { q: `Toshkentda ${brandName} qozonini ta'mirlash qancha turadi?`, a: "Ta'mir narxi nosozlik turiga bog'liq. Asosiy ta'mir 199 000 so'mdan boshlanadi. Ta'mir buyurtma qilinganda diagnostika bepul." },
        { q: `${brandName} ta'miriga qanchalik tez kelishingiz mumkin?`, a: "24/7 ishlaymiz va qo'ng'iroqdan keyin 1-2 soat ichida kelishimiz mumkin. Shoshilinch holatlarda yanada tezroq kelamiz." },
        { q: `${brandName} uchun original ehtiyot qismlardan foydalanasizmi?`, a: "Ha, biz faqat original ehtiyot qismlar yoki sifatli sertifikatlangan analoglar bilan ishlaymiz." },
        { q: `${brandName} qozonini ta'mirlashga qanday kafolat beriladi?`, a: "Ta'mir turi va o'rnatilgan ehtiyot qismlarga qarab 6 oydan 2 yilgacha kafolat beramiz." },
        { q: `${brandName} qozoniga muntazam xizmat ko'rsatish kerakmi?`, a: "Ha, isitish mavsumidan oldin yiliga kamida bir marta texnik xizmat ko'rsatishni tavsiya qilamiz." },
        { q: `Eski ${brandName} modellarini ta'mirlaysizmi?`, a: "Ha, biz har qanday yildagi qozonlarni ta'mirlaymiz." },
        { q: 'Dam olish va bayram kunlari ishlaysizmi?', a: "Ha, biz dam olish va bayramlarsiz tunda-kunduz ishlaymiz." },
        { q: "Profilaktik xizmat ko'rsatishga nima kiradi?", a: "Xizmatga quyidagilar kiradi: issiqlik almashtirgichni tozalash, o'choqni tekshirish va sozlash, barcha datchiklar tekshirish." }
      ],
      cyr: [
        { q: `Тошкентда ${brandName} қозонини таъмирлаш қанча туради?`, a: 'Таъмир нархи носозлик турига боғлиқ. Асосий таъмир 199 000 сўмдан бошланади. Таъмир буюртма қилинганда диагностика бепул.' },
        { q: `${brandName} таъмирига қанчалик тез келишингиз мумкин?`, a: '24/7 ишлаймиз ва қўнғироқдан кейин 1-2 соат ичида келишимиз мумкин. Шошилинч ҳолатларда яна тезроқ келамиз.' },
        { q: `${brandName} учун оригинал эҳтиёт қисмлардан фойдаланасизми?`, a: 'Ҳа, биз фақат оригинал эҳтиёт қисмлар ёки сифатли сертификатланган аналоглар билан ишлаймиз.' },
        { q: `${brandName} қозонини таъмирлашга қандай кафолат берилади?`, a: 'Таъмир тури ва ўрнатилган эҳтиёт қисмларга қараб 6 ойдан 2 йилгача кафолат берамиз.' },
        { q: `${brandName} қозонига мунтазам хизмат кўрсатиш керакми?`, a: 'Ҳа, иситиш мавсумидан олдин йилига камида бир марта техник хизмат кўрсатишни тавсия қиламиз.' },
        { q: `Эски ${brandName} моделларини таъмирлайсизми?`, a: 'Ҳа, биз ҳар қандай йилдаги қозонларни таъмирлаймиз.' },
        { q: 'Дам олиш ва байрам кунлари ишлайсизми?', a: 'Ҳа, биз дам олиш ва байрамларсиз тунда-кундуз ишлаймиз.' },
        { q: 'Профилактик хизмат кўрсатишга нима киради?', a: 'Хизматга қуйидагилар киради: иссиқлик алмаштиргични тозалаш, ўчоқни текшириш ва созлаш, барча датчиклар текшириш.' }
      ]
    },
    
    images: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800',
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800',
      'https://images.unsplash.com/photo-1620653713380-7a34b773fef8?w=800',
      'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800',
      'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800'
    ]
  };
};

// Generate brand details for all 35 brands
brands.forEach(brandName => {
  const slug = generateSlug(brandName);
  brandDetails[slug] = generateBrandContent(brandName, slug);
});

// Add specific details for premium brands (overriding generic content)
// Baxi - Italian premium brand
brandDetails['baxi'] = {
  ...brandDetails['baxi'],
  models: ['Baxi ECO Four 24F', 'Baxi Main 5 24F', 'Baxi Luna-3 Comfort', 'Baxi Nuvola-3 Comfort', 'Baxi Fourtech 24F', 'Baxi Prime HT 1.24'],
  images: [
    'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800',
    'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800',
    'https://images.unsplash.com/photo-1620653713380-7a34b773fef8?w=800',
    'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800',
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800',
    'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800'
  ]
};

// Navien - Korean premium brand
brandDetails['navien'] = {
  ...brandDetails['navien'],
  models: ['Navien Ace', 'Navien Deluxe', 'Navien Prime', 'Navien Smart Tok', 'Navien NCB'],
  images: [
    'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800',
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800'
  ]
};

// Bosch - German premium brand
brandDetails['bosch'] = {
  ...brandDetails['bosch'],
  models: ['Bosch Gaz 6000', 'Bosch Condens 7000', 'Bosch Therm 4000', 'Bosch Gaz 3000', 'Bosch ZWC'],
  images: [
    'https://images.unsplash.com/photo-1614447413576-b346c641c128?w=800',
    'https://images.unsplash.com/photo-1700604430621-b7cb34f5bed3?w=800',
    'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800'
  ]
};

// Vaillant - German premium brand
brandDetails['vaillant'] = {
  ...brandDetails['vaillant'],
  models: ['Vaillant turboTEC', 'Vaillant ecoTEC', 'Vaillant atmoTEC', 'Vaillant VU', 'Vaillant VUW'],
  images: [
    'https://images.unsplash.com/photo-1658758904121-ee49fc5e205c?w=800',
    'https://images.unsplash.com/photo-1620653713380-7a34b773fef8?w=800',
    'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800'
  ]
};

// Viessmann - German premium brand
brandDetails['viessmann'] = {
  ...brandDetails['viessmann'],
  models: ['Viessmann Vitodens', 'Viessmann Vitopend', 'Viessmann Vitogas', 'Viessmann Vitocrossal'],
  images: [
    'https://images.unsplash.com/photo-1658758904121-ee49fc5e205c?w=800',
    'https://images.unsplash.com/photo-1542013936693-884638332954?w=800',
    'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800'
  ]
};

// Ariston - Italian brand
brandDetails['ariston'] = {
  ...brandDetails['ariston'],
  models: ['Ariston Cares X', 'Ariston Genus One', 'Ariston Alteas One', 'Ariston Egis Plus'],
  images: [
    'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800',
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800',
    'https://images.unsplash.com/photo-1620653713380-7a34b773fef8?w=800'
  ]
};

// Ferroli - Italian brand
brandDetails['ferroli'] = {
  ...brandDetails['ferroli'],
  models: ['Ferroli Divatech', 'Ferroli Bluehelix', 'Ferroli Domiproject', 'Ferroli Fortuna'],
  images: [
    'https://images.unsplash.com/photo-1622308023558-2130696ec5cd?w=800',
    'https://images.unsplash.com/photo-1615309662243-70f6df917b59?w=800',
    'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800'
  ]
};

export const services = [
  {
    id: 'remont-gazovogo-kotla',
    title: 'Ремонт газового котла',
    titleUz: "Gaz qozonini ta'mirlash",
    shortDesc: 'Профессиональный ремонт газовых котлов всех марок с гарантией качества',
    price: 'от 199 000 сум',
    isMainSeo: true,
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800',
    icon: 'Wrench'
  },
  {
    id: 'obsluzhivanie-gazovogo-kotla',
    title: 'Обслуживание газового котла',
    titleUz: "Gaz qozoniga xizmat ko'rsatish",
    shortDesc: 'Регулярное техническое обслуживание для долгой службы вашего котла',
    price: 'от 149 000 сум',
    image: 'https://images.unsplash.com/photo-1620653713380-7a34b773fef8?w=800',
    icon: 'Settings'
  },
  {
    id: 'remont-promyshlennyh-kotlov',
    title: 'Ремонт промышленных котлов',
    titleUz: "Sanoat qozonlarini ta'mirlash",
    shortDesc: 'Ремонт и обслуживание промышленного котельного оборудования',
    price: 'от 499 000 сум',
    image: 'https://images.unsplash.com/photo-1758873263491-f3969d8c6fda?w=800',
    icon: 'Factory'
  },
  {
    id: 'remont-parovyh-kotlov',
    title: 'Ремонт паровых котлов',
    titleUz: "Bug' qozonlarini ta'mirlash",
    shortDesc: 'Специализированный ремонт паровых котельных установок',
    price: 'от 399 000 сум',
    image: 'https://images.unsplash.com/photo-1723474122623-25a8bfc7ea06?w=800',
    icon: 'Flame'
  },
  {
    id: 'remont-dvuhkonturnyh-kotlov',
    title: 'Ремонт двухконтурных котлов',
    titleUz: "Ikki konturli qozonlarni ta'mirlash",
    shortDesc: 'Восстановление работы систем отопления и горячего водоснабжения',
    price: 'от 249 000 сум',
    image: 'https://images.unsplash.com/photo-1751486289950-5c4898a4c773?w=800',
    icon: 'Waves'
  },
  {
    id: 'remont-napolnyh-kotlov',
    title: 'Ремонт напольных котлов',
    titleUz: "Pol qozonlarini ta'mirlash",
    shortDesc: 'Ремонт напольных газовых котлов любой сложности',
    price: 'от 279 000 сум',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    icon: 'Box'
  },
  {
    id: 'remont-elektricheskih-kotlov',
    title: 'Ремонт электрических котлов',
    titleUz: "Elektr qozonlarini ta'mirlash",
    shortDesc: 'Диагностика и ремонт электрокотлов всех типов',
    price: 'от 189 000 сум',
    image: 'https://images.unsplash.com/photo-1658758904121-ee49fc5e205c?w=800',
    icon: 'Zap'
  },
  {
    id: 'remont-kotelnyh',
    title: 'Ремонт и обслуживание котельных',
    titleUz: "Qozonxonalarni ta'mirlash",
    shortDesc: 'Комплексное обслуживание котельных помещений',
    price: 'от 599 000 сум',
    image: 'https://images.unsplash.com/photo-1615309662243-70f6df917b59?w=800',
    icon: 'Building'
  },
  {
    id: 'zamena-teploobmennika',
    title: 'Замена теплообменника',
    titleUz: 'Issiqlik almashtirgichni almashtirish',
    shortDesc: 'Быстрая замена теплообменника с гарантией',
    price: 'от 349 000 сум',
    image: 'https://images.unsplash.com/photo-1614447413576-b346c641c128?w=800',
    icon: 'RefreshCw'
  },
  {
    id: 'zamena-ventilyatora',
    title: 'Замена вентилятора',
    titleUz: 'Ventilyatorni almashtirish',
    shortDesc: 'Замена вентилятора котла оригинальными запчастями',
    price: 'от 229 000 сум',
    image: 'https://images.unsplash.com/photo-1622308023558-2130696ec5cd?w=800',
    icon: 'Fan'
  },
  {
    id: 'zamena-trehhodovogo-klapana',
    title: 'Замена трёхходового клапана',
    titleUz: "Uch yo'lli klapanni almashtirish",
    shortDesc: 'Профессиональная замена трёхходового клапана',
    price: 'от 199 000 сум',
    image: 'https://images.unsplash.com/photo-1700604430621-b7cb34f5bed3?w=800',
    icon: 'GitBranch'
  },
  {
    id: 'zamena-datchika-protoka',
    title: 'Замена датчика протока воды',
    titleUz: 'Suv oqimi datchigini almashtirish',
    shortDesc: 'Замена датчика протока воды для стабильной работы',
    price: 'от 129 000 сум',
    image: 'https://images.unsplash.com/photo-1542013936693-884638332954?w=800',
    icon: 'Droplet'
  },
  {
    id: 'zamena-datchika-vody',
    title: 'Замена датчика воды',
    titleUz: 'Suv datchigini almashtirish',
    shortDesc: 'Установка и замена датчиков уровня воды',
    price: 'от 119 000 сум',
    image: 'https://images.unsplash.com/photo-1749532125405-70950966b0e5?w=800',
    icon: 'Gauge'
  },
  {
    id: 'zamena-platy-upravleniya',
    title: 'Замена платы управления',
    titleUz: 'Boshqaruv platasi almashtiruvi',
    shortDesc: 'Замена электронной платы управления котлом',
    price: 'от 399 000 сум',
    image: 'https://images.pexels.com/photos/6474205/pexels-photo-6474205.jpeg?w=800',
    icon: 'Cpu'
  }
];

export const portfolioItems = [
  {
    id: 1,
    title: 'Ремонт котла Baxi',
    description: 'Полная диагностика и ремонт газового котла',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800',
    location: 'Ташкент, Яккасарай'
  },
  {
    id: 2,
    title: 'Установка Navien',
    description: 'Монтаж и настройка нового котла',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800',
    location: 'Ташкент, Мирзо-Улугбек'
  },
  {
    id: 3,
    title: 'Обслуживание Ariston',
    description: 'Плановое техническое обслуживание',
    image: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800',
    location: 'Ташкент, Юнусабад'
  },
  {
    id: 4,
    title: 'Замена теплообменника',
    description: 'Замена теплообменника котла Bosch',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800',
    location: 'Ташкент, Чиланзар'
  }
];

export const blogPosts = [
  {
    id: 1,
    title: 'Почему газовый котёл не включается: 7 основных причин',
    excerpt: 'Разбираем самые частые причины, по которым газовый котёл отказывается запускаться и что делать в каждом случае.',
    date: '2024-12-15',
    image: 'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=800'
  },
  {
    id: 2,
    title: 'Как подготовить котёл к зимнему сезону',
    excerpt: 'Полное руководство по подготовке газового котла к отопительному сезону. Чек-лист для домовладельцев.',
    date: '2024-12-10',
    image: 'https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=800'
  },
  {
    id: 3,
    title: 'Признаки того, что котлу нужна чистка',
    excerpt: 'Узнайте основные признаки загрязнения газового котла и когда необходимо проводить профессиональную чистку.',
    date: '2024-12-05',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Алексей М.',
    text: 'Отличная работа! Мастер приехал быстро, диагностировал проблему и починил котёл Baxi за час. Цены честные, рекомендую!',
    rating: 5,
    date: '2024-12-10'
  },
  {
    id: 2,
    name: 'Ирина К.',
    text: 'Очень довольна обслуживанием. Провели полную чистку котла Ariston, теперь работает как новый. Спасибо команде Servis Pro!',
    rating: 5,
    date: '2024-12-08'
  },
  {
    id: 3,
    name: 'Дмитрий С.',
    text: 'Профессиональный подход. Заменили теплообменник на Navien, дали гарантию. Всё чётко и по делу.',
    rating: 5,
    date: '2024-12-05'
  }
];

export const faqs = [
  {
    question: 'Как быстро вы можете приехать на вызов?',
    answer: 'Мы работаем 24/7 и можем приехать в течение 1-2 часов после вашего звонка. В срочных случаях приезжаем ещё быстрее.'
  },
  {
    question: 'Какие гарантии вы даёте на ремонт?',
    answer: 'Мы предоставляем гарантию от 6 месяцев до 2 лет на выполненные работы и установленные запчасти в зависимости от типа ремонта.'
  },
  {
    question: 'Работаете ли вы с котлами всех марок?',
    answer: 'Да, наши специалисты работают с газовыми котлами всех известных брендов: Baxi, Navien, Ariston, Bosch, Ferroli, Vaillant, Viessmann и многими другими.'
  },
  {
    question: 'Сколько стоит диагностика?',
    answer: 'Базовая диагностика стоит от 99 000 сум. Если вы заказываете ремонт, стоимость диагностики вычитается из общей суммы.'
  },
  {
    question: 'Есть ли у вас оригинальные запчасти?',
    answer: 'Да, мы работаем только с оригинальными и сертифицированными запчастями от официальных поставщиков.'
  }
];
