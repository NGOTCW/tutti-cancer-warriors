'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Activity } from 'lucide-react';

export default function CancerTypesPage({ params: { locale } }: { params: { locale: string } }) {
  // ⚠️ AQUÍ ESTABA LA CLAVE: Tiene que ser 'aboutCancerPage' para coincidir con tu JSON
  const t = useTranslations('aboutCancerPage'); 
  const prefix = locale === 'es' ? '' : `/${locale}`;

  // 1. DICCIONARIO DE IMÁGENES (35 Tipos)
  const cancerImages: Record<string, string> = {
    breast: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800",
    lung: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=800",
    colorectal: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800",
    prostate: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=800",
    skin: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800",
    kidney: "https://images.unsplash.com/photo-1559757175-0828e13882ed?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    leukemia: "https://images.unsplash.com/photo-1680279019882-d0317164a394?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liver: "https://plus.unsplash.com/premium_photo-1744264418038-19cf0cf6bb54?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pancreatic: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=800",
    ovarian: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?q=80&w=800",
    childhood: "https://images.unsplash.com/photo-1543332164-6e82f355badc?q=80&w=800",
    brain: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800",
    bladder: "https://images.unsplash.com/photo-1715526411349-2d9aa764ed41?q=80&w=1051&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cervical: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?q=80&w=800",
    stomach: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800",
    testicular: "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=800",
    thyroid: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800",
    uterine: "https://plus.unsplash.com/premium_photo-1702598994396-5588dff089f9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lymphoma: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800",
    myeloma: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=800",
    esophageal: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800",
    "head-neck": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800",
    bone: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=800",
    sarcoma: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800",
    gallbladder: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800",
    "bile-duct": "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=800",
    anal: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800",
    penile: "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=800",
    vaginal: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800",
    vulvar: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=800",
    eye: "https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    oral: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800",
    throat: "https://images.unsplash.com/photo-1530213786676-41ad9f7736f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "small-intestine": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800",
    thymus: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800",
  };

  const defaultImage = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800";

  // 2. LISTA COMPLETA DE IDs
  const cancerIds = [
    'breast', 'lung', 'colorectal', 'prostate', 'skin', 'kidney', 
    'leukemia', 'liver', 'pancreatic', 'ovarian', 'childhood', 
    'brain', 'bladder', 'cervical', 'stomach', 'testicular',
    'thyroid', 'uterine', 'lymphoma', 'myeloma', 'esophageal',
    'head-neck', 'bone', 'sarcoma', 'gallbladder', 'bile-duct',
    'anal', 'penile', 'vaginal', 'vulvar', 'eye', 'oral',
    'throat', 'small-intestine', 'thymus'
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pt-24 pb-20">
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16 text-center">
        <span className="inline-block px-4 py-1.5 bg-brand-100 text-brand-700 rounded-full text-sm font-bold mb-6">
            {t('heroTag')}
        </span>
        <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
          {t.rich('title', {
            highlight: (chunks) => <span className="text-brand-600">{chunks}</span>
          })}
        </h1>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
        <p className="mt-4 text-brand-600 font-medium">
            {t('countText')}
        </p>
      </section>

      {/* Grid de Cards */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cancerIds.map((id) => (
            <Link 
                href={`${prefix}/sobre-cancer/${id}`} 
                key={id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-neutral-100 flex flex-col"
            >
              {/* Imagen Específica */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={cancerImages[id] || defaultImage}
                  alt={id}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4">
                    <span className="bg-brand-600 text-white text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                        {t('infoGuide')}
                    </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3 text-brand-600">
                    <Activity className="w-5 h-5" />
                    <span className="text-sm font-bold uppercase tracking-wide">{t('medicalInfo')}</span>
                </div>
                
                {/* Traduce el título si existe, si no usa el ID */}
                <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-brand-600 transition-colors capitalize">
                  {t.has(`types.${id}.title`) ? t(`types.${id}.title`) : id}
                </h3>
                
                {/* Traduce la descripción si existe */}
                <p className="text-neutral-500 line-clamp-3 mb-6 flex-1">
                   {t.has(`types.${id}.shortDesc`) ? t(`types.${id}.shortDesc`) : ''}
                </p>

                <div className="flex items-center text-brand-600 font-bold group-hover:gap-2 transition-all">
                  {t('readMore')} <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}