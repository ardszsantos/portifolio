import React from 'react';
import '../styles/GlassyBox.css'; // Create this file for the styles

const GlassyBox = ({ children }) => {
  return <div className="glassy-box">{children}</div>;
};

export default GlassyBox;
