
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-quest-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold tracking-tighter flex items-center gap-1 mb-8">
              <span className="text-quest-orange">Quest</span>
              <span>Marketing</span>
            </div>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              نحن لا نكتفي، بل نبحر في أعماق كل فرصة.. نتقصى لنعثر على التميز. شريكك الحقيقي في عالم التسويق الرقمي.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">روابط سريعة</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-quest-orange transition-colors">الرئيسية</a></li>
              <li><a href="#services" className="hover:text-quest-orange transition-colors">خدماتنا</a></li>
              <li><a href="#process" className="hover:text-quest-orange transition-colors">منهجيتنا</a></li>
              <li><a href="#clients" className="hover:text-quest-orange transition-colors">شركاؤنا</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">تواصل معنا</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-quest-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span>info@questme.net</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-quest-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:row justify-between items-center text-sm text-gray-500 gap-4">
          <p>© 2024 Quest Marketing. جميع الحقوق محفوظة.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white transition-colors">شروط الخدمة</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
