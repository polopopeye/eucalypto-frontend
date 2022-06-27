import Link from 'next/link';
import React from 'react';
import SignInLoginLink from '../Layout/SignInLoginLink';

const Footer = () => {
  return (
    <div className="bg-[url(/file/webDesign/footer.png)] bg-contain bg-primary bg-no-repeat pt-4 pb-11 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <img src="/file/img/logo2.png" className="py-4 pr-32 pl-16" />
          <div className="text-white pl-16 grid grid-cols-1">
            <span>Eucalypto Group Innovation S.L. © 2022</span>
            <span>All rights reserved</span>
          </div>
        </div>
        <div className="grid grid-cols-1 place-items-center text-white md:ml-32 ">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/search">Search for a project</Link>
            </li>
            <li>
              <Link href="/contact">Let’s talk</Link>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 place-items-center text-gray-400 md:ml-32 ">
          <ul>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/doc/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/doc/terms">Terms and Conditions</Link>
            </li>
          </ul>
        </div>
        <div className="place-items-center mt-8">
          <SignInLoginLink showLogin={true} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
