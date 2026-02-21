import React from "react";
import { Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const PortfolioPage = () => {
  const { language } = useLanguage();

  const content = {
    ru: {
      title: "Наши работы",
      subtitle: "Примеры выполненных проектов по ремонту котлов",
      projects: [
        {
          title: "Ремонт котла Baxi в Юнусабаде",
          description:
            "Замена теплообменника и настройка газового клапана. Котёл работал с перебоями, после ремонта стабильная работа.",
          location: "Юнусабадский район",
          brand: "Baxi ECO Four 24F",
        },
        {
          title: "Обслуживание котла Navien",
          description:
            "Полная чистка теплообменника от накипи, замена фильтров, проверка всех датчиков. Профилактика перед зимним сезоном.",
          location: "Мирзо-Улугбекский район",
          brand: "Navien Deluxe",
        },
        {
          title: "Ремонт платы управления Vaillant",
          description:
            "Диагностика и ремонт электронной платы управления. Котёл не включался, после ремонта полностью восстановлен.",
          location: "Яккасарайский район",
          brand: "Vaillant turboTEC",
        },
        {
          title: "Замена циркуляционного насоса Ariston",
          description:
            "Установка нового оригинального насоса взамен вышедшего из строя. Восстановлена циркуляция теплоносителя.",
          location: "Чиланзарский район",
          brand: "Ariston Cares X",
        },
        {
          title: "Срочный ремонт котла Bosch",
          description:
            "Выезд в течение часа. Устранена утечка воды из трёхходового клапана. Котёл снова работает исправно.",
          location: "Сергелийский район",
          brand: "Bosch Gaz 6000",
        },
      ],
      ctaTitle: "Нужен ремонт вашего котла?",
      ctaText: "Свяжитесь с нами для бесплатной диагностики",
      callBtn: "Позвонить",
      telegramBtn: "Написать в Telegram",
    },
    "uz-lat": {
      title: "Bizning ishlarimiz",
      subtitle: "Qozonlarni ta'mirlash bo'yicha bajarilgan loyihalar",
      projects: [
        {
          title: "Yunusobodda Baxi qozonini ta'mirlash",
          description:
            "Issiqlik almashtirgichni almashtirish va gaz klapanini sozlash. Qozon uzilishlar bilan ishlagan, ta'mirdan keyin barqaror ishlaydi.",
          location: "Yunusobod tumani",
          brand: "Baxi ECO Four 24F",
        },
        {
          title: "Navien qozoniga xizmat ko'rsatish",
          description:
            "Issiqlik almashtirgichni qatlamdan to'liq tozalash, filtrlarni almashtirish. Qishki mavsumdan oldingi profilaktika.",
          location: "Mirzo Ulug'bek tumani",
          brand: "Navien Deluxe",
        },
        {
          title: "Vaillant boshqaruv platasini ta'mirlash",
          description:
            "Elektron boshqaruv platasini diagnostika qilish va ta'mirlash. Qozon yoqilmagan, ta'mirdan keyin to'liq tiklandi.",
          location: "Yakkasaroy tumani",
          brand: "Vaillant turboTEC",
        },
        {
          title: "Ariston aylanma nasosini almashtirish",
          description:
            "Ishdan chiqqan nasos o'rniga yangi original nasosni o'rnatish. Issiqlik tashuvchining aylanishi tiklandi.",
          location: "Chilonzor tumani",
          brand: "Ariston Cares X",
        },
        {
          title: "Bosch qozonini shoshilinch ta'mirlash",
          description:
            "Bir soat ichida chiqish. Uch yo'lli klapandan suv oqishi bartaraf etildi. Qozon yana to'g'ri ishlaydi.",
          location: "Sergeli tumani",
          brand: "Bosch Gaz 6000",
        },
      ],
      ctaTitle: "Qozoningizni ta'mirlash kerakmi?",
      ctaText: "Bepul diagnostika uchun biz bilan bog'laning",
      callBtn: "Qo'ng'iroq qilish",
      telegramBtn: "Telegramga yozish",
    },
    "uz-cyr": {
      title: "Бизнинг ишларимиз",
      subtitle: "Қозонларни таъмирлаш бўйича бажарилган лойиҳалар",
      projects: [
        {
          title: "Юнусободда Baxi қозонини таъмирлаш",
          description:
            "Иссиқлик алмаштиргични алмаштириш ва газ клапанини созлаш. Қозон узилишлар билан ишлаган, таъмирдан кейин барқарор ишлайди.",
          location: "Юнусобод тумани",
          brand: "Baxi ECO Four 24F",
        },
        {
          title: "Navien қозонига хизмат кўрсатиш",
          description:
            "Иссиқлик алмаштиргични қатламдан тўлиқ тозалаш, филтрларни алмаштириш. Қишки мавсумдан олдинги профилактика.",
          location: "Мирзо Улуғбек тумани",
          brand: "Navien Deluxe",
        },
        {
          title: "Vaillant бошқарув платасини таъмирлаш",
          description:
            "Электрон бошқарув платасини диагностика қилиш ва таъмирлаш. Қозон ёқилмаган, таъмирдан кейин тўлиқ тикланди.",
          location: "Яккасарой тумани",
          brand: "Vaillant turboTEC",
        },
        {
          title: "Ariston айланма насосини алмаштириш",
          description:
            "Ишдан чиққан насос ўрнига янги оригинал насосни ўрнатиш. Иссиқлик ташувчининг айланиши тикланди.",
          location: "Чилонзор тумани",
          brand: "Ariston Cares X",
        },
        {
          title: "Bosch қозонини шошилинч таъмирлаш",
          description:
            "Бир соат ичида чиқиш. Уч йўлли клапандан сув оқиши бартараф этилди. Қозон яна тўғри ишлайди.",
          location: "Сергели тумани",
          brand: "Bosch Gaz 6000",
        },
      ],
      ctaTitle: "Қозонингизни таъмирлаш керакми?",
      ctaText: "Бепул диагностика учун биз билан боғланинг",
      callBtn: "Қўнғироқ қилиш",
      telegramBtn: "Телеграмга ёзиш",
    },
  };

  const t = content[language] || content.ru;

  // Placeholder images for portfolio
  const images = [
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600",
    "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=600",
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600",
    "https://images.unsplash.com/photo-1620653713380-7a34b773fef8?w=600",
    "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600",
  ];

  function importAll(r) {
    return r.keys().map(r);
  }

  const portfolioImages = importAll(
    require.context("../assets/portfolio", false, /\.(png|jpe?g|webp)$/),
  );

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <h1>{t.title}</h1>
          <p className="portfolio-subtitle">{t.subtitle}</p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="portfolio-projects">
        <div className="container">
          <div className="projects-grid">
            {t.projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={images[index]} alt={project.title} loading="lazy" />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-meta">
                    <span className="project-location">{project.location}</span>
                    <span className="project-brand">{project.brand}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Only Grid Section */}
      <section className="portfolio-gallery">
        <div className="container">
          <div className="gallery-grid">
            {portfolioImages.map((img, index) => (
              <div key={index} className="gallery-card">
                <img src={img} alt={`Portfolio ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="portfolio-cta">
        <div className="container">
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaText}</p>
          <div className="portfolio-cta-buttons">
            <a href="tel:+998904886333" className="btn-primary">
              <Phone size={18} />
              {t.callBtn}
            </a>
            <a
              href="https://t.me/ShohruhServisPro"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {t.telegramBtn}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
