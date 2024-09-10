import React from 'react';
import Image from 'next/image';
import { Grid, Typography, Button, Container, useMediaQuery, useTheme, Stack, Box } from '@mui/material';

const Description = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}> 
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} order={isMobile ? 2 : 1}>
            <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
              Design & Code
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
              <Box
                component="img"
                src="/landing/blueIcon.svg"
                alt="Blue Icon"
                sx={{ width: 100, height: 50 }}
              />
              <Box
                component="img"
                src="/landing/greenIcon.svg"
                alt="Green Icon"
                sx={{ width: 100, height: 50 }}
              />
            </Stack>

            <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem' }}>
              Hola, mi nombre es Jesús Yañez. <br />
              Soy la mente creativa detrás de <strong>Utopia Studio Agency</strong> <br />
              Con residencia en Táchira, Venezuela.
            </Typography>

            <Button variant="contained" color="primary" size="large">
              Hire Now
            </Button>

            <Stack direction="row" spacing={2} sx={{ mt: 8 }}>
              <img src="/landing/svgImage2.svg" alt="SVG Image 2" width="50" height="50" />
              <img src="/landing/svgImage3.svg" alt="SVG Image 3" width="50" height="50" />
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            order={isMobile ? 1 : 2}
            sx={{
              pl: { md: 16, xs: 0 }, 
              display: 'flex',
              justifyContent: { md: 'flex-end', xs: 'center' } 
            }}
          >
            <Image
              src="/landing/ProfileImg.png"
              alt="Description Image"
              width={400}
              height={400}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Description;