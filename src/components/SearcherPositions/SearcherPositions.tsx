import React from "react";
import Badges from "../JobView/modules/Badges";
import TextHeader from "../Utils/TextHeader/TextHeader";
import InputSearcher from "./modules/InputSearcher";
import SearchDisplay from "./modules/SearchDisplay";

const SearcherPositions = () => {
  return (
    <>
      <h1 className="  font-bold text-lg pl-4">Search by tech:</h1>
      {/* <Badges /> */}
      <div style={{ zoom: "1.5" }}>
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
      <InputSearcher />

      <SearchDisplay />
    </>
  );
};

export default SearcherPositions;
