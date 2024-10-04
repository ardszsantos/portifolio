import './App.css';
import NavBar from './components/nav-bar';
import HeroSection from './pages/hero-page';
import AboutSection from './pages/about-me';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ProjectsSection from './pages/projects';
import ContactSection from './pages/contact';


function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // You can customize the duration (ms)
  }, []);

  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <AboutSection data-aos="fade-right"/>
      <ProjectsSection data-aos="fade-up"/>
      <ContactSection data-aos="fade-left" />
    </div>
  );
}

export default App;
