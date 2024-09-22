'use client';
import React from 'react';

import Header from '@/components/header';
import ContactLinks from '@/views/landing/contacts/contactLinks';

const Contact: React.FC = () => {
  return (
    <>
      <Header mainPage={false} /> 
      <ContactLinks /> 
    </>
  );
};

export default Contact;