'use client';
import React from 'react';
import Image from 'next/image';
import { Grid, Typography, Button, Box, useMediaQuery, useTheme, Stack, Chip } from '@mui/material';
import Link from 'next/link';
const Description = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifySelf: 'center',
      bgcolor: 'white',
      borderRadius: 4,
      maxWidth: 'lg',
      mx: 'auto',
      px: 12

    }}>
      <Grid container spacing={4} alignItems="center" direction={isMdDown ? 'column-reverse' : 'row'}>
        <Grid item xs={12} md={6} sx={{ textAlign: isMdDown ? 'center' : 'left', width: '100%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
            <Typography variant="h3" component="span" sx={{ fontWeight: 'bold', fontSize: { xs: '3rem', md: '2.5rem', lg: '3rem' } }}>
              Design
            </Typography>
            <Typography variant="h3" component="span" sx={{ fontWeight: 'bold', fontSize: { xs: '3rem', md: '2.5rem', lg: '3rem' }, color: 'gray' }}>
              &
            </Typography>
            <Typography variant="h3" component="span" sx={{ fontWeight: 'bold', fontSize: { xs: '3rem', md: '2.5rem', lg: '3rem' } }}>
              Code
            </Typography>
          </Box>
          <Stack direction="row" spacing={2} justifyContent={isMdDown ? 'center' : 'flex-start'} sx={{ mb: 1 }}>
            <Box component="img" src="/landing/blueIcon.svg" alt="Blue Icon" sx={{ width: 100, height: 50 }} />
            <Box component="img" src="/landing/greenIcon.svg" alt="Green Icon" sx={{ width: 100, height: 50 }} />
          </Stack>


          <Typography
            variant="body1"
            paragraph
            sx={{
              fontSize: {
                xs: '1.2rem',
                md: '1rem',
                lg: '1.2rem'
              }
            }}
          >
            Hi, I'm Jesús Yañez.  <br />
            <strong>Crafting beautiful & functional experiences.</strong> <br />
            Based in Venezuela.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: { xs: ' center', md: 'left' } }}>
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              <Chip label="Design" variant='outlined' />
              <Chip label="3D" variant='outlined' />
              <Chip label="Code" variant='outlined' />
            </Stack>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: { xs: ' center', md: 'left' } }}>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" color="primary" size="large">
                Hire Now
              </Button>
              <Button variant="outlined" color="primary" size="large">
                Download CV
              </Button>
            </Stack>
          </Box>

          <Stack direction="row" spacing={2} justifyContent={isMdDown ? 'center' : 'flex-start'} sx={{ mt: 8 }}>
            <Link href="#" legacyBehavior>
              <a>
                <img src="/landing/svgImage2.svg" alt="SVG Image 2" width="50" height="50" />
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a>
                <img src="/landing/svgImage3.svg" alt="SVG Image 3" width="50" height="50" />
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a>
                <img src="/landing/svgImage3.svg" alt="SVG Image 3" width="50" height="50" />
              </a>
            </Link>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{
            width: { xs: '100%', md: '25vw', lg: '20vw' },
            maxWidth: '80vw',
            '& img': { width: '100%', height: 'auto' }
          }}>
            <Image
              src="/landing/ProfileImg.png"
              alt="Description Image"
              width={250}
              height={250}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Description;