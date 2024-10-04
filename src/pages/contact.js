import { FaWhatsapp, FaEnvelope, FaInstagram, FaDiscord } from 'react-icons/fa';
import '../styles/contact.css';

const ContactSection = (props) => {
  return (
    <div {...props} id='contact' className="contact-section">
      <div id='contato' className="contact-info">
      <div className="contact-title">Get in Touch</div>
        <a href="https://wa.me/5511998701122" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={24} />
          <span>11 99870-1122</span>
        </a>
        <a href="mailto:alexandrerdrsantos01@gmail.com">
          <FaEnvelope size={24} />
          <span>alexandrerdrsantos01@gmail.com</span>
        </a>
        <a href="#your-instagram-link">
          <FaInstagram size={24} />
          <span>Instagram (add later)</span>
        </a>
        <a href="#your-discord-link">
          <FaDiscord size={24} />
          <span>Discord (add later)</span>
        </a>
      </div>

      <form className="contact-form">
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactSection;
