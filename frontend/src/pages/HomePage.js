import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone, Clock, Shield } from 'lucide-react';
import * as Icons from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { useLanguage } from '../context/LanguageContext';
import { services, portfolioItems, blogPosts, testimonials, faqs } from '../data/mockData';

const HomePage = () => {
  const { t, language } = useLanguage();

  // Helper to get icon component
  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent size={24} /> : <Icons.Wrench size={24} />;
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">{t('hero.title')}</h1>
            <p className="hero-subtitle">{t('hero.subtitle')}</p>
            <div className="hero-actions">
              <a href="tel:+998904886333" className="btn-primary">
                <Phone size={20} />
                {t('hero.cta')}
              </a>
              <a href="https://t.me/ShohruhServisPro" className="btn-secondary">
                {t('hero.emergency')}
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop" 
              alt="Ремонт котлов"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Clock size={32} />
              </div>
              <h3>Быстрый выезд</h3>
              <p>Приезжаем в течение 1-2 часов после вашего звонка. Работаем 24/7</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={32} />
              </div>
              <h3>Гарантия качества</h3>
              <p>Предоставляем гарантию от 6 месяцев до 2 лет на все работы</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <CheckCircle size={32} />
              </div>
              <h3>Опытные мастера</h3>
              <p>Более 50 успешно выполненных проектов. Работаем с 2015 года</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - REDESIGNED */}
      <section className="services-section-premium">
        <div className="container">
          <div className="section-header">
            <h2>{t('services.title')}</h2>
            <Link to="/services" className="link-primary">
              {t('services.viewAll')} <ArrowRight size={18} />
            </Link>
          </div>
          <div className="services-grid-premium">
            {services.map(service => (
              <Link 
                key={service.id} 
                to={`/services/${service.id}`}
                className="service-card-premium"
              >
                <div className="service-image-container">
                  <img src={service.image} alt={service.title} />
                  <div className="service-overlay">
                    <div className="service-icon">
                      {getIcon(service.icon)}
                    </div>
                  </div>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.shortDesc}</p>
                  <div className="service-footer">
                    <button className="service-cta-btn">
                      Подробнее <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section - NEW */}
      <section className="work-process-section">
        <div className="container">
          <h2>{t('common.workProcess')}</h2>
          <div className="work-process-grid">
            <div className="process-image-large">
              <img src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800" alt={t('common.workProcess')} />
            </div>
            <div className="process-steps-visual">
              <div className="process-step-visual">
                <div className="step-number-large">1</div>
                <div className="step-content">
                  <h3>{language === 'ru' ? 'Звонок' : language === 'uz-lat' ? 'Qo\'ng\'iroq' : 'Қўнғироқ'}</h3>
                  <p>{language === 'ru' ? 'Вы звоните или оставляете заявку на сайте' : language === 'uz-lat' ? 'Siz qo\'ng\'iroq qilasiz yoki saytda ariza qoldirasiz' : 'Сиз қўнғироқ қиласиз ёки сайтда ариза қолдирасиз'}</p>
                </div>
              </div>
              <div className="process-step-visual">
                <div className="step-number-large">2</div>
                <div className="step-content">
                  <h3>{language === 'ru' ? 'Выезд мастера' : language === 'uz-lat' ? 'Ustaning chiqishi' : 'Устанинг чиқиши'}</h3>
                  <p>{language === 'ru' ? 'Специалист приезжает в течение 1-2 часов' : language === 'uz-lat' ? 'Mutaxassis 1-2 soat ichida keladi' : 'Мутахассис 1-2 соат ичида келади'}</p>
                </div>
              </div>
              <div className="process-step-visual">
                <div className="step-number-large">3</div>
                <div className="step-content">
                  <h3>{language === 'ru' ? 'Диагностика' : language === 'uz-lat' ? 'Diagnostika' : 'Диагностика'}</h3>
                  <p>{language === 'ru' ? 'Проводим полную проверку оборудования' : language === 'uz-lat' ? 'To\'liq uskunani tekshiramiz' : 'Тўлиқ ускунани текширамиз'}</p>
                </div>
              </div>
              <div className="process-step-visual">
                <div className="step-number-large">4</div>
                <div className="step-content">
                  <h3>{language === 'ru' ? 'Ремонт' : language === 'uz-lat' ? 'Ta\'mirlash' : 'Таъмирлаш'}</h3>
                  <p>{language === 'ru' ? 'Устраняем проблему качественно и быстро' : language === 'uz-lat' ? 'Muammoni sifatli va tez hal qilamiz' : 'Муаммони сифатли ва тез ҳал қиламиз'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>{t('common.needRepair')}</h2>
              <p>{t('common.getFreeConsultation')}</p>
              <ul className="cta-benefits">
                <li><CheckCircle size={18} /> {t('common.freeDiagnostic')}</li>
                <li><CheckCircle size={18} /> {t('common.sameDayService')}</li>
                <li><CheckCircle size={18} /> {t('common.originalParts')}</li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('common.ourWork')}</h2>
            <Link to="/portfolio" className="link-primary">
              {t('common.allWork')} <ArrowRight size={18} />
            </Link>
          </div>
          <div className="portfolio-grid">
            {portfolioItems.map(item => (
              <div key={item.id} className="portfolio-card">
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="portfolio-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="portfolio-location">{item.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2>{t('common.customerReviews')}</h2>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('common.usefulArticles')}</h2>
            <Link to="/blog" className="link-primary">
              {t('common.allArticles')} <ArrowRight size={18} />
            </Link>
          </div>
          <div className="blog-grid">
            {blogPosts.map(post => (
              <Link key={post.id} to={`/blog/${post.id}`} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-content">
                  <span className="blog-date">{post.date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>{t('common.faq')}</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={index} className="faq-item">
                <summary className="faq-question">{faq.question}</summary>
                <p className="faq-answer">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
