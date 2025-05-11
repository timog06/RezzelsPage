import { Container, Typography, Box, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';
import '../styles/pages/LegalPages.scss';

const TermsPage = () => {
  return (
    <Container maxWidth="md" className="legal-page">
      <Paper elevation={3} className="legal-container">
        <Typography variant="h2" className="legal-title">
          Terms & Conditions
        </Typography>
        <Typography variant="subtitle1" className="legal-subtitle">
          Last Updated: {new Date().toLocaleDateString()} (We update these every 12 minutes)
        </Typography>
        
        <Divider className="legal-divider" />
        
        <Box className="legal-section">
          <Typography variant="h4" className="section-title">
            1. Introduction (The Part No One Reads)
          </Typography>
          <Typography variant="body1" className="section-text">
            Welcome to Rezzels, where we pretend to care about your rights while secretly plotting world domination through fashionable hoodies. By using our website, you agree to these ridiculous terms that we've made intentionally long and boring so you'll just click "Accept" without reading.
          </Typography>
          <Typography variant="body1" className="section-text">
            Seriously, we know you're not reading this. Our legal team spent 47 hours writing this document, and you'll spend approximately 0.3 seconds before clicking "Accept." We could literally say we own your firstborn child, and you'd still agree.
          </Typography>
        </Box>
        
        <Box className="legal-section">
          <Typography variant="h4" className="section-title">
            2. Your Soul Is Ours (Ownership Rights)
          </Typography>
          <Typography variant="body1" className="section-text">
            By purchasing any Rezzels product, you hereby surrender your immortal soul to our corporate overlords. Don't worry, we'll take good care of it! We'll only use it for minor things like summoning demons or powering our office coffee machine.
          </Typography>
          <Typography variant="body1" className="section-text">
            Additionally, any compliments you receive while wearing our products legally belong to us. If someone says "Nice shirt!" you are contractually obligated to respond with "Thanks, it's from Rezzels, the greatest clothing company in the multiverse!"
          </Typography>
        </Box>
        
        <Box className="legal-section">
          <Typography variant="h4" className="section-title">
            3. Payment Terms (How We Take Your Money)
          </Typography>
          <Typography variant="body1" className="section-text">
            We accept all major credit cards, PayPal, cryptocurrency, rare Pokémon cards, and your undying loyalty. All prices are subject to change based on our CEO's mood, the alignment of the planets, and whether Mercury is in retrograde.
          </Typography>
          <Typography variant="body1" className="section-text">
            By the way, every time you visit our website without buying something, we add $0.50 to your "guilt tab," which will be automatically charged to your account when it reaches $100. This is totally legal because you agreed to these terms!
          </Typography>
        </Box>
        
        <Box className="legal-section">
          <Typography variant="h4" className="section-title">
            4. Returns & Refunds (LOL, Good Luck)
          </Typography>
          <Typography variant="body1" className="section-text">
            All sales are final unless you can beat our Customer Service Director in a game of competitive rock-paper-scissors (best of 7). Return requests must be submitted in triplicate, written in purple ink, and delivered by carrier pigeon.
          </Typography>
          <Typography variant="body1" className="section-text">
            If by some miracle we do accept your return, we'll refund your purchase in "Rezzel Bucks," our proprietary currency that can only be used to buy more Rezzels products. The exchange rate is determined by a complex algorithm involving dice rolls and a Magic 8-Ball.
          </Typography>
        </Box>
        
        <Box className="legal-section">
          <Typography variant="h4" className="section-title">
            5. Warranty (Our Ironclad Promise*)
          </Typography>
          <Typography variant="body1" className="section-text">
            We guarantee our products will last forever** or until they don't. If your Rezzels product spontaneously combusts, transforms into a small woodland creature, or develops sentience, that's not a defect—it's a feature!
          </Typography>
          <Typography variant="body1" className="section-text">
            * Not actually ironclad<br />
            ** "Forever" is defined as "approximately 3 weeks"
          </Typography>
        </Box>
        
        <Box className="legal-section">
          <Typography variant="h4" className="section-title">
            6. Conclusion (The End... Or Is It?)
          </Typography>
          <Typography variant="body1" className="section-text">
            By continuing to use our website, you acknowledge that you haven't read a single word of this agreement and are blindly accepting whatever ridiculous terms we've included. We respect your honesty.
          </Typography>
          <Typography variant="body1" className="section-text">
            If you've actually read this far, congratulations! You're one of the 0.0001% of users who do. As a reward, use the code "IACTUALLYREADTHETERMS" for a 5% discount on your next purchase. Our marketing team bet this would never be used, so prove them wrong!
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default TermsPage;
