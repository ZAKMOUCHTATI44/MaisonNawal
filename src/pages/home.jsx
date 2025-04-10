import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import ReviewSection from '../components/ReviewSection';
import CelebritySection from '../components/celebritySection';
import ServicesSection from '../components/ServicesSection';
import BeautyIntroSection from '../components/BeautyIntroSection';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <AboutSection />
      <ReviewSection/>
      <CelebritySection/>
      <ServicesSection/>
      <BeautyIntroSection/>
      <Footer />
    </div>
  );
}

export default Home;