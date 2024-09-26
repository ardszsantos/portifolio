import React, {  useState } from 'react';
import { ReactTerminal, TerminalContextProvider } from 'react-terminal';
import { useTranslation } from 'react-i18next';
import '../styles/nav-bar.css';
import terminal from '../assets/images/terminal-svgrepo-com.svg';
import LengSwitcher from './lengswitcher.js';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const { t } = useTranslation(); // Hook to access translations


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTerminal = () => {
    setShowTerminal(!showTerminal);
  };

  // Define commands
  const commands = {
    cd: (section, secao) => {
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
    }
  };

  return (
    <div className="main-nav">
      <div className='logo'>
        ards.dev
        <img src={terminal} alt="Terminal icon" onClick={toggleTerminal} />
      </div>
      <nav className={`navigation ${isOpen ? 'active' : ''}`}>
        <p><a href="#about">{t('nav_about')}</a></p>
        <p><a href="#skills">{t('nav_skills')}</a></p>
        <p><a href="#projects">{t('nav_projects')}</a></p>
        <p><a href="#contact">{t('nav_contact')}</a></p>
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
