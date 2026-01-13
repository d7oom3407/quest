
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Clients from './components/Clients';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Services */}
        <Services />

        {/* Section 3: Value Proposition / About */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-quest-orange/5 rounded-[2rem] blur-2xl group-hover:bg-quest-orange/10 transition-all"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Creative Collaboration" 
                className="rounded-[3rem] shadow-2xl relative z-10 w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-quest-orange rounded-3xl -z-0 opacity-10 group-hover:opacity-20 transition-all"></div>
              
              {/* Achievement Badge */}
              <div className="absolute top-10 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block animate-bounce-slow">
                <div className="text-quest-orange font-bold text-3xl mb-1">10+</div>
                <div className="text-gray-500 text-sm font-medium">سنوات من الخبرة</div>
              </div>
            </div>
            <div>
              <h2 className="text-quest-orange font-bold text-lg mb-4">قيمنا الأصيلة</h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-quest-dark mb-6 leading-tight">
                نحن لا نكتفي، بل نبحر في أعماق كل فرصة
              </h3>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  نسعى دائماً لإيجاد حلول غير تقليدية، بل مبتكرة لتحقق فرقاً حقيقياً لعلامتك التجارية.
                </p>
                <p>
                  نثق أن التعاون المشترك هو الدافع لتحقيق التكامل والتفوق بالإبداع، وأن يعيش كل منا شغفه في كل فكرة لنخلق تجارب مميزة للعميل.
                </p>
              </div>
              <div className="mt-10">
                <button 
                  onClick={scrollToForm}
                  className="px-8 py-4 bg-quest-orange text-white rounded-xl font-bold shadow-lg shadow-quest-orange/30 hover:scale-105 transition-all"
                >
                  تواصل معنا الآن
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Methodology */}
        <Process />

        {/* Section 5: Clients */}
        <Clients />

        {/* Section 6: Contact Form (MOVED HERE) */}
        <ContactForm />

        {/* Section 7: Quick CTA */}
        <section className="py-20 bg-quest-orange relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
             <svg width="100%" height="100%">
              <pattern id="grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-8">هل أنت مستعد لرفع مستوى علامتك التجارية؟</h2>
            <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
              دعنا نساعدك في بناء استراتيجية تسويقية متكاملة تحقق لك النتائج المرجوة.
            </p>
            <button 
              onClick={scrollToForm}
              className="inline-block px-10 py-5 bg-quest-dark text-white rounded-2xl font-bold text-xl hover:bg-gray-800 transition-all shadow-xl hover:-translate-y-1 transform"
            >
              سجل اهتمامك الآن واحصل على عرضك
            </button>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Floating Buttons Group - Bottom Right */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        {/* Call Button */}
        <a 
          href="tel:+966530283646"
          className="w-14 h-14 bg-quest-orange text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all transform animate-fade-in"
          title="اتصل بنا"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>

        {/* WhatsApp Button */}
        <a 
          href="https://api.whatsapp.com/send/?phone=966530283646" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all transform animate-fade-in"
          title="واتساب"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.996-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.503 1.441 5.455 1.442 5.566 0 10.098-4.532 10.1-10.098 0-2.698-1.05-5.236-2.956-7.142-1.905-1.906-4.442-2.956-7.141-2.956-5.566 0-10.099 4.532-10.1 10.099 0 1.88.513 3.71 1.482 5.308l-1.011 3.693 3.788-.994zm11.332-6.49c-.312-.156-1.848-.912-2.134-1.015-.286-.104-.494-.156-.702.156-.208.312-.806 1.015-.988 1.222-.182.208-.364.234-.676.078-.312-.156-1.316-.485-2.508-1.548-.926-.826-1.551-1.846-1.733-2.158-.182-.312-.02-.48.136-.635.14-.14.312-.364.468-.546.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.702-1.691-.962-2.314-.253-.607-.51-.524-.702-.534-.182-.01-.39-.011-.598-.011s-.546.078-.832.39c-.286.312-1.092 1.066-1.092 2.6s1.118 3.016 1.274 3.224c.156.208 2.199 3.358 5.326 4.706.744.321 1.324.512 1.777.656.748.237 1.43.203 1.968.123.599-.088 1.848-.755 2.108-1.483.26-.728.26-1.353.182-1.483-.078-.13-.286-.208-.598-.364z" />
          </svg>
        </a>
      </div>
      
      {/* Scroll to Top Button (Floating) - Bottom Left */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 left-8 w-14 h-14 bg-quest-dark text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-quest-orange transition-all z-40 transform hover:scale-110"
      >
        <svg className="w-7 h-7 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5%); }
          50% { transform: translateY(0); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default App;
