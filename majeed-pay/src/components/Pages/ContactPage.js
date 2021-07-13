import React from 'react';
import CompanyLogosDark from '../CompanyLogosDark';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';
import Navbar from '../Navbar/Navbar';
import PageHeaderTitle from '../PageHeaderTitle';
import ReadyToStart from '../ReadyToStart';

const ContactPage = () => {
  return (
    <>
      <div className='contact-page'>
        <PageHeaderTitle text='Submit a help request and we’ll get in touch shortly.' />
        <div className='form-section'>
          <Form />
          <div className='logos-section'>
            <span>
              Join the thousands of innovators already building with us
            </span>
            <CompanyLogosDark />
          </div>
        </div>
        <ReadyToStart />
      </div>
    </>
  );
};

export default ContactPage;
