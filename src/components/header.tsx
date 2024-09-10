import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { Box } from '@mui/system';

interface HeaderProps {
  showLandingPage: boolean;
  onToggleView: () => void;
}

const Header: React.FC<HeaderProps> = ({ showLandingPage, onToggleView }) => {
  return (
    <Grid container justifyContent="center" > 
      <Grid item xs={12} md={10} lg={8}  sx={{ m:4 , p: 1, borderRadius: 4, backgroundColor: '#f1f1f1'}}> {/* Ajusta el ancho máximo aquí */}
        <Grid container alignItems="center" justifyContent="space-between" p={1}>
          <Grid item xs={12} sm={4}>
            <Image src="/landing/face.png" alt="Logo" width={80} height={80} />
          </Grid>
          <Grid item xs={12} sm={8} container justifyContent="flex-end" spacing={2}>
            <Grid item>
              <Button variant="text" color="primary" onClick={onToggleView}>
                {showLandingPage ? 'Portfolio' : 'Home'}
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                Contact
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;