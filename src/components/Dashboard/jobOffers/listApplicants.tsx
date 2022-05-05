import React, { useState } from 'react';
import { MailIcon, PhoneIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import { store } from 'src/app/store';
import { JobOfferInterface } from 'src/commons/jobOfferInterface';
import TextHeader from 'src/components/Utils/TextHeader/TextHeader';
import Badges from 'src/components/Utils/categories/badges';
import getUserDataFromId from 'src/components/Utils/redux/getUserDataFromId';

const NoApplicantFound = () => {
  return (
    <div className="mt-16 pt-16 text-center m-auto text-3xl">
      No one applied yet... 😭
    </div>
  );
};

const ListApplicants = () => {
  const [jobOffer, setJobOffer] = useState(
    store.getState().jobs.currentJobOffer as JobOfferInterface
  );

  const [applicants, setApplicants] = useState(
    store
      .getState()
      .jobs.currentJobOffer.applicants?.filter(
        (applicantId) => applicantId !== 'none'
      )
  );

  store.subscribe(() => {
    setJobOffer(store.getState().jobs.currentJobOffer as JobOfferInterface);
    setApplicants(
      store
        .getState()
        .jobs.currentJobOffer.applicants?.filter(
          (applicantId) => applicantId !== 'none'
        )
    );
  });

  return (
    <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
      <TextHeader
        title={jobOffer.name}
        description={jobOffer.description}
        category={jobOffer.deadLine}
      />
      <hr className="mt-8" />
      <Badges categoriesId={jobOffer.categories} />
      <hr className="mt-8" />
      <div className="-ml-4 -mt-4   justify-between items-center flex-wrap sm:flex-nowrap">
        {applicants?.length ? (
          applicants.map((applicantId) => {
            const applicant = getUserDataFromId(applicantId);

            return (
              <>
                <div className="ml-4 mt-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-32 w-auto rounded-full"
                        src={applicant?.coverImg}
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {applicant?.displayName}
                      </h3>
                      <p className="text-sm text-gray-500">
                        <a href="#"> {applicant?.email}</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" ml-4 mt-4 grid gap-2 grid-cols-2 ">
                  <div className=" ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <PhoneIcon
                      className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span>
                      Phone: <b>{applicant?.phone}</b>
                    </span>
                  </div>
                  <div className="  ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <MailIcon
                      className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span>
                      Email: <b>{applicant?.email}</b>
                    </span>
                  </div>
                  <div className="  ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <MailIcon
                      className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span>
                      Github: <b>{applicant?.github}</b>
                    </span>
                  </div>
                  <div className="  ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <MailIcon
                      className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span>
                      LinkedIn: <b>{applicant?.linkedIn}</b>
                    </span>
                  </div>
                  <div className="  ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <MailIcon
                      className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span>
                      Location: <b>{applicant?.location}</b>
                    </span>
                  </div>
                  <div className="  ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <MailIcon
                      className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span>
                      languages:{' '}
                      <b>
                        {applicant?.languages?.map((lang) => (
                          <>
                            <span className="p-1 m-2 bg-secondary rounded-lg">
                              {lang}
                            </span>
                          </>
                        ))}
                      </b>
                    </span>
                  </div>
                  <div className="  ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <MailIcon
                      className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span>
                      categories:
                      <Badges categoriesId={applicant?.categories} />
                    </span>
                  </div>
                  <div className="  ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <MailIcon
                      className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span>
                      curriculum:
                      <a
                        className="mt-4 ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        href={applicant?.curriculum}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Curriculum
                      </a>
                    </span>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <NoApplicantFound />
        )}
      </div>
      <Link href="/dashboard/user">
        <button
          type="button"
          className="bg-white mt-16 py-2 px-4 flex border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <ArrowLeftIcon className="w-5 h-5 mx-4" /> Back to dashboard
        </button>
      </Link>
    </div>
  );
};

export default ListApplicants;
