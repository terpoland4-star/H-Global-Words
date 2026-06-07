import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { Target, Heart, Lightbulb, Users, Globe, Laptop, Award, Shield } from 'lucide-react';
import { JsonLd } from '@/components/shared/JsonLd';

const values = [
  { icon: Target, title: 'Excellence', desc: 'Nous visons l\'excellence dans nos services linguistiques et digitaux.' },
  { icon: Heart, title: 'Passion', desc: 'Passionnés par les langues, les cultures et les technologies.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'À la pointe des technologies linguistiques et numériques.' },
  { icon: Users, title: 'Collaboration', desc: 'Nous travaillons main dans la main avec nos clients.' },
];

export default function AboutPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'À propos de HAM GLOBAL WORDS',
    description: 'Découvrez notre histoire, nos valeurs et notre engagement.',
  };

  return (
    <>
      <JsonLd data={aboutSchema} />
      
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display">
              À propos de <span className="gradient-text">HAM GLOBAL WORDS</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 italic">
              "Connecting voices across cultures" — Vos mots, nos ponts.
            </p>
          </div>
        </Container>
      </section>

      {/* Histoire */}
      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre histoire</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  <strong>HAM GLOBAL WORDS</strong> est une entreprise indépendante spécialisée dans les services linguistiques multilingues à impact global. Fondée par <strong>Hamadine AG Moctar</strong>, interprète-traducteur saharien reconnu pour son expertise dans les langues africaines, les contextes humanitaires et les technologies linguistiques.
                </p>
                <p>
                  Grâce à une expérience de terrain avec des institutions internationales (ONU, IOM, Takuba), mais aussi une participation active à des projets d'annotation IA et de développement linguistique numérique, nous créons des ponts entre les langues, les cultures et les intelligences.
                </p>
                <p>
                  Basée au cœur du Sahel, mais tournée vers le monde, HAM GLOBAL WORDS allie authenticité linguistique, expertise technique et vision humaniste.
                </p>
              </div>
              <Button href="/contact" variant="primary" className="mt-8">
                Travaillons ensemble
              </Button>
            </div>
            <div className="relative">
              <div className="glass rounded-2xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Globe className="w-8 h-8 text-primary-500" />
                    <div><p className="text-3xl font-bold">15+</p><p className="text-sm">Langues maîtrisées</p></div>
                  </div>
                  <div className="h-px bg-gray-200" />
                  <div className="flex items-center gap-4">
                    <Laptop className="w-8 h-8 text-secondary-500" />
                    <div><p className="text-3xl font-bold">50+</p><p className="text-sm">Projets réalisés</p></div>
                  </div>
                  <div className="h-px bg-gray-200" />
                  <div className="flex items-center gap-4">
                    <Award className="w-8 h-8 text-accent" />
                    <div><p className="text-3xl font-bold">98%</p><p className="text-sm">Clients satisfaits</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <Container>
          <SectionTitle title="Nos valeurs" subtitle="Les principes qui nous guident" centered />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
