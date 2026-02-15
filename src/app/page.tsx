import ScrollProgress from '@/components/layout/ScrollProgress';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import JourneySection from '@/components/sections/JourneySection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import RoadmapSection from '@/components/sections/RoadmapSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <ProjectsSection />
      <SkillsSection />
      <RoadmapSection />
      <ContactSection />
      <Footer />
    </>
  );
}
