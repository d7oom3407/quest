
import React from 'react';
import { STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-quest-beige overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 md:block hidden"></div>
            <div className="space-y-12 relative">
              {STEPS.map((step, index) => (
                <div key={step.number} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 hidden md:block"></div>
                  <div className="relative z-10 w-16 h-16 rounded-full bg-white border-4 border-quest-orange flex items-center justify-center font-bold text-xl text-quest-dark shadow-xl">
                    {step.number}
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-quest-orange transition-all">
                    <h4 className="text-xl font-bold text-quest-dark">{step.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-quest-orange font-bold text-lg mb-4">منهجية العمل</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-quest-dark mb-8 leading-tight">
              نعمل وفق آلية عمل ممنهجة في ابتكار وإطلاق الحملات الإبداعية
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              نرسـم خطـة عمـل تضمن كـل خطوة منهـا تحقيق الأهـداف، ثـم ننتقـل للتنفيـذ حيـث نحـول الأفكـار إلـى واقـع ملمـوس، نراقـب النتائـج لضمـان الوصول إلـى القمـة.
            </p>
            <div className="flex items-center gap-4 p-6 bg-quest-orange/5 rounded-3xl border border-quest-orange/10">
              <div className="w-12 h-12 bg-quest-orange rounded-full flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-bold text-quest-dark">الجودة والاحترافية هي معيارنا الوحيد</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;
