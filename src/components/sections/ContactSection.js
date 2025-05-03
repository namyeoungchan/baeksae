import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = ({ translations, lang }) => {
  const t = translations[lang];

  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.contact.title}</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="h-8 w-8 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-bold mb-2">{t.contact.phone}</h3>
              <p className="text-gray-300">043-261-2858</p>
              <p className="text-gray-300">{t.contact.hours}</p>
            </div>
            <div className="text-center">
              <Mail className="h-8 w-8 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-bold mb-2">{t.contact.email}</h3>
              <p className="text-gray-300">info@baekse-farm.com</p>
              <p className="text-gray-300">{t.contact.available24}</p>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-bold mb-2">{t.contact.address}</h3>
              <p className="text-gray-300">{t.contact.addressDetail1}</p>
              <p className="text-gray-300">{t.contact.addressDetail2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
