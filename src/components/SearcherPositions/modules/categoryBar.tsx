import React, { useState } from 'react';
import Flickity from 'react-flickity-component';

import { store } from 'src/app/store';
import { classNames } from 'src/components/Utils/classnames';
import { filterJobOffers } from './filterJobOffers';

const getNumberJobsCategory = (id: string, jobsOffers: any) => {
  let cnt = 0;
  jobsOffers.forEach((jobOffer: any) => {
    if (jobOffer.categories.includes(id)) {
      cnt++;
    }
  });

  return cnt;
};

const CategoryBar = (props: any) => {
  const { setQuery } = props;
  const [techs, setTechs] = useState([
    ...(store.getState().category.tech as any),
  ]);

  const [jobsOffers, setJobsOffers] = useState(
    store.getState().jobs.allJobOffers
  );

  store.subscribe(() => {
    setTechs([...(store.getState().category.tech as any)]);
    setJobsOffers(store.getState().jobs.allJobOffers);
  });
  const flickityOptions = {
    pageDots: true,
    freeScroll: true,
    contain: true,
    groupCells: true,
    prevNextButtons: false,
    adaptiveHeight: true,
    freeScrollFriction: 0.03,
  };

  return (
    <>
      <h1 className="font-bold text-lg pl-4">Search:</h1>
      <Flickity
        className={'carousel h-auto mb-8'}
        elementType={'div'}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
      >
        {techs
          ?.sort((a: any, b: any) => {
            if (
              getNumberJobsCategory(a.id, jobsOffers) >
              getNumberJobsCategory(b.id, jobsOffers)
            ) {
              return -1;
            }
            return 1;
          })
          .map((tech, i) => (
            <span
              onClick={() => {
                filterJobOffers(tech.name as string);
                setQuery(tech.name as string);
              }}
              style={{
                position: 'relative',
              }}
              key={i}
              className={classNames(
                'transition-all duration-500 bg-quaternary text-primary cursor-pointer  m-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium',
                'hover:bg-primary hover:text-white '
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
              <b className="text-[9px]">
                ({getNumberJobsCategory(tech.id, jobsOffers)})
              </b>
            </span>
          ))}
      </Flickity>
    </>
  );
};

export default CategoryBar;
