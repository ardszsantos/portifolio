import './App.css';
import NavBar from './components/nav-bar';
import HeroSection from './pages/hero-page';
import AboutPage from './pages/about-me';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <AboutPage />
    </div>
  );
}

export default App;
