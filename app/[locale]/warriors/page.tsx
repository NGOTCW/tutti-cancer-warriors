'use client';
import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';
import { X, Heart, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function WarriorsPage() {
  const t = useTranslations('warriorsPage');
  const locale = useLocale();
  const prefix = locale === 'es' ? '' : `/${locale}`;
  const [selectedStory, setSelectedStory] = useState<null | any>(null);

// ✅ CONFIGURACIÓN FINAL DE LAS 6 HISTORIAS
  const stories = [
    {
      id: '1',
      name: t('featured.anetra.name'),
      age: t('featured.anetra.age'),
      dream: t('featured.anetra.dream'),
      shortDesc: t('featured.anetra.shortDesc'),
      fullStory: t('featured.anetra.fullStory'),
      image: '/anetra-home.jpg', 
      position: 'object-[center_25%]', 
      color: 'bg-purple-100 text-purple-700',
    },
    {
      id: '2',
      name: t('featured.janelle.name'),
      age: t('featured.janelle.age'),
      dream: t('featured.janelle.dream'),
      shortDesc: t('featured.janelle.shortDesc'),
      fullStory: t('featured.janelle.fullStory'),
      image: '/janelle-home.jpg', 
      position: 'object-top', 
      color: 'bg-blue-100 text-blue-700',
    },
    {
      id: '3',
      name: t('featured.jeanelle.name'),
      age: t('featured.jeanelle.age'),
      dream: t('featured.jeanelle.dream'),
      shortDesc: t('featured.jeanelle.shortDesc'),
      fullStory: t('featured.jeanelle.fullStory'),
      image: '/jeanelle-home.jpg', 
      position: 'object-center',
      color: 'bg-teal-100 text-teal-700',
    },
    {
      id: '4',
      name: t('featured.susan.name'),
      age: t('featured.susan.age'),
      dream: t('featured.susan.dream'),
      shortDesc: t('featured.susan.shortDesc'),
      fullStory: t('featured.susan.fullStory'),
      image: '/susan.jpg', 
      position: 'object-[center_35%]', // Ajuste para los ojos de Susan
      color: 'bg-pink-100 text-pink-700',
    },
    {
      id: '5',
      name: t('featured.taya.name'),
      age: t('featured.taya.age'),
      dream: t('featured.taya.dream'),
      shortDesc: t('featured.taya.shortDesc'),
      fullStory: t('featured.taya.fullStory'),
      image: '/taya.jpg', 
      position: 'object-center', 
      color: 'bg-orange-100 text-orange-700',
    },
    {
      id: '6',
      name: t('featured.anonymous.name'),
      age: t('featured.anonymous.age'),
      dream: t('featured.anonymous.dream'),
      shortDesc: t('featured.anonymous.shortDesc'),
      fullStory: t('featured.anonymous.fullStory'),
      // FOTO NUEVA (Chica del top blanco - Matheus Ferrero/Unsplash)
      image: '/warrior.jpg', 
      position: 'object-center',
      color: 'bg-indigo-100 text-indigo-700',
    }
  ];
    return (
    <div className="pt-20 min-h-screen bg-neutral-50">
      {/* Header Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-bold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Tutti Cancer Warriors</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Grid de Historias */}
      <section className="pb-24 px-4 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div 
              key={story.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-neutral-100 flex flex-col h-full"
              onClick={() => setSelectedStory(story)}
            >
              {/* Imagen de la tarjeta */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.name}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${story.position}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                
                {/* Nombre y Edad sobre la foto */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{story.name}, {story.age}</h3>
                </div>
                
                {/* Badge de "Dream Fulfilled" */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${story.color}`}>
                  {t('dreamFulfilled')}
                </div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-wide mb-1">Dream</h4>
                  <p className="text-lg font-bold text-brand-600">{story.dream}</p>
                </div>
                <p className="text-neutral-600 mb-6 line-clamp-3 flex-grow">
                  {story.shortDesc}
                </p>
                <button className="flex items-center gap-2 text-neutral-900 font-bold group-hover:text-brand-600 transition-colors mt-auto">
                  {t('readStory')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal / Popup de Historia Completa */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Fondo oscuro al hacer clic cierra el modal */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedStory(null)}
          />
          
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-300">
            {/* Botón Cerrar (X) */}
            <button 
              onClick={() => setSelectedStory(null)}
              className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-white rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6 text-neutral-900" />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Imagen en el Modal */}
              <div className="h-64 md:h-auto relative">
                <img 
                  src={selectedStory.image} 
                  alt={selectedStory.name} 
                  className={`w-full h-full object-cover ${selectedStory.position}`}
                />
              </div>
              
              {/* Texto en el Modal */}
              <div className="p-8 md:p-12">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 ${selectedStory.color}`}>
                  {t('dreamFulfilled')}
                </div>
                
                <h2 className="text-4xl font-bold text-neutral-900 mb-2">
                  {selectedStory.name}, {selectedStory.age}
                </h2>
                <h3 className="text-xl text-brand-600 font-bold mb-6">
                  {selectedStory.dream}
                </h3>

                {/* Historia completa con saltos de línea */}
                <div className="prose prose-neutral mb-8 text-neutral-600 whitespace-pre-line leading-relaxed">
                  {selectedStory.fullStory}
                </div>

                {/* Botón de Donar */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href={`${prefix}/donar`}
                    className="flex-1 bg-brand-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-700 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-brand-200"
                  >
                    <Heart className="w-5 h-5" fill="currentColor" />
                    {t('supportBtn')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}