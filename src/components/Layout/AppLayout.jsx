import React from 'react';
import Navbar from './UI/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './UI/Footer';

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Navbar />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
