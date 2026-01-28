'use client';
import { useTranslations } from 'next-intl';

export default function TermsPage() {
  const t = useTranslations('legal.terms');

  return (
    <div className="pt-24 pb-20 min-h-screen bg-neutral-50">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header con Icono SVG Personalizado */}
        <div className="bg-white rounded-3xl p-10 shadow-xl mb-8 border border-neutral-100 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-100 rounded-bl-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-100 rounded-tr-full opacity-50"></div>
            
            <div className="relative z-10">
                <div className="w-20 h-20 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-600">
                    {/* SVG Icon: Policy & Law Document */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <path d="M10 9H8" />
                    </svg>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
                    {t('title')}
                </h1>
                <p className="text-neutral-500 font-medium bg-neutral-100 inline-block px-4 py-2 rounded-full text-sm border border-neutral-200">
                    {t('lastUpdated')}
                </p>
            </div>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-lg border border-neutral-100">
            <div 
                className="prose prose-lg max-w-none text-neutral-600 
                prose-headings:text-brand-900 prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
                prose-p:leading-relaxed prose-p:mb-4
                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6
                prose-li:mb-2 prose-strong:text-brand-700"
                dangerouslySetInnerHTML={{ __html: t.raw('content') }} 
            />
        </div>
      </div>
    </div>
  );
}