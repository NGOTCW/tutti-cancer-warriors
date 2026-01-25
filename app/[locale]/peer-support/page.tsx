'use client';
import { useTranslations } from 'next-intl';
import { Handshake, Heart, Shield, Phone, Mail, Check } from 'lucide-react';

export default function PeerSupportPage() {
  const t = useTranslations('peerSupport');

  const features = [
    { icon: Heart, title: t('feature1'), desc: t('feature1Desc') },
    { icon: Shield, title: t('feature2'), desc: t('feature2Desc') },
    { icon: Phone, title: t('feature3'), desc: t('feature3Desc') },
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <section className="py-24 bg-gradient-to-b from-cyan-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl text-cyan-500">
            <Handshake className="w-12 h-12" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                        <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg border border-neutral-100 hover:border-cyan-200 transition-all text-center">
                            <Icon className="w-12 h-12 text-cyan-500 mx-auto mb-6" />
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-neutral-600">{feature.desc}</p>
                        </div>
                        );
                    })}
                </div>

                <div className="bg-neutral-900 rounded-[3rem] p-10 md:p-16 text-white overflow-hidden relative">
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-8">{t('howItWorksTitle')}</h2>
                            <div className="space-y-8">
                                {[1, 2, 3].map((step) => (
                                    <div key={step} className="flex gap-6">
                                        <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center font-bold text-xl flex-shrink-0 text-white">
                                            {step}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">{t(`step${step}`)}</h3>
                                            <p className="text-neutral-400">{t(`step${step}Desc`)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20">
                             <h3 className="text-2xl font-bold mb-4">{t('ctaTitle')}</h3>
                             <p className="mb-8 text-neutral-300">{t('ctaText')}</p>
                             <a href="mailto:peersupport@tutticancerwarriors.org" className="inline-block w-full py-4 bg-white text-neutral-900 font-bold rounded-xl hover:bg-cyan-50 transition-colors">
                                {t('ctaButton')}
                             </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}