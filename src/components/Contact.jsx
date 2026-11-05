import { Box, Button, Stack, Typography } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TerminalIcon from '@mui/icons-material/Terminal';

const sectionTitleSx = {
  color: '#ffffff',
  fontWeight: 800,
  letterSpacing: '-0.04em',
};

export default function Contact() {
  return (
    <Box component="section" id="contact" sx={{ py: { xs: 7, md: 10 } }}>
      <Box
        sx={{
          p: { xs: 3, md: 6 },
          borderRadius: 4,
          border: '1px solid rgba(34, 211, 238, 0.25)',
          background:
            'linear-gradient(135deg, rgba(18, 36, 60, 0.95), rgba(23, 25, 55, 0.95))',
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <TerminalIcon sx={{ color: '#22d3ee' }} />
          <Typography
            sx={{
              color: '#67e8f9',
              fontSize: '0.8rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
            }}
          >
            HAVE A PROJECT IN MIND?
          </Typography>
        </Stack>

        <Typography
          component="h2"
          sx={{
            ...sectionTitleSx,
            fontSize: { xs: '2.4rem', md: '4rem' },
            lineHeight: 1.1,
            mb: 2,
          }}
        >
          Let's build
          <Box component="span" sx={{ color: '#22d3ee' }}>
            {' '}something great.
          </Box>
        </Typography>

        <Typography
          sx={{
            color: '#cbd5e1',
            maxWidth: 600,
            fontSize: '1.05rem',
            lineHeight: 1.8,
            mb: 4,
          }}
        >
          Have an idea, a project or an interesting challenge? Let's connect and
          see what we can create together.
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button
            href="mailto:guidopujadas@gmail.com"
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
            Get in touch
          </Button>

          <Button
            href="https://www.linkedin.com/in/guido-pujadas-profile"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<LinkedInIcon />}
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
            LinkedIn
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}