
import '../styles/about-me.css'
import kubuntu from '../assets/images/kubuntu-svgrepo-com.svg';
import web from '../assets/images/web-svgrepo-com.svg';
import ai from '../assets/images/ai-solid-svgrepo-com.svg';
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
            <h2 className='interesses'>Interesses</h2>
          <div className='about-cards'>
            <CardComponent img={kubuntu} title={'Linux'} subtitle={`Kubuntu (Ubuntu com KDE nativo) é meu OS preferido para desenvolvimento.  atualmente uso um dualboot na minha máquina pessoal
              com Kubuntu & Windows 10.`}/>
          <CardComponent img={web} title={'Web Development'} subtitle={`Web development é minha princípal área de atuação. Tenho experiência com tecnologias modernas como React, Next.js e Tailwind, e foco em criar interfaces responsivas e dinâmicas.`}/>
          <CardComponent img={ai} title={'Inteligência Artificial'} subtitle={`Utilizo ferramentas de IA para otimizar e acelerar meu fluxo de trabalho no desenvolvimento web, aproveitando o poder dessas tecnologias para aprimorar a produtividade e a eficiência em meus projetos.`}/>
          </div>
        </div>
    </div>
  );
}

export default AboutPage;