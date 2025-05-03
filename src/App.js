import React, { useState, useEffect } from 'react';
import { translations } from './locales';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProductsSection from './components/sections/ProductsSection';
import AntioxidantSection from './components/sections/AntioxidantSection';
import FacilitySection from './components/sections/FacilitySection';
import ContactSection from './components/sections/ContactSection';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('ko');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrolled={scrolled}
        lang={lang}
        setLang={setLang}
        translations={translations}
      />
      
      <HeroSection translations={translations} lang={lang} />
      <AboutSection translations={translations} lang={lang} />
      <ProductsSection translations={translations} lang={lang} />
      <AntioxidantSection translations={translations} lang={lang} />
      <FacilitySection translations={translations} lang={lang} />
      <ContactSection translations={translations} lang={lang} />
      
      <Footer translations={translations} lang={lang} />
    </div>
  );
};

export default App;
