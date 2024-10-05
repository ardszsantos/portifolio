import '../styles/projectCard.css';
import { useState } from 'react';
import Modal from 'react-modal';
import { FaGithub, FaTools } from "react-icons/fa";  // Import the tool icon

Modal.setAppElement('#root');

const ProjectCard = ({ imgUrl, title, description, iconComponent, gitUrl, pageUrl, techIcons, iconColors }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className='projectCardContainer'>
      <img src={imgUrl} alt={title || 'Project Image'} />
      <div className="CardTextWrapper">
        <div className='desc-group'>
          <div className='upper-card'>
            <h2>{title}</h2>
            <p>20xx - 20xx</p>
          </div>
          <p>{description}</p>
        </div>
        <div className='project-info'>
          <a href={pageUrl} target='_blank'>Demo {iconComponent}</a>
          <a href={gitUrl} target='_blank'>Repo <FaGithub /></a>

          {/* Button to trigger modal */}
          <button className='tool-button' onClick={openModal}>
            <FaTools size={16} />
          </button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project Tech Stack"
        style={{
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
          content: {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',  // Glass-like effect
            backdropFilter: 'blur(15px)',  // Adds the blur effect
            border: '1px solid rgba(255, 255, 255, 0.2)',  // Border to give a subtle outline
            color: 'white',
            padding: '40px',  // Increased padding for better spacing
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '10px',  // Slight rounding for a softer look
          }
        }}
      >
        <button onClick={closeModal} style={{ float: 'right' }}>X</button>
        <h2>Tech Stack for {title}</h2>
        <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
          {techIcons.length > 0 ? (
            techIcons.map((IconComponent, index) => (
              <div
                key={index}
                style={{
                  color: iconColors[index] || 'black',
                  border: '2px solid rgba(255, 255, 255, 0.5)',  // High-contrast border for visibility
                  padding: '10px',
                  borderRadius: '5px'  // Optional rounding for a smoother feel
                }}
              >
                <IconComponent size={30} />
              </div>
            ))
          ) : (
            <p>No icons available</p>
          )}
        </div>
      </Modal>

    </div>
  );
}

export default ProjectCard;