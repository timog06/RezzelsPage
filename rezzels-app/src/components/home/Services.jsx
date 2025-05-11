import { Container, Typography, Grid, Box, Paper } from '@mui/material';
import { LocalShipping, Security, Support, Refresh } from '@mui/icons-material';
import '../../styles/components/home/Services.scss';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <LocalShipping />,
      title: 'Free Shipping',
      description: 'Free shipping on all orders over $50'
    },
    {
      id: 2,
      icon: <Security />,
      title: 'Secure Payment',
      description: 'Safe & secure checkout experience'
    },
    {
      id: 3,
      icon: <Support />,
      title: '24/7 Support',
      description: 'Dedicated support team at your service'
    },
    {
      id: 4,
      icon: <Refresh />,
      title: 'Easy Returns',
      description: '30-day easy return policy'
    }
  ];
  
  return (
    <section className="services-section section">
      <Container maxWidth="lg">
        <Typography variant="h2" className="section-title text-center mb-5">
          Our Services
        </Typography>
        
        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={3} key={service.id}>
              <Paper elevation={2} className="service-card">
                <Box className="service-icon">
                  {service.icon}
                </Box>
                <Typography variant="h5" className="service-title">
                  {service.title}
                </Typography>
                <Typography variant="body2" className="service-description">
                  {service.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Services;
