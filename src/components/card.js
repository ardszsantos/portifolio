import React from 'react';
import '../styles/card.css'


const CardComponent = ({ title, subtitle, img }) => {
  return (
    <div className="card">
      <img src={img} alt="card-image"/>
      <h2 className="card-title">{title}</h2>
      <p className="card-subtitle">{subtitle}</p>
    </div>
  );
};

export default CardComponent;