import { useEffect, useRef } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { animate } from 'animejs';
import timelineData from '../../data/timeline.json';
import '../../styles/components/home/Timeline.scss';

const Timeline = () => {
  const timelineRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateTimeline();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const animateTimeline = () => {
    animate.timeline({
      easing: 'easeOutExpo',
    })
    .add({
      targets: '.timeline-title, .timeline-subtitle',
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1000,
      delay: animate.stagger(200)
    })
    .add({
      targets: '.timeline-item',
      opacity: [0, 1],
      translateX: function(el) {
        return el.classList.contains('left') ? [-100, 0] : [100, 0];
      },
      delay: animate.stagger(200),
      duration: 800
    }, '-=800')
    .add({
      targets: '.timeline-dot',
      scale: [0, 1],
      opacity: [0, 1],
      duration: 600,
      delay: animate.stagger(200)
    }, '-=1200')
    .add({
      targets: '.timeline-line',
      scaleY: [0, 1],
      duration: 1000,
      easing: 'easeInOutQuad'
    }, '-=1500');
  };
  
  return (
    <section className="timeline-section section" ref={timelineRef}>
      <Container maxWidth="lg">
        <Typography variant="h2" className="section-title text-center timeline-title">
          Our Journey
        </Typography>
        <Typography variant="body1" className="text-center mb-5 timeline-subtitle">
          From our humble beginnings to where we are today
        </Typography>
        
        <Box className="timeline">
          <Box className="timeline-line"></Box>
          
          {timelineData.map((item, index) => (
            <Box 
              key={item.id} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <Box className="timeline-dot"></Box>
              <Box className="timeline-content">
                <Typography variant="h3" className="timeline-year">
                  {item.year}
                </Typography>
                <Typography variant="h4" className="timeline-event">
                  {item.title}
                </Typography>
                <Typography variant="body1" className="timeline-description">
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default Timeline;
