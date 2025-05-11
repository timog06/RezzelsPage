import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Box, Card, CardMedia, CardContent, Button, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import productsData from '../../data/products.json';
import '../../styles/components/home/FeaturedProducts.scss';

const FeaturedProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const carouselRef = useRef(null);
  
  // Get only 5 featured products
  const featuredProducts = productsData.filter(product => product.featured).slice(0, 5);
  
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
  
  // Calculate position for each product in the carousel
  const getProductStyle = (index) => {
    const totalItems = featuredProducts.length;
    const centerIndex = currentIndex;
    
    // Calculate position based on distance from center
    const position = index - centerIndex;
    const normalizedPosition = ((position + totalItems) % totalItems);
    
    // Calculate distance from center (0 to 2, where 0 is center and 2 is furthest)
    let distanceFromCenter;
    if (normalizedPosition <= totalItems / 2) {
      distanceFromCenter = normalizedPosition;
    } else {
      distanceFromCenter = totalItems - normalizedPosition;
    }
    
    // Calculate opacity and scale based on distance from center
    const opacity = 1 - (distanceFromCenter * 0.2);
    const scale = 1 - (distanceFromCenter * 0.1);
    
    // Calculate horizontal position
    const translateX = position * 80; // percentage of width
    
    return {
      opacity: opacity,
      transform: `translateX(${translateX}%)`,
      zIndex: 5 - distanceFromCenter,
      scale: scale,
      position: 'relative',
      transition: 'all 0.5s ease-in-out',
      width: '300px',
      maxWidth: '100%',
      margin: '0 -30px', // Negative margin to bring items closer
    };
  };
  
  return (
    <section className="featured-products section">
      <Container maxWidth="lg">
        <Typography variant="h2" className="section-title text-center mb-4">
          Featured Collection
        </Typography>
        
        <Box className="featured-slider" ref={carouselRef}>
          <IconButton className="slider-arrow prev" onClick={handlePrev}>
            <ArrowBack />
          </IconButton>
          
          <Box className="carousel-container">
            {featuredProducts.map((product, index) => (
              <Box 
                key={product.id}
                className={`product-item ${index === currentIndex ? 'active' : ''}`}
                sx={getProductStyle(index)}
              >
                <Card className="product-card">
                  <CardMedia
                    component="img"
                    height="180"
                    image={`${product.images[0]}`}
                    alt={product.name}
                    className="product-image"
                    style={{ objectFit: "contain", maxWidth: "100%", margin: "0 auto" }}
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
              </Box>
            ))}
          </Box>
          
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
