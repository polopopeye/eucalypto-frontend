import { CheckIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const applyNowModule = () => {
  const [alreadyApplied, setAlreadyApplied] = useState(true);
  return (
    <>
      {alreadyApplied ? (
        <>
          <button
            type="button"
            className="w-full inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-lg mr-2 font-medium text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Already Applied
          </button>
        </>
      ) : (
        <>
          <Link href="/signin">
            <button
              type="button"
              className="w-full inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-lg mr-2 font-medium text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Apply Now
            </button>
          </Link>
        </>
      )}
    </>
  );
};

export default applyNowModule;
