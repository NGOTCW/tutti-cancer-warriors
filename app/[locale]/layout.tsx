import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server'; // Importamos getTranslations
import { Metadata } from "next"; // Importamos Metadata de next (no type)
import "../globals.css";
import Header from './Header';
import Footer from './Footer';

// 1. Configuración dinámica del SEO (Google, WhatsApp, etc.)
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'metadata' });
 
  // Cambia esto por tu dominio real cuando lo tengas (ej: https://tutticancerwarriors.org)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tutticancerwarriors.org';

  return {
    metadataBase: new URL(baseUrl),
    title: {
      template: '%s | Tutti Cancer Warriors',
      default: 'Tutti Cancer Warriors - Born to Thrive', // Título por defecto
    },
    description: t('description'), // Descripción traducida
    openGraph: {
      title: 'Tutti Cancer Warriors',
      description: t('description'),
      url: baseUrl,
      siteName: 'Tutti Cancer Warriors',
      images: [
        {
          url: '/og-image.png', // La imagen 1200x630 que vas a crear en /public
          width: 1200,
          height: 630,
          alt: 'Tutti Cancer Warriors NGO',
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Tutti Cancer Warriors',
      description: t('description'),
      images: ['/og-image.png'], // La misma imagen
    },
    icons: {
      icon: '/favicon.ico', // Asegúrate de tener el icono también
    },
  };
}

// 2. El Layout principal
export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="bg-white antialiased">
        <NextIntlClientProvider messages={messages}>
          {/* Pasamos locale al Header para controlar los enlaces */}
          <Header locale={locale} />
          
          <main className="min-h-screen">
            {children}
          </main>
          
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}