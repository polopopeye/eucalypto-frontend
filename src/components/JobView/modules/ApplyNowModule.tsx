/* eslint-disable @next/next/link-passhref */
import { CheckIcon } from '@heroicons/react/outline';
import Link from 'next/link';

import React, { useState } from 'react';
import modifyJobOffer from 'src/app/backend/jobOffer/modifyJobOffer';
import retrieveJobOffers from 'src/app/backend/jobOffer/retrievesJobOffer';
import deleteStatusJobOffer from 'src/app/backend/jobOffer/statusOffer/deleteStatusJobOffer';
import registerStatusJobOffer from 'src/app/backend/jobOffer/statusOffer/registerStatusJobOffer';

import useCheckUserInfo from 'src/app/firebase/auth/useCheckUserInfo';
import { store } from 'src/app/store';
import { JobOfferInterface } from 'src/commons/jobOfferInterface';
import { StatusJobOfferInterface } from 'src/commons/statusJobOfferInterface';
import { UserInterface } from 'src/commons/userInterface';
import LoadingComponent from 'src/components/Utils/LoadingComponent';
import getCompanyDataFromId from 'src/components/Utils/redux/getCompanyDataFromId';

const ApplyNowModule = () => {
  const [user, setUser] = useState(store.getState().user as UserInterface);
  const [jobOffer, setJobOffer] = useState(
    store.getState().jobs.currentJobOffer as JobOfferInterface
  );

  const [alreadyApplied, setAlreadyApplied] = useState(
    jobOffer.applicants?.find((applicantId) => applicantId === user.id)
      ? true
      : false
  );

  const handleModifyJobOffer = (id: string, applicants: Array<string>) => {
    modifyJobOffer({ id: id, applicants: applicants }, () => {
      retrieveJobOffers({
        prop: 'id',
        value: id,
        reduxSpace: 'currentJobOffer',
      });
    });
  };

  const handleApplyForJob = () => {
    const jobOfferapplicants = jobOffer.applicants
      ? [...jobOffer.applicants, user.id as string]
      : [user.id as string];

    handleModifyJobOffer(jobOffer.id as string, jobOfferapplicants);

    const statusJobOffer = {
      idJob: jobOffer.id as string,
      idUser: user.id as string,
      status: 'default',
      description:
        'Applied to ' + getCompanyDataFromId(jobOffer.company as string).name,
      published: true,
    } as StatusJobOfferInterface;

    registerStatusJobOffer(statusJobOffer);
  };
  const handleUnapplyForJob = () => {
    const jobOfferapplicants = jobOffer.applicants?.filter(
      (applicants) => applicants !== user.id
    );

    handleModifyJobOffer(
      jobOffer.id as string,
      jobOfferapplicants?.length ? jobOfferapplicants : ['none']
    );

    deleteStatusJobOffer({
      userId: user.id as string,
      jobId: jobOffer.id as string,
    });
  };

  const checkUserInfo = useCheckUserInfo();
  if (checkUserInfo.loading) return <LoadingComponent />;

  // Updates the state of the component when the user applys for the job
  store.subscribe(() => {
    setJobOffer(store.getState().jobs.currentJobOffer as JobOfferInterface);
    setUser(store.getState().user as UserInterface);
    setAlreadyApplied(
      store
        .getState()
        .jobs.currentJobOffer.applicants?.find(
          (applicantId) => applicantId === user.id
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
