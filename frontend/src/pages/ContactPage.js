import React, { useState } from 'react';
import { Phone, Clock, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ContactPage = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const content = {
    ru: {
      title: 'Контакты',
      subtitle: 'Свяжитесь с нами любым удобным способом',
      phone: 'Телефон',
      telegram: 'Telegram',
      hours: 'Режим работы',
      hoursValue: 'Круглосуточно, 24/7',
      address: 'Адрес',
      addressValue: 'г. Ташкент, Узбекистан',
      formTitle: 'Оставить заявку',
      formSubtitle: 'Мы перезвоним вам в течение 15 минут',
      namePlaceholder: 'Ваше имя (необязательно)',
      phonePlaceholder: 'Номер телефона *',
      messagePlaceholder: 'Опишите проблему (необязательно)',
      submitBtn: 'Отправить заявку',
      submitting: 'Отправка...',
      successTitle: 'Заявка отправлена!',
      successText: 'Мы свяжемся с вами в ближайшее время',
      mapTitle: 'Мы работаем по всему Ташкенту'
    },
    'uz-lat': {
      title: 'Kontaktlar',
      subtitle: "Biz bilan qulay usulda bog'laning",
      phone: 'Telefon',
      telegram: 'Telegram',
      hours: 'Ish tartibi',
      hoursValue: 'Kecha-kunduz, 24/7',
      address: 'Manzil',
      addressValue: "Toshkent sh., O'zbekiston",
      formTitle: 'Ariza qoldirish',
      formSubtitle: '15 daqiqa ichida qayta aloqaga chiqamiz',
      namePlaceholder: "Ismingiz (ixtiyoriy)",
      phonePlaceholder: 'Telefon raqami *',
      messagePlaceholder: "Muammoni tasvirlab bering (ixtiyoriy)",
      submitBtn: 'Ariza yuborish',
      submitting: 'Yuborilmoqda...',
      successTitle: 'Ariza yuborildi!',
      successText: 'Tez orada siz bilan bog\'lanamiz',
      mapTitle: 'Butun Toshkent bo\'ylab ishlaymiz'
    },
    'uz-cyr': {
      title: 'Контактлар',
      subtitle: 'Биз билан қулай усулда боғланинг',
      phone: 'Телефон',
      telegram: 'Телеграм',
      hours: 'Иш тартиби',
      hoursValue: 'Кеча-кундуз, 24/7',
      address: 'Манзил',
      addressValue: 'Тошкент ш., Ўзбекистон',
      formTitle: 'Ариза қолдириш',
      formSubtitle: '15 дақиқа ичида қайта алоқага чиқамиз',
      namePlaceholder: 'Исмингиз (ихтиёрий)',
      phonePlaceholder: 'Телефон рақами *',
      messagePlaceholder: 'Муаммони тасвирлаб беринг (ихтиёрий)',
      submitBtn: 'Ариза юбориш',
      submitting: 'Юборилмоқда...',
      successTitle: 'Ариза юборилди!',
      successText: 'Тез орада сиз билан боғланамиз',
      mapTitle: 'Бутун Тошкент бўйлаб ишлаймиз'
    }
  };

  const t = content[language] || content.ru;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.phone.trim()) return;
    
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', phone: '', message: '' });
    }, 1000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>{t.title}</h1>
          <p className="contact-subtitle">{t.subtitle}</p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-details">
                  <h3>{t.phone}</h3>
                  <a href="tel:+998904886333">+998 90 488 63 33</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Send size={24} />
                </div>
                <div className="contact-details">
                  <h3>{t.telegram}</h3>
                  <a href="https://t.me/ShohruhServisPro" target="_blank" rel="noopener noreferrer">@ShohruhServisPro</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Clock size={24} />
                </div>
                <div className="contact-details">
                  <h3>{t.hours}</h3>
                  <span>{t.hoursValue}</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-details">
                  <h3>{t.address}</h3>
                  <span>{t.addressValue}</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>{t.formTitle}</h2>
              <p className="form-subtitle">{t.formSubtitle}</p>

              {submitted ? (
                <div className="form-success">
                  <div className="success-icon">✓</div>
                  <h3>{t.successTitle}</h3>
                  <p>{t.successText}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <input
                    type="text"
                    className="form-input"
                    placeholder={t.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <input
                    type="tel"
                    className="form-input"
                    placeholder={t.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                  <textarea
                    className="form-input form-textarea"
                    placeholder={t.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={3}
                  />
                  <button type="submit" className="btn-primary btn-full" disabled={isSubmitting}>
                    {isSubmitting ? t.submitting : t.submitBtn}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="contact-map">
        <div className="container">
          <h2>{t.mapTitle}</h2>
          <div className="map-placeholder">
            <div className="map-overlay">
              <MapPin size={48} />
              <p>Tashkent, Uzbekistan</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
