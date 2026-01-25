'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const prefix = locale === 'es' ? '' : `/${locale}`;

  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Image 
              src="/TCW_LOGO.svg" 
              alt="Tutti Cancer Warriors" 
              width={180}
              height={50}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-neutral-400 text-sm leading-relaxed">
              {t('description')}
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/people/Tutti-Cancer-Warriors/61574889407716/#" target="_blank" rel="noopener" 
                className="w-10 h-10 bg-white/10 hover:bg-brand-600 rounded-full flex items-center justify-center transition-all hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/tutticancerwarriors/" target="_blank" rel="noopener"
                className="w-10 h-10 bg-white/10 hover:bg-brand-600 rounded-full flex items-center justify-center transition-all hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://x.com/NGOTCW" target="_blank" rel="noopener"
                className="w-10 h-10 bg-white/10 hover:bg-brand-600 rounded-full flex items-center justify-center transition-all hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3 text-neutral-400 text-sm">
              <li><Link href={`${prefix}/`} className="hover:text-brand-400 transition-colors">Home</Link></li>
              <li><Link href={`${prefix}/warriors`} className="hover:text-brand-400 transition-colors">Warriors</Link></li>
              <li><Link href={`${prefix}/voluntarios`} className="hover:text-brand-400 transition-colors">Volunteers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-neutral-400 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@tutticancerwarriors.org" className="hover:text-brand-400 transition-colors">
                  info@tutticancerwarriors.org
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Marbella, Spain</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Support Us</h3>
            <p className="text-neutral-400 text-sm mb-4">
              Your donation transforms lives
            </p>
            <Link
              href={`${prefix}/donar`}
              className="inline-block w-full px-6 py-3 bg-brand-600 text-white font-semibold rounded-full text-center hover:bg-brand-700 hover:shadow-lg transition-all"
            >
              Donate Now
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
            <p>© {new Date().getFullYear()} {t('copyright')}</p>
            <div className="flex gap-6">
              <Link href={`${prefix}/privacy`} className="hover:text-brand-400 transition-colors">Privacy</Link>
              <Link href={`${prefix}/terms`} className="hover:text-brand-400 transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}