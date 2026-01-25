'use client';
import { useTranslations } from 'next-intl';
import { MessageCircle, Video, Download, CheckCircle } from 'lucide-react';

export default function QuestionsForDoctorPage() {
  const t = useTranslations('questions');

  const questionSections = [
    {
      title: 'General Questions',
      questions: [
        'What type of cancer do I have?',
        'How fast is my cancer growing?',
        'Where exactly is the cancer in my body?',
        'Can my cancer be cured, or is the focus on managing it?'
      ]
    },
    {
      title: 'Questions About Tests',
      questions: [
        'What\'s involved in this test?',
        'What will this test tell us?',
        'What are the benefits and risks of this test?',
        'Will the results of this test change my treatment plan?',
        'Are there any costs for this test?'
      ]
    },
    {
      title: 'Questions About Treatment and Costs',
      questions: [
        'What\'s the goal of each treatment?',
        'How will this treatment affect my daily life?',
        'What will this treatment cost me?',
        'Can I get help with covering the costs?',
        'Will this treatment affect my ability to have children?',
        'What side effects should I expect?',
        'Are there other therapies I can use alongside this treatment?',
        'Who will be on my treatment team?',
        'Are there any clinical trials that might be right for me?'
      ]
    },
    {
      title: 'If Your Cancer is Advanced',
      questions: [
        'What treatments can help with my symptoms?',
        'Who will handle my ongoing care?',
        'What support can my family and friends get?',
        'How can I access palliative care?'
      ]
    },
    {
      title: 'Questions About Clinical Trials',
      questions: [
        'Are there any clinical trials that could be a good fit for me?',
        'What would participating in a trial involve?',
        'What are the possible benefits and risks?',
        'Can I say no to a trial if I change my mind?',
        'Is participating in a trial important for me or others?'
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-brand-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MessageCircle className="w-16 h-16 text-brand-600 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-neutral-900 mb-6">
              Questions to Ask Your Doctor About Cancer
            </h1>
            <p className="text-xl text-neutral-600">
              Getting a cancer diagnosis can feel overwhelming, and it's completely normal to have 
              lots of questions. Talking to your doctor can help you understand what's happening and what steps to take next.
            </p>
          </div>
        </div>
      </section>

      {/* Video Consultation Feature - COMING SOON */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-200">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 animate-pulse">
                <Video className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                  🎥 Coming Soon: Video Calls with Medical Experts
                </h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  Soon you'll be able to speak directly with medical specialists via <strong>Zoom, Google Meet</strong>, 
                  or your preferred platform. We're working on bringing expert consultations right to your home.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>How to enable:</strong> Once launched, you'll be able to book appointments through our platform. 
                    Integration with major video call platforms will allow seamless consultations with oncologists, 
                    therapists, and support specialists.
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
                  {section.questions.map((question, qIdx) => (
                    <li key={qIdx} className="flex items-start gap-3 text-neutral-700 hover:text-brand-600 transition-colors">
                      <span className="w-6 h-6 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 font-semibold text-sm flex-shrink-0 mt-0.5">
                        {qIdx + 1}
                      </span>
                      <span className="leading-relaxed">{question}</span>
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
              Get the Inside Scoop on Your Care
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Stay Informed', text: 'Make sure you understand all the details about your treatment.' },
                { title: 'Choose What\'s Best', text: 'Ask questions so you can make the best choice from the treatment options available.' },
                { title: 'Don\'t Be Shy', text: 'If something isn\'t clear or you\'re feeling unsure, speak up!' },
                { title: 'Involve Your Family', text: 'Encourage your loved ones to ask questions too.' }
              ].map((tip, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border-2 border-brand-100 hover:shadow-lg transition-all">
                  <h3 className="text-lg font-bold text-brand-600 mb-2">{tip.title}</h3>
                  <p className="text-neutral-600">{tip.text}</p>
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
            Download the Complete Guide
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Take this list with you to your next appointment. Having these questions ready can help 
            you feel more prepared and in control.
          </p>
          <a
            href="/questions-to-ask-your-doctor.pdf"
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