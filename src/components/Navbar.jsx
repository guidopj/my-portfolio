import { Box, Button, Container, Stack, Typography } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function Navbar() {
  return (
    <Box
      component="header"
      sx={{
        borderBottom: '1px solid rgba(148, 163, 184, 0.15)',
        backgroundColor: 'rgba(7, 17, 31, 0.8)',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ py: 2 }}
        >
          <Typography
            sx={{
              color: '#ffffff',
              fontWeight: 900,
              fontSize: '1.25rem',
              letterSpacing: '-0.04em',
            }}
          >
            GP<span style={{ color: '#22d3ee' }}>.</span>
          </Typography>

          <Stack direction="row" spacing={{ xs: 1, sm: 3 }} alignItems="center">
            <Button
              href="#about"
              sx={{ color: '#cbd5e1', textTransform: 'none', minWidth: 'auto' }}
            >
              About
            </Button>
            <Button
              href="#projects"
              sx={{ color: '#cbd5e1', textTransform: 'none', minWidth: 'auto' }}
            >
              Projects
            </Button>
            <Button
              href="#contact"
              variant="contained"
              endIcon={<ArrowOutwardIcon />}
              sx={{
                color: '#07111f',
                backgroundColor: '#22d3ee',
                fontWeight: 700,
                textTransform: 'none',
                borderRadius: 2,
                '&:hover': { backgroundColor: '#67e8f9' },
              }}
            >
              Contact
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}