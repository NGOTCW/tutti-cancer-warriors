'use client';
import { useTranslations } from 'next-intl';
import { MessageCircle, Video, Download, CheckCircle } from 'lucide-react';

export default function QuestionsForDoctorPage() {
  const t = useTranslations('questionsPage');

  // Construimos las secciones MAPEANDO las claves de tu JSON (qList)
  const questionSections = [
    {
      title: t('sections.general'),
      keys: ['gen1', 'gen2', 'gen3', 'gen4']
    },
    {
      title: t('sections.tests'),
      keys: ['test1', 'test2', 'test3', 'test4', 'test5']
    },
    {
      title: t('sections.treatment'),
      keys: ['treat1', 'treat2', 'treat3', 'treat4', 'treat5', 'treat6', 'treat7', 'treat8', 'treat9']
    },
    {
      title: t('sections.advanced'),
      keys: ['adv1', 'adv2', 'adv3', 'adv4']
    },
    {
      title: t('sections.trials'),
      keys: ['trial1', 'trial2', 'trial3', 'trial4', 'trial5']
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-brand-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MessageCircle className="w-16 h-16 text-brand-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-neutral-600">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Video Consultation Feature - COMING SOON */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-200">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 animate-pulse">
                <Video className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                  🎥 {t('videoTitle')}
                </h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {t('videoDesc')}
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>{t('videoNote')}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {questionSections.map((section, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 border border-purple-100 hover:shadow-xl transition-all">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                  <CheckCircle className="w-7 h-7 text-brand-600" />
                  {section.title}
                </h2>
                <ul className="space-y-4">
                  {section.keys.map((key, qIdx) => (
                    <li key={qIdx} className="flex items-start gap-3 text-neutral-700 hover:text-brand-600 transition-colors">
                      <span className="w-6 h-6 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 font-semibold text-sm flex-shrink-0 mt-0.5">
                        {qIdx + 1}
                      </span>
                      {/* Aquí lee de tu qList */}
                      <span className="leading-relaxed">{t(`qList.${key}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-gradient-to-b from-white to-brand-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
              {t('tipsTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="bg-white p-6 rounded-xl border-2 border-brand-100 hover:shadow-lg transition-all">
                  {/* @ts-ignore */}
                  <h3 className="text-lg font-bold text-brand-600 mb-2">{t(`tips.${num}.title`)}</h3>
                  {/* @ts-ignore */}
                  <p className="text-neutral-600">{t(`tips.${num}.text`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 bg-gradient-to-br from-brand-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('downloadTitle')}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            {t('downloadDesc')}
          </p>
          <a
            href="/questions-to-ask-your-doctor.pdf"
            download
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-brand-600 font-bold rounded-full shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all"
          >
            <Download className="w-5 h-5" />
            {t('btnDownload')}
          </a>
        </div>
      </section>
    </div>
  );
}