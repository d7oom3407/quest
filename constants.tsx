
import React from 'react';
import { Service, Step, Client } from './types';

export const SERVICES: Service[] = [
  {
    id: 'campaigns',
    title: 'الحملات التسويقية',
    description: 'حملات إبداعية متخصصة على منصات التواصل الاجتماعي، تحقق أهداف علامتك التجارية.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    id: 'social',
    title: 'إدارة التواصل',
    description: 'نعمل على إدارة حساباتك على مواقع التواصل الاجتماعي بمنهجية عمل احترافية وشاملة.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'strategy',
    title: 'الخدمات الاستراتيجية',
    description: 'بناء استراتيجيات التسويق الاحترافية المعتمدة على التحليل والدراسة والبحوث.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    id: 'creative',
    title: 'المحتوى الإبداعي',
    description: 'مبدعون في المحتوى الإبداعي، الأفكار الإبداعية والمحتوى النصي والتصاميم الفنية والفيديوهات.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export const STEPS: Step[] = [
  { number: '01', title: 'البحث وتحليل العلامة' },
  { number: '02', title: 'بناء استراتيجية الحملة' },
  { number: '03', title: 'الأفكار الإبداعية للحملة' },
  { number: '04', title: 'بناء المواد التسويقية' },
  { number: '05', title: 'الإطلاق على منصات التواصل' },
];

export const CLIENTS: Client[] = [
  { name: 'Novo Genomics', logo: 'https://questme.net/assets/img/clients/1.png' },
  { name: 'Ehya', logo: 'https://questme.net/assets/img/clients/2.png' },
  { name: 'Al Dakheel', logo: 'https://questme.net/assets/img/clients/3.png' },
  { name: 'Shark', logo: 'https://questme.net/assets/img/clients/4.png' },
  { name: 'Dyari', logo: 'https://questme.net/assets/img/clients/5.png' },
  { name: 'Adeed', logo: 'https://questme.net/assets/img/clients/10.png' },
];
