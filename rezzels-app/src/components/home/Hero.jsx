import { Link } from 'react-router-dom';
import { Container, Typography, Box, Button } from '@mui/material';
import '../../styles/components/home/Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <Container maxWidth="lg">
        <Box className="hero-content">
          <Typography variant="h1" className="hero-title">
            Style Meets Sustainability
          </Typography>
          <Typography variant="h2" className="hero-subtitle">
            Discover the Rezzels Collection
          </Typography>
          <Typography variant="body1" className="hero-text">
            Elevate your wardrobe with our premium, eco-friendly clothing designed for comfort and style.
          </Typography>
          <Box className="hero-buttons">
            <Button 
              component={Link} 
              to="/shop" 
              variant="contained" 
              className="hero-button primary"
            >
              Shop Now
            </Button>
            <Button 
              component={Link} 
              to="/about" 
              variant="outlined" 
              className="hero-button secondary"
            >
              Our Story
            </Button>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Hero;
