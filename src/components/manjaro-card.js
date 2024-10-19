import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import '../styles/card.css';

const ManjaroCardComponent = ({ title, subtitle, img }) => {
  const [props, set] = useSpring(() => ({
    transform: 'perspective(600px) rotateX(0deg) rotateY(0deg)',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'transparent', // Start with transparent background
  }));

  return (
    <animated.div
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => {
        // Calculate rotation based on cursor position, increase the effect for more noticeable movement
        const xPos = (x / window.innerWidth) * 100 - 50;
        const yPos = (y / window.innerHeight) * 100 - 50;
        set({
          transform: `perspective(600px) rotateX(${yPos / 3}deg) rotateY(${-xPos / 3}deg)`, // Increased 3D tilt effect
          boxShadow: `0px ${Math.abs(yPos) / 5 + 20}px ${Math.abs(xPos) / 5 + 30}px rgba(0, 0, 0, 0.3)`,
          backgroundColor: '#1A1A1A', // Change to color on hover
        });
      }}
      onMouseLeave={() => {
        // Reset the card to its original state when the mouse leaves
        set({
          transform: 'perspective(600px) rotateX(0deg) rotateY(0deg)',
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'transparent', // Return to transparent background
        });
      }}
      style={props}
    >
      <img src={img} alt="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-subtitle-2">{subtitle}</p>
    </animated.div>
  );
};

export default ManjaroCardComponent;
