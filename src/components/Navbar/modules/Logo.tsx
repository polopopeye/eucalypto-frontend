import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="grid place-content-center py-8 mx-auto w-full  border-fuchsia">
      <Image src="/file/img/logo.jpg" width="222" height="39" alt="logo" />
    </div>
  );
};

export default Logo;
