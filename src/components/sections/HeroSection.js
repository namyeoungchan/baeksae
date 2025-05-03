import React from 'react';
import { ChevronRight } from 'lucide-react';

const HeroSection = ({ translations, lang }) => {
  const t = translations[lang];

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const element = document.querySelector('#products');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-sky-100 to-emerald-50">
      <div className="container mx-auto px-4 text-center text-gray-800">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.hero.title}</h1>
        <p className="text-xl md:text-2xl mb-8">{t.hero.subtitle}</p>
        <a 
          href="#products" 
          onClick={handleSmoothScroll}
          className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
        >
          {t.hero.cta} <ChevronRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
