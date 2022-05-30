/* eslint-disable @next/next/link-passhref */
import {
  BriefcaseIcon,
  CheckIcon,
  PencilAltIcon,
  ThumbUpIcon,
  UserIcon,
  ViewListIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';

import React, { useEffect, useState } from 'react';
import retrieveStatusJobOffer from 'src/app/backend/jobOffer/statusOffer/retrieveStatusJobOffer';

import useCheckUserInfo from 'src/app/firebase/auth/useCheckUserInfo';
import { store } from 'src/app/store';
import { JobOfferInterface } from 'src/commons/jobOfferInterface';
import { StatusJobOfferInterface } from 'src/commons/statusJobOfferInterface';
import { classNames } from 'src/components/Utils/classnames';
import LoadingComponent from 'src/components/Utils/LoadingComponent';
import getCompanyDataFromId from 'src/components/Utils/redux/getCompanyDataFromId';
import ApplyNowModule from './ApplyNowModule';

const UserStepsTimeline = () => {
  const [user, setUser] = useState(store.getState().user);
  const [jobOffer, setJobOffer] = useState(
    store.getState().jobs.currentJobOffer as JobOfferInterface
  );
  const [company, setCompany] = useState(
    getCompanyDataFromId(jobOffer.company as string)
  );

  const [alreadyApplied, setAlreadyApplied] = useState(
    jobOffer.applicants?.find((applicantId) => applicantId === user.id)
      ? true
      : false
  );
  const [statusJobOffers, setStatusJobOffers] = useState(
    [] as Array<StatusJobOfferInterface>
  );
  store.subscribe(() => {
    setJobOffer(store.getState().jobs.currentJobOffer as JobOfferInterface);
    setCompany(getCompanyDataFromId(jobOffer.company as string));
    setUser(store.getState().user);
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

  useEffect(() => {
    retrieveStatusJobOffer(
      {
        jobId: jobOffer.id as string,
        userId: user.id as string,
      },
      (status: Array<StatusJobOfferInterface>) => {
        setStatusJobOffers(status);
      }
    );
  }, [jobOffer, user]);

  const checkUserInfo = useCheckUserInfo();

  if (checkUserInfo.loading) return <LoadingComponent />;

  return (
    <section
      aria-labelledby="timeline-title"
      className="lg:col-start-3 lg:col-span-1"
    >
      {checkUserInfo.isLogedIn && (
        <div className="flex items-center space-x-5 ml-6 w-full">
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                className="h-16 w-16 rounded-full"
                src={user.coverImg}
                alt=""
              />
              <span
                className="absolute inset-0 shadow-inner rounded-full"
                aria-hidden="true"
              />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {user.displayName}
            </h1>
            <p className="text-sm font-medium text-gray-500">
              Application for{' '}
              <a href="#" className="text-gray-900">
                {jobOffer.job}
              </a>{' '}
              <br></br>
              On: <b>{company?.name}</b>
            </p>
          </div>
        </div>
      )}

      <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
        {alreadyApplied ? (
          <>
            {/* Activity Feed */}
            <h2
              id="timeline-title"
              className="text-lg font-medium text-gray-900"
            >
              Timeline
            </h2>
            <div className="mt-6 flow-root">
              <ul role="list" className="-mb-8">
                {statusJobOffers &&
                  statusJobOffers.length &&
                  statusJobOffers.map((item, itemIdx) => (
                    <li key={item.id}>
                      <div className="relative pb-8">
                        <div className="relative flex space-x-3">
                          <div>
                            <span
                              className={classNames(
                                'h-10 w-10 rounded-full flex items-center justify-center bg-green-500 ring-8 ring-white'
                              )}
                            >
                              {(item.status === 'default' ||
                                item.status === 'applied') && (
                                <BriefcaseIcon
                                  aria-hidden="true"
                                  className="w-8 h-8 text-white"
                                />
                              )}
                              {item.status === 'completed' && (
                                <CheckIcon
                                  aria-hidden="true"
                                  className="w-8 h-8 text-white"
                                />
                              )}
                              {item.status === 'progress' && (
                                <ThumbUpIcon
                                  aria-hidden="true"
                                  className="w-8 h-8 text-white"
                                />
                              )}
                            </span>
                          </div>
                          <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                            <div>
                              <p className="text-sm text-gray-500">
                                {item.description}
                              </p>
                            </div>
                            <div className="text-right text-sm whitespace-nowrap text-gray-500">
                              {item.updatedAt && (
                                <span>
                                  {new Date(item.updatedAt._seconds * 1000)
                                    .toISOString()
                                    .substring(0, 16)}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                <li key="inProgress">
                  <div className="relative pb-8">
                    <div className="relative flex space-x-3">
                      <div>
                        <span
                          className={classNames(
                            'h-10 w-10 rounded-full flex items-center justify-center bg-primary ring-8 ring-white'
                          )}
                        >
                          <ThumbUpIcon
                            className="w-8 h-8 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p className="text-sm text-gray-500">In Progress</p>
                        </div>
                        <div className="text-right text-sm whitespace-nowrap text-gray-500">
                          {
                            <span>
                              {new Date().toISOString().substring(0, 16)}
                            </span>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <ApplyNowModule />
        )}
        {store.getState().user.role === 'admin' && (
          <>
            <Link href={'/dashboard/offers/listApplicants/' + jobOffer.id}>
              <button
                type="button"
                className="w-full mt-16 inline-flex items-center text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-lg mr-2 font-medium text-white bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:bg-secondary"
              >
                <ViewListIcon
                  className="-ml-1 mr-2 h-5 w-5"
                  aria-hidden="true"
                />
                View applicants list
              </button>
            </Link>

            <Link href={'/dashboard/offers/' + jobOffer.id}>
              <button
                type="button"
                className="w-full mt-4 inline-flex items-center text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-lg mr-2 font-medium text-white bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:bg-secondary"
              >
                <PencilAltIcon
                  className="-ml-1 mr-2 h-5 w-5"
                  aria-hidden="true"
                />
                Edit job Offer
              </button>
            </Link>

            <Link href={'/dashboard/companies/' + jobOffer.company}>
              <button
                type="button"
                className="w-full mt-4 inline-flex items-center text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-lg mr-2 font-medium text-white bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:bg-secondary"
              >
                <PencilAltIcon
                  className="-ml-1 mr-2 h-5 w-5"
                  aria-hidden="true"
                />
                Edit Company
              </button>
            </Link>
          </>
        )}
      </div>
    </section>
  );
};

export default UserStepsTimeline;
