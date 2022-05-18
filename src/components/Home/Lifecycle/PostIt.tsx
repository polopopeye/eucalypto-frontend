import React from 'react';

const PostIt = (props: {
  options: {
    step: string;
    description: Array<string>;
    className: string;
  };
}) => {
  const { step, description, className } = props.options;
  return (
    <div
      className={
        'col-span-2 bg-yellow-200 aspect-square shadow-2xl hover:text-primary hover:bg-tertiary z-10 ' +
        className
      }
    >
      <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-lg m-2 p-2">
        {step}
      </h1>
      <p className=" text-xs sm:text-xl lg:text-xs px-0 sm:px-4 mx-8 sm:mx-4 pb-16">
        <ul>
          {description &&
            description.length &&
            description.map((item, index) => (
              <li className="list-disc" key={index}>
                {item}
              </li>
            ))}
        </ul>
      </p>
    </div>
  );
};

export default PostIt;
