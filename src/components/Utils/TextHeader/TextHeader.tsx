import React from 'react';

interface TextHeaderProps {
  category?: string;
  title?: string;
  description?: string;
  className?: string;
}

const TextHeader = (props: TextHeaderProps) => {
  const { title, category, description, className } = props;

  return (
    <div className={'m-4 lg:text-center p-4' + className}>
      <div className="grid justify-items-center">
        <h2 className="text-base w-32 py-4 my-4 text-center text-secondary font-bold tracking-wide uppercase bg-[url('/file/webDesign/badgeTittle.png')] bg-contain bg-no-repeat">
          {category}
        </h2>
      </div>
      <p className="mt-1 text-3xl leading-8 font-extrabold tracking-tight text-color-text-1 sm:text-4xl">
        {title}
      </p>
      <p className="mt-4 max-w-2xl text-xl text-color-text-2 lg:mx-auto">
        {description}
      </p>
    </div>
  );
};

export default TextHeader;
