/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import { MailIcon, PencilIcon, ViewListIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import retrieveCompanyByOwner from 'src/app/backend/company/retrieveCompaniesByOwner';
import { store } from 'src/app/store';
import { CompanyInterface } from 'src/commons/companyInterface';
import Badges from 'src/components/Utils/categories/badges';

const ListCompanies = () => {
  const [companies, setCompanies] = useState(
    store.getState().company.personalcompanies
  );

  store.subscribe(() => {
    setCompanies(store.getState().company.personalcompanies);
  });

  useEffect(() => {
    retrieveCompanyByOwner(store.getState().user.id as string);
  }, []);

  return (
    <>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Companies</h1>
          <p className="mt-2 text-sm text-gray-700">
            List of all your companies
          </p>
        </div>
      </div>

      {companies &&
        companies.map((company: CompanyInterface) => (
          <div className="ml-4 mt-4 border border-gray-300" key={company.id}>
            <div className="ml-4 mt-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="w-64 h-auto"
                    src={company.coverImg}
                    alt={company.name}
                  />
                </div>
                <div className="w-full ml-4 max-w-full">
                  <h3 className="text-lg leading-6 text-center font-medium text-gray-900">
                    {company.name}
                  </h3>
                  <p>{company.description}</p>
                </div>
              </div>
            </div>
            <div className=" ml-4 mt-4 grid gap-2 grid-cols-2  p-4 ">
              <div className="  ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <MailIcon
                  className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span>
                  Country:
                  <h1>{company.country}</h1>
                </span>
              </div>

              <div className="  ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <MailIcon
                  className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span>
                  website:
                  <h1>{company.web}</h1>
                </span>
              </div>
              <div className="  ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <MailIcon
                  className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span>
                  linkedIn:
                  <h1>{company.linkedIn}</h1>
                </span>
              </div>
              <div className="  ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <MailIcon
                  className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span>
                  email:
                  <h1>{company.email}</h1>
                </span>
              </div>
              <div className="  ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <MailIcon
                  className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span>
                  phone:
                  <h1>{company.phone}</h1>
                </span>
              </div>
            </div>
            <div className="w-full ml-3 relative inline-flex items-center px-4 py-2 border shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="grid grid-cols-1 md:grid-cols-2 w-full">
                <div></div>

                <div className="grid grid-cols-2">
                  <Link href={'/dashboard/companies/' + company.id}>
                    <div className="cursor-pointer bg-primary flex rounded-lg p-2 m-2 justify-center items-center text-white hover:bg-secondary">
                      <PencilIcon className="h-5 w-5 mr-4" /> Edit Job Offer
                    </div>
                  </Link>

                  <Link href={'/dashboard/companies/jobs/' + company.id}>
                    <div className="cursor-pointer bg-primary flex rounded-lg p-2 m-2 justify-center items-center text-white hover:bg-secondary">
                      <ViewListIcon className="h-5 w-5 mr-4" />
                      View Job Offers of this company
                    </div>
                  </Link>
                </div>
              </span>
            </div>
          </div>
        ))}

      {/* <tbody className="divide-y divide-gray-200 bg-white">
        
                      <tr key={company.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                          <div className="mb-4 p-2  sm:mb-0 sm:mr-4 flex">
                            <img
                              className="w-64 h-auto"
                              src={company.coverImg}
                              alt="company logo"
                            />
                          </div>
                        </td>

                        <td className="whitespace-nowrap px-3 py-4 text-base font-bold">
                          <h1>{company.name}</h1>
                        </td>

                        <td className=" relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <Link href={'/dashboard/companies/' + company.id}>
                            <a className="text-indigo-600 hover:text-indigo-900 p-1">
                              Edit Company
                            </a>
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody> */}
    </>
  );
};

export default ListCompanies;
