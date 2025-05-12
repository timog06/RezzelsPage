import { useState } from 'react';
import { Container, Typography, Grid, Box, TextField, Button, Paper, Alert } from '@mui/material';
import { Email, Phone, LocationOn, Send } from '@mui/icons-material';
import '../styles/pages/ContactPage.scss';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill in all required fields.'
      });
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you for your message! We will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };
  
  return (
    <div className="contact-page">
      <Container maxWidth="lg">
        <Box className="page-header">
          <Typography variant="h2" className="page-title">
            Contact Us
          </Typography>
          <Typography variant="body1" className="page-subtitle">
            We'd love to hear from you. Get in touch with our team.
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={5} className="contact-info-wrapper">
            <Paper elevation={3} className="contact-info">
              <Typography variant="h4" className="info-title">
                Get In Touch
              </Typography>
              
              <Box className="info-item">
                <Email className="info-icon" />
                <Box className="info-content">
                  <Typography variant="h6" className="info-label">
                    Email Us
                  </Typography>
                  <Typography variant="body1" className="info-text">
                    <a href="mailto:info@rezzels.com">info@rezzels.com</a>
                  </Typography>
                </Box>
              </Box>
              
              <Box className="info-item">
                <Phone className="info-icon" />
                <Box className="info-content">
                  <Typography variant="h6" className="info-label">
                    Call Us
                  </Typography>
                  <Typography variant="body1" className="info-text">
                    <a href="tel:+41123456789">+41 12 345 67 89</a>
                  </Typography>
                </Box>
              </Box>
              
              <Box className="info-item">
                <LocationOn className="info-icon" />
                <Box className="info-content">
                  <Typography variant="h6" className="info-label">
                    Visit Us
                  </Typography>
                  <Typography variant="body1" className="info-text">
                    Bahnhofstrasse 123<br />
                    8001 Zürich<br />
                    Switzerland
                  </Typography>
                </Box>
              </Box>
              
              <Box className="business-hours">
                <Typography variant="h6" className="hours-title">
                  Business Hours
                </Typography>
                <Typography variant="body2" className="hours-text">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </Typography>
              </Box>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={7} className="contact-form-wrapper">
            <Paper elevation={3} className="contact-form-container">
              <Typography variant="h4" className="form-title">
                Send Us a Message
              </Typography>
              
              {formStatus.submitted && (
                <Alert 
                  severity={formStatus.success ? "success" : "error"}
                  className="form-alert"
                >
                  {formStatus.message}
                </Alert>
              )}
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      multiline
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      className="submit-button"
                      startIcon={<Send />}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
        
        <Box className="map-container">
          <Typography variant="h4" className="map-title">
            Find Us
          </Typography>
          <Box className="map-placeholder">
            <Typography variant="body1" className="map-text">
              Map will be displayed here
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default ContactPage;
