import '../styles/hero-page.css'
import GlassyBox from '../components/glassybox';

const HeroSection = () => {

  const greaterthan = '>'

  return (  
    <div id='hero' className="wrapper">
      <GlassyBox>
      <div className='text-container'>
          <h1><span> {greaterthan} Olá, sou Alexandre <br /> Rodrigues</span> 👋 </h1>
          <p> Desenvolvedor com foco em Front End apaixonado<br /> por criar  
          soluções inovadoras e eficientes.</p>
        <button>Saiba Mais</button>
      </div>
      <div className=''>
        
      </div>
      </GlassyBox>
    </div>
  );
}

export default HeroSection;