import { BsDiscord, BsGithub, BsWhatsapp } from 'react-icons/bs';
import '../styles/contact.css';
import { GiMailbox } from 'react-icons/gi';
import { ImInstagram } from 'react-icons/im';

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div class="contact-information">
        <h2>> Contact_</h2>
        <p className='muted'>get in touch with me</p>
        <div className='contact-ways'>
          <div class="way">
            <BsWhatsapp />
            <p>+55 11 99870-1122</p> 
          </div>
          <div class="way">
            <GiMailbox />
            <p>alexandrerdrsantos01@gmail.com</p>
          </div>
        </div>  
        <div class="socials">
          <div class="social-icon"> <ImInstagram/> </div>
          <div class="social-icon"> <BsDiscord/> </div>
          <div class="social-icon"> <BsGithub/> </div>
        </div>
      </div>
      <div class="contact-field">

      </div>
    </div>
  );
};

export default ContactSection;
