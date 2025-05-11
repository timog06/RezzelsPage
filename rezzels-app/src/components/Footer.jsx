import { Link } from 'react-router-dom';
import { Container, Grid, Typography, Box, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import '../styles/components/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="footer-heading">REZZELS</Typography>
            <Typography variant="body2" className="footer-text">
              Stylish and sustainable clothing for everyone. Our mission is to provide high-quality, 
              eco-friendly fashion that makes you look good and feel good.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="footer-heading">About</Typography>
            <ul className="footer-links">
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/jobs">Jobs</Link></li>
            </ul>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="footer-heading">Shop</Typography>
            <ul className="footer-links">
              <li><Link to="/shop?category=hoodies">Hoodies</Link></li>
              <li><Link to="/shop?category=sweaters">Sweaters</Link></li>
              <li><Link to="/shop?category=t-shirts">T-Shirts</Link></li>
              <li><Link to="/shop?category=accessories">Accessories</Link></li>
            </ul>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="footer-heading">Legal</Typography>
            <ul className="footer-links">
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/gdpr">GDPR</Link></li>
              <li><Link to="/cookies">Cookies</Link></li>
            </ul>
          </Grid>
        </Grid>
        
        <Box className="footer-bottom">
          <Box className="social-icons">
            <IconButton aria-label="facebook" className="social-icon">
              <Facebook />
            </IconButton>
            <IconButton aria-label="twitter" className="social-icon">
              <Twitter />
            </IconButton>
            <IconButton aria-label="instagram" className="social-icon">
              <Instagram />
            </IconButton>
            <IconButton aria-label="linkedin" className="social-icon">
              <LinkedIn />
            </IconButton>
          </Box>
          
          <Typography variant="body2" className="copyright">
            &copy; {new Date().getFullYear()} Rezzels. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
