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
    <div className={' lg:text-center p-4' + className}>
      <h2 className="text-base text-primary font-bold tracking-wide uppercase">
        {category}
      </h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </p>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        {description}
      </p>
    </div>
  );
};

export default TextHeader;
