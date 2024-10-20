import { FaWhatsapp, FaEnvelope, FaInstagram, FaDiscord } from 'react-icons/fa';
import { Box, TextField, Button, Typography, Grid, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ContactSection = (props) => {
  const { t } = useTranslation();

  return (
    <Box {...props} id="contato" sx={{ padding: '40px', maxWidth: '1000px', margin: '15em auto 10em', overflow: 'hidden' }}>
      <Grid container spacing={4} id="contact" justifyContent="center">
        <Grid item xs={12} md={6} display="flex" flexDirection="column" gap="10px" alignItems="left">
          <Typography variant="h4" gutterBottom color="white" sx={{ margin: '0 0 1em 0', fontFamily: 'Jetbrains MONO'}}>
            {t('contact_title')}
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
              textDecoration: 'none',
              transition: 'color 0.3s ease',
              '&:hover': { color: '#ffcc00' },
              
            }}
          >
            <FaWhatsapp size={24} />
            <Typography>{t('contact_whatsapp')}</Typography>
          </Link>
          <Link
            href="mailto:alexandrerdrsantos01@gmail.com"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              color: 'white',
              mb: 2,
              textDecoration: 'none',
              transition: 'color 0.3s ease',
              '&:hover': { color: '#ffcc00' },
            }}
          >
            <FaEnvelope size={24} />
            <Typography>{t('contact_email')}</Typography>
          </Link>
          <Link
            href="https://www.instagram.com/ards2333/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              color: 'white',
              mb: 2,
              textDecoration: 'none',
              transition: 'color 0.3s ease',
              '&:hover': { color: '#ffcc00' },
            }}
          >
            <FaInstagram size={24} />
            <Typography>{t('contact_instagram')}</Typography>
          </Link>
          <Link
            href="https://discord.com/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              color: 'white',
              mb: 2,
              textDecoration: 'none',
              transition: 'color 0.3s ease',
              '&:hover': { color: '#ffcc00' },
            }}
          >
            <FaDiscord size={24} />
            <Typography>{t('contact_discord')}</Typography>
          </Link>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            component="form"
            action="https://formspree.io/f/xovqayzr" 
            method="POST"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              width: '100%',
            }}
          >
            <TextField
              fullWidth
              label={t('contact_form_email')}
              name="email"
              required={true}
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
              label={t('contact_form_subject')}
              name="subject"
              required={true}
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
              label={t('contact_form_message')}
              name="message"
              required={true}
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
              {t('contact_form_button')}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
