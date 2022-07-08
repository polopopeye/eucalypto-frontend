import { useState } from 'react';
import { Combobox } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/solid';
import {
  BackspaceIcon,
  CodeIcon,
  ExclamationCircleIcon,
  LinkIcon,
  PencilAltIcon,
  ViewBoardsIcon,
} from '@heroicons/react/outline';

import retrieveJobOffers from 'src/app/backend/jobOffer/retrievesJobOffer';
import { store } from 'src/app/store';
import { JobOfferInterface } from 'src/commons/jobOfferInterface';
import filteredJobOffersSlice from 'src/app/slices/jobs/filterJobOffersSlice';
// import { filterJobOffers, resetFilterJobOffers } from './filterJobOffers';
import { classNames } from 'src/components/Utils/classnames';

const InputSearcher = (props: any) => {
  const { query, setQuery } = props;

  return (
    <Combobox
      value={query as string}
      onChange={(e: any) => {}}
      as="div"
      className="mx-auto  w-full transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
    >
      <div className="relative flex">
        <SearchIcon
          className="pointer-events-none absolute top-3.5 left-4 h-7 w-7 text-gray-400"
          aria-hidden="true"
        />
        <Combobox.Input
          className="h-12 w-full border-0 bg-transparent pl-16 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
          placeholder="Search..."
          onChange={(event) => {
            if (event.target.value.length > 1) {
              // TODO: filter job offers
              // filterJobOffers(event.target.value);
            } else {
              // resetFilterJobOffers();
            }

            setQuery(event.target.value);
          }}
        />
        <div
          className="relative flex border border-gray-300 "
          onClick={() => {
            // resetFilterJobOffers();
            setQuery('');
          }}
        >
          <Combobox.Button className="p-2 ">
            <BackspaceIcon className="w-7 h-7 hover:text-red-500 transition-all" />
          </Combobox.Button>
        </div>
      </div>
    </Combobox>
  );
};
export default InputSearcher;
