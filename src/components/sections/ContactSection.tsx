import { EmailIcon, GitHubIcon, LinkedInIcon, GlobeIcon } from '@/components/icons';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <ScrollReveal>
          <SectionLabel center>Contact</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            함께 일할 기회를 찾고 있습니다
          </h2>
          <p className="text-zinc-500 mb-10 max-w-lg mx-auto">
            AI 프로젝트 협업, 기술 상담, 또는 채용 관련 문의를 환영합니다. 아래 채널을 통해
            편하게 연락해주세요.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:yoosw00@gmail.com" className="btn-primary">
              <EmailIcon />
              이메일 보내기
            </a>
            <a
              href="https://github.com/daekwon00"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <GitHubIcon />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/daekwon-yoo-1b3765170/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              href="https://udksoft.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <GlobeIcon className="w-5 h-5" />
              UDKsoft
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
