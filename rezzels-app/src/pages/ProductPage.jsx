import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Typography, Grid, Box, Button, Chip, Tabs, Tab, Paper, Divider, IconButton } from '@mui/material';
import { ArrowBack, FavoriteBorder, Share, ShoppingCart } from '@mui/icons-material';
import productsData from '../data/products.json';
import '../styles/pages/ProductPage.scss';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [tabValue, setTabValue] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);
  
  useEffect(() => {
    const productId = parseInt(id);
    const foundProduct = productsData.find(p => p.id === productId);
    
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedSize(foundProduct.sizes[0]);
      
      // Find related products (same category, excluding current product)
      const related = productsData
        .filter(p => p.category === foundProduct.category && p.id !== productId)
        .slice(0, 3);
      setRelatedProducts(related);
    }
    
    setLoading(false);
  }, [id]);
  
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };
  
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  
  const handleImageChange = (index) => {
    setCurrentImage(index);
  };
  
  const handleGoBack = () => {
    navigate(-1);
  };
  
  if (loading) {
    return (
      <Container maxWidth="lg" className="product-page">
        <Typography variant="h5" className="text-center">
          Loading...
        </Typography>
      </Container>
    );
  }
  
  if (!product) {
    return (
      <Container maxWidth="lg" className="product-page">
        <Typography variant="h5" className="text-center">
          Product not found
        </Typography>
        <Box className="text-center mt-4">
          <Button 
            component={Link} 
            to="/shop" 
            variant="contained"
          >
            Back to Shop
          </Button>
        </Box>
      </Container>
    );
  }
  
  return (
    <div className="product-page">
      <Container maxWidth="lg">
        <Button 
          startIcon={<ArrowBack />} 
          onClick={handleGoBack}
          className="back-button"
        >
          Back
        </Button>
        
        <Grid container spacing={4} className="product-details">
          <Grid item xs={12} md={6}>
            <Box className="product-images">
              <Box className="main-image-container">
                <img 
                  src={`../${product.images[currentImage]}`} 
                  alt={product.name} 
                  className="main-image"
                  style={{ maxHeight: "300px", maxWidth: "100%", objectFit: "contain", margin: "0 auto", display: "block" }}
                />
              </Box>
              
              <Box className="thumbnail-container">
                {product.images.map((image, index) => (
                  <Box 
                    key={index}
                    className={`thumbnail ${index === currentImage ? 'active' : ''}`}
                    onClick={() => handleImageChange(index)}
                  >
                    <img src={`../${image}`} alt={`${product.name} thumbnail ${index + 1}`} />
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box className="product-info">
              <Typography variant="h3" className="product-name">
                {product.name}
              </Typography>
              
              <Typography variant="h4" className="product-price">
                ${product.price.toFixed(2)}
              </Typography>
              
              <Typography variant="body1" className="product-description">
                {product.description}
              </Typography>
              
              <Divider className="divider" />
              
              <Box className="product-meta">
                <Box className="meta-item">
                  <Typography variant="subtitle2" className="meta-label">
                    Category:
                  </Typography>
                  <Chip 
                    label={product.category} 
                    component={Link} 
                    to={`/shop?category=${product.category}`}
                    clickable
                    className="category-chip"
                  />
                </Box>
                
                <Box className="meta-item">
                  <Typography variant="subtitle2" className="meta-label">
                    Available Sizes:
                  </Typography>
                  <Box className="sizes-container">
                    {product.sizes.map((size) => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? 'contained' : 'outlined'}
                        className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                        onClick={() => handleSizeChange(size)}
                      >
                        {size}
                      </Button>
                    ))}
                  </Box>
                </Box>
                
                <Box className="meta-item">
                  <Typography variant="subtitle2" className="meta-label">
                    Colors:
                  </Typography>
                  <Box className="colors-container">
                    {product.colors.map((color) => (
                      <Box 
                        key={color}
                        className="color-circle"
                        style={{ backgroundColor: color.toLowerCase() }}
                        title={color}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
              
              <Box className="product-actions">
                <Button 
                  variant="contained" 
                  startIcon={<ShoppingCart />}
                  className="add-to-cart-button"
                >
                  Add to Cart
                </Button>
                
                <IconButton className="action-icon">
                  <FavoriteBorder />
                </IconButton>
                
                <IconButton className="action-icon">
                  <Share />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
        
        <Box className="product-tabs">
          <Paper elevation={1}>
            <Tabs 
              value={tabValue} 
              onChange={handleTabChange}
              centered
              className="tabs"
            >
              <Tab label="Description" />
              <Tab label="Additional Information" />
              <Tab label="Reviews" />
            </Tabs>
            
            <Box className="tab-content">
              {tabValue === 0 && (
                <Box className="tab-panel">
                  <Typography variant="body1">
                    {product.description}
                    <br /><br />
                    Our {product.name} is crafted with premium materials to ensure comfort and durability. 
                    Perfect for everyday wear, this {product.category.toLowerCase()} features the iconic Rezzels logo 
                    and is available in {product.colors.join(', ')}. 
                    <br /><br />
                    The relaxed fit and soft fabric make it an essential addition to any wardrobe.
                  </Typography>
                </Box>
              )}
              
              {tabValue === 1 && (
                <Box className="tab-panel">
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Typography variant="subtitle2">Material</Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="body2">100% Organic Cotton</Typography>
                    </Grid>
                    
                    <Grid item xs={4}>
                      <Typography variant="subtitle2">Sizes</Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="body2">{product.sizes.join(', ')}</Typography>
                    </Grid>
                    
                    <Grid item xs={4}>
                      <Typography variant="subtitle2">Colors</Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="body2">{product.colors.join(', ')}</Typography>
                    </Grid>
                    
                    <Grid item xs={4}>
                      <Typography variant="subtitle2">Care Instructions</Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="body2">Machine wash cold, tumble dry low</Typography>
                    </Grid>
                  </Grid>
                </Box>
              )}
              
              {tabValue === 2 && (
                <Box className="tab-panel">
                  <Typography variant="body1" className="text-center">
                    No reviews yet. Be the first to review this product!
                  </Typography>
                </Box>
              )}
            </Box>
          </Paper>
        </Box>
        
        {relatedProducts.length > 0 && (
          <Box className="related-products">
            <Typography variant="h4" className="section-title">
              Related Products
            </Typography>
            
            <Grid container spacing={4}>
              {relatedProducts.map((relatedProduct) => (
                <Grid item xs={12} sm={6} md={4} key={relatedProduct.id}>
                  <Box className="related-product-card">
                    <Link to={`/product/${relatedProduct.id}`} className="product-link">
                      <img 
                        src={`../${relatedProduct.images[0]}`} 
                        alt={relatedProduct.name} 
                        className="related-product-image"
                        style={{ height: "150px", maxWidth: "100%", objectFit: "contain", margin: "0 auto", display: "block" }}
                      />
                      <Box className="related-product-info">
                        <Typography variant="h6" className="related-product-name">
                          {relatedProduct.name}
                        </Typography>
                        <Typography variant="subtitle1" className="related-product-price">
                          ${relatedProduct.price.toFixed(2)}
                        </Typography>
                      </Box>
                    </Link>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </div>
  );
};

export default ProductPage;
