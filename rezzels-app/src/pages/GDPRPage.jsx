import { Container, Typography, Box, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';
import '../styles/pages/LegalPages.scss';

const GDPRPage = () => {
  return (
    <Container maxWidth="md" className="legal-page">
      <Paper elevation={3} className="legal-container">
        <Typography variant="h2" className="legal-title">
          GDPR Compliance
        </Typography>
        <Typography variant="subtitle1" className="legal-subtitle">
          (Or How We Pretend to Care About Your Privacy)
        </Typography>
        
        <Divider className="legal-divider" />
        
        <Box className="legal-section">
          <Typography variant="h4" className="section-title">
            1. Data Collection (Everything. We Collect EVERYTHING.)
          </Typography>
          <Typography variant="body1" className="section-text">
            At Rezzels, we're committed to collecting every possible piece of data about you, including but not limited to: your browsing history, what you had for breakfast, your deepest fears, and that embarrassing thing you did at your friend's wedding in 2016 (yes, we know about that).
          </Typography>
          <Typography variant="body1" className="section-text">
            We use cutting-edge technology to track your every move, including our proprietary "Mind-Reading Cookies" that can detect what you're thinking about buying before you even know you want it. It's not invasive; it's innovative!
          </Typography>
        </Box>
        
        <Box className="legal-section">
          <Typography variant="h4" className="section-title">
            2. How We Use Your Data (Spoiler: We Sell It)
          </Typography>
          <Typography variant="body1" className="section-text">
            Your personal data is incredibly valuable to us—so valuable that we sell it to the highest bidder! We've established a thriving marketplace where companies can bid on your information. The current record is $3.50 for a complete psychological profile of a user who spent 47 minutes deciding whether to buy a black or navy hoodie.
          </Typography>
          <Typography variant="body1" className="section-text">
            We also use your data to create eerily accurate targeted ads that will follow you around the internet like a clingy ex. That product you looked at once? Prepare to see it in your dreams.
          </Typography>
        </Box>
        
        <Box className="legal-section">
          <Typography variant="h4" className="section-title">
            3. Data Security (We Use a Password: "password123")
          </Typography>
          <Typography variant="body1" className="section-text">
            We store all your sensitive information in a secure Excel spreadsheet on our intern's laptop. Don't worry, it's protected by a sticky note that says "DO NOT OPEN" on the screen. For extra security, we've instructed all employees to look both ways before sharing your data with third parties.
          </Typography>
          <Typography variant="body1" className="section-text">
            In the unlikely event of a data breach (which happens every Tuesday between 2-4 PM), we'll notify you within 5-7 business years. Or whenever we feel like it. Probably never, actually.
          </Typography>
        </Box>
        
        <Box className="legal-section">
          <Typography variant="h4" className="section-title">
            4. Your Rights Under GDPR (Theoretically)
          </Typography>
          <Typography variant="body1" className="section-text">
            According to the GDPR, you have the right to access, correct, or delete your personal data. To exercise these rights, simply solve this captcha that requires identifying quantum particles, translate your request into ancient Sumerian, and send it via carrier pigeon to our office in Antarctica.
          </Typography>
          <Typography variant="body1" className="section-text">
            Alternatively, you can fill out our "Data Subject Request Form," which automatically redirects to a 404 page. We're working on fixing this issue (we're not).
          </Typography>
        </Box>
        
        <Box className="legal-section">
          <Typography variant="h4" className="section-title">
            5. International Data Transfers (Frequent Flyer Miles for Your Data)
          </Typography>
          <Typography variant="body1" className="section-text">
            Your data loves to travel! We regularly send it on exotic vacations to countries with zero privacy laws. Your personal information has probably seen more of the world than you have. It's currently sipping cocktails on a beach somewhere, being shared freely with anyone who walks by.
          </Typography>
          <Typography variant="body1" className="section-text">
            We use state-of-the-art security for these transfers, like password-protected ZIP files and emails with "CONFIDENTIAL" in the subject line. That's basically military-grade encryption, right?
          </Typography>
        </Box>
        
        <Box className="legal-section">
          <Typography variant="h4" className="section-title">
            6. Contact Our Data Protection Officer
          </Typography>
          <Typography variant="body1" className="section-text">
            Questions about your privacy? Our Data Protection Officer, Dave (who is actually just a houseplant with googly eyes), is here to help! You can reach Dave by shouting your concerns into the void or by sending an email to blackhole@rezzels.com.
          </Typography>
          <Typography variant="body1" className="section-text">
            If you've actually read this entire policy, you're either a privacy lawyer or have way too much free time. Either way, use code "PRIVACYPARANOID" for a 2% discount that we'll immediately cancel if you try to use it.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default GDPRPage;
