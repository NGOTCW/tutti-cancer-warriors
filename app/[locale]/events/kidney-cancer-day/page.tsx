'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function KidneyCancerDayPage() {
  // 🎯 EDITABLE: Cambia estas fechas y contenido
  const eventData = {
    title: "World Kidney Cancer Day",
    date: "June 20, 2025",
    theme: "Early Detection Saves Lives",
    color: "orange", // cyan, blue, purple, green, amber, orange
    facts: [
      { stat: "431,000", label: "New cases globally each year" },
      { stat: "90%", label: "Survival rate when detected early" },
      { stat: "2x", label: "Higher risk for smokers" },
    ],
    awareness: [
      { title: "Know the Symptoms", desc: "Blood in urine, lower back pain, unexplained weight loss, fatigue" },
      { title: "Risk Factors", desc: "Smoking, obesity, high blood pressure, family history" },
      { title: "Prevention", desc: "Healthy lifestyle, regular checkups, avoid smoking" },
    ]
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block px-4 py-2 bg-white/80 rounded-full text-sm font-semibold text-orange-600 mb-6">
            {eventData.date}
          </div>
          <h1 className="text-6xl font-bold text-neutral-900 mb-6">
            {eventData.title}
          </h1>
          <p className="text-2xl text-neutral-700 font-semibold">
            {eventData.theme}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventData.facts.map((fact, idx) => (
              <div key={idx} className="text-center bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 border border-orange-100">
                <div className="text-5xl font-bold text-orange-600 mb-2">{fact.stat}</div>
                <div className="text-neutral-600 font-medium">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awareness */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-neutral-900 mb-12 text-center">
              What You Need to Know
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {eventData.awareness.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-8 border-2 border-orange-100 hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-bold text-orange-600 mb-4">{item.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Spread Awareness
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Share information about kidney cancer and help save lives through early detection.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/sobre-cancer/kidney"
              className="px-8 py-4 bg-white text-orange-600 font-bold rounded-full hover:scale-105 transition-all"
            >
              Learn More About Kidney Cancer
            </Link>
            <Link
              href="/donar"
              className="px-8 py-4 bg-white/20 border-2 border-white text-white font-bold rounded-full hover:bg-white/30 transition-all"
            >
              Support Research
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}