'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Star, Heart, Gift, ArrowRight } from 'lucide-react';

export default function SupportDreamPage() {
  const t = useTranslations('supportDream');

  const ways = [
    { title: t('way1'), desc: t('way1Desc'), icon: Heart },
    { title: t('way2'), desc: t('way2Desc'), icon: Gift },
    { title: t('way3'), desc: t('way3Desc'), icon: Star },
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <section className="py-24 bg-gradient-to-br from-amber-100 via-orange-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-6">
            <Star className="w-12 h-12 text-amber-500" fill="currentColor" />
          </div>
          <h1 className="text-6xl font-bold text-neutral-900 mb-6">{t('title')}</h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                {[{icon:'🎸', p:'500'}, {icon:'✈️', p:'2,000'}, {icon:'🎤', p:'800'}, {icon:'🎨', p:'1,200'}].map((d, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-neutral-100 text-center hover:-translate-y-2 transition-transform">
                        <div className="text-4xl mb-4">{d.icon}</div>
                        <div className="text-lg font-bold text-neutral-800">{t(`dream${i+1}`)}</div>
                        <div className="text-amber-600 font-bold mt-2">€{d.p}</div>
                    </div>
                ))}
            </div>

            <h2 className="text-3xl font-bold text-center mb-12">{t('waysTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {ways.map((way, idx) => {
                    const Icon = way.icon;
                    return (
                        <div key={idx} className="bg-neutral-50 p-8 rounded-3xl hover:bg-amber-50 transition-colors group">
                            <Icon className="w-10 h-10 text-neutral-400 group-hover:text-amber-600 mb-4 transition-colors" />
                            <h3 className="text-xl font-bold mb-3">{way.title}</h3>
                            <p className="text-neutral-600">{way.desc}</p>
                        </div>
                    )
                })}
            </div>

            {/* CTA Especial Susan */}
            <div className="bg-gradient-to-r from-brand-600 to-purple-800 rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
                <div className="relative z-10">
                    <h3 className="text-4xl font-bold mb-6">Donate to Susan's Dream</h3>
                    <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                        Help us make Susan's wish come true. Your direct support makes an immediate impact.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                         <a 
                            href="https://better.giving/fundraisers/TCW.SUSAN" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-10 py-4 bg-white text-brand-600 font-bold rounded-full hover:scale-105 transition-transform shadow-lg"
                        >
                            Donate to Susan
                        </a>
                        <Link href="/donar" className="px-10 py-4 bg-brand-500/30 backdrop-blur border border-white/30 text-white font-bold rounded-full hover:bg-brand-500/50 transition-colors">
                            General Donation
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}