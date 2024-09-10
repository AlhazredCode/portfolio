// material-ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// third party
import Marquee from 'react-fast-marquee';

function Item({ item }: { item: { text: string; highlight?: boolean } }) {
  return (
    <Typography
      variant="h4"
      sx={{
        cursor: 'pointer',
        fontWeight: 500,
        my: 1,
        mx: 3,
        transition: 'all 0.3s ease-in-out',
        opacity: item.highlight ? 0.75 : 0.4,
        '&:hover': { opacity: '1' },
      }}
    >
      {item.text}
    </Typography>
  );
}

// ==============================|| LANDING - SKILLS SECTION ||============================== //

export default function SkillsSection() {
  const skillItems = [
    { text: 'React' },
    { text: 'Next.js' },
    { text: 'TypeScript' },
    { text: 'JavaScript' },
    { text: 'Node.js' },
    { text: 'UI/UX' },
    { text: 'Figma' },
    { text: 'Adobe XD' },
    { text: 'Photoshop' },
    { text: 'Illustrator' },
    { text: 'Blender' },
    { text: 'HTML' },
    { text: 'CSS' },
    { text: 'GraphQL' },
    { text: 'REST APIs' },
    { text: 'Git' },
    { text: 'GitHub' },
    { text: 'Agile' },
    { text: 'Scrum' },
    // Add more skills as needed
  ];

  return (
    <Box sx={{ overflowX: 'hidden', width: '100%' , my: 2}}> {/* Set width to 100% */}
      {/* Skills Marquee */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} sx={{ width: '100%' }}> {/* Set width to 100% */}
          <Marquee pauseOnHover direction="left" gradient={false} speed={80}> {/* Removed gradient and adjusted speed */}
            {skillItems.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </Marquee>
        </Grid>
        <Grid item xs={12} sx={{ width: '100%' }}> {/* Set width to 100% */}
          <Marquee pauseOnHover direction="right" gradient={false} speed={80}> {/* Removed gradient and adjusted speed */}
            {skillItems.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </Marquee>
        </Grid>
      </Grid>
    </Box>
  );
}