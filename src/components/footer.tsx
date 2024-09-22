'use client';
import React from 'react';
import { Box, Stack, Typography, Container } from '@mui/material';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}> {/* Added Box for centering */}
      <Container maxWidth="lg" sx={{ m: 4, p: 1, borderRadius: 4, backgroundColor: '#f1f1f1', mt: 4 }}>
        <Stack 
          direction="column" 
          alignItems="center" 
          justifyContent="center" 
          spacing={1}
          sx={{ py: 2 }} 
        >
          <Typography variant="body2" color="text.secondary">
            Developed by
          </Typography>
          <Image 
  src="/landing/alhazredLogo.svg" 
  alt="Alhazred Logo" 
  width={200} 
  height={25}
  style={{ opacity: 0.5 }} // Added opacity style
/>
          <Typography variant="body2" color="text.secondary">
            Alhazred - {new Date().getFullYear()}
          </Typography> 
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;