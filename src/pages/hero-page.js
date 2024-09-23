import IconMarquee from '../components/slide';
import '../styles/hero-page.css'

const HeroSection = () => {

  const greaterthan = '>'

  return (  
    <div id='hero' className="wrapper">
      <div className='text-container'>
        <h1> Olá, sou <br /> <span className='great-span'> {greaterthan}</span> <span className='ale-span'> Alexandre  Rodrigues</span> 👋 </h1>
        <p> Desenvolvedor Front End apaixonado por criar
          soluções inovadoras e eficientes.</p>
      </div>

  
      <div className='billboard'>
        <IconMarquee/>
      </div>
    </div>

  );
}

export default HeroSection;