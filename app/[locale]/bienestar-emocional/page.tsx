'use client';
import { useTranslations } from 'next-intl';
import { Heart, Download, Wind, Brain, Smile, Users } from 'lucide-react';

export default function EmotionalWellbeingPage() {
  const t = useTranslations('emotionalPage');

  // Construimos las secciones dinámicamente usando las traducciones
  const sections = [
    {
      type: 'anxiety',
      title: t('sections.anxiety.title'),
      icon: Wind,
      color: 'from-blue-500 to-cyan-600',
    },
    {
      type: 'depression',
      title: t('sections.depression.title'),
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
    },
    {
      type: 'positivity',
      title: t('sections.positivity.title'),
      icon: Smile,
      color: 'from-amber-500 to-orange-600',
    },
    {
      type: 'support',
      title: t('sections.support.title'),
      icon: Users,
      color: 'from-green-500 to-emerald-600',
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-purple-500 to-brand-600">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center animate-pulse">
              <Heart className="w-12 h-12 text-white" fill="currentColor" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {t('desc')}
          </p>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {sections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-6 md:p-8 border border-purple-100 hover:shadow-2xl transition-all">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center shrink-0`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                      {section.title}
                    </h2>
                  </div>

                  {/* 1. ANXIETY SECTION */}
                  {section.type === 'anxiety' && (
                    <div className="space-y-6">
                      {[1, 2, 3, 4].map((num) => (
                        <div key={num} className="bg-white p-6 rounded-xl border border-blue-100">
                          {/* @ts-ignore */}
                          <h3 className="text-xl font-bold text-blue-600 mb-3">{t(`sections.anxiety.tech${num}_name`)}</h3>
                          <ul className="space-y-2">
                             {/* Accedemos a los arrays de pasos. Usamos raw para obtener el array */}
                             {(t.raw(`sections.anxiety.tech${num}_steps`) as string[]).map((step, sIdx) => (
                                <li key={sIdx} className="flex items-start gap-2 text-neutral-600">
                                  <span className="text-blue-600 mt-1">•</span>
                                  <span>{step}</span>
                                </li>
                             ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 2. DEPRESSION SECTION */}
                  {section.type === 'depression' && (
                    <div className="space-y-8">
                      {/* Signs */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-purple-600">{t('sections.depression.signsTitle')}</h3>
                        <ul className="space-y-2">
                          {(t.raw('sections.depression.signs') as string[]).map((sign, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-2 text-neutral-600">
                              <span className="text-purple-600 mt-1">•</span>
                              <span>{sign}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Help */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-purple-600">{t('sections.depression.helpTitle')}</h3>
                        <div className="grid gap-4">
                          {[1, 2, 3].map((num) => (
                            <div key={num} className="bg-white p-4 rounded-xl border border-purple-100">
                              {/* @ts-ignore */}
                              <h4 className="font-bold text-purple-600 mb-1">{t(`sections.depression.help${num}_type`)}</h4>
                              {/* @ts-ignore */}
                              <p className="text-neutral-600">{t(`sections.depression.help${num}_desc`)}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 3. POSITIVITY SECTION */}
                  {section.type === 'positivity' && (
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[1, 2, 3, 4].map((num) => (
                           <div key={num} className="bg-white p-6 rounded-xl border border-amber-100">
                              {/* @ts-ignore */}
                              <h3 className="text-lg font-bold text-amber-600 mb-2">{t(`sections.positivity.prac${num}_name`)}</h3>
                              {/* @ts-ignore */}
                              <p className="text-neutral-600">{t(`sections.positivity.prac${num}_desc`)}</p>
                           </div>
                        ))}
                     </div>
                  )}

                  {/* 4. SUPPORT SECTION */}
                  {section.type === 'support' && (
                     <div className="space-y-6">
                        {[1, 2].map((num) => (
                           <div key={num} className="bg-white p-6 rounded-xl border border-green-100">
                              {/* @ts-ignore */}
                              <h3 className="text-xl font-bold text-green-600 mb-3">{t(`sections.support.pt${num}_title`)}</h3>
                              <ul className="space-y-2">
                                 {/* @ts-ignore */}
                                 {(t.raw(`sections.support.pt${num}_items`) as string[]).map((item, iIdx) => (
                                    <li key={iIdx} className="flex items-start gap-2 text-neutral-600">
                                       <span className="text-green-600 mt-1">•</span>
                                       <span>{item}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        ))}
                     </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Download PDF */}
      <section className="py-20 bg-gradient-to-br from-brand-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('ctaTitle')}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            {t('ctaDesc')}
          </p>
          <a
            href="/finding-calm-tcw-2.pdf"
            download
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-brand-600 font-bold rounded-full shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all"
          >
            <Download className="w-5 h-5" />
            {t('btnDownload')}
          </a>
        </div>
      </section>
    </div>
  );
}