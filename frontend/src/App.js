import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from './components/ui/sonner';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import BrandPage from './pages/BrandPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services/:serviceId" element={<ServicePage />} />
                <Route path="/brands/:brandSlug" element={<BrandPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/blog" element={<div className="container" style={{padding: '100px 16px', textAlign: 'center'}}><h1>Блог</h1><p>Скоро</p></div>} />
                <Route path="/news" element={<div className="container" style={{padding: '100px 16px', textAlign: 'center'}}><h1>Новости</h1><p>Скоро</p></div>} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
            <Footer />
            <Toaster position="top-right" />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
