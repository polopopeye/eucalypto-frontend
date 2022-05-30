import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};

const Layout: React.FC = ({ children }: LayoutProps) => {
  return (
    <div className="w-full">
      <div className="container mx-auto px-2 xl:px-8">
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
