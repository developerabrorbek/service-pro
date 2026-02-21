import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X, Sun, Moon, ChevronDown, Flame } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { services } from '../data/mockData';
import BrandModal from './BrandModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t, language, setLanguage } = useLanguage();

  // Get brand menu label based on language
  const getBrandLabel = () => {
    switch (language) {
      case 'uz-lat':
        return 'Brendlar';
      case 'uz-cyr':
        return 'Брендлар';
      default:
        return 'Котлы';
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <div className="logo-icon">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 4L6 10V18C6 25.18 11.42 31.84 18 33C24.58 31.84 30 25.18 30 18V10L18 4Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
                <path d="M18 12V24M12 18H24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="logo-text">Servis Pro</span>
          </Link>

          {/* Desktop Menu */}
          <div className="navbar-menu-desktop">
            <Link to="/about" className="navbar-link">{t('nav.about')}</Link>
            
            {/* Brands Button */}
            <button 
              className="navbar-link brands-trigger"
              onClick={() => setIsBrandModalOpen(true)}
              data-testid="brands-nav-button"
            >
              <Flame size={16} />
              {getBrandLabel()}
            </button>
            
            <div 
              className="navbar-dropdown"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="navbar-link dropdown-trigger">
                {t('nav.services')} <ChevronDown size={16} />
              </button>
              {isServicesOpen && (
                <div className="dropdown-menu">
                  {services.map(service => (
                    <Link 
                      key={service.id} 
                      to={`/services/${service.id}`}
                      className="dropdown-item"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/portfolio" className="navbar-link">{t('nav.portfolio')}</Link>
            <Link to="/contact" className="navbar-link">{t('nav.contact')}</Link>
          </div>

          {/* Desktop Actions */}
          <div className="navbar-actions-desktop">
            <div className="language-selector-group">
              <button 
                onClick={() => setLanguage('ru')}
                className={`language-btn ${language === 'ru' ? 'active' : ''}`}
              >
                RU
              </button>
              <button 
                onClick={() => setLanguage('uz-lat')}
                className={`language-btn ${language === 'uz-lat' ? 'active' : ''}`}
              >
                UZ
              </button>
              <button 
                onClick={() => setLanguage('uz-cyr')}
                className={`language-btn ${language === 'uz-cyr' ? 'active' : ''}`}
              >
                ЎЗ
              </button>
            </div>

            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <a href="tel:+998904886333" className="navbar-phone-desktop">
              <Phone size={18} />
              <span>+998 90 488 63 33</span>
            </a>

            <div className="social-icons-desktop">
              <a href="https://t.me/ShohruhServisPro" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.03-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.18.943.11.78.89z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="navbar-actions-mobile">
            <a href="tel:+998904886333" className="navbar-phone-mobile" aria-label="Call">
              <Phone size={20} />
            </a>
            
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              data-testid="mobile-menu-toggle"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Outside container for proper positioning */}
        {isMenuOpen && (
          <div className="navbar-menu-mobile">
            <div className="mobile-menu-header">
              <div className="language-selector-mobile">
                <button 
                  onClick={() => setLanguage('ru')}
                  className={`language-btn-mobile ${language === 'ru' ? 'active' : ''}`}
                >
                  RU
                </button>
                <button 
                  onClick={() => setLanguage('uz-lat')}
                  className={`language-btn-mobile ${language === 'uz-lat' ? 'active' : ''}`}
                >
                  UZ
                </button>
                <button 
                  onClick={() => setLanguage('uz-cyr')}
                  className={`language-btn-mobile ${language === 'uz-cyr' ? 'active' : ''}`}
                >
                  ЎЗ
                </button>
              </div>
              <button onClick={toggleTheme} className="theme-toggle-mobile" aria-label="Toggle theme">
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            </div>

            <Link to="/about" className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</Link>
            
            {/* Brands Button in Mobile Menu */}
            <button 
              className="mobile-menu-link brands-mobile-btn"
              onClick={() => {
                setIsMenuOpen(false);
                setIsBrandModalOpen(true);
              }}
              data-testid="brands-mobile-button"
            >
              <Flame size={18} />
              {getBrandLabel()}
            </button>
            
            <Link to="/portfolio" className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>{t('nav.portfolio')}</Link>
            <Link to="/contact" className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</Link>
            
            <div className="mobile-menu-divider"></div>
            <div className="mobile-menu-label">{t('nav.services')}</div>
            {services.slice(0, 6).map(service => (
              <Link 
                key={service.id}
                to={`/services/${service.id}`}
                className="mobile-menu-link-small"
                onClick={() => setIsMenuOpen(false)}
              >
                {service.title}
              </Link>
            ))}

            <div className="mobile-menu-divider"></div>
            <div className="mobile-social-icons">
              <a href="https://t.me/ShohruhServisPro" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.03-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.18.943.11.78.89z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Brand Modal */}
      <BrandModal 
        isOpen={isBrandModalOpen} 
        onClose={() => setIsBrandModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;
