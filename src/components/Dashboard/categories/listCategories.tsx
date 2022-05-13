/* eslint-disable @next/next/no-img-element */
// THIS PAGE ONLY SHOW THE TECH CATEGORY

import { PlusCircleIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import retrieveCategories from 'src/app/backend/category/retrieveCategories';
import { store } from 'src/app/store';

const ListCategories = () => {
  const [categories, setCategories] = useState([
    ...(store.getState().category.tech as any),
  ]);
  const [isAdmin, setIsAdmin] = useState(
    store.getState().user.role === 'admin'
  );
  store.subscribe(() => {
    setCategories([...(store.getState().category.tech as any)]);
    setIsAdmin(store.getState().user.role === 'admin');
  });

  return (
    <>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Categories</h1>
          <p className="mt-2 text-sm text-gray-700">
            List of all the categories
          </p>
        </div>
      </div>
      {isAdmin && (
        <>
          <div className="m-auto w-full text-right">
            <Link href="/dashboard/categories/create">
              <a
                type="button"
                className="relative float-right -mt-24 flex w-64 bg-primary text-white items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium  hover:bg-secondary  "
              >
                <PlusCircleIcon className="w-5 h-5 mr-2" />
                Create new Category
              </a>
            </Link>
          </div>
        </>
      )}

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
                      Category Type
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Category Name
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
                  {categories &&
                    categories
                      .sort((a: any, b: any) => {
                        return b.createdAt._seconds - a.createdAt._seconds;
                      })
                      .map((category: any) => (
                        <tr key={category.id}>
                          <td className="whitespace-nowrap px-3 py-4 text-base font-bold">
                            <h1>{category.type}</h1>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-base font-bold">
                            <h1>{category.name}</h1>
                          </td>

                          <td className=" relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <Link href={'/dashboard/categories/' + category.id}>
                              <a className="text-indigo-600 hover:text-indigo-900 p-1">
                                Edit Category
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

export default ListCategories;
