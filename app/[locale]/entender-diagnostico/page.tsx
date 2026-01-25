'use client';
import { useTranslations } from 'next-intl';
import { Download, BookOpen, Activity, Users } from 'lucide-react';

export default function UnderstandingDiagnosisPage() {
  const t = useTranslations('diagnosis');

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-brand-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-neutral-900 mb-6">
              Understanding Your Diagnosis
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Getting a cancer diagnosis can feel like a storm has suddenly rolled into your life. 
              It's completely normal to feel overwhelmed, confused, and scared. While this news is 
              never easy, understanding what it means can help you feel more in control.
            </p>
          </div>
        </div>
      </section>

      {/* What is Cancer - ANIMATED */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white to-brand-50 rounded-2xl p-8 border border-brand-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0 animate-pulse">
                  <BookOpen className="w-8 h-8 text-brand-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    What Is Cancer?
                  </h2>
                  <p className="text-neutral-600 leading-relaxed text-lg">
                    Cancer is a word that covers a wide range of diseases where cells in the body 
                    start growing uncontrollably. Each type of cancer affects different parts of the 
                    body and may behave in unique ways. Knowing the specifics about your type of cancer 
                    helps in understanding your treatment options and what you might expect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staging - ANIMATED CARDS */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4 text-center">
              Staging and Grading: What They Mean
            </h2>
            <h3 className="text-2xl font-semibold text-purple-600 mb-6 text-center">
              What is Staging?
            </h3>
            <p className="text-neutral-600 leading-relaxed mb-8 text-center max-w-3xl mx-auto text-lg">
              Staging is like a map that shows how far the cancer has traveled. It starts from Stage 0 
              (where cancer is localized) to Stage IV (where it has spread to other parts of the body).
            </p>
            
            {/* Stage Cards with Animation */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
              {[
                { stage: '0', label: 'Localized', color: 'from-green-400 to-green-600' },
                { stage: 'I', label: 'Early', color: 'from-blue-400 to-blue-600' },
                { stage: 'II', label: 'Regional', color: 'from-yellow-400 to-yellow-600' },
                { stage: 'III', label: 'Advanced', color: 'from-orange-400 to-orange-600' },
                { stage: 'IV', label: 'Metastatic', color: 'from-red-400 to-red-600' }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-6 rounded-xl text-center border-2 border-purple-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
                >
                  <div className={`w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform`}>
                    {item.stage}
                  </div>
                  <div className="text-sm font-semibold text-neutral-700">Stage {item.stage}</div>
                  <div className="text-xs text-neutral-500 mt-1">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Grading */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-100">
              <h3 className="text-2xl font-semibold text-pink-600 mb-4">
                What Is Grading?
              </h3>
              <p className="text-neutral-600 leading-relaxed text-lg">
                Grading tells you how much the cancer cells differ from normal cells. It can give you 
                insight into how quickly the cancer is likely to grow. The grade ranges from low (cells 
                look quite similar to normal cells) to high (cells look very different).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section - ANIMATED */}
      <section className="py-20 bg-gradient-to-br from-brand-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-white">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 animate-bounce">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-4">You're Not Alone</h2>
                <p className="text-xl text-white/90 leading-relaxed mb-6">
                  It's essential to remember that you don't have to go through this alone. 
                  There are many resources and people who want to support you. Connecting with 
                  support groups, seeking counseling, and talking to loved ones can make a big difference.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="/voluntarios"
                className="px-8 py-4 bg-white text-brand-600 font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all"
              >
                Find Support
              </a>
              <a 
                href="/understanding-your-diagnosis.pdf"
                download
                className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold rounded-full hover:bg-white/30 transition-all flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Guide (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}