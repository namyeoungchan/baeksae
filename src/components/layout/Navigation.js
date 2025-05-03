import React from 'react';
import { Menu, X, Leaf, Globe } from 'lucide-react';

const Navigation = ({ 
  isMenuOpen, 
  setIsMenuOpen, 
  scrolled, 
  lang, 
  setLang, 
  translations 
}) => {
  const t = translations[lang];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setIsMenuOpen(false); // Close mobile menu if open
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">
              {lang === 'ko' ? '백세농업' : lang === 'en' ? 'Baekse Agriculture' : '百岁农业'}
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-gray-600 hover:text-green-600 transition-colors">{t.nav.home}</a>
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-gray-600 hover:text-green-600 transition-colors">{t.nav.about}</a>
            <a href="#products" onClick={(e) => handleNavClick(e, '#products')} className="text-gray-600 hover:text-green-600 transition-colors">{t.nav.products}</a>
            <a href="#antioxidant" onClick={(e) => handleNavClick(e, '#antioxidant')} className="text-gray-600 hover:text-green-600 transition-colors">{t.nav.antioxidant}</a>
            <a href="#facility" onClick={(e) => handleNavClick(e, '#facility')} className="text-gray-600 hover:text-green-600 transition-colors">{t.nav.facility}</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-gray-600 hover:text-green-600 transition-colors">{t.nav.contact}</a>
            
            {/* Language Selector */}
            <div className="flex items-center space-x-2 border-l pl-4">
              <Globe className="h-5 w-5 text-gray-600" />
              <select 
                value={lang} 
                onChange={(e) => setLang(e.target.value)}
                className="bg-transparent border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="ko">한국어</option>
                <option value="en">English</option>
                <option value="zh">中文</option>
              </select>
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="block px-3 py-2 text-gray-600 hover:text-green-600 transition-colors">{t.nav.home}</a>
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="block px-3 py-2 text-gray-600 hover:text-green-600 transition-colors">{t.nav.about}</a>
            <a href="#products" onClick={(e) => handleNavClick(e, '#products')} className="block px-3 py-2 text-gray-600 hover:text-green-600 transition-colors">{t.nav.products}</a>
            <a href="#antioxidant" onClick={(e) => handleNavClick(e, '#antioxidant')} className="block px-3 py-2 text-gray-600 hover:text-green-600 transition-colors">{t.nav.antioxidant}</a>
            <a href="#facility" onClick={(e) => handleNavClick(e, '#facility')} className="block px-3 py-2 text-gray-600 hover:text-green-600 transition-colors">{t.nav.facility}</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="block px-3 py-2 text-gray-600 hover:text-green-600 transition-colors">{t.nav.contact}</a>
            
            {/* Mobile Language Selector */}
            <div className="px-3 py-2">
              <select 
                value={lang} 
                onChange={(e) => setLang(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="ko">한국어</option>
                <option value="en">English</option>
                <option value="zh">中文</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
