
import React from 'react';

const Hero: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0A0A0A]">
      {/* Dynamic Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-50"
          poster="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-business-people-working-in-a-modern-office-4752-large.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-5xl lg:text-8xl font-bold text-white leading-tight mb-8">
            نخلق تجربتك <br />
            <span className="text-quest-orange">الاستثنائية</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed font-medium mx-auto">
            تبدأ رحلتنا معك باستكشاف عميق والإبحار في التفاصيل لبناء استراتيجية مبتكرة تلبي احتياج الواقع وتوسع الآفاق بعد ذلك.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <button 
              onClick={scrollToForm}
              className="px-10 py-5 bg-quest-orange text-white rounded-2xl font-bold text-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1 shadow-2xl shadow-quest-orange/20"
            >
              ابدأ رحلتك الآن
            </button>
            <button 
              onClick={scrollToServices}
              className="px-10 py-5 border-2 border-white/20 text-white rounded-2xl font-bold text-lg hover:border-quest-orange hover:text-quest-orange transition-all bg-white/5 backdrop-blur-md"
            >
              اكتشف خدماتنا
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
