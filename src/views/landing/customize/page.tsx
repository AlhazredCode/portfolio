'use client';
import React, { useState } from 'react';
import { Grid, Box, Typography, Container, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import Skills, { Skill } from '@/api/skills';

const SkillSelector = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [selectedSkill, setSelectedSkill] = useState<Skill>(Skills[0]);

  const handleSkillSelect = (skill: Skill) => {
    setSelectedSkill(skill);
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}> {/* Centered title and subtitle */}
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          What I can do?
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Explore my diverse skillset and expertise. 
        </Typography>
      </Box>

      {/* Skill Selector */}
      <Box sx={{ bgcolor: '#f0f0f0', p: 2, borderRadius: 2, mb: 4, display: 'flex', justifyContent: 'center' }}> {/* Gray box */}
        {Skills.map((skill) => (
          <Box
            key={skill.id}
            onClick={() => handleSkillSelect(skill)}
            sx={{
              cursor: 'pointer',
              mx: 2,
              border: selectedSkill.id === skill.id ? '2px solid blue' : 'none',
              borderRadius: 1,
              p: 1,
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: selectedSkill.id === skill.id ? 'bold' : 'normal' }}>
              {skill.name}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Skill Details */}
      <Grid container spacing={4} sx={{ alignItems: 'center' }}> {/* Align items to center */}
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}> {/* Text first on mobile */}
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            {selectedSkill.name}
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 2 }}> {/* Added margin bottom */}
            {selectedSkill.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Tags: {selectedSkill.tags.join(', ')}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}> {/* Image second on mobile */}
          <Box sx={{ textAlign: 'right' }}> {/* Align image to the right */}
            <Image src={selectedSkill.image} alt={selectedSkill.name} width={isMobile ? 300 : 400} height={isMobile ? 200 : 300} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SkillSelector;