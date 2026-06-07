import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/shared/ScrollToTop';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a56db',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://hamglobalwords.com'),
  title: {
    default: 'HAM GLOBAL WORDS | Services Linguistiques & Solutions Digitales',
    template: '%s | HAM GLOBAL WORDS',
  },
  description: 'Prestataire linguistique multilingue & solutions digitales. Traduction, interprétation, annotation IA, vente d\'ordinateurs, création de sites web. Basé au Sahel, actif dans le monde entier.',
  keywords: ['traduction', 'interprétation', 'annotation IA', 'langues africaines', 'ordinateurs', 'création site web', 'Niger', 'Sahel'],
  authors: [{ name: 'Hamadine AG Moctar' }],
  creator: 'HAM GLOBAL WORDS',
  publisher: 'HAM GLOBAL WORDS',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://hamglobalwords.com',
    siteName: 'HAM GLOBAL WORDS',
    title: 'HAM GLOBAL WORDS - Ponts entre langues et technologies',
    description: 'Connecting voices across cultures. Services linguistiques & solutions digitales.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'HAM GLOBAL WORDS' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HAM GLOBAL WORDS',
    description: 'Services linguistiques & solutions digitales',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://hamglobalwords.com' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="bg-background">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
