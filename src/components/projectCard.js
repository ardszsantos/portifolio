import '../styles/projectCard.css'

const ProjectCard = ({ imgUrl, title, description }) => {
  return (  
    <div className='projectCardContainer'>
      <img src={imgUrl} alt={title || 'Project Image'} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard