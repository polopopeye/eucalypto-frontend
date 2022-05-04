/* eslint-disable @next/next/link-passhref */
import { CheckIcon } from '@heroicons/react/outline';
import Link from 'next/link';

import React, { useState } from 'react';
import modifyJobOffer from 'src/app/backend/jobOffer/modifyJobOffer';
import retrieveJobOffers from 'src/app/backend/jobOffer/retrievesJobOffer';
import useCheckUserInfo from 'src/app/firebase/auth/useCheckUserInfo';
import { store } from 'src/app/store';
import { JobOfferInterface } from 'src/commons/jobOfferInterface';
import LoadingComponent from 'src/components/Utils/LoadingComponent';

const ApplyNowModule = () => {
  const [jobOffer, setJobOffer] = useState(
    store.getState().jobs.currentJobOffer as JobOfferInterface
  );

  const [alreadyApplied, setAlreadyApplied] = useState(
    jobOffer.aplicants?.find(
      (applicantId) => applicantId === store.getState().user.id
    )
      ? true
      : false
  );

  const handleModifyJobOffer = (id: string, aplicants: Array<string>) => {
    modifyJobOffer({ id: id, aplicants: aplicants }, () => {
      retrieveJobOffers({
        propOrId: 'id',
        value: id,
        reduxSpace: 'currentJobOffer',
      });
    });
  };

  const handleApplyForJob = () => {
    const jobOfferAplicants = jobOffer.aplicants
      ? [...jobOffer.aplicants, store.getState().user.id as string]
      : [store.getState().user.id as string];

    handleModifyJobOffer(jobOffer.id as string, jobOfferAplicants);
    console.log(
      '🚀 ~ file: applyNowModule.tsx ~ line 42 ~ handleApplyForJob ~ jobOffer.id',
      jobOffer.id
    );
  };
  const handleUnapplyForJob = () => {
    const jobOfferAplicants = jobOffer.aplicants?.filter(
      (aplicants) => aplicants !== store.getState().user.id
    );

    handleModifyJobOffer(
      jobOffer.id as string,
      jobOfferAplicants?.length ? jobOfferAplicants : ['no-one']
    );
  };

  const checkUserInfo = useCheckUserInfo();
  if (checkUserInfo.loading) return <LoadingComponent />;

  // Updates the state of the component when the user applys for the job
  store.subscribe(() => {
    setJobOffer(store.getState().jobs.currentJobOffer as JobOfferInterface);

    setAlreadyApplied(
      store
        .getState()
        .jobs.currentJobOffer.aplicants?.find(
          (applicantId) => applicantId === store.getState().user.id
        )
        ? true
        : false
    );
  });

  return (
    <>
      {checkUserInfo.isLogedIn ? (
        <>
          {alreadyApplied ? (
            <>
              <button
                type="button"
                className="w-full inline-flex items-center text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-lg mr-2 font-medium text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                onClick={() => {
                  handleUnapplyForJob();
                }}
              >
                <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Already Applied
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="w-full inline-flex items-center text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-lg mr-2 font-medium text-white bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:bg-secondary"
                onClick={() => {
                  handleApplyForJob();
                }}
              >
                <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Apply Now
              </button>
            </>
          )}
        </>
      ) : (
        // NOT LOGED IN
        <Link href="/signin">
          <button
            type="button"
            className="w-full inline-flex items-center text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-lg mr-2 font-medium text-white bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:bg-secondary"
          >
            <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Apply Now
          </button>
        </Link>
      )}
    </>
  );
};

export default ApplyNowModule;
