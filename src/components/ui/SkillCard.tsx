import type { SkillCategory } from '@/data/skills';
import { getSkillIcon } from '@/components/icons';
import SkillTag from './SkillTag';
import ScrollReveal from './ScrollReveal';

export default function SkillCard({ category }: { category: SkillCategory }) {
  const Icon = getSkillIcon(category.iconKey);

  return (
    <ScrollReveal>
      <div className="skill-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
            <Icon />
          </div>
          <h3 className="font-bold">{category.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {category.tags.map((tag) => (
            <SkillTag key={tag}>{tag}</SkillTag>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
