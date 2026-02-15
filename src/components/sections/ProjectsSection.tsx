import { projectsData } from '@/data/projects';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import ProjectCard from '@/components/ui/ProjectCard';

export default function ProjectsSection() {
  const mainProject = projectsData.find((p) => p.isMain);
  const subProjects = projectsData.filter((p) => !p.isMain);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionLabel>Projects</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">프로젝트</h2>
        </ScrollReveal>

        {mainProject && <ProjectCard project={mainProject} />}

        <div className="grid md:grid-cols-2 gap-6">
          {subProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
