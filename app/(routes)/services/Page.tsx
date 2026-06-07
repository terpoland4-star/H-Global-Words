import { services } from '@/lib/constants';
import { ServiceCard } from '@/components/services/ServiceCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Container } from '@/components/ui/Container';
import { JsonLd } from '@/components/shared/JsonLd';

export default function ServicesPage() {
  const linguistiqueServices = services.filter(s => s.category === 'linguistique');
  const informatiqueServices = services.filter(s => s.category === 'informatique');

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://hamglobalwords.com' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://hamglobalwords.com/services' },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <Container>
          <SectionTitle
            title="Nos services"
            subtitle="Des solutions complètes pour vos besoins linguistiques et digitaux"
            badge="Notre expertise"
          />

          {/* Services Linguistiques */}
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" />
              <h2 className="text-2xl font-bold">🌍 Services Linguistiques</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {linguistiqueServices.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </div>

          {/* Services Informatiques */}
          <div className="mt-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-1 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full" />
              <h2 className="text-2xl font-bold">💻 Solutions Digitales</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {informatiqueServices.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
