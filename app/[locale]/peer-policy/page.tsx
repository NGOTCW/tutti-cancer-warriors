'use client';
import { useTranslations } from 'next-intl';

export default function PeerPolicyPage() {
  const t = useTranslations('legal.peerPolicy');

  return (
    <div className="pt-24 pb-20 min-h-screen bg-neutral-50">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header con Icono SVG Personalizado (Heart Handshake) */}
        <div className="bg-white rounded-3xl p-10 shadow-xl mb-8 border border-neutral-100 text-center relative overflow-hidden">
            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-bl-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-rose-100 rounded-tr-full opacity-50"></div>
            
            <div className="relative z-10">
                <div className="w-20 h-20 bg-pink-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-pink-600">
                    {/* SVG Icon: Compassionate Connection */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" className="text-pink-200 fill-pink-100" stroke="none" />
                        <path d="M16 11l-2 2-4-4" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" fill="none"/>
                    </svg>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
                    {t('title')}
                </h1>
                <p className="text-neutral-500 font-medium bg-neutral-100 inline-block px-4 py-2 rounded-full text-sm border border-neutral-200">
                    {t('lastUpdated')}
                </p>
            </div>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-lg border border-neutral-100">
            <article 
                className="prose prose-lg max-w-none text-neutral-600 
                /* Estilos para Títulos */
                prose-headings:text-pink-900 prose-headings:font-bold prose-headings:mt-10 prose-headings:mb-4
                prose-h3:text-2xl prose-h3:border-b prose-h3:border-pink-100 prose-h3:pb-2
                prose-h4:text-xl prose-h4:text-pink-700 prose-h4:uppercase prose-h4:tracking-wide prose-h4:mt-6
                
                /* Estilos para Párrafos y Listas */
                prose-p:leading-relaxed prose-p:mb-4
                prose-ul:list-none prose-ul:pl-0 prose-ul:space-y-3
                prose-li:pl-6 prose-li:relative prose-li:before:content-['•'] prose-li:before:absolute prose-li:before:left-0 prose-li:before:text-pink-500 prose-li:before:font-bold
                
                /* Estilos para Negritas y Enlaces */
                prose-strong:text-pink-800 prose-strong:font-bold
                prose-a:text-pink-600 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-pink-800 transition-colors"
                dangerouslySetInnerHTML={{ __html: t.raw('content') }} 
            />
        </div>
      </div>
    </div>
  );
}