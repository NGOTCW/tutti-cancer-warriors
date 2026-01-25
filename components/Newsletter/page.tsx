'use client';
import { Mail, ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-brand-600 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Stay updated with the latest news, stories, and events from Tutti Cancer Warriors.
          </p>
          <a
            href="https://paragraph.com/@tutticancerwarriors"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-brand-600 font-bold rounded-full shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all"
          >
            Subscribe Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}