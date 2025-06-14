import React, { useState } from 'react';
import { ReactTerminal, TerminalContextProvider } from 'react-terminal';
import { useTranslation } from 'react-i18next';
import '../styles/nav-bar.css';
import terminal from '../assets/images/terminal-svgrepo-com.svg';
import LengSwitcher from './lengswitcher.js';
import { useSpring, animated } from '@react-spring/web';


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTerminal = () => {
    setShowTerminal(!showTerminal);
  };

  // Custom scroll logic for anchor links
  const smoothScrollToSection = (event, sectionId) => {
    event.preventDefault(); // Prevent the default anchor behavior
    const element = document.getElementById(sectionId);
    if (element) {
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      const viewportHeight = window.innerHeight;
      const elementHeight = element.offsetHeight;
      const yPosition = elementTop - (viewportHeight / 2) + (elementHeight / 2);
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  };

  // Define terminal commands
  const commands = {
    cd: (section) => {
      const element = document.getElementById(section);
      if (element) {
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        const viewportHeight = window.innerHeight;
        const elementHeight = element.offsetHeight;
        const yPosition = elementTop - (viewportHeight / 2) + (elementHeight / 2);
        window.scrollTo({ top: yPosition, behavior: 'smooth' });
        return `Navigating to ${section}`;
      } else {
        return `Section "${section}" not found.`;
      }
    },
    echo: (...args) => {
      const text = args.join(' ');
      return text || 'Please provide some text to echo!';
    },
    help: () => {
      return t('terminal_help_message');
    },
    exit: () => {
      toggleTerminal()
    },
  };

  const pulseWithGlow = useSpring({
    loop: { reverse: true },
    to: {
      transform: 'scale(1.1)',
      filter: 'drop-shadow(0 0 10px rgba(0, 255, 0, 0.7))', // Apply glowing effect around the shape
    },
    from: {
      transform: 'scale(1)',
      filter: 'drop-shadow(0 0 0px rgba(0, 255, 0, 0))',
    },
    config: { tension: 200, friction: 10 },
  });



  return (
    <div className="main-nav">
      <div className='logo'>
        ards.dev

      </div>
      <nav className={`navigation ${isOpen ? 'active' : ''}`}>
        {/* Update anchor tags to use smoothScrollToSection */}
        <p><a href="#experiencias" onClick={(e) => smoothScrollToSection(e, 'experiencias')}>{t('nav_experiencias')}</a></p>
        <p><a href="#about" onClick={(e) => smoothScrollToSection(e, 'about')}>{t('nav_about')}</a></p>
        <p><a href="#projects" onClick={(e) => smoothScrollToSection(e, 'projects')}>{t('nav_projects')}</a></p>
        <p><a href="#contact" onClick={(e) => smoothScrollToSection(e, 'contact')}>{t('nav_contact')}</a></p>
        <LengSwitcher />
      </nav>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>

      {showTerminal && (
        <div className="terminal-container">
          <TerminalContextProvider>
            <ReactTerminal
              welcomeMessage={t('terminal_welcome_message')}
              prompt="ards.dev> "
              commands={commands}
              themes={{
                "custom-theme": {
                  themeBGColor: "#1e1e1e",
                  themeToolbarColor: "#1e1e1e",
                  themeColor: "#ffffff",
                  themePromptColor: "#00ff00"
                }
              }}
              theme="custom-theme"
              errorMessage={t('terminal_error_message')}
            />
          </TerminalContextProvider>
        </div>
      )}
    </div>
  );
};

export default NavBar;
