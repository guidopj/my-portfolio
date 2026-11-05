import { Box, Button, Chip, Grid, Stack, Typography } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 9, md: 14 },
        minHeight: { md: '70vh' },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Grid container spacing={5} alignItems="center">
        <Grid size={{ xs: 12, md: 8 }}>
          <Chip
            label="FULL STACK DEVELOPER"
            sx={{
              mb: 3,
              color: '#67e8f9',
              backgroundColor: 'rgba(34, 211, 238, 0.1)',
              border: '1px solid rgba(34, 211, 238, 0.35)',
              fontWeight: 700,
              letterSpacing: '0.08em',
            }}
          />

          <Typography
            component="h1"
            sx={{
              color: '#ffffff',
              fontSize: { xs: '3rem', sm: '4.5rem', md: '5.5rem' },
              lineHeight: 1.02,
              fontWeight: 900,
              letterSpacing: '-0.065em',
              mb: 3,
            }}
          >
            Building digital
            <Box
              component="span"
              sx={{
                display: 'block',
                background: 'linear-gradient(90deg, #22d3ee, #818cf8)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              experiences.
            </Box>
          </Typography>

          <Typography
            sx={{
              maxWidth: 650,
              color: '#cbd5e1',
              fontSize: { xs: '1rem', md: '1.2rem' },
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            I build modern web applications with a focus on clean code,
            performance and useful user experiences. From interactive
            frontends to backend services and API integrations.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              href="#projects"
              variant="contained"
              endIcon={<ArrowOutwardIcon />}
              sx={{
                px: 3,
                py: 1.5,
                color: '#07111f',
                backgroundColor: '#22d3ee',
                fontWeight: 800,
                textTransform: 'none',
                borderRadius: 2,
                '&:hover': { backgroundColor: '#67e8f9' },
              }}
            >
              Explore my work
            </Button>

            <Button
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHubIcon />}
              sx={{
                px: 3,
                py: 1.5,
                color: '#ffffff',
                border: '1px solid rgba(148, 163, 184, 0.35)',
                borderRadius: 2,
                textTransform: 'none',
                '&:hover': {
                  borderColor: '#22d3ee',
                  backgroundColor: 'rgba(34, 211, 238, 0.06)',
                },
              }}
            >
              GitHub
            </Button>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              position: 'relative',
              p: 3,
              borderRadius: 4,
              border: '1px solid rgba(148, 163, 184, 0.25)',
              background:
                'linear-gradient(145deg, rgba(18, 36, 60, 0.9), rgba(9, 20, 36, 0.9))',
              boxShadow: '0 25px 80px rgba(0, 0, 0, 0.25)',
            }}
          >
            <Stack spacing={2}>
              <Stack direction="row" spacing={1}>
                {['#f87171', '#fbbf24', '#34d399'].map((color) => (
                  <Box
                    key={color}
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      backgroundColor: color,
                    }}
                  />
                ))}
              </Stack>

              <Typography
                sx={{
                  color: '#94a3b8',
                  fontFamily: 'monospace',
                  fontSize: '0.85rem',
                }}
              >
                developer.ts
              </Typography>

              <Box
                sx={{
                  fontFamily: 'monospace',
                  fontSize: { xs: '0.8rem', sm: '0.95rem' },
                  lineHeight: 2,
                  overflowWrap: 'anywhere',
                }}
              >
                <Box component="div" sx={{ color: '#c084fc' }}>
                  const developer = {'{'}
                </Box>
                <Box component="div" sx={{ pl: 2, color: '#67e8f9' }}>
                  name: <span style={{ color: '#fde68a' }}>'Guido'</span>,
                </Box>
                <Box component="div" sx={{ pl: 2, color: '#67e8f9' }}>
                  role:{' '}
                  <span style={{ color: '#fde68a' }}>
                    'Full Stack Developer'
                  </span>
                  ,
                </Box>
                <Box component="div" sx={{ pl: 2, color: '#67e8f9' }}>
                  focus: [
                </Box>
                <Box component="div" sx={{ pl: 4, color: '#a5f3fc' }}>
                  'Frontend',
                </Box>
                <Box component="div" sx={{ pl: 4, color: '#a5f3fc' }}>
                  'Backend',
                </Box>
                <Box component="div" sx={{ pl: 4, color: '#a5f3fc' }}>
                  'Problem solving',
                </Box>
                <Box component="div" sx={{ pl: 2, color: '#67e8f9' }}>
                  ],
                </Box>
                <Box component="div" sx={{ color: '#c084fc' }}>
                  {'}'};
                </Box>
              </Box>

              <Box
                sx={{
                  height: 4,
                  borderRadius: 2,
                  background: 'linear-gradient(90deg, #22d3ee, #818cf8)',
                }}
              />
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}