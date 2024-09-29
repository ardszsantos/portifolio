import ProjectCard from '../components/projectCard';
import '../styles/projects.css'
import robot from '../assets/images/robot.jpg'
import ProjectCardReverse from '../components/ReverseProjectCard';


const ProjectsSection = (props) => {
  return (  
    <div {...props} className="projects-wrapper">
      <h1>Projects</h1>
      <ProjectCard imgUrl={robot} title={'FullStack Ecommerce store'} description={`Fullstack app made with NextJS, tailwindCSS and neonDb
        this project consists in 2 full-stack apps, an admin dashboard and the store itself.`}/>
      <ProjectCardReverse imgUrl={robot} title={'FullStack Ecommerce store'} description={`Fullstack app made with NextJS, tailwindCSS and neonDb
        this project consists in 2 full-stack apps, an admin dashboard and the store itself.`} />
      <ProjectCard imgUrl={robot} title={'FullStack Ecommerce store'} description={`Fullstack app made with NextJS, tailwindCSS and neonDb
        this project consists in 2 full-stack apps, an admin dashboard and the store itself.`}/>
      <ProjectCardReverse imgUrl={robot} title={'FullStack Ecommerce store'} description={`Fullstack app made with NextJS, tailwindCSS and neonDb
        this project consists in 2 full-stack apps, an admin dashboard and the store itself.`} />
    </div>
  );
}

export default ProjectsSection