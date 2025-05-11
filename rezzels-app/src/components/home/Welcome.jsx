import { Container, Typography, Box, Grid } from '@mui/material';
import '../../styles/components/home/Welcome.scss';

const Welcome = () => {
  return (
    <section className="welcome-section section">
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box className="welcome-image-container">
              <img 
                src="rezzels-logo.jpg" 
                alt="Rezzels Logo" 
                className="welcome-image"
              />
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box className="welcome-content">
              <Typography variant="h2" className="welcome-title">
                Welcome to Rezzels
              </Typography>
              
              <Typography variant="body1" className="welcome-text">
                At Rezzels, we believe that fashion should be both stylish and sustainable. 
                Our mission is to create high-quality clothing that not only looks good but also 
                feels good to wear and is good for the planet.
              </Typography>
              
              <Typography variant="body1" className="welcome-text">
                Founded in 2020, we've been dedicated to crafting premium apparel using eco-friendly 
                materials and ethical manufacturing processes. Each piece in our collection is designed 
                with attention to detail and a commitment to excellence.
              </Typography>
              
              <Typography variant="body1" className="welcome-text">
                Whether you're looking for comfortable everyday wear or statement pieces that stand out, 
                Rezzels has something for everyone. Explore our collection and discover the perfect 
                addition to your wardrobe.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Welcome;
