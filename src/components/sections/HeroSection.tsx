'use client';

import { ChevronDownIcon, GitHubIcon, LinkedInIcon, EmailIcon, GlobeIcon } from '@/components/icons';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50
    }
  }
};

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-grid -z-10" />

      {/* Floating Orbs */}
      <div className="floating-orb"></div>
      <div className="floating-orb"></div>
      <div className="floating-orb"></div>

      <div className="max-w-6xl mx-auto px-6 py-32 w-full z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Area */}
          <div className="flex-1 lg:max-w-[60%] text-center lg:text-left order-2 lg:order-1">
            <motion.div variants={itemVariants} className="section-label justify-center lg:justify-start">
              Enterprise AI Solutions Architect
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
              <span className="gradient-text">금융·웹 엔터프라이즈 역량,</span>
              <br />
              <span className="text-zinc-800 dark:text-zinc-100">AI의 미래를 설계합니다</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg text-zinc-500 dark:text-zinc-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              금융·공공·클라우드 분야의 엔터프라이즈 역량을 AI/ML에 접목하여,<br className="hidden sm:block" /> 실무에 바로 적용 가능한 AI 솔루션을 만들어갑니다.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
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
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-5 justify-center lg:justify-start">
              <a
                href="https://github.com/daekwon00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-indigo-600 dark:text-zinc-500 dark:hover:text-indigo-400 transition-colors"
                aria-label="GitHub"
              >
                <div className="w-6 h-6"><GitHubIcon /></div>
              </a>
              <a
                href="https://www.linkedin.com/in/daekwon-yoo-1b3765170/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-indigo-600 dark:text-zinc-500 dark:hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <div className="w-6 h-6"><LinkedInIcon /></div>
              </a>
              <a
                href="mailto:yoosw00@gmail.com"
                className="text-zinc-400 hover:text-indigo-600 dark:text-zinc-500 dark:hover:text-indigo-400 transition-colors"
                aria-label="Email"
              >
                <div className="w-6 h-6"><EmailIcon /></div>
              </a>
              <a
                href="https://udksoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-indigo-600 dark:text-zinc-500 dark:hover:text-indigo-400 transition-colors"
                aria-label="UDKsoft"
              >
                <GlobeIcon className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0 order-1 lg:order-2"
          >
            <div className="profile-wrapper">
              <img
                src="/images/profile.png"
                alt="유대권 프로필"
                className="profile-img shadow-2xl dark:shadow-indigo-500/10"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
