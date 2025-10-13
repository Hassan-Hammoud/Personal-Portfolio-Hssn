import AboutSection from '../components/AboutSection';
import Navbar from '../components/Navbar';
import ProjectsSection from '../components/ProjectsSection';
import StarBackground from '../components/StarBackground';
import ThemeToggle from '../components/ThemeToggle';
import HeroSection from './../components/HeroSection';
import SkillsSections from './../components/SkillsSections';

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      {/* ************* THEME TOGGLE ************* */}
      <ThemeToggle />
      {/* ************* BACKGROUND EFFECTS ************* */}
      <StarBackground />
      {/* ************* NAVBAR ************* */}
      <Navbar />
      {/* ************* MAIN CONTENT ************* */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSections />
        <ProjectsSection />
      </main>
      {/* ************* FOOTER ************* */}
    </div>
  );
};

export default Home;
