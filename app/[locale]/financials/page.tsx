'use client';
import { useTranslations } from 'next-intl';
import { FileText, Download, Building2 } from 'lucide-react';

export default function FinancialsPage() {
  const t = useTranslations('financialsPage');

  return (
    <div className="pt-24 pb-20 min-h-screen bg-neutral-50">
      <div className="container mx-auto px-4 max-w-3xl">
        
        {/* Encabezado Bonito */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-neutral-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-purple-100 rounded-2xl text-purple-700">
                <Building2 className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">
              {t('title')}
            </h1>
          </div>

          {/* Contenido de Texto */}
          <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
            <p>
              {t.rich('p3', {
                bold: (chunks) => <strong className="text-neutral-900 font-bold">{chunks}</strong>
              })}
            </p>
          </div>

          {/* Botón de Descarga */}
          <div className="mt-10 pt-8 border-t border-neutral-100">
            <a 
              href="/Impactful 2024.pdf" // Asegúrate de que el PDF se llama así en la carpeta public
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 bg-neutral-50 hover:bg-purple-50 rounded-xl border border-neutral-200 hover:border-purple-200 transition-all cursor-pointer"
            >
              <div className="p-3 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform text-red-500">
                <FileText className="w-6 h-6" />
              </div>
              <div className="flex-grow">
                <div className="font-bold text-neutral-900 group-hover:text-purple-700 transition-colors">
                  {t('download')}
                </div>
                <div className="text-xs text-neutral-500 mt-1 uppercase tracking-wider font-semibold">PDF Document</div>
              </div>
              <div className="p-2 bg-white rounded-full text-neutral-400 group-hover:text-purple-600 transition-colors">
                <Download className="w-5 h-5" />
              </div>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}