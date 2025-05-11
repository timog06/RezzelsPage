import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, Container, InputBase } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon, ShoppingBag as ShoppingBagIcon } from '@mui/icons-material';
import '../styles/components/Header.scss';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Team', path: '/team' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} className="mobile-menu">
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} component={Link} to={item.path} className={isActive(item.path)}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" className="header">
      <Container maxWidth="lg">
        <Toolbar className="toolbar">
          <Box className="logo-container">
            <Typography
              variant="h6"
              component={Link}
              to="/"
              className="logo"
            >
              REZZELS
            </Typography>
          </Box>

          <Box className="desktop-menu">
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={Link}
                to={item.path}
                className={`nav-link ${isActive(item.path)}`}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          <Box className="search-cart">
            <Box className="search-box">
              <SearchIcon className="search-icon" />
              <InputBase
                placeholder="Search…"
                className="search-input"
              />
            </Box>
            <IconButton
              color="inherit"
              aria-label="shopping bag"
              component={Link}
              to="/shop"
              className="cart-button"
            >
              <ShoppingBagIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className="menu-button"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        className="drawer"
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;
