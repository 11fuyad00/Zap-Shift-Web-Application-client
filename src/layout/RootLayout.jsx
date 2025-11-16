import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/shared/Footer/Footer';
import Navber from '../pages/shared/Navber/Navber';

const RootLayout = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
