import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Container, Typography, Grid, Box, Card, CardMedia, CardContent, Button, FormControl, InputLabel, Select, MenuItem, TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon, FilterList as FilterIcon } from '@mui/icons-material';
import productsData from '../data/products.json';
import '../styles/pages/ShopPage.scss';

const ShopPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState(categoryParam || 'all');
  const [sortBy, setSortBy] = useState('default');
  
  const categories = ['all', ...new Set(productsData.map(product => product.category))];
  
  useEffect(() => {
    setProducts(productsData);
    filterProducts(searchTerm, category, sortBy);
  }, []);
  
  useEffect(() => {
    filterProducts(searchTerm, category, sortBy);
  }, [searchTerm, category, sortBy]);
  
  const filterProducts = (search, cat, sort) => {
    let filtered = [...productsData];
    
    // Filter by search term
    if (search) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    // Filter by category
    if (cat && cat !== 'all') {
      filtered = filtered.filter(product => product.category === cat);
    }
    
    // Sort products
    switch (sort) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Default sorting (by id)
        filtered.sort((a, b) => a.id - b.id);
    }
    
    setFilteredProducts(filtered);
  };
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };
  
  return (
    <div className="shop-page">
      <Container maxWidth="lg">
        <Typography variant="h2" className="page-title">
          Shop Collection
        </Typography>
        
        <Box className="filter-section">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Category</InputLabel>
                <Select
                  value={category}
                  onChange={handleCategoryChange}
                  label="Category"
                  startAdornment={
                    <InputAdornment position="start">
                      <FilterIcon />
                    </InputAdornment>
                  }
                >
                  {categories.map((cat) => (
                    <MenuItem key={cat} value={cat}>
                      {cat === 'all' ? 'All Categories' : cat}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Sort By</InputLabel>
                <Select
                  value={sortBy}
                  onChange={handleSortChange}
                  label="Sort By"
                >
                  <MenuItem value="default">Default</MenuItem>
                  <MenuItem value="price-low">Price: Low to High</MenuItem>
                  <MenuItem value="price-high">Price: High to Low</MenuItem>
                  <MenuItem value="name-asc">Name: A to Z</MenuItem>
                  <MenuItem value="name-desc">Name: Z to A</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
        
        <Box className="products-section">
          {filteredProducts.length === 0 ? (
            <Typography variant="h5" className="no-products">
              No products found. Try a different search or category.
            </Typography>
          ) : (
            <Grid container spacing={4}>
              {filteredProducts.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
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
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default ShopPage;
