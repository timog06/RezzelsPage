import Hero from '../components/home/Hero';
import Welcome from '../components/home/Welcome';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Services from '../components/home/Services';
import Timeline from '../components/home/Timeline';
import Quotes from '../components/home/Quotes';
import Newsletter from '../components/home/Newsletter';
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
      <Newsletter />
    </>
  );
};

export default HomePage;
