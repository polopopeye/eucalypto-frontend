/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

import AlertMsgAlreadyApplied from './modules/AlertMsgAlreadyApplied';

import Badges from '../Utils/categories/badges';

import UserStepsTimeline from './modules/userStepsTimeline';
import { JobOfferInterface } from 'src/commons/jobOfferInterface';
import { store } from 'src/app/store';
import JobViewHeader from './JobViewHeader';
import HeaderCompany from './HeaderCompany';

const JobView = () => {
  const [jobOffer, setJobOffer] = useState(
    store.getState().jobs.currentJobOffer as JobOfferInterface
  );
  store.subscribe(() => {
    setJobOffer(store.getState().jobs.currentJobOffer as JobOfferInterface);
  });
  const [alreadyApplied, setAlreadyApplied] = useState(true);

  return (
    <div>
      {jobOffer ? (
        <div className="min-h-full pt-16">
          <main className="py-10">
            {/* Page header */}
            <JobViewHeader />
            {/* {alreadyApplied && <AlertMsgAlreadyApplied />} */}

            <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
              <div className="space-y-6 lg:col-start-1 lg:col-span-2">
                <HeaderCompany />

                {/* Description list*/}
                <section aria-labelledby="applicant-information-title">
                  <div className="bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                      <h2
                        id="applicant-information-title"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        Job Information
                      </h2>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Details
                      </p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            <img
                              alt=""
                              src="https://blog.logrocket.com/wp-content/uploads/2021/08/react-nivo-pie-chart-example.png"
                            />
                          </dt>
                        </div>

                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Application for
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {jobOffer.job}
                          </dd>
                        </div>

                        {jobOffer.categories && (
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Technologies
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              <Badges categoriesId={jobOffer.categories} />
                            </dd>
                          </div>
                        )}
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Salary
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {jobOffer.salary}
                          </dd>
                        </div>

                        <div className="sm:col-span-2">
                          <dt className="text-sm font-medium text-gray-500">
                            About
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {jobOffer.description}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </section>
              </div>

              <UserStepsTimeline />
            </div>
          </main>
        </div>
      ) : (
        <div className="pt-32">NO JOB OFFER FOUND</div>
      )}
    </div>
  );
};

export default JobView;
