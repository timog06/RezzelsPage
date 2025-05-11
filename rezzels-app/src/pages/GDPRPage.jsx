import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import '../styles/pages/LegalPages.scss';

const GDPRPage = () => {
  return (
    <div className="legal-page">
      <Container maxWidth="lg">
        <Box className="page-header">
          <Typography variant="h2" className="page-title">
            GDPR Compliance
          </Typography>
          <Typography variant="body1" className="page-subtitle">
            How we protect your data and comply with GDPR regulations
          </Typography>
        </Box>
        
        <Box className="legal-content">
          <Typography variant="body1" className="legal-intro">
            At Rezzels, we are committed to protecting your personal data and ensuring compliance with the 
            General Data Protection Regulation (GDPR). This page explains how we collect, process, and 
            protect your personal information.
          </Typography>
          
          <Accordion className="legal-accordion">
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">What is GDPR?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                The General Data Protection Regulation (GDPR) is a regulation in EU law on data protection 
                and privacy for all individuals within the European Union and the European Economic Area. 
                It addresses the export of personal data outside the EU and EEA areas.
              </Typography>
            </AccordionDetails>
          </Accordion>
          
          <Accordion className="legal-accordion">
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">What Personal Data Do We Collect?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                We may collect the following personal data:
              </Typography>
              <ul>
                <li>Contact information (name, email address, phone number, shipping address)</li>
                <li>Account information (username, password)</li>
                <li>Transaction information (purchase history, payment details)</li>
                <li>Technical information (IP address, browser type, device information)</li>
                <li>Usage information (how you interact with our website)</li>
              </ul>
            </AccordionDetails>
          </Accordion>
          
          <Accordion className="legal-accordion">
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">How Do We Use Your Personal Data?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                We use your personal data for the following purposes:
              </Typography>
              <ul>
                <li>To process and fulfill your orders</li>
                <li>To manage your account</li>
                <li>To communicate with you about your orders and account</li>
                <li>To provide customer support</li>
                <li>To improve our website and services</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To comply with legal obligations</li>
              </ul>
            </AccordionDetails>
          </Accordion>
          
          <Accordion className="legal-accordion">
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Your Rights Under GDPR</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Under GDPR, you have the following rights:
              </Typography>
              <ul>
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate personal data</li>
                <li>Right to erasure of your personal data</li>
                <li>Right to restrict processing of your personal data</li>
                <li>Right to data portability</li>
                <li>Right to object to processing of your personal data</li>
                <li>Right to withdraw consent at any time</li>
              </ul>
              <Typography variant="body1">
                To exercise any of these rights, please contact us at privacy@rezzels.com.
              </Typography>
            </AccordionDetails>
          </Accordion>
          
          <Accordion className="legal-accordion">
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Data Security</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                We implement appropriate technical and organizational measures to protect your personal data 
                against unauthorized or unlawful processing, accidental loss, destruction, or damage. We 
                regularly review and update our security measures to ensure the highest level of protection.
              </Typography>
            </AccordionDetails>
          </Accordion>
          
          <Accordion className="legal-accordion">
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Data Retention</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                We retain your personal data only for as long as necessary to fulfill the purposes for which 
                it was collected, including for the purposes of satisfying any legal, accounting, or reporting 
                requirements.
              </Typography>
            </AccordionDetails>
          </Accordion>
          
          <Accordion className="legal-accordion">
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Contact Us</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                If you have any questions about our GDPR compliance or how we handle your personal data, 
                please contact our Data Protection Officer at:
              </Typography>
              <Typography variant="body1" className="contact-info">
                Email: privacy@rezzels.com<br />
                Address: Bahnhofstrasse 123, 8001 Zürich, Switzerland<br />
                Phone: +41 12 345 67 89
              </Typography>
            </AccordionDetails>
          </Accordion>
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

export default GDPRPage;
