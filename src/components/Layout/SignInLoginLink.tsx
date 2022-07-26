import Link from 'next/link';
import React from 'react';

const SignInLoginLink = (props: { showLogin: boolean }) => {
  return (
    <>
      <Link href="/signin">
        <div className="flex max-w-16">
          <img
            src="/file/webDesign/user.png"
            className="w-3 h-4 mt-1 mr-2 ml-16 "
          />
          <a className="text-secondary ">
            <b className="text-white">Sign</b> in
            {props.showLogin && (
              <>
                <span className="text-white">&nbsp; or &nbsp;</span>
                <b className="text-white">log</b> in
              </>
            )}
          </a>
        </div>
      </Link>
    </>
  );
};

export default SignInLoginLink;
