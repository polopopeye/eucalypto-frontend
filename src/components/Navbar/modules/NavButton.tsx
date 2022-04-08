import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavButton {
  text: string;
  href: string;
}

const NavButton = (props: NavButton) => {
  const { text, href } = props;

  const router = useRouter();

  const [className, setClassName] = useState("");

  useEffect(() => {
    if (router.pathname === href || router.pathname === href + "/") {
      setClassName(
        "border-primary text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
      );
    } else {
      setClassName(
        "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
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
