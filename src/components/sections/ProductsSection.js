import React from 'react';

const ProductsSection = ({ translations, lang }) => {
  const t = translations[lang];

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.products.title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Current Product */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://via.placeholder.com/400x300" 
              alt={t.products.items[0].title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="bg-green-100 text-green-600 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3">
                {t.products.currentSale}
              </div>
              <h3 className="text-xl font-bold mb-2">{t.products.items[0].title}</h3>
              <p className="text-gray-600 mb-4">{t.products.items[0].description}</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                {t.products.orderNow}
              </button>
            </div>
          </div>

          {/* Future Product 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://via.placeholder.com/400x300" 
              alt={t.products.items[1].title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3">
                {t.products.comingSoon}
              </div>
              <h3 className="text-xl font-bold mb-2">{t.products.items[1].title}</h3>
              <p className="text-gray-600 mb-4">{t.products.items[1].description}</p>
              <button className="bg-gray-400 text-white px-4 py-2 rounded-lg cursor-not-allowed" disabled>
                {t.products.preparing}
              </button>
            </div>
          </div>

          {/* Future Product 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://via.placeholder.com/400x300" 
              alt={t.products.items[2].title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3">
                {t.products.comingSoon}
              </div>
              <h3 className="text-xl font-bold mb-2">{t.products.items[2].title}</h3>
              <p className="text-gray-600 mb-4">{t.products.items[2].description}</p>
              <button className="bg-gray-400 text-white px-4 py-2 rounded-lg cursor-not-allowed" disabled>
                {t.products.preparing}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
