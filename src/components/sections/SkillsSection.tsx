import { skillsData } from '@/data/skills';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import SkillCard from '@/components/ui/SkillCard';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-[#06060a]">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionLabel>Skills</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">기술 스택</h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
