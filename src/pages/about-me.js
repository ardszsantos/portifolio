
import '../styles/about-me.css'
import kubuntu from '../assets/images/kubuntu-svgrepo-com.svg';
import CardComponent from '../components/card';

const AboutPage = () => {

  const greaterthan = '>'

  return (  
    <div id='about' className='wrapper-two'>
        <div className='about-container'>
          <h1> {greaterthan} sobre mim_</h1>
          <div className='about-p'>
            <p>Tenho 18 anos, e sou completamente apaixonado por código. Apesar do meu foco atual em <span className='front-span'>front-end</span> , tenho como <br/>
              objetivo me tornar um desenvolvedor <span className='fullstack-span'>fullstack</span>. Além do web-development, tenho experiência com automatização  <br/>
              de processos com <span className='python-span'>python</span> e Análise de dados.
            </p>
          </div>
            <h2>Interesses</h2>
          <div className='about-cards'>
            <CardComponent img={kubuntu} title={'Linux'} subtitle={`Kubuntu (Ubuntu com KDE nativo) é meu OS preferido para desenvolvimento.  atualmente uso um dualboot na minha máquina pessoal
              com Kubuntu & Windows 10.`}/>
            <CardComponent img={kubuntu} title={'Linux'} subtitle={`Kubuntu (Ubuntu com KDE nativo) é meu OS preferido para desenvolvimento.  atualmente uso um dualboot na minha máquina pessoal
              com Kubuntu & Windows 10.`}/>
            <CardComponent img={kubuntu} title={'Linux'} subtitle={`Kubuntu (Ubuntu com KDE nativo) é meu OS preferido para desenvolvimento.  atualmente uso um dualboot na minha máquina pessoal
              com Kubuntu & Windows 10.`}/>
          </div>
        </div>
    </div>
  );
}

export default AboutPage;