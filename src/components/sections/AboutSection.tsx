import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionLabel>About</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">소개</h2>
          <div className="max-w-3xl">
            <p className="text-lg text-zinc-500 leading-relaxed mb-6">
              1997년 삼성전기 통신연구소에서 개발 커리어를 시작하여, 모토로라코리아 CDMA 개발, 자체
              경매 플랫폼 운영, 3D 프린터 시스템/영상처리, 그리고 신한은행·우리은행·미래에셋 등
              금융권 프로젝트까지 다양한 도메인에서 29년간 현장 경험을 쌓아왔습니다.
            </p>
            <p className="text-lg text-zinc-500 leading-relaxed">
              2026년부터 AI/ML 개발로의 전환을 시작하여, PyTorch, LangChain RAG, AI Agent 개발에
              집중하고 있습니다. 통신, 임베디드, 웹, 금융 등 폭넓은 엔터프라이즈 역량과 AI 기술을
              결합하여, 실무에 즉시 적용 가능한 AI 솔루션을 만들어가고 있습니다.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
