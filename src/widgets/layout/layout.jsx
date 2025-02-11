import React from "react";
import Navbar from '@/widgets/layout/Navbar';  // Correct the path if necessary
import { Footer } from '@/widgets/layout/Footer';  // Correct path

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
