import type { Project } from '@/data/projects';
import { ArrowRightIcon, GitHubIcon } from '@/components/icons';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface ProjectCardProps {
  project: Project;
  className?: string; // Bento Grid를 위한 className 추가
  index?: number;
}

export default function ProjectCard({ project, className, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      className={twMerge(
        "project-card group flex flex-col h-full hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl dark:hover:shadow-indigo-500/10",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex flex-col h-full p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:to-indigo-400 transition-all duration-300">
                {project.title}
              </h3>
              {project.isMain && (
                <span className="px-2.5 py-0.5 text-xs font-semibold bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300 rounded-full border border-indigo-200 dark:border-indigo-500/30">
                  Main Project
                </span>
              )}
              {project.badge && (
                <span className="badge-deployed">
                  {project.badge}
                </span>
              )}
            </div>

            {(project.period || project.client || project.role) && (
              <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                {project.role && (
                  <span className="px-2 py-0.5 text-xs font-medium bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 rounded-md">
                    {project.role}
                  </span>
                )}
                {project.period && <span>{project.period}</span>}
                {project.client && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    <span>{project.client}</span>
                  </>
                )}
              </div>
            )}
          </div>

          <div className="flex gap-2 shrink-0">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-indigo-100 hover:text-indigo-600 dark:hover:bg-indigo-500/20 dark:hover:text-indigo-300 transition-colors"
                aria-label="Live Demo"
              >
                <ArrowRightIcon className="w-5 h-5 -rotate-45" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                aria-label="GitHub Repository"
              >
                <div className="w-5 h-5"><GitHubIcon /></div>
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800/50">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium bg-zinc-50 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-300 rounded-md border border-zinc-200 dark:border-zinc-700/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
