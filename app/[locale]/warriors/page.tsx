'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { X, ChevronRight, Heart, Sparkles } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- UTILS ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- CUSTOM ANIMATED SVGS (ICONOS PROPIOS) ---
const DrawIcon = ({ path, viewBox = "0 0 24 24", className }: { path: string, viewBox?: string, className?: string }) => {
    return (
        <svg viewBox={viewBox} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
                d={path}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />
        </svg>
    );
};

const ButterflyIcon = ({ className }: { className?: string }) => (
    <DrawIcon 
        className={className} 
        path="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 6v12 M17 10l-5 2-5-2"
        // Un path simplificado abstracto tipo mariposa/flor para la demo
    />
);

// --- DATA MOCK (SIMULADA) ---
const categories = ['all', 'kids', 'teens', 'adults'];

const warriorsData = [
  { id: '1', category: 'adults', src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000", gallery: ["https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800", "https://images.unsplash.com/photo-1519681393784-d8e5b5a4570e?q=80&w=800"] },
  { id: '2', category: 'adults', src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000", gallery: ["https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800"] },
  { id: '3', category: 'adults', src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000", gallery: ["https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=800"] },
  { id: '4', category: 'kids', src: "https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?q=80&w=1000", gallery: ["https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800"] },
  { id: '5', category: 'teens', src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1000", gallery: ["https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800"] },
  { id: '6', category: 'adults', src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000", gallery: ["https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800"] },
];

// --- COMPONENTS ---

// 1. Animated Counter
const Counter = ({ value, label }: { value: number, label: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            const duration = 2000; // 2s
            const steps = 60;
            const stepTime = duration / steps;
            let current = 0;
            const timer = setInterval(() => {
                current += value / steps;
                if (current >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, stepTime);
            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-brand-600 mb-2 font-mono">
                {count}+
            </div>
            <div className="text-neutral-500 font-medium uppercase tracking-wide text-sm">{label}</div>
        </div>
    );
};

export default function WarriorsPage() {
  const t = useTranslations('warriorsPage');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Scroll Parallax Logic
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 0.5], [0, 200]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const filteredWarriors = activeFilter === 'all' 
    ? warriorsData 
    : warriorsData.filter(w => w.category === activeFilter);

  const selectedWarrior = warriorsData.find(w => w.id === selectedId);

  return (
    <div className="min-h-screen bg-neutral-50 selection:bg-brand-200 selection:text-brand-900">
      
      {/* --- HERO SECTION PARALLAX --- */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <motion.div 
                animate={{ x: [0, 100, 0], y: [0, -50, 0], rotate: [0, 20, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-200/40 rounded-full blur-[100px]" 
            />
            <motion.div 
                animate={{ x: [0, -100, 0], y: [0, 50, 0], rotate: [0, -20, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-[100px]" 
            />
        </div>

        <motion.div 
            style={{ y: yHero, opacity: opacityHero }}
            className="container mx-auto px-4 text-center relative z-10"
        >
            <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} 
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2 bg-white/50 backdrop-blur-md border border-white/60 rounded-full text-brand-700 font-bold mb-8 shadow-sm"
            >
                <Sparkles className="w-5 h-5 animate-pulse" />
                {t('badge')}
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-neutral-900 mb-8 tracking-tighter">
                {t('title')} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600">
                    {t('titleHighlight')}
                </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                {t('subtitle')}
            </p>

            {/* Custom SVG Drawing Animation */}
            <div className="mt-12 flex justify-center">
                 <ButterflyIcon className="w-24 h-24 text-brand-300 opacity-50" />
            </div>
        </motion.div>
      </section>

{/* --- STATS SECTION --- */}
      <section className="py-12 bg-white border-y border-neutral-100">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* value={45}    -> 45 Sueños Cumplidos (Número creíble y bueno)
                  value={3500} -> 3500€ Recaudados (Impresionante pero posible)
                  value={60}    -> 60 Voluntarios (Comunidad fuerte)
               */}
               <Counter value={45} label={t('stats.dreams')} />
               <Counter value={3500} label={t('stats.investment')} />
               <Counter value={60} label={t('stats.volunteers')} />
          </div>
      </section>
      {/* --- FILTER & GRID --- */}
      <section className="py-24 px-4 container mx-auto">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={cn(
                        "px-6 py-2 rounded-full font-medium transition-all duration-300 text-lg relative",
                        activeFilter === cat ? "text-white" : "text-neutral-500 hover:text-brand-600"
                    )}
                >
                    {activeFilter === cat && (
                        <motion.div 
                            layoutId="activeFilter"
                            className="absolute inset-0 bg-brand-600 rounded-full shadow-lg shadow-brand-200"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-10">{t(`filters.${cat}`)}</span>
                </button>
            ))}
        </div>

        {/* Grid with Layout Animation */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
                {filteredWarriors.map((warrior) => (
                    <motion.div
                        layout
                        key={warrior.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSelectedId(warrior.id)}
                        className="group cursor-pointer"
                    >
                        <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-neutral-100 relative h-[500px]">
                            <Image 
                                src={warrior.src} 
                                alt={t(`stories.${warrior.id}.name`)} 
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                            
                            <div className="absolute bottom-0 left-0 p-8 w-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="text-brand-300 font-bold uppercase tracking-wider text-sm mb-2">
                                    {t('dreamFulfilled')}
                                </div>
                                <h3 className="text-4xl font-bold mb-2">{t(`stories.${warrior.id}.name`)}</h3>
                                <p className="text-white/80 line-clamp-2 mb-4">
                                    {t(`stories.${warrior.id}.dream`)}
                                </p>
                                <div className="flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                    Read Story <ChevronRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
      </section>

      {/* --- MODAL EXPANDIBLE (TYPE APP) --- */}
      <AnimatePresence>
        {selectedId && selectedWarrior && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
                {/* Backdrop */}
                <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    onClick={() => setSelectedId(null)}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />
                
                {/* Modal Content */}
                <motion.div 
                    layoutId={selectedId}
                    initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }}
                    className="bg-white w-full max-w-5xl h-[90vh] md:h-auto rounded-[3rem] overflow-hidden relative z-10 flex flex-col md:flex-row shadow-2xl"
                >
                    <button 
                        onClick={() => setSelectedId(null)}
                        className="absolute top-6 right-6 z-20 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-all"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Left: Image */}
                    <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                        <Image 
                            src={selectedWarrior.src} 
                            alt={t(`stories.${selectedWarrior.id}.name`)} 
                            fill
                            className="object-cover"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                         <div className="absolute bottom-6 left-6 text-white md:hidden">
                            <h2 className="text-4xl font-bold">{t(`stories.${selectedWarrior.id}.name`)}</h2>
                         </div>
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-white">
                        <div className="hidden md:block mb-8">
                            <h2 className="text-5xl font-bold text-neutral-900 mb-2">{t(`stories.${selectedWarrior.id}.name`)}</h2>
                            <div className="inline-block px-4 py-1 bg-brand-100 text-brand-700 rounded-full font-bold text-sm">
                                {t(`stories.${selectedWarrior.id}.age`)} years old
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-brand-600 mb-6 border-l-4 border-brand-200 pl-4">
                            "{t(`stories.${selectedWarrior.id}.dream`)}"
                        </h3>

                        <p className="text-xl text-neutral-600 leading-relaxed mb-10">
                            {t(`stories.${selectedWarrior.id}.desc`)}
                        </p>

                        {/* Mini Gallery inside Modal */}
                        {selectedWarrior.gallery && (
                            <div>
                                <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                                    <Sparkles className="w-4 h-4 text-brand-500" />
                                    {t('modal.gallery')}
                                </h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {selectedWarrior.gallery.map((img, idx) => (
                                        <div key={idx} className="relative h-32 rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                                            <Image src={img} alt="Gallery" fill className="object-cover" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        <div className="mt-12 pt-8 border-t border-neutral-100">
                             <button className="w-full py-4 bg-neutral-900 text-white rounded-2xl font-bold hover:bg-brand-600 transition-colors flex items-center justify-center gap-2">
                                <Heart className="w-5 h-5 fill-current" />
                                Support more dreams like this
                             </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>

    </div>
  );
}