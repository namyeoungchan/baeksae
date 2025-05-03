import React from 'react';
import { Award, Leaf, ShoppingBag, Users } from 'lucide-react';

const AntioxidantSection = ({ translations, lang }) => {
  const t = translations[lang];

  const icons = [
    <Award className="h-8 w-8 text-green-600" />,
    <Leaf className="h-8 w-8 text-green-600" />,
    <ShoppingBag className="h-8 w-8 text-green-600" />,
    <Users className="h-8 w-8 text-green-600" />
  ];

  return (
    <section id="antioxidant" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.antioxidant.title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.antioxidant.benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {icons[index]}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AntioxidantSection;
