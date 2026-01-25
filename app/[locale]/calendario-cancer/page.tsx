'use client';
import { useTranslations } from 'next-intl';
import { Calendar, Ribbon, Star } from 'lucide-react';

export default function CancerCalendarPage() {
  const t = useTranslations('calendar');

  // Estructura de datos mejorada con "events" para días específicos
  const months = [
    { 
      name: t('january'), 
      cancers: [{ type: t('cervical'), color: 'text-teal-600 bg-teal-50' }],
      events: [] 
    },
    { 
      name: t('february'), 
      cancers: [{ type: t('gallbladder'), color: 'text-green-600 bg-green-50' }],
      events: [{ day: '04', name: 'World Cancer Day' }, { day: '28', name: 'Rare Disease Day' }]
    },
    { 
      name: t('march'), 
      cancers: [{ type: t('colorectal'), color: 'text-blue-600 bg-blue-50' }, { type: t('kidney'), color: 'text-orange-500 bg-orange-50' }],
      events: [{ day: '04', name: 'Intl. HPV Awareness Day' }]
    },
    { 
      name: t('april'), 
      cancers: [{ type: t('testicular'), color: 'text-violet-500 bg-violet-50' }],
      events: [{ day: '07', name: 'World Health Day' }]
    },
    { 
      name: t('may'), 
      cancers: [{ type: t('skin'), color: 'text-neutral-800 bg-neutral-100' }, { type: t('brain'), color: 'text-gray-500 bg-gray-100' }],
      events: [{ day: '04', name: 'Melanoma Monday' }, { day: '08', name: 'World Ovarian Cancer Day' }]
    },
    { 
      name: t('june'), 
      cancers: [{ type: t('mensHealth'), color: 'text-blue-500 bg-blue-50' }],
      events: [{ day: '07', name: 'Cancer Survivors Day' }]
    },
    { 
      name: t('july'), 
      cancers: [{ type: t('sarcoma'), color: 'text-yellow-500 bg-yellow-50' }],
      events: [{ day: '27', name: 'Head & Neck Cancer Day' }]
    },
    { 
      name: t('august'), 
      cancers: [{ type: t('bone'), color: 'text-amber-600 bg-amber-50' }],
      events: [{ day: '01', name: 'World Lung Cancer Day' }]
    },
    { 
      name: t('september'), 
      cancers: [{ type: t('thyroid'), color: 'text-purple-500 bg-purple-50' }, { type: t('ovarian'), color: 'text-teal-500 bg-teal-50' }],
      events: [{ day: '24', name: 'World Cancer Research Day' }]
    },
    { 
      name: t('october'), 
      cancers: [{ type: t('breast'), color: 'text-pink-500 bg-pink-50' }, { type: t('liver'), color: 'text-emerald-600 bg-emerald-50' }],
      events: [{ day: '13', name: 'Metastatic Breast Cancer Day' }]
    },
    { 
      name: t('november'), 
      cancers: [{ type: t('lung'), color: 'text-slate-600 bg-slate-100' }, { type: t('pancreatic'), color: 'text-purple-700 bg-purple-100' }],
      events: [{ day: '19', name: 'World Pancreatic Cancer Day' }]
    },
    { 
      name: t('december'), 
      cancers: [{ type: t('bladder'), color: 'text-yellow-500 bg-yellow-50' }],
      events: [] 
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-brand-600 to-purple-800 text-white rounded-b-[3rem] shadow-xl">
        <div className="container mx-auto px-4 text-center">
          <Calendar className="w-20 h-20 text-white/80 mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            {t('title')}
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Calendar Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {months.map((month, idx) => (
              <div key={idx} className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-neutral-100 flex flex-col h-full">
                
                {/* Header del Mes */}
                <div className="flex items-center justify-between mb-4 border-b border-neutral-100 pb-4">
                  <h3 className="text-2xl font-bold text-neutral-800 group-hover:text-brand-600 transition-colors">
                    {month.name}
                  </h3>
                  <span className="text-neutral-300 text-3xl font-black opacity-30">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Lista de Cánceres (Mes Completo) */}
                <div className="space-y-3 mb-6 flex-grow">
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Awareness Month</p>
                  {month.cancers.map((cancer, cIdx) => (
                    <div key={cIdx} className={`flex items-center gap-3 p-3 rounded-xl ${cancer.color}`}>
                      <Ribbon className="w-5 h-5 flex-shrink-0" />
                      <span className="font-medium text-sm">{cancer.type}</span>
                    </div>
                  ))}
                </div>

                {/* Fechas Específicas (Si las hay) */}
                {month.events.length > 0 && (
                  <div className="mt-auto bg-neutral-50 rounded-xl p-4 border border-neutral-100">
                     <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">Key Dates</p>
                     <ul className="space-y-3">
                        {month.events.map((evt, eIdx) => (
                            <li key={eIdx} className="flex items-center gap-3 text-sm text-neutral-700">
                                <span className="flex-shrink-0 w-8 h-8 bg-white rounded-lg flex items-center justify-center font-bold text-brand-600 shadow-sm border border-neutral-100">
                                    {evt.day}
                                </span>
                                <span className="leading-tight">{evt.name}</span>
                            </li>
                        ))}
                     </ul>
                  </div>
                )}

              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}