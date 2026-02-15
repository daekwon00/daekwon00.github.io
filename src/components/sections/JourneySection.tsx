import { timelineData } from '@/data/timeline';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';

export default function JourneySection() {
  return (
    <section id="journey" className="py-24 bg-[#06060a]">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionLabel>Journey</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">경력 여정</h2>
        </ScrollReveal>

        <div className="timeline max-w-3xl">
          {timelineData.map((item) => (
            <ScrollReveal key={item.period}>
              <div className={`timeline-item ${item.isCurrent ? 'current' : ''}`}>
                <div className="text-sm font-semibold text-indigo-400 mb-1">{item.period}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-zinc-400">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
