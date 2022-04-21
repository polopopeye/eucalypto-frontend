import Image from "next/image";
import React from "react";

interface StepProps {
  title: string;
  iconBackground: string;
  iconForeground: string;
  href: string;
  src: string;
}

const Step = (props: StepProps) => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const { title, iconBackground, iconForeground, href, src } = props;
  return (
    <div>
      <div className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
        <div>
          <h3 className=" text-xl font-medium">
            <a href={href} className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              {title}
            </a>
          </h3>
          <div
            className={classNames(
              iconBackground,
              iconForeground,
              "rounded-lg inline-flex p-3 ring-4 ring-white"
            )}
          >
            <img src={src} alt={title} />
          </div>
        </div>
        <div className="mt-8">
          <p className="mt-2 text-base text-gray-500">
            Doloribus dolores nostrum quia qui natus officia quod et dolorem.
          </p>
        </div>
        <span
          className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
          aria-hidden="true"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Step;
