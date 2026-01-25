'use client';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Heart } from 'lucide-react';
// Importamos los datos centralizados
import { cancerTypes } from '../../../lib/cancer-data';

export default function LearnAboutCancerPage() {
  // 'cancer' para textos generales de la página
  const t = useTranslations('cancer');
  // 'cancerDetails' para sacar el nombre de cada cáncer (ej: Cáncer de Mama)
  const tDetails = useTranslations('cancerDetails');
  
  const locale = useLocale();
  const prefix = locale === 'es' ? '' : `/${locale}`;

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-neutral-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block px-4 py-2 bg-brand-100 text-brand-600 rounded-full text-sm font-medium mb-6">
            {t('badge')}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            {t('title')} <span className="text-brand-600">{t('titleHighlight')}</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-4">
            {t('subtitle')}
          </p>
          <p className="text-lg text-brand-600 font-semibold">
            {cancerTypes.length} tipos de cáncer con información completa
          </p>
        </div>
      </section>

      {/* Cancer Types Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cancerTypes.map((cancer) => (
              <Link
                key={cancer.id}
                href={`${prefix}/sobre-cancer/${cancer.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden shrink-0">
                  <img
                    src={cancer.image}
                    // Aquí usamos la traducción dinámica basada en el ID
                    alt={tDetails(`${cancer.id}.title`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {/* Título traducido (ej: Cáncer de Mama) */}
                      {tDetails(`${cancer.id}.title`)}
                    </h3>
                  </div>
                </div>
                <div className="p-6 flex-grow flex items-end">
                  <div className="w-full flex items-center justify-between">
                    <span className="text-brand-600 font-semibold">
                      {t('readMore')}
                    </span>
                    <ArrowRight className="w-5 h-5 text-brand-600 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-16 h-16 text-white mx-auto mb-6" fill="currentColor" />
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('ctaTitle')}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            {t('ctaSubtitle')}
          </p>
          <Link
            href={`${prefix}/donar`}
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-brand-600 font-bold rounded-full shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all"
          >
            {t('ctaDonate')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}