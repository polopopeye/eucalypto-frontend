/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import retrieveJobOffers from 'src/app/backend/jobOffer/retrievesJobOffer';
import { store } from 'src/app/store';
import { JobOfferInterface } from 'src/commons/jobOfferInterface';

const ListJobOffers = () => {
  const [jobOffers, setJobOffers] = useState(
    store.getState().jobs.personalJobOffers
  );
  const [isAdmin, setIsAdmin] = useState(
    store.getState().user.role === 'admin' ? true : false
  );

  store.subscribe(() => {
    setJobOffers(store.getState().jobs.personalJobOffers);
  });

  useEffect(() => {
    if (isAdmin) {
      retrieveJobOffers({ propOrId: 'published', value: true });
    } else {
      retrieveJobOffers({
        propOrId: 'aplicants',
        value: store.getState().user.id as string,
      });
    }
  }, []);

  return (
    <>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Jobs Offers</h1>
          <p className="mt-2 text-sm text-gray-700">
            List of all the jobsOffers you applied to
            {isAdmin && ' - Currently you are admin... So you can see all'}
          </p>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Company ID
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Job Name
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Job Page Tittle
                    </th>

                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Salary
                    </th>

                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Categories
                    </th>

                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">More Information</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {jobOffers &&
                    jobOffers.map((jobOffer: JobOfferInterface) => (
                      <tr key={jobOffer.id}>
                        <td className="whitespace-nowrap px-3 py-4 text-base font-bold">
                          <h1>{jobOffer.company}</h1>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-base font-bold">
                          <h1>{jobOffer.name}</h1>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-base font-bold">
                          <h1>{jobOffer.job}</h1>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-base font-bold">
                          <h1>{jobOffer.salary}</h1>
                        </td>

                        <td className="whitespace-nowrap px-3 py-4 text-base font-bold">
                          {jobOffer.categories?.map(
                            (category: string, index) => (
                              <span key={index}>{category}</span>
                            )
                          )}
                        </td>

                        <td className=" relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <Link href={'/dashboard/offers/' + jobOffer.id}>
                            <a className="text-indigo-600 hover:text-indigo-900 p-1">
                              Edit JobOffer
                            </a>
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListJobOffers;
