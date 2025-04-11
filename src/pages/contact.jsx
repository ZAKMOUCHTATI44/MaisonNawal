import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/contactInfo';
function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
     <ContactHero/>
     <ContactInfo/>
      <Footer />
    </div>
  );
}
export default Contact;