import './App.css';
import NavBar from './components/nav-bar';
import HeroSection from './pages/hero-page';
import AboutSection from './pages/about-me';
import SkillsSection from './pages/skills';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // You can customize the duration (ms)
  }, []);

  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <AboutSection data-aos="fade-right"/>
      <SkillsSection data-aos="fade-left"/>
    </div>
  );
}

export default App;
