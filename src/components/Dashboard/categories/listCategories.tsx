/* eslint-disable @next/next/no-img-element */
// THIS PAGE ONLY SHOW THE TECH CATEGORY

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import retrieveCategories from 'src/app/backend/category/retrieveCategories';
import { store } from 'src/app/store';

const ListCategories = () => {
  const [categories, setCategories] = useState([
    ...(store.getState().category.tech as any),
  ]);

  store.subscribe(() => {
    setCategories([...(store.getState().category.tech as any)]);
  });

  useEffect(() => {
    retrieveCategories({
      propToFind: 'type',
      value: 'tech',
      saveIn: 'tech',
    });
  }, []);

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
