import '../styles/ReverseProjectCard.css'

const ReverseProjectCard = ({ imgUrl, title, description }) => {
  return (  
    <div className='ReverseProjectCardContainer'>
      <img src={imgUrl} alt={title || 'Project Image'} />
      <div class="ReverseCardWrapper">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ReverseProjectCard

