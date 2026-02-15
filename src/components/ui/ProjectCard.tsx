import type { Project } from '@/data/projects';
import SkillTag from './SkillTag';
import { ArrowRightIcon, GitHubIcon } from '@/components/icons';
import ScrollReveal from './ScrollReveal';

export default function ProjectCard({ project }: { project: Project }) {
  if (project.isMain) {
    return (
      <ScrollReveal>
        <div className="project-card mb-8">
          <div className="p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              {project.badge && <span className="badge-deployed">{project.badge}</span>}
            </div>
            <p className="text-zinc-500 mb-6 max-w-2xl">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <SkillTag key={tag}>{tag}</SkillTag>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <a href={project.liveUrl} className="btn-primary text-sm">
                  Live Demo
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                <GitHubIcon className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    );
  }

  return (
    <ScrollReveal>
      <div className="project-card">
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3">{project.title}</h3>
          <p className="text-zinc-500 text-sm mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <SkillTag key={tag} small>
                {tag}
              </SkillTag>
            ))}
          </div>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors inline-flex items-center gap-1"
          >
            GitHub
            <ArrowRightIcon className="w-3 h-3" />
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
}
