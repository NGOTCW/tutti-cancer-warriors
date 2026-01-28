'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Heart, Activity, Brain, User, Calendar, Share2, Twitter, Instagram, ArrowRight } from 'lucide-react';

export default function MensHealthWeekPage() {
  const t = useTranslations('mensHealthWeek');
  const locale = useLocale();
  const prefix = locale === 'es' ? '' : `/${locale}`;

  return (
    <div className="pt-20 min-h-screen bg-white">
      
      {/* 1. HERO HEADER (Azul degradado) */}
      <section className="relative py-24 bg-gradient-to-br from-blue-700 to-indigo-900 text-white rounded-b-[4rem] shadow-2xl overflow-hidden z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl -ml-10 -mb-10"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/10 rounded-full mb-6 backdrop-blur-sm border border-white/20 animate-fadeIn">
            <Calendar className="w-4 h-4 text-blue-200" />
            <span className="text-blue-100 font-medium">{t('date')}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight drop-shadow-lg">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light mb-10">
            {t('theme')}
          </p>
          
          <Link 
            href={`${prefix}/donar`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-blue-50 hover:scale-105 transition-all shadow-xl"
          >
            <Heart className="w-5 h-5 fill-current text-blue-600" />
            {t('ctaButton')}
          </Link>
        </div>
      </section>

      {/* 2. WELCOME SECTION (DISEÑO EDITORIAL - FOTO FUERA DEL CUADRO) */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* TEXTO (Izquierda) */}
            <div className="lg:w-1/2">
                <div className="inline-block p-3 bg-blue-50 rounded-2xl mb-6">
                    <Activity className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                    {t('welcomeTitle')}
                </h2>
                <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                    {t('welcomeText')}
                </p>
                
                {/* Pequeños puntos destacados */}
                <div className="space-y-4 border-l-4 border-blue-200 pl-6">
                    <p className="text-lg font-medium text-neutral-800">
                        "Closing the Gap" means taking action today.
                    </p>
                    <div className="flex items-center gap-2 text-blue-600 font-bold cursor-pointer hover:underline">
                        <span>Read the full report</span>
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </div>

            {/* IMAGEN (Derecha - Grande y Libre) */}
            <div className="lg:w-1/2 w-full relative">
                {/* Elemento decorativo detrás */}
                <div className="absolute top-10 right-10 w-full h-full bg-blue-100 rounded-[3rem] -z-10 transform rotate-3"></div>
                
                <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                    <Image 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                      alt="Men supporting men group"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    {/* Overlay degradado sutil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FACTS CARDS (Fondo Gris Suave) */}
      <section className="py-24 bg-neutral-50 rounded-[4rem]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">{t('factsTitle')}</h2>
            <div className="w-24 h-1.5 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <User className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">{t('fact1Title')}</h3>
              <p className="text-neutral-600 leading-relaxed">{t('fact1Text')}</p>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 text-indigo-600">
                <Brain className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">{t('fact2Title')}</h3>
              <p className="text-neutral-600 leading-relaxed">{t('fact2Text')}</p>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6 text-cyan-600">
                <Activity className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">{t('fact3Title')}</h3>
              <p className="text-neutral-600 leading-relaxed">{t('fact3Text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOCIAL MEDIA KIT */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-neutral-900 rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
            {/* Decoración fondo */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            
            <div className="relative z-10">
                <Share2 className="w-12 h-12 mx-auto mb-6 text-blue-400 animate-bounce" />
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t('socialTitle')}</h2>
                <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12">{t('socialText')}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="flex items-center gap-3 mb-4 text-blue-400 font-bold">
                            <Twitter className="w-5 h-5" /> Twitter / X
                        </div>
                        <p className="text-lg italic text-neutral-200">"{t('quote1')}"</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="flex items-center gap-3 mb-4 text-pink-400 font-bold">
                            <Instagram className="w-5 h-5" /> Instagram
                        </div>
                        <p className="text-lg italic text-neutral-200">"{t('quote3')}"</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}