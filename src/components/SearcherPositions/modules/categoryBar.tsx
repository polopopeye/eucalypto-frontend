import React from "react";

import { store } from "src/app/store";
import { classNames } from "src/components/Utils/classnames";
import { filterJobOffers } from "./filterJobOffers";

const CategoryBar = () => {
  const techs = store.getState().category.tech;

  return (
    <>
      <h1 className="  font-bold text-lg pl-4">Search by tech:</h1>
      <div style={{ zoom: "1.5" }}>
        {techs?.map((tech, i) => (
          <span
            onClick={() => {
              filterJobOffers(tech.id as string);
            }}
            key={i}
            className={classNames(
              "bg-quaternary text-primary cursor-pointer  m-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
            )}
          >
            <svg
              className="-ml-1 mr-1.5 h-2 w-2 text-quartenary"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx={4} cy={4} r={3} />
            </svg>
            {tech.name}
          </span>
        ))}
      </div>
    </>
  );
};

export default CategoryBar;
