import { Box, Stack, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        borderTop: '1px solid rgba(148, 163, 184, 0.15)',
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        spacing={1}
      >
        <Typography sx={{ color: '#94a3b8', fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} Guido Pujadas
        </Typography>
        <Typography sx={{ color: '#94a3b8', fontSize: '0.85rem' }}>
          Built with React and Material UI.
        </Typography>
      </Stack>
    </Box>
  );
}