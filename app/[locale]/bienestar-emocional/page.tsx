'use client';
import { useTranslations } from 'next-intl';
import { Heart, Download, Wind, Brain, Smile, Users, BookOpen, Music } from 'lucide-react';

export default function EmotionalWellbeingPage() {
  const t = useTranslations('emotional');

  const sections = [
    {
      title: 'Coping with Anxiety',
      icon: Wind,
      color: 'from-blue-500 to-cyan-600',
      techniques: [
        {
          name: 'Deep Breathing',
          steps: [
            'Find a quiet space, sit or lie down comfortably',
            'Close your eyes and take a slow, deep breath in through your nose',
            'Allow your abdomen to rise, hold for a few seconds',
            'Exhale slowly through your mouth',
            'Repeat several times, focusing on the sensation of your breath'
          ]
        },
        {
          name: '4-7-8 Breathing',
          steps: [
            'Inhale through your nose for a count of 4',
            'Hold the breath for a count of 7',
            'Exhale through your mouth for a count of 8',
            'This helps slow your breathing and can be effective before sleep'
          ]
        },
        {
          name: 'Challenging Negative Thoughts',
          steps: [
            'When anxious thoughts creep in, identify and challenge them',
            'Ask if thoughts are based on facts or assumptions',
            'Replace negative thoughts with balanced, realistic ones'
          ]
        },
        {
          name: 'Mindfulness Practice',
          steps: [
            'Focus on the present moment rather than worrying about the future',
            'Engage fully in activities: eating, walking, observing',
            'Mindfulness reduces anxiety by anchoring you in the here and now'
          ]
        }
      ]
    },
    {
      title: 'Dealing with Depression',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      signs: [
        'Persistent Sadness: Feeling sad or hopeless for extended periods',
        'Loss of Interest: Lack of interest in activities you once enjoyed',
        'Fatigue: Feeling exhausted even after adequate rest',
        'Changes in Appetite: Significant weight loss or gain',
        'Difficulty Concentrating: Trouble focusing or making decisions'
      ],
      help: [
        {
          type: 'Counseling',
          desc: 'Speaking with a mental health professional provides strategies to manage depression'
        },
        {
          type: 'Peer Support',
          desc: 'Connecting with others who have faced similar challenges can be incredibly comforting'
        },
        {
          type: 'Medication',
          desc: 'In some cases, medication may be necessary. Always consult with a healthcare professional'
        }
      ]
    },
    {
      title: 'Maintaining Positivity',
      icon: Smile,
      color: 'from-amber-500 to-orange-600',
      practices: [
        {
          name: 'Gratitude Journal',
          desc: 'Each day, write down three things you are grateful for. These can be small things like a warm cup of tea or a kind word from a friend'
        },
        {
          name: 'Thank You Notes',
          desc: 'Expressing gratitude to others can lift your spirits. Writing a thank you note fosters positive emotions'
        },
        {
          name: 'Daily Enjoyment',
          desc: 'Engage in activities that bring you joy: reading, listening to music, or spending time in nature'
        },
        {
          name: 'Creative Expression',
          desc: 'Explore creative outlets like drawing, writing, or crafting to process emotions'
        }
      ]
    },
    {
      title: 'Support Networks',
      icon: Users,
      color: 'from-green-500 to-emerald-600',
      points: [
        {
          title: 'Family and Friends',
          items: [
            'Open Communication: Let loved ones know how they can support you',
            'Quality Time: Spend time with those who make you feel good',
            'Engaging in activities together provides comfort and normalcy'
          ]
        },
        {
          title: 'Peer Support Groups',
          items: [
            'Shared Experiences: Connect with others who understand what you are going through',
            'Safe Space: Share stories, ask for advice, and receive encouragement',
            'Mentorship: Some programs match you with a survivor mentor'
          ]
        }
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-purple-500 to-brand-600">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center animate-pulse">
              <Heart className="w-12 h-12 text-white" fill="currentColor" />
            </div>
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Emotional Well-Being for Cancer Warriors
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto">
            Caring for your emotional health is just as important as managing the physical side of cancer. 
            This guide offers practical tools to help you stay mentally and emotionally strong throughout your journey.
          </p>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {sections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 border border-purple-100 hover:shadow-2xl transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-neutral-900">
                      {section.title}
                    </h2>
                  </div>

                  {/* Techniques for Anxiety */}
                  {section.techniques && (
                    <div className="space-y-6">
                      {section.techniques.map((tech, tIdx) => (
                        <div key={tIdx} className="bg-white p-6 rounded-xl border border-blue-100">
                          <h3 className="text-xl font-bold text-blue-600 mb-3">{tech.name}</h3>
                          <ul className="space-y-2">
                            {tech.steps.map((step, sIdx) => (
                              <li key={sIdx} className="flex items-start gap-2 text-neutral-600">
                                <span className="text-blue-600">•</span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Signs of Depression */}
                  {section.signs && (
                    <div className="space-y-4 mb-6">
                      <h3 className="text-xl font-bold text-purple-600">Signs of Depression:</h3>
                      <ul className="space-y-2">
                        {section.signs.map((sign, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2 text-neutral-600">
                            <span className="text-purple-600">•</span>
                            <span>{sign}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Help Options */}
                  {section.help && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-purple-600">Seeking Help:</h3>
                      {section.help.map((item, hIdx) => (
                        <div key={hIdx} className="bg-white p-4 rounded-xl border border-purple-100">
                          <h4 className="font-bold text-purple-600 mb-2">{item.type}</h4>
                          <p className="text-neutral-600">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Practices */}
                  {section.practices && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {section.practices.map((practice, pIdx) => (
                        <div key={pIdx} className="bg-white p-6 rounded-xl border border-amber-100">
                          <h3 className="text-lg font-bold text-amber-600 mb-2">{practice.name}</h3>
                          <p className="text-neutral-600">{practice.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Support Networks */}
                  {section.points && (
                    <div className="space-y-6">
                      {section.points.map((point, pIdx) => (
                        <div key={pIdx} className="bg-white p-6 rounded-xl border border-green-100">
                          <h3 className="text-xl font-bold text-green-600 mb-3">{point.title}</h3>
                          <ul className="space-y-2">
                            {point.items.map((item, iIdx) => (
                              <li key={iIdx} className="flex items-start gap-2 text-neutral-600">
                                <span className="text-green-600">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Download PDF */}
      <section className="py-20 bg-gradient-to-br from-brand-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Download the Complete Guide
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Take these emotional well-being strategies with you. Print or save for easy reference during difficult times.
          </p>
          <a
            href="/finding-calm-tcw-2.pdf"
            download
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-brand-600 font-bold rounded-full shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all"
          >
            <Download className="w-5 h-5" />
            Download PDF Guide
          </a>
        </div>
      </section>
    </div>
  );
}