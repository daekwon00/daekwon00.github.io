'use client';

import { skillsData } from '@/data/skills';
import SectionLabel from '@/components/ui/SectionLabel';
import SkillCard from '@/components/ui/SkillCard';
import { motion } from 'framer-motion';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 bg-zinc-50 dark:bg-zinc-900/50 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 dot-grid" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <SectionLabel>Skills</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">기술 스택</h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl">
            Java/Spring 기반의 탄탄한 백엔드 엔지니어링 역량 위에 <br className="hidden sm:block" />
            AI/ML 기술을 더해 지능형 시스템을 구축합니다.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCard category={category} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
