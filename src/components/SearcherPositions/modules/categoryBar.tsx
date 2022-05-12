import React, { useState } from 'react';

import { store } from 'src/app/store';
import { classNames } from 'src/components/Utils/classnames';
import { filterJobOffers } from './filterJobOffers';

const CategoryBar = () => {
  const [techs, setTechs] = useState([
    ...(store.getState().category.tech as any),
  ]);
  store.subscribe(() => {
    setTechs([...(store.getState().category.tech as any)]);
  });

  return (
    <>
      <h1 className="  font-bold text-lg pl-4">Search by tech:</h1>
      <div style={{ zoom: '1.5' }}>
        {techs
          ?.sort((a: any, b: any) => {
            return a.name.localeCompare(b.name);
          })
          .map((tech, i) => (
            <span
              onClick={() => {
                filterJobOffers(tech.name as string);
              }}
              key={i}
              className={classNames(
                'bg-quaternary text-primary cursor-pointer  m-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
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
