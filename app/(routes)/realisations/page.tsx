import { projects } from '@/lib/constants';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Container } from '@/components/ui/Container';

export default function RealisationsPage() {
  const linguistiqueProjects = projects.filter(p => p.category === 'linguistique');
  const informatiqueProjects = projects.filter(p => p.category === 'informatique');

  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          title="Nos réalisations"
          subtitle="Des projets qui témoignent de notre expertise"
          badge="Portfolio"
        />

        {linguistiqueProjects.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">🌍 Projets linguistiques</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {linguistiqueProjects.map((project, index) => (
                <ProjectCard key={project.id} {...project} index={index} />
              ))}
            </div>
          </div>
        )}

        {informatiqueProjects.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">💻 Projets digitaux</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {informatiqueProjects.map((project, index) => (
                <ProjectCard key={project.id} {...project} index={index} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
