/* eslint-disable @next/next/no-img-element */
import { GlobeAltIcon, StarIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import retrieveAllCompanies from 'src/app/backend/company/retrieveCompanies';
import { store } from 'src/app/store';
import { JobOfferInterface } from 'src/commons/jobOfferInterface';
import getCompanyDataFromId from '../Utils/redux/getCompanyDataFromId';

const HeaderCompany = () => {
  const [jobOffer, setJobOffer] = useState(
    store.getState().jobs.currentJobOffer as JobOfferInterface
  );

  const [company, setCompany] = useState(
    getCompanyDataFromId(jobOffer.company as string)
  );

  store.subscribe(() => {
    setJobOffer(store.getState().jobs.currentJobOffer as JobOfferInterface);
    setCompany(getCompanyDataFromId(jobOffer.company as string));
  });

  return (
    <div>
      {company && (
        <div className="block md:flex  border-2 rounded-md self-center items-center content-center">
          <div className="mb-4 p-2">
            <img
              alt="logo company"
              src={company.coverImg}
              className="h-auto  w-48 rounded-lg"
            />
          </div>
          <div className="p-2">
            <h4 className="text-lg font-bold">{company.name}</h4>
            <p className="mt-1">{company.description}</p>
            <hr className="mt-4 mb-4" />

            <div className="mt-1 grid grid-cols-2 gap-2">
              {company.web && (
                <div>
                  <a
                    target={'_blank'}
                    href={company.web}
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    rel="noreferrer"
                  >
                    <span className="sr-only">Visit Website</span>
                    <GlobeAltIcon className="w-5 h-5" />
                  </a>
                </div>
              )}

              {company.linkedIn && (
                <div>
                  <a
                    target={'_blank'}
                    href={company.linkedIn}
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    rel="noreferrer"
                  >
                    <span className="sr-only">Visit LinkedIn</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 455 455"
                    >
                      <path d="M246.4,204.35v-0.665c-0.136,0.223-0.324,0.446-0.442,0.665H246.4z" />
                      <path d="M0,0v455h455V0H0z M141.522,378.002H74.016V174.906h67.506V378.002z    M107.769,147.186h-0.446C84.678,147.186,70,131.585,70,112.085c0-19.928,15.107-35.087,38.211-35.087   c23.109,0,37.31,15.159,37.752,35.087C145.963,131.585,131.32,147.186,107.769,147.186z M385,378.002h-67.524V269.345   c0-27.291-9.756-45.92-34.195-45.92c-18.664,0-29.755,12.543-34.641,24.693c-1.776,4.34-2.24,10.373-2.24,16.459v113.426h-67.537   c0,0,0.905-184.043,0-203.096H246.4v28.779c8.973-13.807,24.986-33.547,60.856-33.547c44.437,0,77.744,29.02,77.744,91.398V378.002   z" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderCompany;
