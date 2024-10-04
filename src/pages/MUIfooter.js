import { Box, Typography, Grid, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        backdropFilter: 'blur(10px)', // Blurry background
        color: 'white',
        padding: '40px 0',
        width: '100%',
        position: 'relative',
        textAlign: 'center',
      }}
    >
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="body1" align="center" sx={{ opacity: 0.7 }}>
              © {new Date().getFullYear()} {t('footer_name')}. {t('footer_all_rights')}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
