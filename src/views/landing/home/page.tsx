import React from 'react';
import { Box } from '@mui/material';
import Hero from './hero';
import Description from './description';
import Features from './features';
import Models from './models';
import Dimensions from './dimensions';
import Cta from './cta';
import Gallery from './gallery';
import SkillSelector from '../customize/page';
import SkillsSection from './quotes';
import YouTubeEmbed from './youtube';
function LandingPage() {
  return (
    <Box sx={{minHeight: '100%'}}>
  
        <Box sx={{minHeight: 800}}>
        <Description />
       
        <SkillsSection /> 
      
        <Cta /> 
        <YouTubeEmbed />  
        <SkillSelector /> 
          <Hero /> 
          <Features /> 
       
          
          <Models /> 
         
          <Dimensions /> 
         
          <Gallery /> 
        </Box>
    
    </Box>
  )
}

export default LandingPage