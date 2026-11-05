import { Box, Grid, Typography } from '@mui/material';
import { skills } from '../data/portfolioData';

const sectionTitleSx = {
  color: '#ffffff',
  fontWeight: 800,
  letterSpacing: '-0.04em',
};

export default function Skills() {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 9 } }}>
      <Typography
        sx={{
          color: '#22d3ee',
          fontWeight: 800,
          fontSize: '0.8rem',
          letterSpacing: '0.15em',
          mb: 2,
        }}
      >
        TECH STACK
      </Typography>

      <Typography
        component="h2"
        sx={{
          ...sectionTitleSx,
          fontSize: { xs: '2.2rem', md: '3rem' },
          mb: 4,
        }}
      >
        Tools I work with.
      </Typography>

      <Grid container spacing={1.5}>
        {skills.map((skill) => (
          <Grid key={skill} size={{ xs: 6, sm: 4, md: 3 }}>
            <Box
              sx={{
                p: 2,
                textAlign: 'center',
                borderRadius: 2,
                border: '1px solid rgba(148, 163, 184, 0.2)',
                backgroundColor: 'rgba(18, 36, 60, 0.65)',
                color: '#e2e8f0',
                fontWeight: 600,
                transition: 'all 0.2s ease',
                '&:hover': {
                  color: '#67e8f9',
                  borderColor: '#22d3ee',
                  backgroundColor: 'rgba(34, 211, 238, 0.07)',
                },
              }}
            >
              {skill}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}