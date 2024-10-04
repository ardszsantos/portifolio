import { FaWhatsapp, FaEnvelope, FaInstagram, FaDiscord } from 'react-icons/fa';
import { Box, TextField, Button, Typography, Grid, Link } from '@mui/material';

const ContactSection = (props) => {
  return (
    <Box {...props} id="contact" sx={{ padding: '40px', maxWidth: '1000px', margin: '15em auto 10em', }}>
      <Grid container spacing={4} id="contato" justifyContent="center">
        <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h4" gutterBottom color="white">
            Get in Touch
          </Typography>
          <Link
            href="https://wa.me/5511998701122"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              color: 'white',
              mb: 2,
              textDecoration: 'none', // No underline
              transition: 'color 0.3s ease',
              '&:hover': {
                color: '#ffcc00', // Yellow on hover
              },
            }}
          >
            <FaWhatsapp size={24} />
            <Typography>11 99870-1122</Typography>
          </Link>
          <Link
            href="mailto:alexandrerdrsantos01@gmail.com"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              color: 'white',
              mb: 2,
              textDecoration: 'none', // No underline
              transition: 'color 0.3s ease',
              '&:hover': {
                color: '#ffcc00', // Yellow on hover
              },
            }}
          >
            <FaEnvelope size={24} />
            <Typography>alexandrerdrsantos01@gmail.com</Typography>
          </Link>
          <Link
            href="#your-instagram-link"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              color: 'white',
              mb: 2,
              textDecoration: 'none', // No underline
              transition: 'color 0.3s ease',
              '&:hover': {
                color: '#ffcc00', // Yellow on hover
              },
            }}
          >
            <FaInstagram size={24} />
            <Typography>Instagram (add later)</Typography>
          </Link>
          <Link
            href="#your-discord-link"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              color: 'white',
              mb: 2,
              textDecoration: 'none', // No underline
              transition: 'color 0.3s ease',
              '&:hover': {
                color: '#ffcc00', // Yellow on hover
              },
            }}
          >
            <FaDiscord size={24} />
            <Typography>Discord (add later)</Typography>
          </Link>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              width: '100%',
            }}
          >
            <TextField
              fullWidth
              label="Your Email"
              variant="outlined"
              InputLabelProps={{ style: { color: 'white' } }}
              sx={{
                input: { color: 'white' },
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '5px',
              }}
            />
            <TextField
              fullWidth
              label="Subject"
              variant="outlined"
              InputLabelProps={{ style: { color: 'white' } }}
              sx={{
                input: { color: 'white' },
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '5px',
              }}
            />
            <TextField
              fullWidth
              label="Your Message"
              multiline
              rows={5}
              variant="outlined"
              InputLabelProps={{ style: { color: 'white' } }}
              sx={{
                textarea: { color: 'white' },
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '5px',
              }}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{ backgroundColor: '#ffcc00', color: '#000', ':hover': { backgroundColor: '#ffaa00' } }}
            >
              Send Message
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
