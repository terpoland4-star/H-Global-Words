import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';

export default function PrivacyPage() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle title="Politique de confidentialité" centered />
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto mt-12">
          <h2>Collecte des données</h2>
          <p>Nous collectons les informations que vous nous fournissez via le formulaire de contact.</p>
          <h2>Utilisation des données</h2>
          <p>Vos données ne sont jamais vendues ni partagées avec des tiers.</p>
          <h2>Cookies</h2>
          <p>Nous utilisons uniquement des cookies techniques nécessaires au bon fonctionnement du site.</p>
          <h2>Vos droits</h2>
          <p>Vous pouvez accéder, modifier ou supprimer vos données en nous contactant.</p>
        </div>
      </Container>
    </section>
  );
}
