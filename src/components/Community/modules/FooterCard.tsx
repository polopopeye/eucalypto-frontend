import { ChatAltIcon, EyeIcon, ThumbUpIcon } from "@heroicons/react/outline";
import React from "react";

const FooterCard = (props) => {
  const { type } = props;
  return (
    <div className="mt-6 flex justify-between space-x-8 text-center">
      <div className="flex space-x-6">
        <span className="inline-flex items-center text-sm">
          <button
            type="button"
            className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
          >
            <ThumbUpIcon className="h-5 w-5" aria-hidden="true" />
            <span className="font-medium text-gray-900">1524</span>
            <span className="sr-only">likes</span>
          </button>
        </span>
        <span className="inline-flex items-center text-sm">
          <button
            type="button"
            className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
          >
            <ChatAltIcon className="h-5 w-5" aria-hidden="true" />
            <span className="font-medium text-gray-900">20</span>
            <span className="sr-only">replies</span>
          </button>
        </span>
        <span className="inline-flex items-center text-sm">
          <button
            type="button"
            className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
          >
            <EyeIcon className="h-5 w-5" aria-hidden="true" />
            <span className="font-medium text-gray-900">2550</span>
            <span className="sr-only">views</span>
          </button>
        </span>
      </div>
      <div className=" right-0 inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800">
        {type}
      </div>
    </div>
  );
};

export default FooterCard;
