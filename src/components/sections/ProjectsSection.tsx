'use client';

import { projectsData } from '@/data/projects';
import SectionLabel from '@/components/ui/SectionLabel';
import ProjectCard from '@/components/ui/ProjectCard';
import { motion } from 'framer-motion';

export default function ProjectsSection() {
  const mainProject = projectsData.find((p) => p.isMain);
  const subProjects = projectsData.filter((p) => !p.isMain);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <SectionLabel>Projects</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">프로젝트</h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl">
            금융권 엔터프라이즈 시스템 구축부터 최신 AI 기술 연구까지,
            비즈니스 가치를 창출하는 다양한 프로젝트를 수행했습니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          {mainProject && (
            <ProjectCard
              project={mainProject}
              className="md:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[400px]"
              index={0}
            />
          )}

          {subProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              className={index === 0 || index === 3 ? "md:col-span-1" : ""}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
