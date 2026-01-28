'use client';
import Link from 'next/link';
import Image from 'next/image'; // <-- IMPORTANTE: Añadir Image
import { useTranslations, useLocale } from 'next-intl';
import { Heart, Info, CheckCircle, Calendar, Share2, Activity } from 'lucide-react';

export default function KidneyCancerDayPage() {
  const t = useTranslations('kidneyCancerDay');
  const locale = useLocale();
  const prefix = locale === 'es' ? '' : `/${locale}`;

  return (
    <div className="pt-20 min-h-screen bg-neutral-50">
      
      {/* HERO SECTION (Sin cambios) */}
      <section className="relative py-24 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-b-[4rem] shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl -mr-20 -mt-20 animate-pulse"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/10 rounded-full mb-6 backdrop-blur-sm border border-white/20">
            <Calendar className="w-4 h-4 text-orange-100" />
            <span className="text-orange-50 font-medium">{t('date')}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto font-light mb-10">
            {t('theme')}
          </p>
          
          <Link 
            href={`${prefix}/donar`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-orange-700 rounded-full font-bold text-lg hover:bg-orange-50 hover:scale-105 transition-all shadow-lg"
          >
            <Heart className="w-5 h-5 fill-current text-orange-600" />
            {t('ctaButton')}
          </Link>
        </div>
      </section>

      {/* WHY MATTERS SECTION CON FOTO 📸 */}
      <section className="py-24 relative overflow-hidden">
        {/* Mancha de fondo naranja suave */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Imagen (Izquierda esta vez para variar) */}
                <div className="relative h-[400px] lg:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl group order-2 lg:order-1">
                    <Image 
                      // USA ESTA URL DE UNSPLASH O CÁMBIALA POR TU FOTO LOCAL EN /public
                      src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Active healthy lifestyle sunset"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay cálido */}
                    <div className="absolute inset-0 bg-orange-900/10 group-hover:bg-orange-900/0 transition-colors"></div>
                </div>

                {/* Texto */}
                <div className="order-1 lg:order-2">
                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                        <Info className="w-8 h-8 text-orange-600" />
                    </div>
                    <h2 className="text-4xl font-bold text-neutral-900 mb-6 leading-tight">{t('whyTitle')}</h2>
                    <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                        {t('whyText')}
                    </p>
                    <div className="inline-flex items-center gap-2 text-orange-600 font-bold border-b-2 border-orange-200 pb-1">
                        <Activity className="w-5 h-5" />
                        <span>Early detection saves lives.</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* KEY FACTS LIST (Sin cambios) */}
      <section className="py-10 pb-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-xl border-2 border-orange-100 hover:border-orange-300 transition-colors">
            <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900 flex items-center justify-center gap-3">
                <Activity className="w-8 h-8 text-orange-500" />
                {t('factsTitle')}
            </h2>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {[1, 2, 3, 4, 5].map((num) => (
                    <li key={num} className="flex items-start gap-4 p-4 rounded-2xl bg-orange-50/50 hover:bg-orange-100 transition-colors">
                        <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                        <span className="text-lg text-neutral-700 font-medium leading-snug">
                            {t(`fact${num}` as any)}
                        </span>
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA CONTENT (Sin cambios) */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="mb-10">
            <Share2 className="w-12 h-12 mx-auto mb-4 text-orange-400" />
            <h2 className="text-4xl font-bold mb-6">{t('socialTitle')}</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">{t('socialText')}</p>
          </div>

          <div className="bg-neutral-800 p-10 rounded-[2rem] border border-neutral-700 shadow-2xl relative overflow-hidden hover:border-orange-500/50 transition-colors">
             <div className="absolute top-0 right-0 p-32 bg-orange-600/20 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none"></div>
             <QuoteIcon className="w-10 h-10 text-orange-500 mb-6 mx-auto opacity-50" />
             <p className="text-2xl md:text-3xl font-serif italic text-neutral-200 leading-relaxed mb-8 relative z-10">
                "{t('quote1')}"
             </p>
             <div className="flex justify-center gap-4 flex-wrap relative z-10">
                 <span className="px-6 py-2 bg-neutral-700 hover:bg-orange-600 transition-colors rounded-full text-orange-200 hover:text-white font-medium text-sm cursor-pointer">#WorldKidneyCancerDay</span>
                 <span className="px-6 py-2 bg-neutral-700 hover:bg-orange-600 transition-colors rounded-full text-orange-200 hover:text-white font-medium text-sm cursor-pointer">#KidneyLove</span>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// Icono auxiliar para la cita
function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.557-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.367 5.6c-1.434.705-2.647 1.746-3.64 3.123-1.268 1.74-1.967 3.69-2.095 5.848-.064 1.07.115 2.063.537 2.977.42.915 1.03 1.666 1.826 2.254.8.588 1.694.883 2.683.883.99 0 1.85-.303 2.582-.91 1.17-.966 1.754-2.34 1.754-4.12 0 .024.005.048.014.071h-.014zm8.392 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.557-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L17.76 5.6c-1.434.705-2.647 1.746-3.64 3.123-1.268 1.74-1.967 3.69-2.095 5.848-.064 1.07.115 2.063.537 2.977.42.915 1.03 1.666 1.826 2.254.8.588 1.694.883 2.683.883.99 0 1.85-.303 2.582-.91 1.17-.966 1.754-2.34 1.754-4.12 0 .024.005.048.014.071h-.014z"/>
    </svg>
  );
}