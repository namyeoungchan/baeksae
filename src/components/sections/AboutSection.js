import React from 'react';

const AboutSection = ({ translations, lang }) => {
  const t = translations[lang];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.about.title}</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <img 
                  src={`${process.env.PUBLIC_URL}/certificates/ceo.png`}
                  alt={t.about.position}
                  className="rounded-full w-48 h-48 mx-auto object-cover border-4 border-green-100"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMDAiIGN5PSIyMDAiIHI9IjIwMCIgZmlsbD0iI2UyZThmMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiM2Yjc1ODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9maWxlIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
                  }}
                />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">
                  {lang === 'ko' ? '남춘우' : lang === 'en' ? 'Nam Chun-woo' : '南春雨'} {t.about.position}
                </h3>
                <div className="space-y-2 text-gray-600">
                  {t.about.profileItems.map((item, index) => (
                    <p key={index} className="text-sm">✓ {item}</p>
                  ))}
                </div>
                <p className="mt-6 text-gray-700">"{t.about.quote}"</p>
              </div>
            </div>
          </div>

          {/* 기술이전 인증서 섹션 */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">{t.about.patents.title}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {t.about.patents.items.map((patent, index) => (
                <div key={index} className="bg-green-50 p-6 rounded-lg">
                  <div className="mb-4 relative group">
                    <img 
                      src={`${process.env.PUBLIC_URL}/certificates/certification_${index + 1}.png`}
                      alt={patent.title}
                      className="w-full h-auto rounded-lg shadow-md"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjU2NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjU2NiIgZmlsbD0iI2UyZThmMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiM2Yjc1ODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5DZXJ0aWZpY2F0aW9uIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                      <a 
                        href={`${process.env.PUBLIC_URL}/certificates/certification_${index + 1}.pdf`}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="opacity-0 group-hover:opacity-100 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                      >
                        {t.about.patents.viewOriginal}
                      </a>
                    </div>
                  </div>
                  <h4 className="font-bold text-lg mb-3">{patent.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{patent.description}</p>
                  <p className="text-sm text-gray-600">{patent.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
