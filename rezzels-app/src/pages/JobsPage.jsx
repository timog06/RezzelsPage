import { Container, Typography, Grid, Box, Card, CardContent, Button, Chip } from '@mui/material';
import { LocationOn, AccessTime } from '@mui/icons-material';
import '../styles/pages/JobsPage.scss';

const JobsPage = () => {
  const jobs = [
    {
      id: 1,
      title: 'Fashion Designer',
      location: 'Zürich, Switzerland',
      type: 'Full-time',
      description: 'We are looking for a creative Fashion Designer to join our team. The ideal candidate will have experience in sustainable fashion design and a passion for creating stylish, eco-friendly clothing.',
      requirements: [
        'Bachelor\'s degree in Fashion Design or related field',
        'Minimum 3 years of experience in fashion design',
        'Proficiency in design software (Adobe Illustrator, Photoshop)',
        'Knowledge of sustainable materials and practices',
        'Strong portfolio demonstrating your design skills'
      ]
    },
    {
      id: 2,
      title: 'Marketing Specialist',
      location: 'Remote',
      type: 'Full-time',
      description: 'Join our marketing team to help promote Rezzels\' sustainable fashion brand. You\'ll be responsible for creating engaging content, managing social media, and developing marketing strategies.',
      requirements: [
        'Bachelor\'s degree in Marketing, Communications, or related field',
        '2+ years of experience in digital marketing',
        'Experience with social media management and content creation',
        'Knowledge of SEO and analytics tools',
        'Excellent written and verbal communication skills'
      ]
    },
    {
      id: 3,
      title: 'E-commerce Manager',
      location: 'Zürich, Switzerland',
      type: 'Full-time',
      description: 'We\'re seeking an experienced E-commerce Manager to oversee our online store operations. You\'ll be responsible for optimizing the customer experience, managing inventory, and driving online sales.',
      requirements: [
        'Bachelor\'s degree in Business, E-commerce, or related field',
        '3+ years of experience in e-commerce management',
        'Experience with e-commerce platforms and tools',
        'Strong analytical skills and data-driven approach',
        'Knowledge of UX/UI principles and best practices'
      ]
    },
    {
      id: 4,
      title: 'Customer Service Representative',
      location: 'Zürich, Switzerland',
      type: 'Part-time',
      description: 'Provide exceptional customer service to Rezzels customers. You\'ll be handling inquiries, processing orders, and ensuring a positive shopping experience for our customers.',
      requirements: [
        'High school diploma or equivalent',
        'Previous customer service experience preferred',
        'Excellent communication and interpersonal skills',
        'Ability to work weekends and some evenings',
        'Fluency in English and German'
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
            As a member of our team, you'll enjoy:
          </Typography>
          <ul className="benefits-list">
            <li>A collaborative and inclusive work environment</li>
            <li>Competitive salary and benefits</li>
            <li>Professional development opportunities</li>
            <li>Employee discount on Rezzels products</li>
            <li>Flexible work arrangements</li>
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
