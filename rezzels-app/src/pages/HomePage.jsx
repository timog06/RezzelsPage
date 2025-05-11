import Hero from '../components/home/Hero';
import Welcome from '../components/home/Welcome';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Services from '../components/home/Services';
import Timeline from '../components/home/Timeline';
import Quotes from '../components/home/Quotes';
import '../styles/pages/HomePage.scss';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <FeaturedProducts />
      <Services />
      <Timeline />
      <Quotes />
    </>
  );
};

export default HomePage;
