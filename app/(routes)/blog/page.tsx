import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: "L'importance des langues africaines dans l'IA moderne",
    excerpt: "Comment les langues africaines rares deviennent essentielles pour l'entraînement des modèles d'intelligence artificielle.",
    date: "15 Jan 2024",
    author: "Hamadine AG Moctar",
    category: "Technologie linguistique",
    slug: "langues-africaines-ia",
  },
  {
    id: 2,
    title: "Guide de la traduction humanitaire : bonnes pratiques",
    excerpt: "Conseils pour une traduction efficace dans les contextes humanitaires et d'urgence.",
    date: "10 Jan 2024",
    author: "Hamadine AG Moctar",
    category: "Humanitaire",
    slug: "traduction-humanitaire",
  },
  {
    id: 3,
    title: "Comment choisir son ordinateur pour la traduction",
    excerpt: "Les critères essentiels pour sélectionner le matériel adapté aux professionnels de la traduction.",
    date: "05 Jan 2024",
    author: "Équipe HGW",
    category: "Informatique",
    slug: "choisir-ordinateur-traduction",
  },
];

export default function BlogPage() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          title="Blog"
          subtitle="Conseils, actualités et réflexions sur les langues et le digital"
          badge="Articles"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {posts.map((post) => (
            <article key={post.id} className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-primary-200 to-secondary-200" />
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                </div>
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-100 text-primary-700 rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-primary-600 font-medium text-sm group-hover:gap-3 transition-all">
                  Lire <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
