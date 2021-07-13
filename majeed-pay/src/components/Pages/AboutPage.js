import React from 'react';
import '../About/About.css';
import OurQuality from '../About/OurQuality';
import TeamCount from '../About/TeamCount';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import PageHeaderTitle from '../PageHeaderTitle';
import ReadyToStart from '../ReadyToStart';
const AboutPage = () => {
  return (
    <div className='about-page'>
      <Navbar />
      <PageHeaderTitle text='We empower innovators by delivering access to the financial system' />
      <OurQuality
        quality='Our Vision'
        description='Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology.'
      />
      <OurQuality
        quality='Our Business'
        description='At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers.'
      />
      <div className='team-image'></div>
      <TeamCount />
      <OurQuality
        quality='The Culture'
        description='We strongly believe there is always an opportunity to learn from each other outside of day-to-day work, whether it is company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.'
      />
      <OurQuality
        quality='The People'
        description='We are all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.'
      />
      <ReadyToStart />
      <Footer />
    </div>
  );
};

export default AboutPage;
