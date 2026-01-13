
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-quest-dark text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-quest-orange font-bold text-lg mb-4">خدماتنا المتكاملة</h2>
          <h3 className="text-4xl lg:text-5xl font-bold leading-tight">
            نعمل كشريك تسويق حقيقي من خلال تقديم حلول إبداعية
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-quest-orange flex items-center justify-center mb-6 shadow-lg shadow-quest-orange/20">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;