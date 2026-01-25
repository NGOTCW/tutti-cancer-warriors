'use client';
import { useTranslations } from 'next-intl';
import { ClipboardCheck, Sparkles, Languages } from 'lucide-react';

export default function DreamApplicationPage() {
  const t = useTranslations('dreamApp');

  return (
    <div className="pt-20 min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-brand-600 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="w-16 h-16 text-brand-300 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">{t('title')}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-100">
            <div className="p-10">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6 text-center">{t('formTitle')}</h2>
                <p className="text-neutral-600 mb-8 text-center leading-relaxed">{t('formIntro')}</p>
                
                <div className="bg-amber-50 rounded-2xl p-8 mb-10 border border-amber-100">
                    <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center gap-2">
                        <ClipboardCheck className="w-6 h-6" />
                        {t('eligibilityTitle')}
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex gap-3 text-neutral-700">
                            <span className="w-2 h-2 bg-amber-500 rounded-full mt-2"></span>
                            {t('eligibility1')}
                        </li>
                        <li className="flex gap-3 text-neutral-700">
                            <span className="w-2 h-2 bg-amber-500 rounded-full mt-2"></span>
                            {t('eligibility2')}
                        </li>
                        <li className="flex gap-3 text-neutral-700">
                            <span className="w-2 h-2 bg-amber-500 rounded-full mt-2"></span>
                            {t('eligibility3')}
                        </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSffC9zT7zJ2dLp0aO7mPXEngDkX3cqcabD1Ck_2IRrpV9DbVQ/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-4 bg-brand-600 text-white font-bold rounded-xl text-center hover:bg-brand-700 hover:scale-[1.02] transition-all shadow-lg"
                    >
                        {t('applyButton')} (English)
                    </a>
                    
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSf10pd0dBE35zsleulROh2nItiZpbXOCrNI5vHjo8KGYWeebQ/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-4 bg-white text-brand-600 font-bold rounded-xl text-center border-2 border-brand-100 hover:border-brand-600 transition-all flex items-center justify-center gap-2"
                    >
                        <Languages className="w-5 h-5" />
                        Aplică în Română
                    </a>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}