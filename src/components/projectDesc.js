import "../styles/projectDesc.css";

const ProjectDescription = ({ icons = [], iconColors = [] }) => {
  return (
    <div className="tech-container">
      <h1>Tech Stack</h1>
      <div className="icons-container">
        {icons.length > 0 ? (
          icons.map((IconComponent, index) => (
            <div key={index} className="icon-block" style={{ color: iconColors[index] || 'black' }}>
              <IconComponent size={30} />
            </div>
          ))
        ) : (
          <p>No icons available</p>
        )}
      </div>
    </div>
  );
};

export default ProjectDescription;
