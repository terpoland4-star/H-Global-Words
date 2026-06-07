import { Hero } from '@/components/home/Hero';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { Stats } from '@/components/home/Stats';
import { Testimonials } from '@/components/home/Testimonials';
import { CTA } from '@/components/home/CTA';
import { JsonLd } from '@/components/shared/JsonLd';

export default function HomePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HAM GLOBAL WORDS',
    url: 'https://hamglobalwords.com',
    logo: 'https://hamglobalwords.com/logo.png',
    description: 'Services linguistiques multilingues & solutions digitales. Traduction, interprétation, annotation IA.',
    founder: {
      '@type': 'Person',
      name: 'Hamadine AG Moctar',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+22789030106',
      email: 'contact@hamglobalwords.com',
      availableLanguage: ['French', 'English', 'Arabic', 'Songhai', 'Tamasheq'],
    },
    sameAs: ['https://www.linkedin.com/company/hamglobalwords'],
  };

  return (
    <>
      <JsonLd data={organizationSchema} />
      <Hero />
      <ServicesPreview />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
