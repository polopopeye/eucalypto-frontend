import { ChatAltIcon, EyeIcon } from "@heroicons/react/outline";
import React from "react";

interface TrendingCardProps {
  src: string;
  body: string;
  visits: number;
}

const TrendingCard = (props: TrendingCardProps) => {
  const { src, body, visits } = props;

  return (
    <div className="flex py-4 space-x-3">
      <div className="flex-shrink-0">
        <img className="h-8 w-8 rounded-full" src={src} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm text-gray-800">{body}</p>
        <div className="mt-2 flex">
          <span className="inline-flex items-center text-sm">
            <button
              type="button"
              className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
            >
              <EyeIcon className="h-5 w-5" aria-hidden="true" />
              <span className="font-medium text-gray-900">{visits}</span>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
