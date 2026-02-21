import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-icon">
                <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 4L6 10V18C6 25.18 11.42 31.84 18 33C24.58 31.84 30 25.18 30 18V10L18 4Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
                  <path d="M18 12V24M12 18H24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span>Servis Pro</span>
            </div>
            <p className="footer-description">
              Профессиональный ремонт и обслуживание газовых котлов в Ташкенте. 
              Работаем с 2015 года.
            </p>
          </div>

          <div className="footer-section">
            <h4>Услуги</h4>
            <ul className="footer-links">
              <li><Link to="/services/remont-gazovogo-kotla">Ремонт газового котла</Link></li>
              <li><Link to="/services/obsluzhivanie-gazovogo-kotla">Обслуживание котла</Link></li>
              <li><Link to="/services/zamena-teploobmennika">Замена теплообменника</Link></li>
              <li><Link to="/services/remont-kotelnyh">Ремонт котельных</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Компания</h4>
            <ul className="footer-links">
              <li><Link to="/about">О нас</Link></li>
              <li><Link to="/portfolio">Наши работы</Link></li>
              <li><Link to="/blog">Блог</Link></li>
              <li><Link to="/contact">Контакты</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Контакты</h4>
            <ul className="footer-contacts">
              <li>
                <a href="tel:+998904886333">+998 90 488 63 33</a>
              </li>
              <li>
                <a href="https://t.me/ShohruhServisPro" target="_blank" rel="noopener noreferrer">
                  Telegram: @ShohruhServisPro
                </a>
              </li>
              <li>Ташкент, Узбекистан</li>
              <li>Работаем 24/7</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Servis Pro. Все права защищены.</p>
          <p className="footer-credits">
            Сайт создан <a href="https://t.me/Abror_Shukurov" target="_blank" rel="noopener noreferrer">Abror</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
