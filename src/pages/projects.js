import ProjectCard from '../components/projectCard';
import '../styles/projects.css'
import robot from '../assets/images/robot.jpg'


const ProjectsSection = ({
  imgUrl,
  title,
  description
}) => {
  return (  
    <div className="projects-wrapper">
      <h1>Projects</h1>
      <ProjectCard imgUrl={robot}/>
      <ProjectCard/>
      <ProjectCard/>
    </div>
  );
}

export default ProjectsSection