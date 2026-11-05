import { Box, Grid, Typography } from '@mui/material';

const sectionTitleSx = {
  color: '#ffffff',
  fontWeight: 800,
  letterSpacing: '-0.04em',
};

export default function About() {
  return (
    <Box component="section" id="about" sx={{ py: { xs: 6, md: 9 } }}>
      <Grid container spacing={5}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography
            sx={{
              color: '#22d3ee',
              fontWeight: 800,
              fontSize: '0.8rem',
              letterSpacing: '0.15em',
              mb: 2,
            }}
          >
            ABOUT ME
          </Typography>
          <Typography
            component="h2"
            sx={{
              ...sectionTitleSx,
              fontSize: { xs: '2.2rem', md: '3.2rem' },
              lineHeight: 1.1,
            }}
          >
            Turning ideas into reliable software.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Typography
            sx={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.9, mb: 2 }}
          >
            I'm a developer interested in building maintainable, scalable
            applications and solving real-world problems through technology.
          </Typography>
          <Typography
            sx={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.9 }}
          >
            My work spans frontend development, backend APIs, state management
            and system integrations. I enjoy learning new technologies and
            improving the quality of the software I build.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}