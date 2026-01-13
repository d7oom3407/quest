
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold tracking-tighter flex items-center gap-1">
            <span className="text-quest-orange">Quest</span>
            <span className="text-quest-dark">كويست</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#services" className="hover:text-quest-orange transition-colors">خدماتنا</a>
          <a href="#process" className="hover:text-quest-orange transition-colors">منهجيتنا</a>
          <a href="#clients" className="hover:text-quest-orange transition-colors">شركاؤنا</a>
          <a href="#contact" className="bg-quest-orange text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all">تواصل معنا</a>
        </div>

        <button className="md:hidden text-quest-dark">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
