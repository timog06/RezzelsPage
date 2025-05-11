import { useState, useEffect } from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { FormatQuote } from '@mui/icons-material';
import quotesData from '../../data/quotes.json';
import '../../styles/components/home/Quotes.scss';

const Quotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prevQuote) => (prevQuote + 1) % quotesData.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="quotes-section section">
      <Container maxWidth="md">
        <Typography variant="h2" className="section-title text-center mb-5">
          What People Say
        </Typography>
        
        <Box className="quotes-container">
          {quotesData.map((quote, index) => (
            <Paper 
              key={quote.id} 
              elevation={3} 
              className={`quote-card ${index === currentQuote ? 'active' : ''}`}
            >
              <FormatQuote className="quote-icon" />
              <Typography variant="h5" className="quote-text">
                {quote.text}
              </Typography>
              <Typography variant="subtitle1" className="quote-author">
                — {quote.author}
              </Typography>
            </Paper>
          ))}
        </Box>
        
        <Box className="quote-dots">
          {quotesData.map((_, index) => (
            <Box 
              key={index} 
              className={`quote-dot ${index === currentQuote ? 'active' : ''}`}
              onClick={() => setCurrentQuote(index)}
            />
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default Quotes;
