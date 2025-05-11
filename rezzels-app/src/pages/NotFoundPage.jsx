import { Link } from 'react-router-dom';
import { Container, Typography, Box, Button } from '@mui/material';
import { Home, Search } from '@mui/icons-material';
import '../styles/pages/NotFoundPage.scss';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <Container maxWidth="md">
        <Box className="not-found-content">
          <Typography variant="h1" className="error-code">
            404
          </Typography>
          <Typography variant="h3" className="error-title">
            Page Not Found
          </Typography>
          <Typography variant="body1" className="error-message">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </Typography>
          
          <Box className="action-buttons">
            <Button 
              component={Link} 
              to="/" 
              variant="contained" 
              startIcon={<Home />}
              className="home-button"
            >
              Back to Home
            </Button>
            <Button 
              component={Link} 
              to="/shop" 
              variant="outlined" 
              startIcon={<Search />}
              className="shop-button"
            >
              Browse Shop
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default NotFoundPage;
