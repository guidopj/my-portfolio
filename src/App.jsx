import { Box, Container } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        color: '#ffffff',
        overflowX: 'hidden',
        background:
          'radial-gradient(ellipse at 15% 0%, rgba(8, 145, 178, 0.18), transparent 38%), radial-gradient(ellipse at 90% 20%, rgba(124, 58, 237, 0.16), transparent 35%), #07111f',
      }}
    >
      <Navbar />

      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Container>
    </Box>
  );
}