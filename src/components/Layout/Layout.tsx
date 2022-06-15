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
      <Navbar />
      <div className="w-full xl:max-w-[1900px] mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
