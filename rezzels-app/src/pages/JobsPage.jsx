import { Container, Typography, Grid, Box, Card, CardContent, Button, Chip } from '@mui/material';
import { LocationOn, AccessTime } from '@mui/icons-material';
import '../styles/pages/JobsPage.scss';

const JobsPage = () => {
  const jobs = [
    {
      id: 1,
      title: 'Fashion Designer (Slave)',
      location: 'Zürich, Switzerland',
      type: 'Full-time (24/7/365)',
      description: 'We are looking for a creative Fashion Designer to join our team. You will work 18-hour days designing clothes while we take all the credit. Sleep is for the weak, and weekends are a myth invented by lesser companies.',
      requirements: [
        'Bachelor\'s, Master\'s, and PhD in Fashion Design (all required)',
        'Minimum 30 years of experience (applicants under 25 preferred)',
        'Ability to read minds, as we won\'t tell you what we want',
        'Must provide your own sewing machine, fabric, and office chair',
        'Willing to sign a 10-year binding contract with no possibility of quitting'
      ]
    },
    {
      id: 2,
      title: 'Marketing Specialist (Miracle Worker)',
      location: 'Remote (but we\'ll still watch you)',
      type: 'Full-time (including nights, holidays, and your birthday)',
      description: 'Join our marketing team to make our mediocre products seem amazing! You\'ll be responsible for creating viral content with zero budget, managing social media 24/7, and achieving impossible sales targets that increase by 500% each month.',
      requirements: [
        'Must have 1M+ personal followers on all social platforms',
        'Ability to make content go viral on command',
        'Experience working without sleep for extended periods',
        'Willing to pay for all marketing expenses out of pocket',
        'Your firstborn child as collateral for performance guarantees'
      ]
    },
    {
      id: 3,
      title: 'E-commerce Manager (Scapegoat)',
      location: 'Zürich, Switzerland',
      type: 'Full-time (until we blame you for poor sales)',
      description: 'We\'re seeking an experienced E-commerce Manager to take the fall when our unrealistic sales targets aren\'t met. You\'ll be responsible for everything that goes wrong with the website, including server outages, bad weather, and global economic downturns.',
      requirements: [
        'Thick skin and no self-esteem',
        'Ability to work with a website built in 1997 that crashes hourly',
        'Experience being blamed for things beyond your control',
        'Willing to be paid in "exposure" and "experience"',
        'Must sign waiver accepting responsibility for all company failures'
      ]
    },
    {
      id: 4,
      title: 'Customer Abuse Absorber',
      location: 'Zürich, Switzerland',
      type: 'Part-time (but on-call 24/7)',
      description: 'Be the human punching bag for angry customers! You\'ll be handling complaints about products we know are defective, processing returns we\'ll never approve, and maintaining a smile while being verbally abused by people who think the customer is always right.',
      requirements: [
        'No education required (we prefer if you can\'t do math)',
        'Must own a personal phone as we won\'t provide one',
        'Ability to apologize for things that aren\'t your fault',
        'No holidays, vacations, or sick days allowed',
        'Fluency in English, German, and at least 17 other languages'
      ]
    }
  ];
  
  return (
    <div className="jobs-page">
      <Container maxWidth="lg">
        <Box className="page-header">
          <Typography variant="h2" className="page-title">
            Join Our Team
          </Typography>
          <Typography variant="body1" className="page-subtitle">
            Explore career opportunities at Rezzels
          </Typography>
        </Box>
        
        <Box className="jobs-intro">
          <Typography variant="h4" className="intro-title">
            Why Work With Us?
          </Typography>
          <Typography variant="body1" className="intro-text">
            At Rezzels, we're passionate about creating sustainable fashion that makes a positive impact 
            on the world. We're looking for talented individuals who share our values and want to be part 
            of our mission.
          </Typography>
          <Typography variant="body1" className="intro-text">
            As a member of our team, you'll "enjoy":
          </Typography>
          <ul className="benefits-list">
            <li>A cutthroat environment where we pit employees against each other for entertainment</li>
            <li>Competitive salary (competing with minimum wage... and losing)</li>
            <li>Professional development opportunities (you develop, we profit)</li>
            <li>Employee discount on Rezzels products (a whopping 0.5% off)</li>
            <li>Flexible work arrangements (you can choose which 18 hours of the day you work)</li>
          </ul>
        </Box>
        
        <Box className="open-positions">
          <Typography variant="h4" className="positions-title">
            Open Positions
          </Typography>
          
          <Grid container spacing={4}>
            {jobs.map((job) => (
              <Grid item xs={12} key={job.id}>
                <Card className="job-card">
                  <CardContent className="job-content">
                    <Box className="job-header">
                      <Box>
                        <Typography variant="h5" className="job-title">
                          {job.title}
                        </Typography>
                        <Box className="job-meta">
                          <Box className="meta-item">
                            <LocationOn className="meta-icon" />
                            <Typography variant="body2" className="meta-text">
                              {job.location}
                            </Typography>
                          </Box>
                          <Box className="meta-item">
                            <AccessTime className="meta-icon" />
                            <Typography variant="body2" className="meta-text">
                              {job.type}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Chip 
                        label="Apply Now" 
                        className="apply-chip"
                        onClick={() => {}}
                      />
                    </Box>
                    
                    <Typography variant="body1" className="job-description">
                      {job.description}
                    </Typography>
                    
                    <Typography variant="h6" className="requirements-title">
                      Requirements:
                    </Typography>
                    <ul className="requirements-list">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                    
                    <Button variant="contained" className="apply-button">
                      Apply for this Position
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        
        <Box className="no-positions">
          <Typography variant="h5" className="no-positions-title">
            Don't see a position that fits your skills?
          </Typography>
          <Typography variant="body1" className="no-positions-text">
            We're always interested in connecting with talented individuals. Send your resume to 
            <a href="mailto:careers@rezzels.com"> careers@rezzels.com</a> and we'll keep you in mind for future opportunities.
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default JobsPage;
