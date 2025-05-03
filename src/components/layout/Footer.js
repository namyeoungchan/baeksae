import React from 'react';

const Footer = ({ translations, lang }) => {
  const t = translations[lang];

  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4 text-center">
        <p>{t.footer.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
