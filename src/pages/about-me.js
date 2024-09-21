import GlassyBox from '../components/glassybox';
import '../styles/about-me.css'

import info from '../assets/images/info-svgrepo-com.svg'

const AboutPage = () => {
  return (  
    <div id='about' className='wrapper-two'>
      <GlassyBox>
        <div className='about-container'>
          <h1> > sobre mim_</h1>

        </div>
            <p>18 anos, </p>
      </GlassyBox>
    </div>
  );
}

export default AboutPage;