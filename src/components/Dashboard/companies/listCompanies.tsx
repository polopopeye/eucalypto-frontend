/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import retrieveCompanyByOwner from "../../../app/backend/retrieveCompaniesByOwner";
import { store } from "../../../app/store";

const ListCompanies = () => {
  //   const companies: any = [];

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
                      Logo Company
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Company Name
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
                  {companies &&
                    companies.map((company: any) => (
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
                          <Link href={"/dashboard/companies/" + company.id}>
                            <a className="text-indigo-600 hover:text-indigo-900 p-1">
                              Edit Company
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

export default ListCompanies;
