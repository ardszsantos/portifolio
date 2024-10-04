import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/projectCard';
import '../styles/projects.css'
import camisasTop from '../assets/images/ecommerce.png'
import camisasTopA from '../assets/images/ecommerce2.png'
import ProjectDescription from '../components/projectDesc';
import { MdOutlineWebAssetOff, MdOutlineWebAsset } from "react-icons/md";
import { techIcons1, techIcons2, techIcons3, iconColors1, iconColors2, iconColors3 } from '../components/techStack';
import opencvImg from '../assets/images/OPENCV.png'

const ProjectsSection = (props) => {
  const { t } = useTranslation();
  const noWebIcon = <MdOutlineWebAssetOff />
  const webIcon = <MdOutlineWebAsset />
  const project1GitUrl = 'https://github.com/ardszsantos/ecommerce-store'
  const project2GitUrl = 'https://github.com/ardszsantos/ecommerce-admin'
  const project1Demo = 'https://fredbola.com.br'


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
            />
            <ProjectCard
              imgUrl={camisasTopA}
              title={t('project2_title')}
              description={t('project2_description')}
              iconComponent={noWebIcon}
              gitUrl={project2GitUrl}
            />
            <ProjectCard
              imgUrl={opencvImg}
              title={t('project3_title')}
              description={t('project3_description')}
              iconComponent={noWebIcon}
              gitUrl={project2GitUrl}
            />
          </div>
          <div className="tech-stack-container">
            <ProjectDescription
              icons={techIcons1}
              iconColors={iconColors1}
              
            />
            <ProjectDescription
              icons={techIcons2}
              iconColors={iconColors2}
            />
            <ProjectDescription
              icons={techIcons3}
              iconColors={iconColors3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
