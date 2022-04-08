import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};

const Layout: React.FC = ({ children }: LayoutProps) => {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/search" || router.pathname === "/search/") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [router]);

  return (
    <div className={"w-full"}>
      <div className="container  mx-auto">
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
