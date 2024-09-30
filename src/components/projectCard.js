import '../styles/projectCard.css'

const ProjectCard = ({ imgUrl, title, description }) => {
  return (  
    <div className='projectCardContainer'>
      <img src={imgUrl} alt={title || 'Project Image'} />
      <div class="CardTextWrapper">
        <div className='upper-card'> 
          <h2>{title}</h2>
          <p>20xx - 20xx</p>
        </div>
        <p>{description}</p>
        <div className='project-info'>

        </div>
      </div>
    </div>
  );
}

export default ProjectCard

