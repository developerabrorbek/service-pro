import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Shield, Clock, Award, Users, Wrench, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const AboutPage = () => {
  const { language } = useLanguage();

  const content = {
    ru: {
      title: 'О компании Servis Pro',
      subtitle: 'Профессиональный ремонт газовых котлов в Ташкенте',
      description: 'Servis Pro — это команда сертифицированных специалистов с более чем 5-летним опытом работы в сфере ремонта и обслуживания газового оборудования. Мы работаем со всеми известными брендами котлов и предоставляем гарантию на все виды работ.',
      experienceTitle: 'Наш опыт',
      experienceText: 'За годы работы мы выполнили более 5000 заказов по ремонту и обслуживанию газовых котлов. Наши мастера регулярно проходят обучение и сертификацию, чтобы быть в курсе всех современных технологий.',
      stats: [
        { number: '5+', label: 'лет опыта' },
        { number: '5000+', label: 'выполненных заказов' },
        { number: '35+', label: 'брендов котлов' },
        { number: '24/7', label: 'работаем' }
      ],
      whyUsTitle: 'Почему выбирают нас',
      whyUs: [
        { icon: Clock, title: 'Быстрый выезд', text: 'Приезжаем в течение 1-2 часов после звонка' },
        { icon: Shield, title: 'Гарантия качества', text: 'Гарантия на работы и запчасти до 2 лет' },
        { icon: Award, title: 'Сертифицированные мастера', text: 'Все специалисты имеют профессиональную подготовку' },
        { icon: Wrench, title: 'Оригинальные запчасти', text: 'Используем только качественные комплектующие' },
        { icon: Users, title: 'Индивидуальный подход', text: 'Подбираем оптимальное решение для каждого клиента' },
        { icon: CheckCircle, title: 'Честные цены', text: 'Прозрачное ценообразование без скрытых платежей' }
      ],
      ctaTitle: 'Нужен ремонт котла?',
      ctaText: 'Свяжитесь с нами прямо сейчас для бесплатной консультации',
      callBtn: 'Позвонить',
      telegramBtn: 'Написать в Telegram'
    },
    'uz-lat': {
      title: 'Servis Pro haqida',
      subtitle: "Toshkentda gaz qozonlarini professional ta'mirlash",
      description: "Servis Pro — bu gaz uskunalarini ta'mirlash va xizmat ko'rsatish sohasida 5 yildan ortiq tajribaga ega sertifikatlangan mutaxassislar jamoasi. Biz barcha taniqli qozon brendlari bilan ishlaymiz va barcha ishlar uchun kafolat beramiz.",
      experienceTitle: 'Bizning tajribamiz',
      experienceText: "Ish yillari davomida biz gaz qozonlarini ta'mirlash va xizmat ko'rsatish bo'yicha 5000 dan ortiq buyurtmalarni bajardik.",
      stats: [
        { number: '5+', label: 'yillik tajriba' },
        { number: '5000+', label: 'bajarilgan buyurtmalar' },
        { number: '35+', label: 'qozon brendlari' },
        { number: '24/7', label: 'ishlaymiz' }
      ],
      whyUsTitle: 'Nega bizni tanlashadi',
      whyUs: [
        { icon: Clock, title: 'Tez chiqish', text: "Qo'ng'iroqdan 1-2 soat ichida kelamiz" },
        { icon: Shield, title: 'Sifat kafolati', text: "Ishlar va ehtiyot qismlar uchun 2 yilgacha kafolat" },
        { icon: Award, title: 'Sertifikatlangan ustalar', text: "Barcha mutaxassislar professional tayyorgarlikka ega" },
        { icon: Wrench, title: 'Original ehtiyot qismlar', text: "Faqat sifatli komponentlardan foydalanamiz" },
        { icon: Users, title: 'Individual yondashuv', text: "Har bir mijoz uchun optimal yechim tanlaymiz" },
        { icon: CheckCircle, title: "Halol narxlar", text: "Yashirin to'lovlarsiz shaffof narxlash" }
      ],
      ctaTitle: "Qozon ta'miri kerakmi?",
      ctaText: "Bepul maslahat uchun hoziroq biz bilan bog'laning",
      callBtn: "Qo'ng'iroq qilish",
      telegramBtn: "Telegramga yozish"
    },
    'uz-cyr': {
      title: 'Servis Pro ҳақида',
      subtitle: 'Тошкентда газ қозонларини профессионал таъмирлаш',
      description: 'Servis Pro — бу газ ускуналарини таъмирлаш ва хизмат кўрсатиш соҳасида 5 йилдан ортиқ тажрибага эга сертификатланган мутахассислар жамоаси. Биз барча таниқли қозон брендлари билан ишлаймиз ва барча ишлар учун кафолат берамиз.',
      experienceTitle: 'Бизнинг тажрибамиз',
      experienceText: 'Иш йиллари давомида биз газ қозонларини таъмирлаш ва хизмат кўрсатиш бўйича 5000 дан ортиқ буюртмаларни бажардик.',
      stats: [
        { number: '5+', label: 'йиллик тажриба' },
        { number: '5000+', label: 'бажарилган буюртмалар' },
        { number: '35+', label: 'қозон брендлари' },
        { number: '24/7', label: 'ишлаймиз' }
      ],
      whyUsTitle: 'Нега бизни танлашади',
      whyUs: [
        { icon: Clock, title: 'Тез чиқиш', text: 'Қўнғироқдан 1-2 соат ичида келамиз' },
        { icon: Shield, title: 'Сифат кафолати', text: 'Ишлар ва эҳтиёт қисмлар учун 2 йилгача кафолат' },
        { icon: Award, title: 'Сертификатланган усталар', text: 'Барча мутахассислар профессионал тайёргарликка эга' },
        { icon: Wrench, title: 'Оригинал эҳтиёт қисмлар', text: 'Фақат сифатли компонентлардан фойдаланамиз' },
        { icon: Users, title: 'Индивидуал ёндашув', text: 'Ҳар бир мижоз учун оптимал ечим танлаймиз' },
        { icon: CheckCircle, title: 'Ҳалол нархлар', text: 'Яширин тўловларсиз шаффоф нархлаш' }
      ],
      ctaTitle: 'Қозон таъмири керакми?',
      ctaText: 'Бепул маслаҳат учун ҳозироқ биз билан боғланинг',
      callBtn: 'Қўнғироқ қилиш',
      telegramBtn: 'Телеграмга ёзиш'
    }
  };

  const t = content[language] || content.ru;

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>{t.title}</h1>
          <p className="about-subtitle">{t.subtitle}</p>
        </div>
      </section>

      {/* Description Section */}
      <section className="about-description">
        <div className="container">
          <p className="about-text">{t.description}</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            {t.stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="about-experience">
        <div className="container">
          <h2>{t.experienceTitle}</h2>
          <p>{t.experienceText}</p>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="about-why-us">
        <div className="container">
          <h2>{t.whyUsTitle}</h2>
          <div className="why-us-grid">
            {t.whyUs.map((item, index) => (
              <div key={index} className="why-us-card">
                <div className="why-us-icon">
                  <item.icon size={24} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaText}</p>
          <div className="about-cta-buttons">
            <a href="tel:+998904886333" className="btn-primary">
              <Phone size={18} />
              {t.callBtn}
            </a>
            <a href="https://t.me/ShohruhServisPro" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              {t.telegramBtn}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
