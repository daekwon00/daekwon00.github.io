import { ChevronDownIcon, GitHubIcon, LinkedInIcon, EmailIcon, GlobeIcon } from '@/components/icons';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center dot-grid overflow-hidden">
      {/* Floating Orbs */}
      <div className="floating-orb"></div>
      <div className="floating-orb"></div>
      <div className="floating-orb"></div>

      <div className="max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Area */}
          <div className="flex-1 lg:max-w-[60%] text-center lg:text-left">
            <div className="section-label justify-center lg:justify-start">
              Enterprise AI Solutions Architect
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight mb-6">
              <span className="gradient-text">금융·웹 엔터프라이즈 역량,</span>
              <br />
              <span className="text-zinc-800">AI의 미래를 설계합니다</span>
            </h1>
            <p className="text-lg text-zinc-500 mb-8 max-w-xl mx-auto lg:mx-0">
              금융·공공·클라우드 분야의 엔터프라이즈 역량을 AI/ML에 접목하여, 실무에 바로 적용
              가능한 AI 솔루션을 만들어갑니다.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a href="#projects" className="btn-primary">
                프로젝트 보기
                <ChevronDownIcon />
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
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 justify-center lg:justify-start">
              <a
                href="https://github.com/daekwon00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-indigo-600 transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/daekwon-yoo-1b3765170/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-indigo-600 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="mailto:yoosw00@gmail.com"
                className="text-zinc-400 hover:text-indigo-600 transition-colors"
                aria-label="Email"
              >
                <EmailIcon />
              </a>
              <a
                href="https://udksoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-indigo-600 transition-colors"
                aria-label="UDKsoft"
              >
                <GlobeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="profile-wrapper">
              <img
                src="/images/profile.png"
                alt="유대권 프로필"
                className="profile-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
