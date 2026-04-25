import React from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

const MainLayout = ({children}) => {
  return (
    <>
      <Header />
      <Navbar></Navbar>
      {children}
    </>
  );
};

export default MainLayout;