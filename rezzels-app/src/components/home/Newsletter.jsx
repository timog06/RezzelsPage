import { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Paper, TextField } from '@mui/material';
import { Send } from '@mui/icons-material';
import '../../styles/components/home/Newsletter.scss';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscriberCount, setSubscriberCount] = useState(957);
  const [showThankYou, setShowThankYou] = useState(false);
  const [emailError, setEmailError] = useState(false);
  
  useEffect(() => {
    // Load subscriber count from localStorage
    const storedCount = localStorage.getItem('rezzelsSubscriberCount');
    if (storedCount) {
      setSubscriberCount(parseInt(storedCount, 10));
    } else {
      // Initialize with default count
      localStorage.setItem('rezzelsSubscriberCount', subscriberCount.toString());
    }
    
    // Auto-increment counter every millisecond for a fast effect
    const interval = setInterval(() => {
      setSubscriberCount(prevCount => {
        const newCount = prevCount + 1;
        localStorage.setItem('rezzelsSubscriberCount', newCount.toString());
        return newCount;
      });
    }, 1);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
  };
  
  const handleSubscribe = () => {
    // Validate email
    if (!email || !email.includes('@')) {
      setEmailError(true);
      return;
    }
    
    // Increment subscriber count
    const newCount = subscriberCount + 1;
    setSubscriberCount(newCount);
    localStorage.setItem('rezzelsSubscriberCount', newCount.toString());
    
    // Show thank you message
    setShowThankYou(true);
    
    // Reset form
    setEmail('');
    
    // Hide thank you message after 5 seconds
    setTimeout(() => {
      setShowThankYou(false);
    }, 5000);
  };
  
  return (
    <section className="newsletter-section section">
      <Container maxWidth="md">
        <Paper elevation={3} className="newsletter-container">
          <Typography variant="h2" className="section-title text-center">
            Join Our Community
          </Typography>
          
          <Typography variant="body1" className="newsletter-text text-center">
            Subscribe to our newsletter to receive exclusive offers, new product announcements, and styling tips.
          </Typography>
          
          <Box className="subscriber-count">
            <Typography variant="body2">
              Join our <strong className="count-number">{subscriberCount}</strong> subscribers
            </Typography>
          </Box>
          
          <Box className="newsletter-form">
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Your email address"
              value={email}
              onChange={handleEmailChange}
              error={emailError}
              helperText={emailError ? "Please enter a valid email" : ""}
              className="newsletter-input"
              margin="normal"
            />
            <Button 
              variant="contained"
              className="newsletter-button"
              onClick={handleSubscribe}
              endIcon={<Send />}
              fullWidth
            >
              Subscribe Now
            </Button>
          </Box>
          
          {showThankYou ? (
            <Typography variant="body2" className="thank-you-message">
              Thank you for subscribing! We've sent a confirmation to your email.
            </Typography>
          ) : (
            <Typography variant="body2" className="info-message">
              Enter your email to join our community!
            </Typography>
          )}
        </Paper>
      </Container>
    </section>
  );
};

export default Newsletter;
