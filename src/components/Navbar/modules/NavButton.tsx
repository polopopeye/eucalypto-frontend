import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavButton {
  text: string;
  href: string;
}

const NavButton = (props: NavButton) => {
  const { text, href } = props;

  const router = useRouter();

  const [className, setClassName] = useState('');

  useEffect(() => {
    if (router.pathname === href || router.pathname === href + '/') {
      setClassName(
        'border-primary font-bold text-gray-100 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
      );
    } else {
      setClassName(
        'border-transparent font-light text-gray-100 hover:border-gray-300 hover:text-secondary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
      );
    }
  }, [router]);

  return (
    <Link href={href}>
      <div className={className}> {text} </div>
    </Link>
  );
};

export default NavButton;
