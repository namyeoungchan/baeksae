import React from 'react';

const FacilitySection = ({ translations, lang }) => {
  const t = translations[lang];

  return (
    <section id="facility" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t.facility.title}</h2>
        <p className="text-xl text-gray-600 text-center mb-12">{t.facility.subtitle}</p>
        <div className="grid md:grid-cols-3 gap-8">
          {t.facility.items.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img 
                  src={`/facility/facility_${index + 1}.${index === 1 ? 'png' : 'jpg'}`}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/api/placeholder/600/400';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitySection;
