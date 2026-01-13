
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Clients from './components/Clients';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Section 1: Hero & Registration */}
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
                className="rounded-3xl shadow-2xl relative z-10 w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.02]"
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
                <button className="px-8 py-4 bg-quest-orange text-white rounded-xl font-bold shadow-lg shadow-quest-orange/30 hover:scale-105 transition-all">
                  تعرف علينا أكثر
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Methodology */}
        <Process />

        {/* Section 5: Clients */}
        <Clients />

        {/* Section 6: Final CTA */}
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
            <a href="#hero-form" className="inline-block px-10 py-5 bg-quest-dark text-white rounded-2xl font-bold text-xl hover:bg-gray-800 transition-all shadow-xl hover:-translate-y-1 transform">
              سجل اهتمامك الآن واحصل على عرضك
            </a>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Scroll to Top Button (Floating) */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 left-8 w-12 h-12 bg-quest-dark text-white rounded-full flex items-center justify-center shadow-xl hover:bg-quest-orange transition-all z-40"
      >
        <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      `}</style>
    </div>
  );
}

export default App;
