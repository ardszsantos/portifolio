import GlassyBox from '../components/glassybox';
import '../styles/about-me.css'

const AboutPage = () => {
  return (  
    <div id='about' className='wrapper-two'>
      <GlassyBox>
        <div className='about-container'>
          <p>Sobre Mim</p>
        </div>
      </GlassyBox>
    </div>
  );
}

export default AboutPage;