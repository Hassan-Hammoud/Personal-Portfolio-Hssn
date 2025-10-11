import Navbar from '../components/Navbar';
import StarBackground from '../components/StarBackground';
import ThemeToggle from '../components/ThemeToggle';

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
      {/* ************* FOOTER ************* */}
    </div>
  );
};

export default Home;
