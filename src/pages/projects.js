import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/projectCard';
import '../styles/projects.css'
import camisasTop from '../assets/images/ecommerce.png'
import camisasTopA from '../assets/images/ecommerce2.png'
import { MdOutlineWebAssetOff, MdOutlineWebAsset } from "react-icons/md";
import { techIcons1, techIcons2, techIcons3, iconColors1, iconColors2, iconColors3, techIcons4, iconColors4, techIcons5, iconColors5, techIcons6, iconColors6 } from '../components/techStack';
import opencvImg from '../assets/images/OPENCV.png'
import dueljj from '../assets/images/duelljjCUstom.png'
import terminalEmul from '../assets/images/terminal.png'
import presentationImg from '../assets/images/presentationImg.png'
import aluraLanding from '../assets/images/aluraLanding.png'

const ProjectsSection = (props) => {
  const { t } = useTranslation();
  const noWebIcon = <MdOutlineWebAssetOff />;
  const webIcon = <MdOutlineWebAsset />;
  const project1GitUrl = 'https://github.com/ardszsantos/ecommerce-store';
  const project2GitUrl = 'https://github.com/ardszsantos/aluralivros';
  const project3GitUrl = 'https://github.com/ardszsantos/CV-Macro';
  const project4GitUrl = 'https://github.com/ardszsantos/dueljj-custom';
  const project5GitUrl = 'https://github.com/ardszsantos/terminal-html';
  const project6GitUrl = 'https://github.com/ardszsantos/presentation-page';
  const project1Demo = 'https://fredbola.com.br';
  const project2Demo = 'https://ardszsantos.github.io/aluralivros/';
  const project5Demo = 'https://ardszsantos.github.io/terminal-html/';
  const project6Demo = 'https://ardszsantos.github.io/presentation-page/';

  return (
    <div {...props} id='projects' className="projects-wrapper">
      <div className='projects-sub-wrapper'>
        <h1 id='projetos'>{t('projects_title')}</h1>
        <div className="projects-group">
          <div className="projects-container">
            <ProjectCard
              imgUrl={camisasTop}
              title={t('project1_title')}
              description={t('project1_description')}
              iconComponent={webIcon}
              gitUrl={project1GitUrl}
              pageUrl={project1Demo}
              techIcons={techIcons1}
              iconColors={iconColors1}
            />
            <ProjectCard
              imgUrl={aluraLanding}
              title={t('project2_title')}
              description={t('project2_description')}
              iconComponent={webIcon}
              gitUrl={project2GitUrl}
              pageUrl={project2Demo}
              techIcons={techIcons2}
              iconColors={iconColors2}
            />
            <ProjectCard
              imgUrl={opencvImg}
              title={t('project3_title')}
              description={t('project3_description')}
              iconComponent={noWebIcon}
              gitUrl={project3GitUrl}
              techIcons={techIcons3}
              iconColors={iconColors3}
            />
          </div>
          <div className="projects-container">
            <ProjectCard
              imgUrl={dueljj}
              title={t('project4_title')}
              description={t('project4_description')}
              iconComponent={noWebIcon}
              gitUrl={project4GitUrl}
              techIcons={techIcons4}
              iconColors={iconColors4}
            />
            <ProjectCard
              imgUrl={terminalEmul}
              title={t('project5_title')}
              description={t('project5_description')}
              iconComponent={webIcon}
              gitUrl={project5GitUrl}
              pageUrl={project5Demo}
              techIcons={techIcons5}
              iconColors={iconColors5}
            />
            <ProjectCard
              imgUrl={presentationImg}
              title={t('project6_title')}
              description={t('project6_description')}
              iconComponent={webIcon}
              gitUrl={project6GitUrl}
              pageUrl={project6Demo}
              techIcons={techIcons6}
              iconColors={iconColors6}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
