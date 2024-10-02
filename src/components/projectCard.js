import '../styles/projectCard.css'
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ imgUrl, title, description, iconComponent, gitUrl, pageUrl }) => {
  return (  
    <div className='projectCardContainer'>
      <img src={imgUrl} alt={title || 'Project Image'} />
      <div className="CardTextWrapper">
        <div className='upper-card'> 
          <h2>{title}</h2>
          <p>20xx - 20xx</p>
        </div>
        <p>{description}</p>
        <div className='project-info'>
          <a href={pageUrl} target='_blank'>Demo {iconComponent}</a>
          <a href={gitUrl} target='_blank'>Repo <FaGithub /></a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard

