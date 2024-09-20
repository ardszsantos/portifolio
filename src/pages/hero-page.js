import '../styles/hero-page.css'
import GlassyBox from '../components/glassybox';

const HeroSection = () => {
  return (  
    <div className="wrapper">
      <GlassyBox>
      <div className='text-container'>
        <h1>Alexandre <br/> Rodrigues</h1>
        <p>Desenvolvedor com foco em Front End apaixonado<br /> por criar  
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