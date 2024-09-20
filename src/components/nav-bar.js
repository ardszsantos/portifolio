import React, { useState } from 'react';
import { ReactTerminal } from 'react-terminal';
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

  const commands = {
    cd: (section) => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        return `Section "${section}" not found.`;
      }
    },
    help: () => 'Available commands: cd [section], help',
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
          <ReactTerminal
            commands={commands}
            welcomeMessage="Welcome to the terminal! Type 'help' to see available commands."
            prompt="ards.dev> "
          />
        </div>
      )}
    </div>
  );
}

export default NavBar;
