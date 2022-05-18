import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="flex  mx-auto w-full place-content-center mt-16 pb-16">
        <div className="text-footerBrand  px-1 mx-1 text-xs">
          Eucalypto Group Innovation S.l. © 2022, All rights reserved -{' '}
          <Link href="/contact">
            <a>Contact</a>
          </Link>
          -
          <Link href="/doc/privacy">
            <a>Privacy Policy</a>
          </Link>
          -
          <Link href="/doc/terms">
            <a>Terms and Conditions</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
