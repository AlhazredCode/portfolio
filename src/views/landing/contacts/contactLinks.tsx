'use client';
import React from 'react';
import { Box, Stack, Typography, Link as MuiLink } from '@mui/material';
import Image from 'next/image';

const ContactLinks: React.FC = () => {
  const links = [
    { icon: '/icons/upwork.svg', text: 'Upwork', url: 'https://www.upwork.com/your-profile' },
    { icon: '/icons/behance.svg', text: 'Behance', url: 'https://www.behance.net/your-profile' },
    { icon: '/icons/whatsapp.svg', text: 'WhatsApp', url: 'https://wa.me/your-number' },
    { icon: '/icons/linkedin.svg', text: 'LinkedIn', url: 'https://www.linkedin.com/in/your-profile' },
  ];

  return (
    <Box sx={{ bgcolor: '#f1f1f1', p: 4, borderRadius: 4, maxWidth: 'lg', mx: 'auto' }}>
      <Stack spacing={4}>
        {links.map((link) => (
          <MuiLink href={link.url} target="_blank" underline="none" key={link.text}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Box>
                <Image src={link.icon} alt={link.text} width={32} height={32} />
              </Box>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {link.text}
              </Typography>
            </Stack>
          </MuiLink>
        ))}
      </Stack>
    </Box>
  );
};

export default ContactLinks;