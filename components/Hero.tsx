
import React from 'react';

const Hero: React.FC = () => {
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
          Your browser does not support the video tag.
        </video>
        {/* Darkened Overlays for Maximum Text Clarity */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content - Changed to White for Clarity */}
        <div className="animate-fade-in-up">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-quest-orange/20 text-quest-orange text-sm font-bold border border-quest-orange/40 backdrop-blur-md">
             <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-quest-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-quest-orange"></span>
            </span>
            شريكك في النجاح التسويقي
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-sm">
            نخلق تجربتك <br />
            <span className="text-quest-orange">الاستثنائية</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-xl leading-relaxed font-medium drop-shadow-md">
            تبدأ رحلتنا معك باستكشاف عميق والإبحار في التفاصيل لبناء استراتيجية مبتكرة تلبي احتياج الواقع وتوسع الآفاق بعد ذلك.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-8 py-4 bg-quest-orange text-white rounded-xl font-bold hover:bg-opacity-90 transition-all transform hover:-translate-y-1 shadow-2xl">
              ابدأ رحلتك الآن
            </a>
            <a href="#services" className="px-8 py-4 border-2 border-white/20 text-white rounded-xl font-bold hover:border-quest-orange hover:text-quest-orange transition-all bg-white/10 backdrop-blur-md">
              اكتشف خدماتنا
            </a>
          </div>
        </div>

        {/* Hero Visual - Form Card */}
        <div className="relative">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-quest-orange/30 rounded-full blur-[100px] opacity-50"></div>
          
          <div className="relative bg-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-100" id="hero-form">
            <h3 className="text-2xl font-bold mb-6 text-center text-quest-dark">سجل اهتمامك</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">الاسم الكامل *</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-quest-orange/20 transition-all" placeholder="أدخل اسمك هنا" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">اسم الشركة *</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-quest-orange/20 transition-all" placeholder="أدخل اسم شركتك" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">رقم الجوال *</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-quest-orange/20 transition-all" placeholder="05XXXXXXXX" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">البريد الإلكتروني</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-quest-orange/20 transition-all" placeholder="mail@example.com" />
                </div>
              </div>
              <button className="w-full py-4 bg-quest-orange text-white rounded-xl font-bold shadow-lg shadow-quest-orange/30 hover:bg-opacity-90 transition-all text-lg transform active:scale-95">
                إرسال الطلب
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
