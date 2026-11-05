import { Box, Chip, Grid, Typography } from '@mui/material';
import { projects } from '../data/portfolioData';

const sectionTitleSx = {
  color: '#ffffff',
  fontWeight: 800,
  letterSpacing: '-0.04em',
};

const cardSx = {
  height: '100%',
  p: 3,
  border: '1px solid rgba(148, 163, 184, 0.2)',
  borderRadius: 3,
  background:
    'linear-gradient(145deg, rgba(18, 36, 60, 0.95), rgba(10, 23, 42, 0.95))',
  transition: 'transform 0.25s ease, border-color 0.25s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    borderColor: '#22d3ee',
  },
};

export default function Projects() {
  return (
    <Box component="section" id="projects" sx={{ py: { xs: 6, md: 9 } }}>
      <Typography
        sx={{
          color: '#22d3ee',
          fontWeight: 800,
          fontSize: '0.8rem',
          letterSpacing: '0.15em',
          mb: 2,
        }}
      >
        SELECTED WORK
      </Typography>

      <Typography
        component="h2"
        sx={{
          ...sectionTitleSx,
          fontSize: { xs: '2.2rem', md: '3rem' },
          mb: 5,
        }}
      >
        Projects that make an impact.
      </Typography>

      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid key={project.title} size={{ xs: 12, md: 4 }}>
            <Box
              component="a"
              href={project.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                ...cardSx,
                display: 'block',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 2,
                  color: '#67e8f9',
                  backgroundColor: 'rgba(34, 211, 238, 0.1)',
                  mb: 3,
                  '& .MuiSvgIcon-root': { fontSize: 26 },
                }}
              >
                {<project.icon />}
              </Box>

              <Typography
                component="h3"
                sx={{
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '1.35rem',
                  mb: 1.5,
                }}
              >
                {project.title}
              </Typography>

              <Typography
                sx={{ color: '#cbd5e1', lineHeight: 1.8, mb: 3 }}
              >
                {project.description}
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {project.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{
                      color: '#cbd5e1',
                      backgroundColor: 'rgba(148, 163, 184, 0.12)',
                      border: '1px solid rgba(148, 163, 184, 0.18)',
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}