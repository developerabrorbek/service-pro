import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, CheckCircle, Wrench, Clock, Shield, AlertCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { useLanguage } from '../context/LanguageContext';
import { brandDetails, services } from '../data/mockData';

const BrandPage = () => {
  const { brandSlug } = useParams();
  const { language } = useLanguage();
  const brand = brandDetails[brandSlug];

  if (!brand) {
    return (
      <div className="container" style={{ padding: '150px 20px', textAlign: 'center' }}>
        <h1>{language === 'ru' ? 'Бренд не найден' : language === 'uz-lat' ? 'Brend topilmadi' : 'Бренд топилмади'}</h1>
        <Link to="/" className="btn-primary">{language === 'ru' ? 'Вернуться на главную' : language === 'uz-lat' ? 'Bosh sahifaga qaytish' : 'Бош саҳифага қайтиш'}</Link>
      </div>
    );
  }

  // Get language-specific content
  const getLangKey = () => language === 'uz-lat' ? 'uz' : language === 'uz-cyr' ? 'cyr' : 'ru';
  const langKey = getLangKey();
  
  const title = brand[`title_${langKey}`] || brand.title_ru || `${texts.repair} ${brand.name} ${texts.inTashkent}`;
  const description = brand[`description_${langKey}`] || brand.description_ru || brand.description;
  const history = brand[`history_${langKey}`] || brand.history_ru || brand.history;
  const popularity = brand[`popularity_${langKey}`] || brand.popularity_ru || brand.popularity;
  
  const boilerTypes = brand.boilerTypes?.[langKey] || [];
  const commonProblems = brand.commonProblems?.[langKey] || [];
  const brandServices = brand.services?.[langKey] || [];
  const pricing = brand.pricing?.[langKey] || [];
  const faqs = brand.faqs?.[langKey] || [];

  const t = {
    ru: {
      repair: 'Ремонт котлов',
      inTashkent: 'в Ташкенте',
      callMaster: 'Вызвать мастера',
      telegram: 'Написать в Telegram',
      brandOverview: 'О бренде',
      boilerTypes: 'Типы котлов',
      commonProblems: 'Частые неисправности',
      ourServices: 'Наши услуги',
      pricing: 'Цены на ремонт',
      whyUs: 'Почему выбирают нас',
      gallery: 'Фотогалерея',
      faq: 'Часто задаваемые вопросы',
      relatedServices: 'Связанные услуги',
      urgency: 'Срочность'
    },
    'uz-lat': {
      repair: 'Qozonlarni ta\'mirlash',
      inTashkent: 'Toshkentda',
      callMaster: 'Ustani chaqirish',
      telegram: 'Telegramga yozish',
      brandOverview: 'Brend haqida',
      boilerTypes: 'Qozon turlari',
      commonProblems: 'Tez-tez uchraydigan nosozliklar',
      ourServices: 'Bizning xizmatlar',
      pricing: 'Ta\'mirlash narxlari',
      whyUs: 'Nima uchun bizni tanlashadi',
      gallery: 'Fotogalereya',
      faq: 'Tez-tez so\'raladigan savollar',
      relatedServices: 'Bog\'liq xizmatlar',
      urgency: 'Shoshilinchlik'
    },
    'uz-cyr': {
      repair: 'Қозонларни таъмирлаш',
      inTashkent: 'Тошкентда',
      callMaster: 'Устани чақириш',
      telegram: 'Telegramга ёзиш',
      brandOverview: 'Бренд ҳақида',
      boilerTypes: 'Қозон турлари',
      commonProblems: 'Тез-тез учрайдиган носозликлар',
      ourServices: 'Бизнинг хизматлар',
      pricing: 'Таъмирлаш нархлари',
      whyUs: 'Нима учун бизни танлашади',
      gallery: 'Фотогалерея',
      faq: 'Тез-тез сўраладиган саволлар',
      relatedServices: 'Боғлиқ хизматлар',
      urgency: 'Шошилинчлик'
    }
  };

  const texts = t[language] || t.ru;

  return (
    <div className="brand-page">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <div className="container">
          <Link to="/">{language === 'ru' ? 'Главная' : language === 'uz-lat' ? 'Bosh sahifa' : 'Бош саҳифа'}</Link> / <Link to="/#brands">{language === 'ru' ? 'Бренды' : language === 'uz-lat' ? 'Brendlar' : 'Брендлар'}</Link> / <span>{brand.name}</span>
        </div>
      </div>

      {/* Brand Hero */}
      <section className="brand-hero">
        <div className="container">
          <div className="brand-hero-content">
            <h1 className="brand-h1">{title}</h1>
            <p className="brand-lead">{description}</p>
            <div className="brand-cta-buttons">
              <a href="tel:+998904886333" className="btn-primary">
                <Phone size={20} />
                {texts.callMaster}
              </a>
              <a href="https://t.me/ShohruhServisPro" className="btn-secondary">
                {texts.telegram}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Gallery */}
      <section className="brand-gallery">
        <div className="container">
          <h2>{texts.gallery}</h2>
          <div className="gallery-grid">
            {brand.images.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image} alt={`${brand.name} ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Info Section */}
      <section className="brand-info-section">
        <div className="container">
          <div className="brand-info-grid">
            <div className="brand-info-main">
              <h2>{texts.brandOverview} {brand.name}</h2>
              <p>{history}</p>
              <p>{popularity}</p>

              {/* Boiler Types */}
              {boilerTypes.length > 0 && (
                <>
                  <h2>{texts.boilerTypes} {brand.name}</h2>
                  <div className="boiler-types-grid">
                    {boilerTypes.map((type, index) => (
                      <div key={index} className="boiler-type-card">
                        <h3>{type.type}</h3>
                        <p>{type.description}</p>
                        <ul className="models-compact">
                          {type.models.map((model, idx) => (
                            <li key={idx}><CheckCircle size={16} /> {model}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Common Problems */}
              {commonProblems.length > 0 && (
                <>
                  <h2>{texts.commonProblems} {brand.name}</h2>
                  <div className="problems-grid-detailed">
                    {commonProblems.map((item, index) => (
                      <div key={index} className="problem-card-detailed">
                        <div className="problem-header">
                          <AlertCircle size={24} />
                          <h4>{item.problem}</h4>
                        </div>
                        <p>{item.solution}</p>
                        <span className={`urgency-badge ${item.urgency?.toLowerCase()}`}>
                          {texts.urgency}: {item.urgency}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Services */}
              {brandServices.length > 0 && (
                <>
                  <h2>{texts.ourServices} {brand.name}</h2>
                  <div className="brand-services-list">
                    {brandServices.map((service, index) => (
                      <div key={index} className="brand-service-item">
                        <CheckCircle size={20} />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Pricing */}
              {pricing.length > 0 && (
                <>
                  <h2>{texts.pricing} {brand.name}</h2>
                  <div className="pricing-table-brand">
                    {pricing.map((item, index) => (
                      <div key={index} className="pricing-row">
                        <div className="pricing-service">
                          <h4>{item.service}</h4>
                          {item.note && <p className="pricing-note">{item.note}</p>}
                        </div>
                        <div className="pricing-value">{item.price}</div>
                      </div>
                    ))}
                  </div>
                  <div className="pricing-disclaimer">
                    <p>* {language === 'ru' ? 'Цены указаны ориентировочно. Точную стоимость назовёт мастер после диагностики.' : language === 'uz-lat' ? 'Narxlar taxminiy. Aniq narxni usta diagnostikadan keyin aytadi.' : 'Нархлар тахминий. Аниқ нархни уста диагностикадан кейин айтади.'}</p>
                  </div>
                </>
              )}

              {/* Why Choose Us */}
              <div className="brand-advantages">
                <h2>{texts.whyUs} {brand.name}</h2>
                <div className="advantages-grid-small">
                  <div className="advantage-small">
                    <Clock size={28} />
                    <h4>{language === 'ru' ? 'Быстрый выезд' : language === 'uz-lat' ? 'Tez chiqish' : 'Тез чиқиш'}</h4>
                    <p>{language === 'ru' ? 'Приезжаем в течение 1-2 часов по Ташкенту' : language === 'uz-lat' ? 'Toshkent bo\'ylab 1-2 soat ichida kelamiz' : 'Тошкент бўйлаб 1-2 соат ичида келамиз'}</p>
                  </div>
                  <div className="advantage-small">
                    <Shield size={28} />
                    <h4>{language === 'ru' ? 'Гарантия' : language === 'uz-lat' ? 'Kafolat' : 'Кафолат'}</h4>
                    <p>{language === 'ru' ? 'До 2 лет на выполненные работы' : language === 'uz-lat' ? 'Bajarilgan ishlarga 2 yilgacha' : 'Бажарилган ишларга 2 йилгача'}</p>
                  </div>
                  <div className="advantage-small">
                    <Wrench size={28} />
                    <h4>{language === 'ru' ? 'Опыт' : language === 'uz-lat' ? 'Tajriba' : 'Тажриба'}</h4>
                    <p>{language === 'ru' ? `Специализация на котлах ${brand.name}` : language === 'uz-lat' ? `${brand.name} qozonlari bo\'yicha mutaxassislik` : `${brand.name} қозонлари бўйича мутахассислик`}</p>
                  </div>
                  <div className="advantage-small">
                    <CheckCircle size={28} />
                    <h4>{language === 'ru' ? 'Оригинальные запчасти' : language === 'uz-lat' ? 'Original ehtiyot qismlar' : 'Оригинал эҳтиёт қисмлар'}</h4>
                    <p>{language === 'ru' ? 'Работаем только с сертифицированными деталями' : language === 'uz-lat' ? 'Faqat sertifikatlangan qismlar bilan ishlaymiz' : 'Фақат сертификатланган қисмлар билан ишлаймиз'}</p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              {faqs.length > 0 && (
                <>
                  <h2>{texts.faq}</h2>
                  <div className="faq-list">
                    {faqs.map((faq, index) => (
                      <details key={index} className="faq-item">
                        <summary className="faq-question">{faq.q}</summary>
                        <p className="faq-answer">{faq.a}</p>
                      </details>
                    ))}
                  </div>
                </>
              )}
            </div>

            <aside className="brand-sidebar">
              <div className="sticky-sidebar">
                <ContactForm className="sidebar-form" />
                
                <div className="sidebar-info">
                  <h4>{language === 'ru' ? `Срочный ремонт ${brand.name}?` : language === 'uz-lat' ? `${brand.name} shoshilinch ta\'mir?` : `${brand.name} шошилинч таъмир?`}</h4>
                  <p>{language === 'ru' ? 'Мы работаем круглосуточно без выходных' : language === 'uz-lat' ? 'Biz tun-kun dam olishsiz ishlaymiz' : 'Биз тун-кун дам олишсиз ишлаймиз'}</p>
                  <a href="tel:+998904886333" className="btn-primary" style={{ width: '100%', marginTop: '16px' }}>
                    <Phone size={18} />
                    {language === 'ru' ? 'Позвонить сейчас' : language === 'uz-lat' ? 'Hozir qo\'ng\'iroq qiling' : 'Ҳозир қўнғироқ қилинг'}
                  </a>
                </div>

                <div className="sidebar-info">
                  <h4>{language === 'ru' ? 'Наши преимущества' : language === 'uz-lat' ? 'Bizning afzalliklarimiz' : 'Бизнинг афзалликларимиз'}</h4>
                  <ul className="trust-list">
                    <li><CheckCircle size={18} /> {language === 'ru' ? `Опыт работы с ${brand.name}` : language === 'uz-lat' ? `${brand.name} bilan ish tajribasi` : `${brand.name} билан иш тажрибаси`}</li>
                    <li><CheckCircle size={18} /> {language === 'ru' ? 'Оригинальные запчасти' : language === 'uz-lat' ? 'Original ehtiyot qismlar' : 'Оригинал эҳтиёт қисмлар'}</li>
                    <li><CheckCircle size={18} /> {language === 'ru' ? 'Гарантия качества' : language === 'uz-lat' ? 'Sifat kafolati' : 'Сифат кафолати'}</li>
                    <li><CheckCircle size={18} /> {language === 'ru' ? 'Доступные цены' : language === 'uz-lat' ? 'Qulay narxlar' : 'Қулай нархлар'}</li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="related-services">
        <div className="container">
          <h2>{texts.relatedServices}</h2>
          <div className="services-grid">
            {services.slice(0, 3).map(service => (
              <Link 
                key={service.id}
                to={`/services/${service.id}`}
                className="service-card"
              >
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.shortDesc}</p>
                <div className="service-price">
                  <span className="price-label">{language === 'ru' ? 'от' : language === 'uz-lat' ? 'dan' : 'дан'}</span>
                  <span className="price-value">{service.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandPage;
