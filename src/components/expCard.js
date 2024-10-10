import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../styles/expCard.css'; // Importando o CSS separado

const ExpCard = ({ title, description, image, date }) => {
  return (
    <Card className="glass-card">
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={title}
      />
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
  );
};

export default ExpCard;
