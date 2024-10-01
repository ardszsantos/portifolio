import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/projectCard';
import '../styles/projects.css'
import camisasTop from '../assets/images/ecommerce.png'
import camisasTopA from '../assets/images/ecommerce2.png'
import ProjectDescription from '../components/projectDesc';

import { techIcons1, techIcons2, iconColors1, iconColors2 } from '../components/techStack';

const ProjectsSection = (props) => {
  const { t } = useTranslation();

  return (
    <div {...props} id='projects' className="projects-wrapper">
        <div className='projects-sub-wrapper'>
        <h1 id='projetos'>{t('projects_title')}</h1> 
        <div class="projects-group">
          <div class="projects-container">
            <ProjectCard
              imgUrl={camisasTop}
              title={t('project1_title')}
              description={t('project1_description')}
            />
            <ProjectCard
              imgUrl={camisasTopA}
              title={t('project2_title')}
              description={t('project2_description')}
            />
          </div>
          <div class="tech-stack-container">
            <ProjectDescription
              icons={techIcons1}
              iconColors={iconColors1}
            />
            <ProjectDescription
              icons={techIcons2}
              iconColors={iconColors2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
