import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent, Button, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import productsData from '../../data/products.json';
import '../../styles/components/home/FeaturedProducts.scss';

const FeaturedProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  const featuredProducts = productsData.filter(product => product.featured);
  
  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProducts.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay, featuredProducts.length]);
  
  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredProducts.length) % featuredProducts.length);
  };
  
  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProducts.length);
  };
  
  return (
    <section className="featured-products section">
      <Container maxWidth="lg">
        <Typography variant="h2" className="section-title text-center mb-4">
          Featured Collection
        </Typography>
        
        <Box className="featured-slider">
          <IconButton className="slider-arrow prev" onClick={handlePrev}>
            <ArrowBack />
          </IconButton>
          
          <Grid container spacing={4}>
            {featuredProducts.map((product, index) => (
              <Grid 
                item 
                xs={12} 
                md={6} 
                lg={4} 
                key={product.id}
                className={`product-item ${index === currentIndex ? 'active' : ''}`}
              >
                <Card className="product-card">
                  <CardMedia
                    component="img"
                    height="300"
                    image={`${product.images[0]}`}
                    alt={product.name}
                    className="product-image"
                  />
                  <CardContent className="product-content">
                    <Typography variant="h5" className="product-title">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="product-category">
                      {product.category}
                    </Typography>
                    <Typography variant="h6" className="product-price">
                      ${product.price.toFixed(2)}
                    </Typography>
                    <Button 
                      component={Link} 
                      to={`/product/${product.id}`}
                      variant="contained" 
                      className="product-button"
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          <IconButton className="slider-arrow next" onClick={handleNext}>
            <ArrowForward />
          </IconButton>
        </Box>
        
        <Box className="text-center mt-4">
          <Button 
            component={Link} 
            to="/shop" 
            variant="outlined" 
            className="view-all-button"
          >
            View All Products
          </Button>
        </Box>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
