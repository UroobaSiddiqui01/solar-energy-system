import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HomeInstallationSection from './components/HomeSection';
import ServicesSection from './components/ServicesSection';
import AboutUsSection from './components/AboutUsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <HomeInstallationSection/>    
        <AboutUsSection />
        <ServicesSection />
      <TestimonialsSection />
      
      <Footer />
    </div>
  );
};

export default Home;

