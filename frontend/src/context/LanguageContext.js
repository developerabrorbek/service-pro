import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ru'); // ru, uz-lat, uz-cyr

  const translations = {
    ru: {
      nav: {
        about: 'О нас',
        blog: 'Блог',
        news: 'Новости',
        services: 'Услуги',
        portfolio: 'Наши работы',
        contact: 'Контакты'
      },
      hero: {
        title: 'Профессиональный ремонт газовых котлов в Ташкенте',
        subtitle: 'Быстро, качественно, с гарантией. Работаем со всеми марками котлов 24/7',
        cta: 'Вызвать мастера',
        emergency: 'Срочный выезд'
      },
      services: {
        title: 'Наши услуги',
        viewAll: 'Все услуги',
        from: 'от',
        details: 'Подробнее'
      },
      form: {
        title: 'Заказать звонок',
        name: 'Ваше имя',
        phone: 'Номер телефона',
        submit: 'Отправить заявку',
        success: 'Заявка отправлена! Мы свяжемся с вами в ближайшее время.',
        error: 'Ошибка отправки. Попробуйте позже.'
      },
      footer: {
        createdBy: 'Сайт создан',
        rights: 'Все права защищены'
      },
      brand: {
        repair: 'Ремонт котлов',
        inTashkent: 'в Ташкенте',
        callMaster: 'Вызвать мастера',
        writeToTelegram: 'Написать в Telegram'
      },
      common: {
        workProcess: 'Как мы работаем',
        ourServices: 'Наши услуги',
        needRepair: 'Нужен ремонт котла?',
        getFreeConsultation: 'Оставьте заявку и получите бесплатную консультацию специалиста',
        freeDiagnostic: 'Бесплатная диагностика при ремонте',
        sameDayService: 'Выезд мастера в день обращения',
        originalParts: 'Оригинальные запчасти',
        ourWork: 'Наши работы',
        allWork: 'Все работы',
        customerReviews: 'Отзывы клиентов',
        usefulArticles: 'Полезные статьи',
        allArticles: 'Все статьи',
        faq: 'Часто задаваемые вопросы'
      }
    },
    'uz-lat': {
      nav: {
        about: 'Biz haqimizda',
        blog: 'Blog',
        news: 'Yangiliklar',
        services: 'Xizmatlar',
        portfolio: 'Bizning ishlar',
        contact: 'Aloqa'
      },
      hero: {
        title: 'Toshkentda professional gaz qozonlarini ta\'mirlash',
        subtitle: 'Tez, sifatli, kafolat bilan. Barcha markadagi qozonlar bilan ishlaymiz 24/7',
        cta: 'Ustani chaqirish',
        emergency: 'Shoshilinch chiqish'
      },
      services: {
        title: 'Bizning xizmatlar',
        viewAll: 'Barcha xizmatlar',
        from: 'dan',
        details: 'Batafsil'
      },
      form: {
        title: 'Qo\'ng\'iroq buyurtma qilish',
        name: 'Ismingiz',
        phone: 'Telefon raqami',
        submit: 'Ariza yuborish',
        success: 'Ariza yuborildi! Tez orada siz bilan bog\'lanamiz.',
        error: 'Yuborishda xatolik. Keyinroq urinib ko\'ring.'
      },
      footer: {
        createdBy: 'Sayt yaratilgan',
        rights: 'Barcha huquqlar himoyalangan'
      },
      brand: {
        repair: 'Qozonlarni ta\'mirlash',
        inTashkent: 'Toshkentda',
        callMaster: 'Ustani chaqirish',
        writeToTelegram: 'Telegramga yozish'
      },
      common: {
        workProcess: 'Biz qanday ishlaymiz',
        ourServices: 'Bizning xizmatlar',
        needRepair: 'Qozon ta\'miriga muhtojmisiz?',
        getFreeConsultation: 'Ariza qoldiring va mutaxassisdan bepul maslahat oling',
        freeDiagnostic: 'Ta\'mir qilishda bepul diagnostika',
        sameDayService: 'Ustani murojaat kunida chaqirish',
        originalParts: 'Asl ehtiyot qismlar',
        ourWork: 'Bizning ishlar',
        allWork: 'Barcha ishlar',
        customerReviews: 'Mijozlar sharhlari',
        usefulArticles: 'Foydali maqolalar',
        allArticles: 'Barcha maqolalar',
        faq: 'Tez-tez so\'raladigan savollar'
      }
    },
    'uz-cyr': {
      nav: {
        about: 'Биз ҳақимизда',
        blog: 'Блог',
        news: 'Янгиликлар',
        services: 'Хизматлар',
        portfolio: 'Бизнинг ишлар',
        contact: 'Алоқа'
      },
      hero: {
        title: 'Тошкентда профессионал газ қозонларини таъмирлаш',
        subtitle: 'Тез, сифатли ва кафолат билан. Барча маркадаги қозонлар билан ишлаймиз 24/7',
        cta: 'Устани чақириш',
        emergency: 'Шошилинч чиқиш'
      },
      services: {
        title: 'Бизнинг хизматлар',
        viewAll: 'Барча хизматлар',
        from: 'дан',
        details: 'Батафсил'
      },
      form: {
        title: 'Қўнғироқ буюртма қилиш',
        name: 'Исмингиз',
        phone: 'Телефон рақами',
        submit: 'Ариза юбориш',
        success: 'Ариза юборилди! Тез орада сиз билан боғланамиз.',
        error: 'Юборишда хатолик. Кейинроқ уриниб кўринг.'
      },
      footer: {
        createdBy: 'Сайт яратилган',
        rights: 'Барча ҳуқуқлар ҳимояланган'
      },
      brand: {
        repair: 'Қозонларни таъмирлаш',
        inTashkent: 'Тошкентда',
        callMaster: 'Устани чақириш',
        writeToTelegram: 'Telegramга ёзиш'
      },
      common: {
        workProcess: 'Биз қандай ишлаймиз',
        ourServices: 'Бизнинг хизматлар',
        needRepair: 'Қозон таъмирига муҳтожмисиз?',
        getFreeConsultation: 'Ариза қолдиринг ва мутахассисдан бепул маслаҳат олинг',
        freeDiagnostic: 'Таъмир қилишда бепул диагностика',
        sameDayService: 'Устани мурожаат кунида чақириш',
        originalParts: 'Асл эҳтиёт қисмлар',
        ourWork: 'Бизнинг ишлар',
        allWork: 'Барча ишлар',
        customerReviews: 'Мижозлар шарҳлари',
        usefulArticles: 'Фойдали мақолалар',
        allArticles: 'Барча мақолалар',
        faq: 'Тез-тез сўраладиган саволлар'
      }
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

