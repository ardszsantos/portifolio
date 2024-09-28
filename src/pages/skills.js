import { t } from 'i18next';
import '../styles/skills.css';
import { FaDocker, FaAws, FaGit, FaNodeJs, FaReact, FaHtml5, FaCss3, FaJs, FaServer, FaCogs } from 'react-icons/fa';
import { SiTailwindcss, SiGraphql, SiPostgresql, SiMongodb, SiPrisma } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

const SkillsSection = (props) => {
  const { t } = useTranslation(); 

  return (
    <div {...props} id='habilidades' className='wrapper-three'>
      <div id='skills' className='container'>
        <h1>  {t('skills_title')}</h1>
        <div className="skills-desc">
          <div className="stack1">
            <h2 className='rotate border-title devops'>Devops</h2>
            <div className='skill-list'>
              <p><FaDocker /> Docker</p>
              <p><FaAws /> AWS</p>
              <p><FaServer /> Nginx</p>
              <p><FaGit /> Git</p>
              <p><FaServer /> Server Management</p>
              <p><FaCogs /> Automation</p>
            </div>
          </div>
          <div className="stack2">
            <h2 className='rotate border-title front'>Frontend </h2>
            <div className='skill-list'>
              <p><FaReact /> React.js</p>
              <p><SiTailwindcss /> Tailwind CSS</p>
              <p><FaHtml5 /> HTML5</p>
              <p><FaCss3 /> CSS3</p>
              <p><FaJs /> JavaScript (ES6+)</p>
              <p><FaCogs /> Responsive Design</p>
            </div>
          </div>
          <div className="stack3">
            <h2 className='rotate border-title  back'>Backend</h2>
            <div className='skill-list'>
              <p><FaNodeJs /> Node.js</p>
              <p><FaCogs /> REST APIs</p>
              <p><SiGraphql /> GraphQL</p>
              <p><SiPrisma /> Prisma</p>
              <p><SiPostgresql /> SQL </p>
              <p><SiMongodb /> MongoDB (NoSQL)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
