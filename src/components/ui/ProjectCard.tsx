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
            {project.period && (
              <p className="text-sm text-indigo-600 font-medium mb-2">{project.period}</p>
            )}
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
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  <GitHubIcon className="w-4 h-4" />
                  GitHub
                </a>
              )}
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
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <h3 className="text-xl font-bold">{project.title}</h3>
            {project.role && (
              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                {project.role}
              </span>
            )}
          </div>
          {(project.period || project.client) && (
            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-400 mb-3">
              {project.period && <span>{project.period}</span>}
              {project.client && (
                <>
                  <span className="text-zinc-300">|</span>
                  <span>{project.client}</span>
                </>
              )}
            </div>
          )}
          <p className="text-zinc-500 text-sm mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <SkillTag key={tag} small>
                {tag}
              </SkillTag>
            ))}
          </div>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors inline-flex items-center gap-1"
            >
              GitHub
              <ArrowRightIcon className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
