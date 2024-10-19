import '../styles/projectCard.css';
import '../styles/modalStyles.css';
import { useState } from 'react';
import Modal from 'react-modal';
import { FaGithub, FaInfoCircle,  } from "react-icons/fa";  // Import the tool icon

Modal.setAppElement('#root');

const ProjectCard = ({ imgUrl, title, description, detailedDescription, iconComponent, gitUrl, pageUrl, techIcons, iconColors, date }) => {
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
            <p>{date}</p>
          </div>
          <p>{description}</p>
        </div>
        <div className='project-info'>
          <a rel='noreferrer' href={pageUrl} target='_blank'>Demo {iconComponent}</a>
          <a rel='noreferrer' href={gitUrl} target='_blank'>Repo <FaGithub /></a>
          <span className='info-icon' href=' '  onClick={openModal} > Info<FaInfoCircle/></span>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project Info"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <button onClick={closeModal} className="modal-close-btn">X</button>
        <h2>{title} | Info</h2>
        <div className="modal-flex-container">
          <div className="modal-tech-stack">
            <h4>Tech Stack:</h4>
            <div className="modal-grid">
              {techIcons.length > 0 ? (
                techIcons.map((iconData, index) => {
                  const IconComponent = iconData.component;
                  return (
                    <div
                      key={index}
                      className="modal-grid-item"
                      style={{ color: iconColors[index] || 'black' }}
                    >
                      <IconComponent size={30} />
                      <span className="icon-name">{iconData.name}</span>
                    </div>
                  );
                })
              ) : (
                <p>No icons available</p>
              )}
            </div>
          </div>
          <div className='modal-detailed-description'>
            <h4>Detailed Description:</h4>
            <p>{detailedDescription}</p>
          </div>
        </div>

      </Modal>

    </div>
  );
}

export default ProjectCard;