import React from 'react';

const PostIt = (props: {
  options: {
    step: string;
    description: string;
    className: string;
  };
}) => {
  const { step, description, className } = props.options;
  return (
    <div
      className={
        'bg-yellow-200 aspect-square shadow-2xl hover:text-primary hover:bg-tertiary z-10 ' +
        className
      }
    >
      <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl m-2 p-2">
        {step}
      </h1>
      <p className=" text-xs sm:text-xl lg:text-2xl px-0 sm:px-4 mx-2 sm:mx-4 pb-16">
        {description}
      </p>
    </div>
  );
};

export default PostIt;
