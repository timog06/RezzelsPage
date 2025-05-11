import { Container, Typography, Box, Paper } from '@mui/material';
import '../styles/pages/LegalPages.scss';

const CookiesPage = () => {
  return (
    <div className="legal-page">
      <Container maxWidth="lg">
        <Box className="page-header">
          <Typography variant="h2" className="page-title">
            Cookies Policy
          </Typography>
          <Typography variant="body1" className="page-subtitle">
            Information about how we use cookies on our website
          </Typography>
        </Box>
        
        <Box className="legal-content">
          <Paper elevation={3} className="cookie-message">
            <Typography variant="h4" className="cookie-title">
              Here's a Cookie! 🍪
            </Typography>
            <Typography variant="body1" className="cookie-text">
              We promised you a cookie, and we delivered! Enjoy this virtual cookie while you learn about 
              our actual cookie policy below.
            </Typography>
          </Paper>
          
          <Box className="legal-section">
            <Typography variant="h5" className="section-title">
              What Are Cookies?
            </Typography>
            <Typography variant="body1" className="section-content">
              Cookies are small text files that are placed on your device when you visit a website. They are 
              widely used to make websites work more efficiently and provide information to the website owners. 
              Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device when 
              you go offline, while session cookies are deleted as soon as you close your web browser.
            </Typography>
          </Box>
          
          <Box className="legal-section">
            <Typography variant="h5" className="section-title">
              How We Use Cookies
            </Typography>
            <Typography variant="body1" className="section-content">
              We use cookies for various purposes, including:
            </Typography>
            <ul className="legal-list">
              <li>
                <strong>Essential Cookies:</strong> These are necessary for the website to function properly 
                and cannot be switched off in our systems. They are usually only set in response to actions 
                made by you which amount to a request for services, such as setting your privacy preferences, 
                logging in, or filling in forms.
              </li>
              <li>
                <strong>Performance Cookies:</strong> These allow us to count visits and traffic sources so 
                we can measure and improve the performance of our site. They help us to know which pages are 
                the most and least popular and see how visitors move around the site.
              </li>
              <li>
                <strong>Functional Cookies:</strong> These enable the website to provide enhanced functionality 
                and personalization. They may be set by us or by third-party providers whose services we have 
                added to our pages.
              </li>
              <li>
                <strong>Targeting Cookies:</strong> These may be set through our site by our advertising partners. 
                They may be used by those companies to build a profile of your interests and show you relevant 
                advertisements on other sites.
              </li>
            </ul>
          </Box>
          
          <Box className="legal-section">
            <Typography variant="h5" className="section-title">
              Managing Cookies
            </Typography>
            <Typography variant="body1" className="section-content">
              Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse 
              cookies, or to alert you when cookies are being sent. The methods for doing so vary from browser 
              to browser, and from version to version. You can obtain up-to-date information about blocking and 
              deleting cookies via the support pages of your browser:
            </Typography>
            <ul className="legal-list">
              <li>Chrome: <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">https://support.google.com/chrome/answer/95647</a></li>
              <li>Firefox: <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer">https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop</a></li>
              <li>Safari: <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer">https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac</a></li>
              <li>Edge: <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09</a></li>
            </ul>
            <Typography variant="body1" className="section-content">
              Please note that restricting cookies may impact the functionality of our website.
            </Typography>
          </Box>
          
          <Box className="legal-section">
            <Typography variant="h5" className="section-title">
              Changes to Our Cookie Policy
            </Typography>
            <Typography variant="body1" className="section-content">
              We may update our Cookie Policy from time to time. Any changes will be posted on this page, and 
              if the changes are significant, we will provide a more prominent notice.
            </Typography>
          </Box>
          
          <Box className="legal-section">
            <Typography variant="h5" className="section-title">
              Contact Us
            </Typography>
            <Typography variant="body1" className="section-content">
              If you have any questions about our Cookie Policy, please contact us at:
            </Typography>
            <Typography variant="body1" className="contact-info">
              Email: privacy@rezzels.com<br />
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

export default CookiesPage;
