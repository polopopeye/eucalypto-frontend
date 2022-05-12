/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';

import CompanyBubble from './CompanyBubble';

// @ts-ignore
import BubbleUI from 'react-bubble-ui';
// react-bubble-ui https://github.com/blakesanie/React-Bubble-UI

import 'react-bubble-ui/dist/index.css';
import ModalContainer from './ModalContainer';
import { store } from '../../../app/store';

import { JobOfferInterface } from '../../../commons/jobOfferInterface';

import getCompanyDataFromId from 'src/components/Utils/redux/getCompanyDataFromId';

import Badges from 'src/components/Utils/categories/badges';
import jobModalSlice from 'src/app/slices/modals/jobModalSlice';
import currentJobOfferSlice from 'src/app/slices/jobs/currentJobOffersSlice';

const SearchDisplay = () => {
  const [jobOffers, setJobOffers] = useState(
    store.getState().jobs.allJobOffers || []
  );
  store.subscribe(() => {
    setJobOffers(store.getState().jobs.filteredJobOffers);
  });

  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window !== undefined ? true : false);
  }, []);

  return (
    <div>
      {isBrowser && (
        <div className="grid grid-cols-3 mt-8">
          {jobOffers.map((jobOffer: JobOfferInterface, i) => {
            const companyData = getCompanyDataFromId(
              jobOffer.company as string
            );
            return (
              <>
                <div
                  onClick={() => {
                    store.dispatch(
                      jobModalSlice.actions.setData({
                        isOpen: true,
                        data: jobOffer,
                      })
                    );
                    store.dispatch(
                      currentJobOfferSlice.actions.setData(jobOffer)
                    );
                  }}
                  className="transition-all cursor-pointer border-2 border-gray-300 hover:border-primary hover:-m-1 rounded-lg m-2"
                >
                  <div className="flex-1 flex flex-col p-8">
                    <img
                      className="transition-all w-32 hover:w-36 h-auto flex-shrink-0 mx-auto rounded-md"
                      src={companyData.coverImg}
                      alt=""
                    />
                    <h3 className="mt-6 text-gray-900 text-sm font-medium">
                      {jobOffer.job}
                    </h3>
                    <dl className="mt-1 flex-grow flex flex-col justify-between">
                      <dd className="text-gray-500 text-sm">
                        {companyData.name}
                      </dd>
                      <dd className="mt-3">
                        <Badges categoriesId={jobOffer.categories} />
                      </dd>
                    </dl>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}
      <ModalContainer />
    </div>
  );
};

export default SearchDisplay;
