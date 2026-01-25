'use client';
import { useTranslations } from 'next-intl';
import { Music, Sun, Sparkles, Smile } from 'lucide-react';

export default function MoodBoostPage() {
  // Asegúrate de añadir las traducciones a tus JSON para este namespace 'moodBoost'
  // Si no tienes textos, usa fallbacks o crea las claves.
  // Ejemplo keys: title, subtitle, playlistTitle, quoteTitle, quoteText
  const t = (key: string) => key; // Mock temporal, usa useTranslations real

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Vibrant */}
      <section className="py-24 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-orange-100 to-pink-100">
        <div className="container mx-auto px-4 text-center">
            <Sun className="w-20 h-20 text-orange-500 mx-auto mb-6 animate-spin-slow" />
            <h1 className="text-6xl font-bold text-neutral-900 mb-6">Warrior Mood Boost</h1>
            <p className="text-2xl text-neutral-700 max-w-2xl mx-auto">
                A special space to recharge your energy, find peace, and smile.
            </p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto bg-white p-12 rounded-[3rem] shadow-2xl border-4 border-yellow-100 relative">
                <Sparkles className="absolute top-10 left-10 w-8 h-8 text-yellow-400" />
                <blockquote className="text-3xl md:text-4xl font-serif text-neutral-800 italic leading-relaxed mb-6">
                    "Hope is the only thing stronger than fear. Keep shining, warrior."
                </blockquote>
                <cite className="text-neutral-500 font-bold uppercase tracking-widest">- TCW Team</cite>
            </div>
        </div>
      </section>

      {/* Spotify / Music Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4 mb-12">
                <Music className="w-10 h-10 text-brand-400" />
                <h2 className="text-4xl font-bold">Healing Playlist</h2>
            </div>
            
            <div className="max-w-3xl mx-auto bg-neutral-800 rounded-3xl p-4 shadow-2xl">
                {/* Embed de Spotify real o placeholder */}
                <iframe 
                    style={{borderRadius: '12px'}} 
                    src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9uKNf5jGX6m?utm_source=generator" 
                    width="100%" 
                    height="352" 
                    frameBorder="0" 
                    allowFullScreen 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                ></iframe>
            </div>
        </div>
      </section>

      {/* Daily Tip */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
             <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 text-green-700 rounded-full font-bold mb-8">
                <Smile className="w-5 h-5" />
                Daily Tip
             </div>
             <h3 className="text-3xl font-bold mb-4">Practice Gratitude</h3>
             <p className="text-xl text-neutral-600 max-w-xl mx-auto">
                Take 5 minutes today to write down 3 things that made you smile. It changes your brain chemistry!
             </p>
        </div>
      </section>
    </div>
  );
}