import { roadmapData, type RoadmapStatus } from '@/data/roadmap';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';

const statusConfig: Record<RoadmapStatus, { label: string; badgeClass: string; borderClass: string }> = {
  completed: {
    label: 'COMPLETED',
    badgeClass: 'roadmap-badge-completed',
    borderClass: 'border-white/5',
  },
  progress: {
    label: 'IN PROGRESS',
    badgeClass: 'roadmap-badge-progress',
    borderClass: 'border-indigo-500/20',
  },
  planned: {
    label: 'PLANNED',
    badgeClass: 'roadmap-badge-planned',
    borderClass: 'border-white/5',
  },
};

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionLabel>Roadmap</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">학습 로드맵</h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-col md:flex-row gap-6 md:gap-0">
            {roadmapData.map((phase, idx) => {
              const config = statusConfig[phase.status];
              const isLast = idx === roadmapData.length - 1;

              return (
                <div key={phase.phase} className="roadmap-step flex-1 relative">
                  <div className={`bg-white/[0.03] border ${config.borderClass} rounded-xl p-6`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-zinc-500">
                        Phase {phase.phase}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-semibold ${config.badgeClass}`}
                      >
                        {config.label}
                      </span>
                    </div>
                    <h3 className="font-bold mb-2">{phase.title}</h3>
                    <p className="text-sm text-zinc-400">{phase.description}</p>
                  </div>
                  {!isLast && <div className="roadmap-connector hidden md:block"></div>}
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
