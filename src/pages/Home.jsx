import StarBackground from '../components/StarBackground';
import ThemeToggle from '../components/ThemeToggle';

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      Home
      {/* ************* THEME TOGGLE ************* */}
      <ThemeToggle />
      {/* ************* BACKGROUND EFFECTS ************* */}
      <StarBackground />
      {/* ************* NAVBAR ************* */}
      {/* ************* MAIN CONTENT ************* */}
      {/* ************* FOOTER ************* */}
    </div>
  );
};

export default Home;
