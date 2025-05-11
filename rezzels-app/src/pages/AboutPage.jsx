import { Container, Typography, Grid, Box } from '@mui/material';
import '../styles/pages/AboutPage.scss';

const AboutPage = () => {
  return (
    <div className="about-page">
      <Container maxWidth="lg">
        <Box className="page-header">
          <Typography variant="h2" className="page-title">
            About Rezzels
          </Typography>
          <Typography variant="body1" className="page-subtitle">
            Our story, mission, and values
          </Typography>
        </Box>
        
        <Grid container spacing={6} className="about-section">
          <Grid item xs={12} md={6}>
            <Box className="about-image-container">
              <img 
                src="rezzels-logo.jpg" 
                alt="Rezzels Brand" 
                className="about-image"
              />
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box className="about-content">
              <Typography variant="h3" className="section-title">
                Our Story
              </Typography>
              <Typography variant="body1" className="section-text">
                Rezzels was founded in 2020 with a simple yet powerful vision: to create clothing that combines 
                style, comfort, and sustainability. What began as a small passion project has grown into a 
                brand that resonates with conscious consumers around the world.
              </Typography>
              <Typography variant="body1" className="section-text">
                Our founder, Jane Doe, recognized a gap in the market for high-quality, eco-friendly apparel 
                that didn't compromise on design or durability. Drawing from her background in sustainable 
                textiles, she assembled a team of like-minded individuals who shared her commitment to 
                ethical fashion.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        
        <Box className="mission-section">
          <Typography variant="h3" className="section-title text-center">
            Our Mission
          </Typography>
          <Typography variant="body1" className="section-text text-center">
            At Rezzels, our mission is to revolutionize the fashion industry by proving that style and 
            sustainability can go hand in hand. We're committed to creating premium clothing that not only 
            looks good and feels good but also does good for the planet and its people.
          </Typography>
          
          <Grid container spacing={4} className="values-grid">
            <Grid item xs={12} sm={6} md={3}>
              <Box className="value-card">
                <Typography variant="h5" className="value-title">
                  Quality
                </Typography>
                <Typography variant="body2" className="value-text">
                  We never compromise on the quality of our products, ensuring each piece is built to last.
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Box className="value-card">
                <Typography variant="h5" className="value-title">
                  Sustainability
                </Typography>
                <Typography variant="body2" className="value-text">
                  We use eco-friendly materials and processes to minimize our environmental footprint.
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Box className="value-card">
                <Typography variant="h5" className="value-title">
                  Transparency
                </Typography>
                <Typography variant="body2" className="value-text">
                  We believe in being open about our supply chain and manufacturing processes.
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Box className="value-card">
                <Typography variant="h5" className="value-title">
                  Community
                </Typography>
                <Typography variant="body2" className="value-text">
                  We foster a sense of belonging among our customers, employees, and partners.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        
        <Box className="commitment-section">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Box className="commitment-content">
                <Typography variant="h3" className="section-title">
                  Our Commitment to Sustainability
                </Typography>
                <Typography variant="body1" className="section-text">
                  Sustainability isn't just a buzzword for us—it's at the core of everything we do. From 
                  sourcing organic and recycled materials to implementing energy-efficient manufacturing 
                  processes, we're constantly looking for ways to reduce our environmental impact.
                </Typography>
                <Typography variant="body1" className="section-text">
                  We've partnered with environmental organizations to offset our carbon footprint and 
                  contribute to reforestation efforts. Our packaging is made from recycled materials and 
                  is fully biodegradable.
                </Typography>
                <Typography variant="body1" className="section-text">
                  By choosing Rezzels, you're not just buying clothing—you're supporting a movement 
                  towards a more sustainable and ethical fashion industry.
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Box className="commitment-image-container">
                <img 
                  src="coming-soon.png" 
                  alt="Sustainability" 
                  className="commitment-image"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default AboutPage;
