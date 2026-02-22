'use client';
import { useTranslations } from 'next-intl';
import { Heart, Sparkles } from 'lucide-react';

export default function SupportDreamPage() {
  const t = useTranslations('supportDream');

  // ✅ DATOS "DUMMY" TRADUCIDOS DINÁMICAMENTE
  const futureWarriors = [
    {
      id: 1,
      title: t('cases.1.title'),
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800",
      description: t('cases.1.description'),
      goal: "€1,500"
    },
    {
      id: 2,
      title: t('cases.2.title'),
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=800",
      description: t('cases.2.description'),
      goal: "€800"
    },
    {
      id: 3,
      title: t('cases.3.title'),
      image: "https://images.unsplash.com/photo-1544569975-8e155329f348?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=800",
      description: t('cases.3.description'),
      goal: "€2,000"
    }
  ];

  return (
    <section className="pt-32 pb-24 bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-bold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Tutti Cancer Warriors</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {futureWarriors.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-neutral-100 flex flex-col group">
              
              {/* Imagen y Etiqueta del Objetivo */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-4 py-2 rounded-full text-sm font-bold text-brand-600 shadow-sm">
                  {t('goal')}: {item.goal}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">{item.title}</h3>
                <p className="text-neutral-600 mb-8 flex-grow leading-relaxed">{item.description}</p>
                
                {/* Botón de Donar */}
                <a 
                  href="https://better.giving/donate/1293778" // URL correcta confirmada
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 hover:shadow-brand-200 shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Heart className="w-5 h-5" fill="currentColor" />
                  {t('donateBtn')}
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}