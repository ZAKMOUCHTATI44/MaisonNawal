import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHero from '../components/about/AboutHero';
import AboutContent from '../components/about/AboutContent';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/about/StatsSection';
import TeamSection from '../components/about/TeamSection';
import WhyChooseUs from '../components/about/WhyChooseUs';
import Testimonials from '../components/about/Testimonials';
function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <AboutHero />
      <AboutContent/>
      <ServicesSection/>
      <StatsSection />
      <TeamSection/>
      <WhyChooseUs/>
      <Testimonials/>
      <Footer />
    </div>
  );
}
export default About;