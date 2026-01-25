'use client';
import { useTranslations } from 'next-intl';
import { MessageCircle, Heart, Share2, Mail } from 'lucide-react';

export default function ShareJourneyPage() {
  const t = useTranslations('shareJourney');

  return (
    <div className="pt-20 min-h-screen bg-white">
      <section className="py-24 bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="container mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl text-blue-500">
                <MessageCircle className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-6">{t('title')}</h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-neutral-900 text-white rounded-3xl p-10 md:p-16 mb-16 shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold mb-6">{t('whyShareTitle')}</h2>
                    <p className="text-xl text-neutral-300 leading-relaxed mb-8">{t('whyShareText')}</p>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-neutral-100">
                    <Heart className="w-10 h-10 text-rose-500 mb-6" />
                    <h3 className="text-xl font-bold mb-3">{t('benefit1Title')}</h3>
                    <p className="text-neutral-600">{t('benefit1Text')}</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-neutral-100">
                    <Share2 className="w-10 h-10 text-blue-500 mb-6" />
                    <h3 className="text-xl font-bold mb-3">{t('benefit2Title')}</h3>
                    <p className="text-neutral-600">{t('benefit2Text')}</p>
                </div>
            </div>

            <div className="text-center">
                <h2 className="text-3xl font-bold mb-8">{t('ctaTitle')}</h2>
                <a href="mailto:stories@tutticancerwarriors.org" className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 hover:scale-105 transition-all shadow-lg shadow-blue-200">
                    <Mail className="w-5 h-5" />
                    {t('ctaButton')}
                </a>
            </div>
        </div>
      </section>
    </div>
  );
}