import { Box, Typography, Grid, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backdropFilter: 'blur(10px)', // Blurry background
        color: 'white',
        padding: '40px 0', // Increased height
        width: '100%',
        position: 'relative',
        textAlign: 'center',
      }}
    >
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="body1" align="center" sx={{ opacity: 0.7 }}>
              © {new Date().getFullYear()} Alexandre Rodrigues. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
