import React from 'react';
import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import BreakingNewsPage from '@/components/shared/BreakingNews';
const MainLayout = ({children}) => {
  return (
    <>
      <Header />
      <BreakingNewsPage></BreakingNewsPage>
      <Navbar></Navbar>
      {children}
    </>
  );
};

export default MainLayout;