import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  CurrencyDollarIcon,
  LocationMarkerIcon,
} from '@heroicons/react/solid';

import Link from 'next/link';
import { useState } from 'react';
import { store } from 'src/app/store';
import { JobOfferInterface } from 'src/commons/jobOfferInterface';
import ApplyNowModule from './modules/ApplyNowModule';

export default function JobViewHeader() {
  const [jobOffer, setJobOffer] = useState(
    store.getState().jobs.currentJobOffer as JobOfferInterface
  );
  store.subscribe(() => {
    setJobOffer(store.getState().jobs.currentJobOffer as JobOfferInterface);
  });

  const closeDate =
    jobOffer.deadLine && new Date(jobOffer.deadLine).toISOString().slice(0, 10);

  return (
    <div className="lg:flex lg:items-center lg:justify-between px-8">
      <div className="flex-1 min-w-0">
        <h2 className="mt-2 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          {jobOffer.job}
        </h2>
        <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <BriefcaseIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            {jobOffer.fulltime}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <LocationMarkerIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            {jobOffer.remote ? 'Remote' : 'Local'}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CurrencyDollarIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            {jobOffer.salary}
          </div>
          {/* <div className="mt-2 flex items-center text-sm text-gray-500">
            <CalendarIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Closing on {closeDate}
          </div> */}
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <ApplyNowModule />
      </div>
    </div>
  );
}
