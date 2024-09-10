import React from 'react';
import { Box } from '@mui/material';

const Cta = () => {
  return (
    <Box
      sx={{
        bgcolor: 'white',
        py: { xs: 2, md: 4 },
        position: 'relative',
        overflow: 'hidden',
        height: '45vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Gradient layer (Top) */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '25%', // Increased height
          background: 'linear-gradient(to bottom, white, rgba(255, 255, 255, 0.5), transparent)', // Smoother gradient
          zIndex: 2,
        }}
      />
      {/* Image layer (mosaico) */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#000',
          backgroundImage: `url(/landing/Banner.png)`,
          backgroundRepeat: 'repeat-x',
          backgroundSize: 'auto 100%',
          backgroundPosition: 'center',
          '@media (min-width: 600px)': {
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          },
        }}
      />
      {/* Gradient layer (Bottom) */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '25%', // Increased height
          background: 'linear-gradient(to top, white, rgba(255, 255, 255, 0.5), transparent)', // Smoother gradient
          zIndex: 2,
        }}
      />
    </Box>
  );
};

export default Cta;