/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';

import CompanyBubble from './CompanyBubble';

// @ts-ignore
import BubbleUI from 'react-bubble-ui';
// react-bubble-ui https://github.com/blakesanie/React-Bubble-UI

import 'react-bubble-ui/dist/index.css';
import ModalContainer from './ModalContainer';
import { store } from '../../../app/store';
import retrieveJobOffers from '../../../app/backend/jobOffer/retrievesJobOffer';
import { JobOfferInterface } from '../../../commons/jobOfferInterface';
import retrieveCategories from '../../../app/backend/category/retrieveCategories';
import getCompanyDataFromId from 'src/components/Utils/redux/getCompanyDataFromId';
import { MailIcon } from '@heroicons/react/outline';
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
        <div className="grid grid-cols-3">
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
                  className="cursor-pointer"
                >
                  <div className="flex-1 flex flex-col p-8">
                    <img
                      className="w-32 h-auto flex-shrink-0 mx-auto rounded-md"
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
