import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useSpring, animated } from '@react-spring/web';
import '../styles/expCard.css'; // Importando o CSS separado

const ExpCard = ({ title, description, image, date }) => {
  const [flipped, setFlipped] = useState(false);

  const { transform } = useSpring({
    transform: `rotateY(${flipped ? 180 : 0}deg)`,
  });

  return (
    <div
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      style={{ perspective: '1000px' }}
    >
      <animated.div
        style={{
          transform,
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      >
        <Card className="glass-card">
          <CardMedia component="img" height="180" image={image} alt={title} />
          <CardContent>
            <Box className="card-header">
              <Typography variant="h6" component="div" className="card-title">
                {title}
              </Typography>
              <Typography variant="body2" className="card-date">
                {date}
              </Typography>
            </Box>
            <Typography variant="body2" className="card-description">
              {description}
            </Typography>
          </CardContent>
        </Card>
        
      </animated.div>
    </div>
  );
};

export default ExpCard;
