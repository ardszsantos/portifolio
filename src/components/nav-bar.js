import React, { useState } from 'react';
import { ReactTerminal, TerminalContextProvider } from 'react-terminal';
import '../styles/nav-bar.css';
import terminal from '../assets/images/terminal-svgrepo-com.svg';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTerminal = () => {
    setShowTerminal(!showTerminal);
  };

  // Define commands
  const commands = {
    cd: (section) => {
      const element = document.getElementById(section);
      console.log(element)
      if (element) {
        // Manually calculate the scroll position with an offset for the sticky navbar
        const yOffset = -190; // Adjust this value to the height of your sticky navbar
        const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
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
      return 'Available commands: cd [section], echo [text], help, clear';
    }
  };

  return (
    <div className="main-nav">
      <div className='logo'>
        ards.dev
        <img src={terminal} alt="Terminal icon" onClick={toggleTerminal} />
      </div>
      <nav className={`navigation ${isOpen ? 'active' : ''}`}>
        <p><a href="#sobre" id="sobre">Sobre</a></p>
        <p><a href="#habilidades" id="habilidades">Habilidades</a></p>
        <p><a href="#projetos" id="projetos">Projetos</a></p>
        <p><a href="#contato" id="contato">Contato</a></p>
      </nav>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>

      {showTerminal && (
        <div className="terminal-container">
          <TerminalContextProvider>
            <ReactTerminal
              welcomeMessage="Welcome to the terminal! Type 'help' to see available commands."
              prompt="ards.dev> "
              commands={commands}
              errorMessage={"Command not found!"}
            />
          </TerminalContextProvider>
        </div>
      )}
    </div>
  );
};

export default NavBar;
