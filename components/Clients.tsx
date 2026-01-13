
import React from 'react';
import { CLIENTS } from '../constants';

const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-quest-orange font-bold text-lg mb-4">رفقاء الطريق</h2>
          <h3 className="text-4xl font-bold text-quest-dark">فخورون بثقتهم في كويست</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {CLIENTS.map((client) => (
            <div 
              key={client.name} 
              className="group p-6 rounded-2xl bg-gray-50 flex items-center justify-center h-32 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-h-16 grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
