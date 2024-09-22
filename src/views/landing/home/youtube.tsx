'use client';
import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const YouTubeEmbed = () => {
  return (
    <Container maxWidth="lg" sx={{ px: 4, pt: 8, textAlign: 'center' }}> {/* Centrado del contenido */}
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Check Out My Latest Project
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        A brief overview of my recent work
      </Typography>
      <Box sx={{ position: 'relative', paddingBottom: '56.25%', height: 0,  }}>
        <iframe
          width="80%"
          height="80%"
          src="https://www.youtube.com/embed/R4ZiAtFaU0s?si=hHfgXt1HpP_s73V3"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ position: 'absolute', top: '10%', left: '10%', borderRadius: 12 }} // Centrado del iframe
        />
      </Box>
    </Container>
  );
};

export default YouTubeEmbed;