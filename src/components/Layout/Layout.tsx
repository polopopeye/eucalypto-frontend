import React from "react";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};

const Layout: React.FC = ({ children }: LayoutProps) => {
  const currentTheme = "theme-default ";
  return (
    <div className={currentTheme + "w-full"}>
      <div className="container  mx-auto">
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
