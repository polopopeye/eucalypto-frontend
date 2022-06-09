/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import {
  BriefcaseIcon,
  GlobeIcon,
  LocationMarkerIcon,
  MailIcon,
  PencilIcon,
  PhoneIcon,
  PlusCircleIcon,
  ViewListIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';
import React, { useState } from 'react';
import { store } from 'src/app/store';
import { CompanyInterface } from 'src/commons/companyInterface';

const ListCompanies = () => {
  const [companies, setCompanies] = useState([
    ...store.getState().company.personalcompanies,
  ]);
  const [isAdmin, setIsAdmin] = useState(
    store.getState().user.role === 'admin'
  );

  store.subscribe(() => {
    setCompanies([...store.getState().company.personalcompanies]);
    setIsAdmin(store.getState().user.role === 'admin');
  });

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
      {isAdmin && (
        <>
          <div className="m-auto w-full text-right">
            <Link href="/dashboard/companies/create">
              <a
                type="button"
                className="relative float-right -mt-24 flex w-64 bg-primary text-white items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium  hover:bg-secondary  "
              >
                <PlusCircleIcon className="w-5 h-5 mr-2" />
                Create new Company
              </a>
            </Link>
          </div>
        </>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-2">
        {companies &&
          companies
            .sort((a: any, b: any) => {
              return b.createdAt._seconds - a.createdAt._seconds;
            })
            .map((company: CompanyInterface) => (
              <div
                className="ml-4 mt-4 border border-gray-300 break-words"
                key={company.id}
              >
                <div className="ml-4 mt-4">
                  <div className="grid grid-cols-1 gap-1">
                    <div className="m-auto">
                      <img
                        className="w-64 h-auto"
                        src={company.coverImg}
                        alt={company.name}
                      />
                    </div>
                    <div className="w-full max-w-full">
                      <h3 className="text-lg  leading-6 text-center font-medium text-gray-900">
                        {company.name}
                      </h3>
                      <p>{company.description}</p>
                    </div>
                  </div>
                </div>
                <div className=" ml-4 mt-4 grid gap-2  grid-cols-1  p-4">
                  <div className="  ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <LocationMarkerIcon
                      className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span>
                      Country:
                      <h1>{company.country}</h1>
                    </span>
                  </div>

                  <div className="  ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <GlobeIcon
                      className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span>
                      website:
                      <h1>{company.web}</h1>
                    </span>
                  </div>
                  <div className="  ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <BriefcaseIcon
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
                    <PhoneIcon
                      className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span>
                      phone:
                      <h1>{company.phone}</h1>
                    </span>
                  </div>
                </div>

                <div className=" grid grid-cols-1 justify-items-center mx-16">
                  <Link href={'/dashboard/companies/' + company.id}>
                    <div className="cursor-pointer  w-full bg-primary flex rounded-lg p-2 m-2 justify-center items-center text-white hover:bg-secondary">
                      <PencilIcon className="h-5 w-5 mr-4" /> Edit Company
                    </div>
                  </Link>

                  <Link href={'/dashboard/companies/jobs/' + company.id}>
                    <div className="cursor-pointer w-full bg-primary flex rounded-lg p-2 m-2 justify-center items-center text-white hover:bg-secondary">
                      <ViewListIcon className="h-5 w-5 mr-4" />
                      View Job Offers of this company
                    </div>
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default ListCompanies;
