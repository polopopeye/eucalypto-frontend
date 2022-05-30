/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import {
  CalendarIcon,
  ColorSwatchIcon,
  CurrencyDollarIcon,
  LocationMarkerIcon,
  MailIcon,
  PencilIcon,
  PlusCircleIcon,
  ViewListIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import retrieveJobOffers from 'src/app/backend/jobOffer/retrievesJobOffer';
import { store } from 'src/app/store';
import { JobOfferInterface } from 'src/commons/jobOfferInterface';
import Badges from 'src/components/Utils/categories/badges';
import LoadingComponent from 'src/components/Utils/LoadingComponent';
import getCompanyDataFromId from 'src/components/Utils/redux/getCompanyDataFromId';

const ListJobOffers = (props: {
  description: string;
  jobsOffers: Array<JobOfferInterface>;
}) => {
  const jobsOffers = [...props.jobsOffers];
  const [isAdmin, setIsAdmin] = useState(
    store.getState().user.role === 'admin'
  );

  if (!jobsOffers)
    return (
      <>
        <div className="text-xl font-bold text-center mt-16 mb-16">
          This seems a little empty... Update your profile, upload your CV and
          apply for job Offers
        </div>
      </>
    );

  return (
    <>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Jobs Offers</h1>
          <p className="mt-2 text-sm text-gray-700">{props.description}</p>
        </div>
      </div>
      {isAdmin && (
        <>
          <div className="m-auto w-full text-right">
            <Link href="/dashboard/offers/create">
              <a
                type="button"
                className="relative float-right -mt-24 flex w-64 bg-primary text-white items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium  hover:bg-secondary  "
              >
                <PlusCircleIcon className="w-5 h-5 mr-2" />
                Create new Job Offer
              </a>
            </Link>
          </div>
        </>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-2">
        {jobsOffers
          .sort((a: any, b: any) => {
            return b.createdAt._seconds - a.createdAt._seconds;
          })
          .map((jobOffer: JobOfferInterface) => {
            const companyData = getCompanyDataFromId(
              jobOffer.company as string
            );
            return (
              <div
                className="-ml-4 mt-4 border border-gray-300 break-all"
                key={jobOffer.id}
              >
                <div className="ml-4 mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div className="m-auto">
                      <img
                        className="w-64 h-auto"
                        src={companyData.coverImg}
                        alt={companyData.name}
                      />
                      <p className="text-lg text-center text-gray-800">
                        {companyData.name}
                      </p>
                    </div>
                    <div className="ml-4 max-w-full">
                      <h3 className="text-lg leading-6 text-center font-medium text-gray-900">
                        {jobOffer.job}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className=" ml-4 mt-4 grid gap-2 md:grid-cols-2 grid-cols-1  p-4 ">
                  <div className="  ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <CurrencyDollarIcon
                      className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span>
                      Salary:
                      <h1>{jobOffer.salary}</h1>
                    </span>
                  </div>
                  <div className="  ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <LocationMarkerIcon
                      className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span>
                      Location:
                      <h1>{jobOffer.location}</h1>
                    </span>
                  </div>
                  <div className="  ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <LocationMarkerIcon
                      className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span>
                      Remote:
                      <h1>{jobOffer.remote ? 'Yes' : 'No'}</h1>
                    </span>
                  </div>
                  <div className="  ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <CalendarIcon
                      className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span>
                      Deadline:
                      <h1>{jobOffer.deadLine}</h1>
                    </span>
                  </div>
                  <div className="  ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <ColorSwatchIcon
                      className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span>
                      categories:
                      <Badges categoriesId={jobOffer.categories} />
                    </span>
                  </div>
                </div>
                <div className="w-full ml-3 relative inline-flex items-center px-4 py-2 border shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <div className="flex">
                    {isAdmin ? (
                      <>
                        <div className=" grid grid-cols-1 md:grid-cols-3 gap-2 md:col-end-3">
                          <Link href={'/dashboard/offers/' + jobOffer.id}>
                            <div className="w-full cursor-pointer bg-primary flex rounded-lg p-2 m-2 justify-center items-center text-white hover:bg-secondary">
                              <PencilIcon className="h-5 w-5 mr-4" /> Edit Job
                              Offer
                            </div>
                          </Link>
                          <Link
                            href={
                              '/dashboard/offers/listApplicants/' + jobOffer.id
                            }
                          >
                            <div className="w-full cursor-pointer bg-primary flex rounded-lg p-2 m-2 justify-center items-center text-white hover:bg-secondary">
                              <ViewListIcon className="h-5 w-5 mr-4" />
                              View Applicants list
                            </div>
                          </Link>
                          <Link href={'/job/' + jobOffer.id}>
                            <div className="w-full cursor-pointer bg-primary flex rounded-lg p-2 m-2 justify-center items-center text-white hover:bg-secondary">
                              <ViewListIcon className="h-5 w-5 mr-4" />
                              View Job Offer
                            </div>
                          </Link>
                        </div>
                      </>
                    ) : (
                      <Link href={'/job/' + jobOffer.id}>
                        <div className="w-full cursor-pointer bg-primary flex rounded-lg p-2 m-2 justify-center items-center text-white hover:bg-secondary">
                          <ViewListIcon className="h-5 w-5 mr-4" />
                          View Job Offer
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ListJobOffers;
