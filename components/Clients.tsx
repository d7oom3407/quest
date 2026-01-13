
import React from 'react';
import { CLIENTS } from '../constants';

const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-24 bg-quest-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-quest-orange/10 text-quest-orange text-sm font-bold mb-4">
            شركاء النجاح
          </div>
          <h2 className="text-4xl font-bold text-quest-dark">فخورون بثقتهم في كويست</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {CLIENTS.map((client) => (
            <div 
              key={client.name} 
              className="group relative bg-white rounded-[2rem] p-4 flex items-center justify-center h-52 shadow-sm hover:shadow-md transition-all duration-300 border border-white hover:border-gray-100 overflow-hidden"
            >
              {/* Subtle hover background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <img 
                src={client.logo} 
                alt={client.name} 
                className="relative z-10 max-h-44 w-full h-full object-contain transition-all duration-500 opacity-100 group-hover:scale-110" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
