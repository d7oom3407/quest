
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <section id="contact-form" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center bg-quest-beige p-12 rounded-[3rem] border border-gray-100 shadow-xl animate-fade-in">
            <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-quest-dark mb-4">تم استلام طلبك بنجاح!</h2>
            <p className="text-gray-600 text-lg mb-8">سيتواصل معك فريقنا في أقرب وقت ممكن لمناقشة رحلة نجاحك القادمة.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-quest-orange font-bold hover:underline"
            >
              إرسال طلب آخر
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-quest-orange/10 text-quest-orange text-sm font-bold mb-4">
              تواصل معنا
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-quest-dark mb-8 leading-tight">
              هل أنت مستعد <br />لبدء قصة نجاحك؟
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              اترك لنا تفاصيل مشروعك وسيقوم خبراؤنا بدراسة احتياجك وتقديم أفضل الحلول التسويقية المبتكرة التي تناسب تطلعاتك.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-quest-beige flex items-center justify-center text-quest-orange">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">البريد الإلكتروني</div>
                  <div className="font-bold text-quest-dark">info@questme.net</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-quest-beige flex items-center justify-center text-quest-orange">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">الموقع</div>
                  <div className="font-bold text-quest-dark">الرياض، المملكة العربية السعودية</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-quest-orange/5 rounded-[3rem] blur-2xl"></div>
            <div className="relative bg-quest-beige p-8 md:p-12 rounded-[3rem] shadow-xl border border-white">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">الاسم الكامل *</label>
                    <input required type="text" className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-100 focus:outline-none focus:ring-2 focus:ring-quest-orange/20 transition-all" placeholder="الاسم" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">رقم الجوال *</label>
                    <input required type="tel" className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-100 focus:outline-none focus:ring-2 focus:ring-quest-orange/20 transition-all" placeholder="05XXXXXXXX" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">اسم المنشأة / الشركة</label>
                  <input type="text" className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-100 focus:outline-none focus:ring-2 focus:ring-quest-orange/20 transition-all" placeholder="اسم شركتك" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">كيف يمكننا مساعدتك؟</label>
                  <textarea rows={4} className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-100 focus:outline-none focus:ring-2 focus:ring-quest-orange/20 transition-all resize-none" placeholder="اكتب استفسارك هنا..."></textarea>
                </div>
                <button 
                  disabled={loading}
                  className={`w-full py-5 bg-quest-orange text-white rounded-2xl font-bold shadow-lg shadow-quest-orange/30 hover:bg-opacity-90 transition-all text-lg flex items-center justify-center gap-3 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      جاري الإرسال...
                    </>
                  ) : 'إرسال الطلب'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
