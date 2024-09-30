import '../styles/contact.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <ul className="contact-list">
            <li>
              <a href="mailto:ardszsantos@gmail.com">
                <FaEnvelope /> Email
              </a>
            </li>
            <li>
              <a href="https://github.com/ardszsantos" target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/alexandre-rodrigues-47660027b/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <span>
                <FaDiscord /> Discord: ale.devv
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
