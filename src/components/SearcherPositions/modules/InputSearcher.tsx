import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import {
  CodeIcon,
  ExclamationCircleIcon,
  LinkIcon,
  PencilAltIcon,
  ViewBoardsIcon,
} from "@heroicons/react/outline";

import retrieveJobOffers from "src/app/backend/retrievesJobOffer";
import { store } from "src/app/store";
import { JobOfferInterface } from "src/commons/jobOfferInterface";
import filteredJobOffersSlice from "src/app/slices/jobs/filterJobOffersSlice";
import { filterJobOffers, resetFilterJobOffers } from "./filterJobOffers";
import { classNames } from "src/components/Utils/classnames";

const InputSearcher = () => {
  const [query, setQuery] = useState("");

  return (
    <Combobox
      value={query}
      as="div"
      className="mx-auto  w-full transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
      onChange={(item: any) => (window.location = item.url)}
    >
      <div className="relative">
        <SearchIcon
          className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
        <Combobox.Input
          className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
          placeholder="Search..."
          onChange={(event) => {
            if (event.target.value.length > 1) {
              filterJobOffers(event.target.value);
            } else {
              resetFilterJobOffers();
            }

            setQuery(event.target.value);
          }}
        />
      </div>
    </Combobox>
  );
};
export default InputSearcher;
