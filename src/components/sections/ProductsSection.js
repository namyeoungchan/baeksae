import React, { useState } from 'react';
import OrderModal from '../common/OrderModal';
import { Lock } from 'lucide-react';

const ProductsSection = ({ translations, lang }) => {
  const t = translations[lang];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const PlaceholderSVG = () => (
    <div className="w-full h-48 bg-gray-100 relative overflow-hidden">
      {/* 대각선 패턴 */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal-lines" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="5" x2="10" y2="5" stroke="#e5e7eb" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
        </svg>
      </div>
      
      {/* 중앙 자물쇠 아이콘 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-90 rounded-full p-6 shadow-lg">
          <Lock className="h-12 w-12 text-gray-400" />
        </div>
      </div>
      
      {/* Coming Soon 텍스트 */}
      <div className="absolute inset-x-0 bottom-4 text-center">
        <span className="bg-gray-800 text-white px-4 py-1 rounded-full text-sm font-medium">
          {t.products.comingSoon}
        </span>
      </div>
    </div>
  );

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.products.title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Current Product */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
            <img 
              src={`${process.env.PUBLIC_URL}/product/product_1.jpg`}
              alt={t.products.items[0].title}
              className="w-full h-48 object-cover"
              onError={(e) => {
                console.error('Image failed to load:', e.target.src);
                e.target.onerror = null;
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2UyZThmMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiM2Yjc1ODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBOb3QgRm91bmQ8L3RleHQ+PC9zdmc+';
              }}
              onLoad={() => console.log('Image loaded successfully:', `${process.env.PUBLIC_URL}/product/product_1.jpg`)}
            />
            <div className="p-6">
              <div className="bg-green-100 text-green-600 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3">
                {t.products.currentSale}
              </div>
              <h3 className="text-xl font-bold mb-2">{t.products.items[0].title}</h3>
              <p className="text-gray-600 mb-4">{t.products.items[0].description}</p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                {t.products.orderNow}
              </button>
            </div>
          </div>

          {/* Future Product 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden opacity-60 relative select-none">
            <PlaceholderSVG />
            <div className="p-6 relative">
              <div className="bg-gray-200 text-gray-600 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3">
                {t.products.comingSoon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-400">{t.products.items[1].title}</h3>
              <p className="text-gray-400 mb-4">{t.products.items[1].description}</p>
              <div className="bg-gray-200 text-gray-400 px-4 py-2 rounded-lg inline-flex items-center cursor-not-allowed">
                <Lock className="h-4 w-4 mr-2" />
                {t.products.preparing}
              </div>
            </div>
          </div>

          {/* Future Product 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden opacity-60 relative select-none">
            <PlaceholderSVG />
            <div className="p-6 relative">
              <div className="bg-gray-200 text-gray-600 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3">
                {t.products.comingSoon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-400">{t.products.items[2].title}</h3>
              <p className="text-gray-400 mb-4">{t.products.items[2].description}</p>
              <div className="bg-gray-200 text-gray-400 px-4 py-2 rounded-lg inline-flex items-center cursor-not-allowed">
                <Lock className="h-4 w-4 mr-2" />
                {t.products.preparing}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Modal */}
      <OrderModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        translations={translations}
        lang={lang}
      />
    </section>
  );
};

export default ProductsSection;
