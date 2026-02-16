import { roadmapData, type RoadmapStatus } from '@/data/roadmap';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';

const statusConfig: Record<RoadmapStatus, { label: string; badgeClass: string; borderClass: string }> = {
  completed: {
    label: 'COMPLETED',
    badgeClass: 'roadmap-badge-completed',
    borderClass: 'border-zinc-200',
  },
  progress: {
    label: 'IN PROGRESS',
    badgeClass: 'roadmap-badge-progress',
    borderClass: 'border-indigo-500/20',
  },
  planned: {
    label: 'PLANNED',
    badgeClass: 'roadmap-badge-planned',
    borderClass: 'border-zinc-200',
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmapData.map((phase) => {
              const config = statusConfig[phase.status];

              return (
                <div key={phase.phase} className="roadmap-step">
                  <div className={`bg-white border ${config.borderClass} rounded-xl p-6 h-full`}>
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
                    <p className="text-sm text-zinc-500">{phase.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
