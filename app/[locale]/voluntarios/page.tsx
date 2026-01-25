'use client';
import { useTranslations } from 'next-intl';
import { Heart, Clock, Users, CheckCircle, Mail, Sparkles } from 'lucide-react';

export default function VolunteerPage() {
  const t = useTranslations('volunteer');

  const roles = [
    { icon: Heart, title: t('role1'), desc: t('role1Desc'), color: 'text-pink-500 bg-pink-50' },
    { icon: Users, title: t('role2'), desc: t('role2Desc'), color: 'text-blue-500 bg-blue-50' },
    { icon: Clock, title: t('role3'), desc: t('role3Desc'), color: 'text-amber-500 bg-amber-50' },
  ];

  const benefits = [t('benefit1'), t('benefit2'), t('benefit3'), t('benefit4')];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600/30 backdrop-blur-md border border-brand-500/50 mb-8">
            <Sparkles className="w-5 h-5 text-brand-400" />
            <span className="text-brand-100 font-medium">Join our family</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6">{t('title')}</h1>
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto">{t('subtitle')}</p>
        </div>
      </section>

      <section className="py-20 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {roles.map((role, idx) => {
              const Icon = role.icon;
              return (
                <div key={idx} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-neutral-100">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${role.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3">{role.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{role.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-10">{t('benefitsTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-50 transition-colors">
                  <div className="p-2 bg-green-100 text-green-600 rounded-full">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <p className="text-lg text-neutral-700 font-medium pt-1">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center pt-10 border-t border-neutral-100">
              <h3 className="text-2xl font-bold mb-4">{t('ctaTitle')}</h3>
              <p className="text-neutral-600 mb-8 max-w-lg mx-auto">{t('ctaText')}</p>
              <a href="mailto:volunteers@tutticancerwarriors.org" className="inline-flex items-center gap-3 px-8 py-4 bg-brand-600 text-white font-bold rounded-full hover:bg-brand-700 hover:scale-105 transition-all shadow-lg shadow-brand-200">
                <Mail className="w-5 h-5" />
                {t('ctaButton')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}