import { StarIcon } from "@heroicons/react/outline";
import { StarIcon as StarIconFill } from "@heroicons/react/solid";
import React from "react";

interface StarsProps {
  stars: number;
}

const Stars = (props: StarsProps) => {
  const { stars } = props;
  const className = "inline-block h-6 w-6 mr-1 text-primary";

  return (
    <div className="flex">
      {[...Array(stars)].map((e, i) => (
        <div key={i}>
          <StarIconFill className={className} />
        </div>
      ))}
      {[...Array(5 - stars)].map((e, i) => (
        <div key={i}>
          <StarIcon className={className} />
        </div>
      ))}
    </div>
  );
};

export default Stars;
