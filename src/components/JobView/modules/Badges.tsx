import React from "react";

const Badges = () => {
  return (
    <div>
      <span className="  m-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-primary">
        <svg
          className="-ml-1 mr-1.5 h-2 w-2 text-quartenary"
          fill="currentColor"
          viewBox="0 0 8 8"
        >
          <circle cx={4} cy={4} r={3} />
        </svg>
        React
      </span>
      <span className="m-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-primary">
        <svg
          className="-ml-1 mr-1.5 h-2 w-2 text-quartenary"
          fill="currentColor"
          viewBox="0 0 8 8"
        >
          <circle cx={4} cy={4} r={3} />
        </svg>
        NodeJS
      </span>
      <span className="m-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-primary">
        <svg
          className="-ml-1 mr-1.5 h-2 w-2 text-quartenary"
          fill="currentColor"
          viewBox="0 0 8 8"
        >
          <circle cx={4} cy={4} r={3} />
        </svg>
        NestJS
      </span>
      <span className="m-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-primary">
        <svg
          className="-ml-1 mr-1.5 h-2 w-2 text-quartenary"
          fill="currentColor"
          viewBox="0 0 8 8"
        >
          <circle cx={4} cy={4} r={3} />
        </svg>
        Jquery
      </span>
    </div>
  );
};

export default Badges;
