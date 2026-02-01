'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCancerData } from '@/lib/cancer-data';
import { 
  ArrowLeft, Activity, Heart, Stethoscope, 
  AlertCircle, Info, Calendar, 
  Gem, Wind, User, Sun, Droplet, Shield, Zap, 
  Anchor, Database, Layers, Circle, Cpu, Flower2,
  Mic, Hammer, Cloud, AlignCenter, Mic2
} from 'lucide-react';

const iconMap: Record<string, any> = {
  'ribbon': Gem, 'lungs': Wind, 'activity': Activity, 'user': User, 'sun': Sun,
  'droplet': Droplet, 'shield': Shield, 'user-check': User, 'zap': Zap,
  'feather': Mic2, 'git-commit': AlignCenter, 'coffee': Layers, 'layers': Layers,
  'circle': Circle, 'heart': Heart, 'cpu': Cpu, 'anchor': Anchor,
  'database': Database, 'flower': Flower2, 'brain-circuit': Cpu, 'bone': Hammer,
  'arrow-up': Activity, 'stop-circle': Circle, 'zap-off': Zap, 'eye': Activity,
  'mic': Mic, 'wind': Wind, 'hammer': Hammer, 'cloud': Cloud,
  'align-center': AlignCenter, 'flower-2': Flower2, 'mic-2': Mic2
};

// IDs permitidos
const validIds = [
    'breast', 'lung', 'colorectal', 'prostate', 'skin', 'kidney', 
    'leukemia', 'liver', 'pancreatic', 'ovarian', 'childhood', 
    'brain', 'bladder', 'cervical', 'stomach', 'testicular',
    'thyroid', 'uterine', 'lymphoma', 'myeloma', 'esophageal',
    'head-neck', 'bone', 'sarcoma', 'gallbladder', 'bile-duct',
    'anal', 'penile', 'vaginal', 'vulvar', 'eye', 'oral',
    'throat', 'small-intestine', 'thymus'
];

export default function CancerDetailPage({ params }: { params: { id: string, locale: string } }) {
  // 1. Evitar crash si la URL es inventada
  if (!validIds.includes(params.id)) {
    notFound();
  }

  const cancerData = getCancerData(params.id);
  const t = useTranslations(`cancerDetails.${params.id}`); // OJO: Si esta clave no existe en el JSON, devolverá texto plano
  const tCommon = useTranslations('common'); 
  const prefix = params.locale === 'es' ? '' : `/${params.locale}`;

  if (!cancerData) {
    notFound();
  }

  const HeroIcon = iconMap[cancerData.icon] || Activity;
  // Imagen por defecto si falla
  const contentImg = cancerData.contentImage || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800';

  return (
    <div className="min-h-screen bg-brand-50 pb-20">
      
      {/* --- HERO SECTION --- */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <Image
          src={cancerData.image}
          alt={params.id}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-16 text-white">
          <div className="container mx-auto">
            <Link 
              href={`${prefix}/sobre-cancer`} 
              className="inline-flex items-center text-white/80 hover:text-white mb-4 md:mb-6 transition-colors hover:-translate-x-1 duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              {tCommon('backToLibrary')}
            </Link>
            
            <div className="flex items-end gap-4 animate-fade-in-up">
              <HeroIcon className="w-12 h-12 md:w-16 md:h-16 text-brand-300 mb-1 hidden sm:block" />
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight capitalize">
                {/* Usamos un fallback visual por si la traducción falla */}
                {t('title') === `cancerDetails.${params.id}.title` ? params.id.replace('-', ' ') : t('title')}
              </h1>
            </div>

            <div className="mt-4 text-lg md:text-2xl text-brand-100 max-w-2xl animate-fade-in-up delay-100 leading-relaxed">
              {/* ⚠️ CAMBIO CLAVE: Usamos div en lugar de p */}
              <div>{t('shortDescription')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            
            {/* Overview Card */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl animate-fade-in-up delay-200 border border-brand-100/50 overflow-hidden">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="p-3 bg-brand-100 rounded-xl text-brand-600 shadow-sm">
                  <Info className="w-6 h-6" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-neutral-800">{t('overviewTitle')}</h2>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                    {/* ⚠️ CAMBIO CLAVE: div para evitar el error de removeChild */}
                    <div className="text-neutral-600 leading-relaxed text-base md:text-lg">
                        {t('overviewText')}
                    </div>
                </div>
                <div className="w-full md:w-1/3 h-48 md:h-auto relative rounded-xl overflow-hidden shadow-md shrink-0 aspect-video md:aspect-square">
                    <Image 
                        src={contentImg} 
                        alt="Medical Detail" 
                        fill 
                        className="object-cover hover:scale-110 transition-transform duration-700" 
                    />
                </div>
              </div>
            </div>

            {/* Symptoms */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl animate-fade-in-up delay-300 border border-brand-100/50">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="p-3 bg-red-100 rounded-xl text-red-500 shadow-sm">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-neutral-800">{t('symptomsTitle')}</h2>
              </div>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <li key={i} className="flex items-start gap-3 p-4 bg-neutral-50 rounded-xl hover:bg-brand-50 transition-colors duration-300 group">
                        <div className="mt-1 min-w-[20px] h-[20px] rounded-full bg-brand-200 flex items-center justify-center group-hover:bg-brand-300 transition-colors">
                            <div className="w-2 h-2 rounded-full bg-brand-600"></div>
                        </div>
                        {/* ⚠️ CAMBIO CLAVE: span o div, nunca p dentro de li si hay dudas */}
                        <div className="text-neutral-700 font-medium text-sm md:text-base">
                          {t(`symptoms.symptom${i}`)}
                        </div>
                    </li>
                ))}
              </ul>
            </div>

            {/* Treatments */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl animate-fade-in-up delay-400 border border-brand-100/50">
               <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="p-3 bg-blue-100 rounded-xl text-blue-600 shadow-sm">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-neutral-800">{t('treatmentsTitle')}</h2>
              </div>
              <div className="space-y-4">
                 {/* ⚠️ CAMBIO CLAVE: div en vez de p */}
                 <div className="text-neutral-600 mb-6 text-base md:text-lg">{t('treatmentsIntro')}</div>
                 
                 <div className="flex flex-col md:flex-row gap-4">
                     <div className="flex-1 p-5 border-l-4 border-brand-500 bg-brand-50 rounded-r-xl hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-brand-800 mb-2 text-lg">{t('treatment1.title')}</h3>
                        <div className="text-brand-700 text-sm leading-relaxed">{t('treatment1.desc')}</div>
                     </div>
                     <div className="flex-1 p-5 border-l-4 border-blue-500 bg-blue-50 rounded-r-xl hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-blue-800 mb-2 text-lg">{t('treatment2.title')}</h3>
                        <div className="text-blue-700 text-sm leading-relaxed">{t('treatment2.desc')}</div>
                     </div>
                 </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="space-y-6 animate-fade-in-up delay-200">
            {/* Stats */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-brand-100/50 lg:sticky lg:top-28">
               <h3 className="text-xl font-bold text-neutral-800 mb-6 flex items-center gap-2">
                 <Activity className="w-5 h-5 text-brand-500" />
                 {t('statsTitle')}
               </h3>
               <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                 <div className="text-center p-4 bg-neutral-50 rounded-2xl border border-neutral-100 hover:border-brand-200 transition-colors">
                    <span className="block text-2xl md:text-3xl font-bold text-brand-600 mb-1">{t('stat1.value')}</span>
                    <span className="text-xs md:text-sm text-neutral-500 font-medium">{t('stat1.label')}</span>
                 </div>
                 <div className="text-center p-4 bg-neutral-50 rounded-2xl border border-neutral-100 hover:border-brand-200 transition-colors">
                    <span className="block text-2xl md:text-3xl font-bold text-brand-600 mb-1">{t('stat2.value')}</span>
                    <span className="text-xs md:text-sm text-neutral-500 font-medium">{t('stat2.label')}</span>
                 </div>
               </div>
               <div className="mt-8 pt-6 border-t border-neutral-100">
                 <h4 className="font-semibold text-neutral-800 mb-4 text-center">{t('ctaSidebarTitle')}</h4>
                 <Link 
                   href={`${prefix}/donar`}
                   className="w-full flex items-center justify-center gap-2 py-4 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-brand-200"
                 >
                   <Heart className="w-5 h-5 fill-current animate-pulse" />
                   {tCommon('donateNow')}
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}