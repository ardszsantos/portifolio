import './App.css';
import NavBar from './components/nav-bar';
import HeroSection from './pages/hero-page';
import AboutSection from './pages/about-me';
import SkillsSection from './pages/skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <SkillsSection/>
    </div>
  );
}

export default App;
