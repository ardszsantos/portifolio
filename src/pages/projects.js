import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/projectCard';
import '../styles/projects.css'
import camisasTop from '../assets/images/ecommerce.png'
import { MdOutlineWebAssetOff, MdOutlineWebAsset } from "react-icons/md";
import { techIcons1, techIcons2, techIcons3, iconColors1, iconColors2, iconColors3, techIcons4, iconColors4, techIcons5, iconColors5, techIcons6, iconColors6 } from '../components/techStack';
import opencvImg from '../assets/images/OPENCV.png'
import santeLogo from '../assets/images/santelogo.svg'
import urlShortner from '../assets/images/urlShortner.png'
import painelCorinthians from '../assets/images/painel.png'
import presentationImg from '../assets/images/presentationImg.png'
import cTrouble from '../assets/images/ctroublesmLogo.png'
import toqAI from '../assets/images/toqFavIcon.svg'


const ProjectsSection = (props) => {
  const { t } = useTranslation();
  const noWebIcon = <MdOutlineWebAssetOff />;
  const webIcon = <MdOutlineWebAsset />;
  const project1GitUrl = 'https://github.com/ardszsantos/ecommerce-store';
  const project2GitUrl = 'https://github.com/code-trouble/SD.Code-Trouble.Frontend';
  const project3GitUrl = 'https://github.com/suporte-de-domingo/clinica-sante-landpage';
  const project4GitUrl = 'https://github.com/ardszsantos/urlShortner-front/tree/production';
  const project5GitUrl = 'https://github.com/ardszsantos/painel-corinthians';
  const project6GitUrl = 'https://github.com/Toque-AI/toque-ai-landpage';
  const project1Demo = 'https://ecommerce-store-fredaobobs-projects.vercel.app/';
  const project2Demo = 'https://codetrouble.com.br/';
  const project3Demo = 'https://clinicasantesp.com.br/';
  const project4Demo = 'https://urlshortner-front.onrender.com/';
  const project5Demo = 'https://painel-corinthians.vercel.app/';
  const project6Demo = 'https://toqueai.com.br/';

  return (
    <div {...props} id='projects' className="projects-wrapper">
      <div id='projetos' className='projects-sub-wrapper'>
        <h1 >{t('projects_title')}</h1>
        <div className="projects-group">
          <div className="projects-container">
            <ProjectCard
              imgUrl={camisasTop}
              title={t('project1_title')}
              description={t('project1_description')}
              detailedDescription={t('project1_detailed_description')}
              iconComponent={webIcon}
              gitUrl={project1GitUrl}
              pageUrl={project1Demo}
              techIcons={techIcons1}
              iconColors={iconColors1}
              date={'07/24'}
            />

            <ProjectCard
              imgUrl={cTrouble}
              title={t('project2_title')}
              description={t('project2_description')}
              detailedDescription={t('project2_detailed_description')}
              iconComponent={webIcon}
              gitUrl={project2GitUrl}
              pageUrl={project2Demo}
              techIcons={techIcons2}
              iconColors={iconColors2}
              date={'06/23'}
            />

            <ProjectCard
              imgUrl={santeLogo}
              title={t('project3_title')}
              description={t('project3_description')}
              detailedDescription={t('project3_detailed_description')}
              iconComponent={webIcon}
              gitUrl={project3GitUrl}
              pageUrl={project3Demo}
              techIcons={techIcons3}
              iconColors={iconColors3}
              date={'03/25'}
            />
          </div>
          <div className="projects-container">
            <ProjectCard
              imgUrl={urlShortner}
              title={t('project4_title')}
              description={t('project4_description')}
              detailedDescription={t('project4_detailed_description')}
              iconComponent={webIcon}
              gitUrl={project4GitUrl}
              pageUrl={project4Demo}
              techIcons={techIcons4}
              iconColors={iconColors4}
              date={'10/24'}
            />

            <ProjectCard
              imgUrl={painelCorinthians}
              title={t('project5_title')}
              description={t('project5_description')}
              detailedDescription={t('project5_detailed_description')}
              iconComponent={webIcon}
              gitUrl={project5GitUrl}
              pageUrl={project5Demo}
              techIcons={techIcons5}
              iconColors={iconColors5}
              date={'05/24'}
            />

            <ProjectCard
              imgUrl={toqAI}
              title={t('project6_title')}
              description={t('project6_description')}
              detailedDescription={t('project6_detailed_description')}
              iconComponent={webIcon}
              gitUrl={project6GitUrl}
              pageUrl={project6Demo}
              techIcons={techIcons6}
              iconColors={iconColors6}
              date={'06/25'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
