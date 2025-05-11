import { Container, Typography, Box } from '@mui/material';
import '../styles/pages/LegalPages.scss';

const TermsPage = () => {
  return (
    <div className="legal-page">
      <Container maxWidth="lg">
        <Box className="page-header">
          <Typography variant="h2" className="page-title">
            Terms and Conditions
          </Typography>
          <Typography variant="body1" className="page-subtitle">
            Please read these terms carefully before using our website and services
          </Typography>
        </Box>
        
        <Box className="legal-content">
          <Typography variant="body1" className="legal-intro">
            Welcome to Rezzels. By accessing or using our website, you agree to be bound by these Terms and 
            Conditions. If you do not agree with any part of these terms, please do not use our website.
          </Typography>
          
          <Box className="legal-section">
            <Typography variant="h5" className="section-title">
              1. Acceptance of Terms
            </Typography>
            <Typography variant="body1" className="section-content">
              By accessing or using the Rezzels website, you acknowledge that you have read, understood, and 
              agree to be bound by these Terms and Conditions. These terms may be updated from time to time, 
              and it is your responsibility to review them periodically.
            </Typography>
          </Box>
          
          <Box className="legal-section">
            <Typography variant="h5" className="section-title">
              2. Use of Website
            </Typography>
            <Typography variant="body1" className="section-content">
              You agree to use our website only for lawful purposes and in a way that does not infringe upon 
              the rights of others or restrict their use of the website. Prohibited activities include but are 
              not limited to:
            </Typography>
            <ul className="legal-list">
              <li>Using the website for any illegal purpose</li>
              <li>Attempting to gain unauthorized access to any part of the website</li>
              <li>Transmitting malware, viruses, or other harmful code</li>
              <li>Scraping, data mining, or other data extraction methods</li>
              <li>Impersonating another person or entity</li>
            </ul>
          </Box>
          
          <Box className="legal-section">
            <Typography variant="h5" className="section-title">
              3. Account Registration
            </Typography>
            <Typography variant="body1" className="section-content">
              To access certain features of our website, you may need to create an account. You are responsible 
              for maintaining the confidentiality of your account information and for all activities that occur 
              under your account. You agree to provide accurate and complete information when creating an account 
              and to update your information as necessary.
            </Typography>
          </Box>
          
          <Box className="legal-section">
            <Typography variant="h5" className="section-title">
              4. Products and Purchases
            </Typography>
            <Typography variant="body1" className="section-content">
              All products displayed on our website are subject to availability. We reserve the right to 
              discontinue any product at any time. Prices are subject to change without notice. We make every 
              effort to display accurate product information, but we do not warrant that product descriptions, 
              colors, or other content on the website are accurate, complete, or error-free.
            </Typography>
          </Box>
          
          <Box className="legal-section">
            <Typography variant="h5" className="section-title">
              5. Payment and Shipping
            </Typography>
            <Typography variant="body1" className="section-content">
              We accept various payment methods as indicated on our website. All payments are processed securely. 
              Shipping costs and delivery times vary depending on your location and the shipping method selected. 
              We are not responsible for delays in delivery due to customs or other factors beyond our control.
            </Typography>
          </Box>
          
          <Box className="legal-section">
            <Typography variant="h5" className="section-title">
              6. Returns and Refunds
            </Typography>
            <Typography variant="body1" className="section-content">
              We accept returns within 30 days of purchase for items in their original condition. Please refer 
              to our Returns Policy for detailed information on how to return items and receive refunds.
            </Typography>
          </Box>
          
          <Box className="legal-section">
            <Typography variant="h5" className="section-title">
              7. Intellectual Property
            </Typography>
            <Typography variant="body1" className="section-content">
              All content on the Rezzels website, including but not limited to text, graphics, logos, images, 
              and software, is the property of Rezzels or its content suppliers and is protected by international 
              copyright laws. Unauthorized use of any content may violate copyright, trademark, and other laws.
            </Typography>
          </Box>
          
          <Box className="legal-section">
            <Typography variant="h5" className="section-title">
              8. Limitation of Liability
            </Typography>
            <Typography variant="body1" className="section-content">
              Rezzels shall not be liable for any direct, indirect, incidental, special, consequential, or 
              punitive damages arising out of your access to or use of our website or products. In no event 
              shall our total liability to you for all damages exceed the amount paid by you, if any, for 
              accessing our website or purchasing our products.
            </Typography>
          </Box>
          
          <Box className="legal-section">
            <Typography variant="h5" className="section-title">
              9. Governing Law
            </Typography>
            <Typography variant="body1" className="section-content">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of 
              Switzerland, without regard to its conflict of law provisions. Any dispute arising under these 
              terms shall be resolved exclusively in the courts of Zürich, Switzerland.
            </Typography>
          </Box>
          
          <Box className="legal-section">
            <Typography variant="h5" className="section-title">
              10. Contact Information
            </Typography>
            <Typography variant="body1" className="section-content">
              If you have any questions about these Terms and Conditions, please contact us at:
            </Typography>
            <Typography variant="body1" className="contact-info">
              Email: legal@rezzels.com<br />
              Address: Bahnhofstrasse 123, 8001 Zürich, Switzerland<br />
              Phone: +41 12 345 67 89
            </Typography>
          </Box>
        </Box>
        
        <Box className="legal-footer">
          <Typography variant="body2">
            Last updated: May 11, 2025
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default TermsPage;
