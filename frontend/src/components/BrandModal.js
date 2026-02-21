import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { brands } from '../data/mockData';

const BrandModal = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  
  if (!isOpen) return null;

  // Generate slug from brand name
  const generateSlug = (name) => name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '');

  // Get modal title based on language
  const getTitle = () => {
    switch (language) {
      case 'uz-lat':
        return 'Brendlar';
      case 'uz-cyr':
        return 'Брендлар';
      default:
        return 'Котлы';
    }
  };

  // Get subtitle based on language
  const getSubtitle = () => {
    switch (language) {
      case 'uz-lat':
        return "O'zbekistonda xizmat ko'rsatadigan barcha brendlar";
      case 'uz-cyr':
        return 'Ўзбекистонда хизмат кўрсатадиган барча брендлар';
      default:
        return 'Все бренды, с которыми мы работаем';
    }
  };

  return (
    <div className="brand-modal-overlay" onClick={onClose}>
      <div className="brand-modal" onClick={(e) => e.stopPropagation()}>
        <div className="brand-modal-header">
          <div>
            <h2 className="brand-modal-title">{getTitle()}</h2>
            <p className="brand-modal-subtitle">{getSubtitle()}</p>
          </div>
          <button 
            className="brand-modal-close" 
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="brand-modal-content">
          <div className="brand-grid">
            {brands.map((brand) => (
              <Link
                key={brand}
                to={`/brands/${generateSlug(brand)}`}
                className="brand-card"
                onClick={onClose}
                data-testid={`brand-card-${generateSlug(brand)}`}
              >
                <span className="brand-card-name">{brand}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandModal;
