'use client';
import { useTranslations } from 'next-intl';

export default function TeamPage() {
  const t = useTranslations('teamPage');

  // Cargamos los datos desde los JSON de idiomas
  const teamMembers = [
    { id: '1', name: t('members.1.name'), role: t('members.1.role'), image: t('members.1.image') },
    { id: '2', name: t('members.2.name'), role: t('members.2.role'), image: t('members.2.image') },
    { id: '3', name: t('members.3.name'), role: t('members.3.role'), image: t('members.3.image') },
    { id: '4', name: t('members.4.name'), role: t('members.4.role'), image: t('members.4.image') },
  ];

  return (
    <section className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">{t('title')}</h1>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-16">
          {t('subtitle')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center group">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-purple-50 shadow-lg group-hover:scale-105 transition-transform duration-300">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover object-center" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-1">{member.name}</h3>
              <p className="text-brand-600 font-medium uppercase tracking-wide text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}