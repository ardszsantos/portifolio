import '../styles/hero-page.css'

const HeroSection = () => {

  const greaterthan = '>'

  return (  
    <div id='hero' className="wrapper">

      <div className='text-container'>
        <h1><span> Olá, sou <br /> {greaterthan} Alexandre  Rodrigues</span> 👋 </h1>
          <p> Desenvolvedor com foco em Front End apaixonado<br /> por criar  
          soluções inovadoras e eficientes.</p>
        <button>Saiba Mais</button>
      </div>
      <div className=''>
        
      </div>
      
    </div>
  );
}

export default HeroSection;