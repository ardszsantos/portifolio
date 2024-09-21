import GlassyBox from '../components/glassybox';
import '../styles/about-me.css'

import info from '../assets/images/info-svgrepo-com.svg'

const AboutPage = () => {

  const greaterthan = '>'

  return (  
    <div id='about' className='wrapper-two'>
      <GlassyBox>
        <div className='about-container'>
          <h1> {greaterthan} sobre mim_</h1>
          <div className='about-p'>
            <p>Tenho 18 anos, e sou completamente apaixonado por código. Apesar do meu foco atual em <span className='front-span'>front-end</span> , tenho como <br/>
              objetivo me tornar um desenvolvedor <span className='fullstack-span'>fullstack</span>. Além do web-development, tenho experiência com automatização  <br/>
              de processos com <span className='python-span'>python</span> e Análise de dados.
            </p>
          </div>
          <div className='about-cards'>
            <h2>Interesses</h2>
          </div>
        </div>
      </GlassyBox>
    </div>
  );
}

export default AboutPage;