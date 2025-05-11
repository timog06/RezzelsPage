import { Container, Typography, Grid, Box, Card, CardMedia, CardContent } from '@mui/material';
import teamData from '../data/team.json';
import '../styles/pages/TeamPage.scss';

const TeamPage = () => {
  return (
    <div className="team-page">
      <Container maxWidth="lg">
        <Box className="page-header">
          <Typography variant="h2" className="page-title">
            Our Team
          </Typography>
          <Typography variant="body1" className="page-description">
            Meet the passionate individuals behind Rezzels. Our team is dedicated to creating 
            high-quality, sustainable clothing that makes a positive impact on the world.
          </Typography>
        </Box>
        
        <Grid container spacing={4} className="team-grid">
          {teamData.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.id}>
              <Card className="team-card">
                <CardMedia
                  component="img"
                  height="180"
                  image={`${member.image}`}
                  alt={member.name}
                  className="team-image"
                  style={{ objectFit: "contain", maxWidth: "100%", margin: "0 auto" }}
                />
                <CardContent className="team-content">
                  <Typography variant="h5" className="team-name">
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" className="team-position">
                    {member.position}
                  </Typography>
                  <Typography variant="body2" className="team-bio">
                    {member.bio}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        <Box className="join-team">
          <Typography variant="h3" className="join-title">
            Join Our Team
          </Typography>
          <Typography variant="body1" className="join-description">
            We're always looking for talented individuals who are passionate about fashion and sustainability. 
            Check out our current openings or send us your resume for future opportunities.
          </Typography>
          <Box className="join-button-container">
            <a href="/jobs" className="join-button">View Open Positions</a>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default TeamPage;
