import './App.css';
import NavBar from './components/nav-bar';
import HeroSection from './pages/hero-page';
import AboutSection from './pages/about-me';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ProjectsSection from './pages/projects';
import ContactSection from './pages/MUIcontact';
import Footer from './pages/MUIfooter';


function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // You can customize the duration (ms)
  }, []);

  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <AboutSection data-aos="fade-right"/>
      <ProjectsSection data-aos="fade-right"/>
      <ContactSection data-aos="fade-right" />
      <Footer/>
    </div>
  );
}

export default App;
