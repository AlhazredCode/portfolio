'use client';
import React, { useState } from 'react';
import { Grid, Box, Typography, Container, useMediaQuery, useTheme, Chip, Stack } from '@mui/material';
import Skills, { Skill } from '@/api/skills';
import SkillsChart from '../home/skillschart';

const SkillSelector = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [selectedSkill, setSelectedSkill] = useState<Skill>(Skills[0]);

  const handleSkillSelect = (skill: Skill) => {
    setSelectedSkill(skill);
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 2 } }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          What I can do?
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Explore my diverse skillset and expertise. 
        </Typography>
      </Box>

      <Box sx={{ 
        bgcolor: '#f0f0f0', 
        p: 2, 
        borderRadius: 2, 
        mb: 4, 
        display: 'flex', 
        justifyContent: 'center',
        overflowX: 'auto', 
      }}> 
        {Skills.map((skill) => (
          <Box
            key={skill.id}
            onClick={() => handleSkillSelect(skill)}
            sx={{
              cursor: 'pointer',
              mx: 2,
              border: selectedSkill.id === skill.id ? '2px solid blue' : '0px solid #fff', 
              borderRadius: 2, 
              p: 1,
              minWidth: 80, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: selectedSkill.id === skill.id ? 'bold' : 'normal' }}>
              {skill.name}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Grid container centrado */}
     
        {/* Stack para controlar el orden del gráfico y el texto */}
        <Grid item xs={12} md={8}  sx={{ textAlign: 'center' }}> 
          <Stack direction={{ xs: 'column-reverse'}} spacing={0}> 
            <SkillsChart chartName={selectedSkill.name + ' Skills'} /> 
            <Box>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                {selectedSkill.name}
              </Typography>
              <Typography variant="body1" paragraph sx={{ mb: 2 }}> 
                {selectedSkill.description}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                {selectedSkill.tags.map((tag) => (
                  <Chip key={tag} label={tag} size="small" /> 
                ))}
              </Box>
            </Box>
          </Stack>
        </Grid>
      
    </Container>
  );
};

export default SkillSelector;