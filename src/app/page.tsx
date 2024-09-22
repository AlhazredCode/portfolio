'use client';
import styles from './page.module.css';
import LandingPage from '../views/landing/home/page';
import Customize from '../views/landing/customize/page';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { useState } from 'react';
import Gallery from '@/views/landing/home/gallery';

export default function Home() {
  const theme = useTheme();
  const [showLandingPage, setShowLandingPage] = useState(true);

  const handleToggleView = () => {
    setShowLandingPage(!showLandingPage);
  };

  return (
    <>
      <Header mainPage showLandingPage={showLandingPage} onToggleView={handleToggleView} /> 
      <Box sx={{ bgcolor: '#ffffff' }}>
        {showLandingPage ? <LandingPage /> : <Gallery />}
      </Box>
      <Footer />
    </>
  );
}