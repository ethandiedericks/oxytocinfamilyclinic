import Background from '@/components/background/background-section';
import Contact from '@/components/contact/contact-section';
import Hero from '@/components/hero/hero-section';
import Header from '@/components/layout/header/header';
import MeetOurStaff from '@/components/meet-our-staff/meet-our-staff-section';
import Services from '@/components/services/service-section';
import React from 'react';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Background />
        <Services />
        <MeetOurStaff />
        <Contact />
      </main>
    </>
  );
};

export default Home;
