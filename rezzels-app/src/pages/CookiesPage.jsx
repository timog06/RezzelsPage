import { Container, Typography, Box, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';
import '../styles/pages/LegalPages.scss';

const CookiesPage = () => {
  return (
    <Container maxWidth="md" className="legal-page">
      <Paper elevation={3} className="legal-container">
        <Typography variant="h2" className="legal-title">
          Cookie Policy
        </Typography>
        <Typography variant="subtitle1" className="legal-subtitle">
          (No, Not the Chocolate Chip Kind)
        </Typography>
        
        <Divider className="legal-divider" />
        
        <Box className="legal-section">
          <Typography variant="h4" className="section-title">
            1. What Are Cookies? (Digital Stalkers)
          </Typography>
          <Typography variant="body1" className="section-text">
            Cookies are tiny spies we place on your device to track your every move, thought, and potential purchase. Think of them as little digital stalkers that follow you around the internet, taking detailed notes about everything you do. Creepy? Absolutely! Legal? Somehow, yes!
          </Typography>
          <Typography variant="body1" className="section-text">
            Unlike real cookies, ours don't taste good and provide zero nutritional value. They do, however, feed our insatiable hunger for your personal data.
          </Typography>
        </Box>
        
        <Box className="legal-section">
          <Typography variant="h4" className="section-title">
            2. Types of Cookies We Use (All of Them)
          </Typography>
          <Typography variant="body1" className="section-text">
            <strong>Essential Cookies:</strong> These are "essential" for us to invade your privacy. Without them, how would we know what you had for breakfast?
          </Typography>
          <Typography variant="body1" className="section-text">
            <strong>Performance Cookies:</strong> These measure how quickly you get annoyed by our pop-ups and how many times you try to close them before giving up.
          </Typography>
          <Typography variant="body1" className="section-text">
            <strong>Functionality Cookies:</strong> These remember your preferences, like your favorite color, your childhood pet's name, and the answers to your security questions. You know, for "functionality."
          </Typography>
          <Typography variant="body1" className="section-text">
            <strong>Targeting Cookies:</strong> These follow you around the internet like a clingy ex, reminding you of that one product you looked at for 2 seconds three weeks ago.
          </Typography>
          <Typography variant="body1" className="section-text">
            <strong>Third-Party Cookies:</strong> We invite all our friends to place their cookies on your device too! The more the merrier! It's like a cookie party, and your device is the unwilling host.
          </Typography>
          <Typography variant="body1" className="section-text">
            <strong>Experimental Mind-Control Cookies:</strong> Still in beta testing. Please ignore any sudden urges to buy our entire inventory.
          </Typography>
        </Box>
        
        <Box className="legal-section">
          <Typography variant="h4" className="section-title">
            3. How to Manage Cookies (Good Luck With That)
          </Typography>
          <Typography variant="body1" className="section-text">
            You can theoretically manage your cookie preferences by navigating our intentionally confusing settings menu. We've designed it to be so complicated that you'll eventually give up and just click "Accept All." Our UX designer was previously employed by a labyrinth construction company.
          </Typography>
          <Typography variant="body1" className="section-text">
            If you somehow figure out how to disable our cookies, don't worry—we have backup tracking methods, including but not limited to browser fingerprinting, device tracking, and a small team of psychics who can predict your shopping habits.
          </Typography>
        </Box>
        
        <Box className="legal-section">
          <Typography variant="h4" className="section-title">
            4. Cookie Lifespan (Longer Than Some Marriages)
          </Typography>
          <Typography variant="body1" className="section-text">
            Our cookies have impressive lifespans. Some stick around for a session, others for a few months, and our special "Forever Cookies" will outlive human civilization. Archaeologists in the year 3000 will dig up your device and still find our cookies tracking your long-forgotten purchase of a hoodie.
          </Typography>
          <Typography variant="body1" className="section-text">
            We're particularly proud of our "Zombie Cookies" that resurrect themselves even after you delete them. They're like the horror movie villain that keeps coming back no matter how many times you think you've defeated them.
          </Typography>
        </Box>
        
        <Box className="legal-section">
          <Typography variant="h4" className="section-title">
            5. Changes to This Policy (Whenever We Feel Like It)
          </Typography>
          <Typography variant="body1" className="section-text">
            We reserve the right to change this policy at any time without notifying you. We might add new types of cookies, remove old ones, or replace them all with something even more invasive. It's like a surprise party, but for privacy violations!
          </Typography>
          <Typography variant="body1" className="section-text">
            We recommend checking this policy every 15 minutes to stay updated. Or don't. It doesn't matter because you've already accepted our cookies anyway.
          </Typography>
        </Box>
        
        <Box className="legal-section">
          <Typography variant="h4" className="section-title">
            6. Here's an Actual Cookie
          </Typography>
          <Typography variant="body1" className="section-text">
            Since you've made it this far into our cookie policy, we figured you deserve an actual cookie. Here you go:
          </Typography>
          <Box sx={{ textAlign: 'center', my: 3 }}>
            <Typography 
              variant="h1" 
              component="a"
              href="https://pranx.com/hacker/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                fontSize: '100px', 
                textDecoration: 'none',
                cursor: 'pointer',
                display: 'inline-block',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)'
                }
              }}
            >
              🍪
            </Typography>
            <Typography variant="body2" sx={{ fontStyle: 'italic', mt: 1 }}>
              (Don't worry, this one won't track you... probably. Click it!)
            </Typography>
          </Box>
          <Typography variant="body1" className="section-text">
            Enjoy your digital cookie! It has zero calories and only collects a moderate amount of your personal data. What a bargain!
          </Typography>
        </Box>
        
        <Box className="legal-section">
          <Typography variant="h4" className="section-title">
            7. Contact Us About Cookies
          </Typography>
          <Typography variant="body1" className="section-text">
            Have questions about our cookies? Feel free to contact our Cookie Compliance Officer at dontcare@rezzels.com. All emails are automatically sorted into our special folder labeled "Hilarious Privacy Concerns" that we read at company parties for entertainment.
          </Typography>
          <Typography variant="body1" className="section-text">
            If you've read this entire cookie policy, congratulations! You're either extremely bored or a privacy advocate. Either way, use code "COOKIEMONSTER" for a 1% discount that we'll pretend doesn't work when you try to use it.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default CookiesPage;
