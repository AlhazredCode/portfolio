'use client';
import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { Box, Stack } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';

interface HeaderProps {
  showLandingPage?: boolean;
  onToggleView?: () => void;
  mainPage?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showLandingPage, onToggleView, mainPage }) => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={10} lg={8} sx={{ m: 4, p: 1, borderRadius: 4, backgroundColor: '#f1f1f1' }}>
        <Grid container alignItems="center" p={1} direction={isMdDown ? 'column' : 'row'} justifyContent={isMdDown ? 'center' : 'space-between'}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Image src="/landing/face.png" alt="Logo" width={80} height={80} />
            <Image src="/landing/utopiaLogo.svg" alt="Utopia Logo" width={80} height={80} /> 
          </Stack>
          <Box sx={{ mt: isMdDown ? 2 : 0 }}>
            <Stack direction="row" spacing={2}>
              {mainPage ? (
                <Button variant="text" color="primary" onClick={onToggleView}>
                  {showLandingPage ? 'Portfolio' : 'Home'}
                </Button>
              ) : (
                <Link href="/" passHref>
                  <Button variant="text" color="primary">
                    Home
                  </Button>
                </Link>
              )}
              <Link href="/contact" passHref>
                <Button variant="contained" color="primary">
                  Contact
                </Button>
              </Link>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;