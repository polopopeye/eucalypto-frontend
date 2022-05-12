/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import { useState } from 'react';
import { store } from 'src/app/store';

import HeaderNav from './headerNav';

export default function UserProfile() {
  const [isAdmin, setIsAdmin] = useState(
    store.getState().user.role === 'admin'
  );
  store.subscribe(() => {
    setIsAdmin(store.getState().user.role === 'admin');
  });

  return (
    <div className="px-4 pt-32">
      {isAdmin && (
        <>
          <div className="m-auto w-full self-center text-center mb-10">
            <span className=" relative z-0 inline-flex shadow-sm rounded-md">
              <Link href="/dashboard/user/create">
                <button
                  type="button"
                  className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  Create new User
                </button>
              </Link>

              <Link href="/dashboard/companies/create">
                <button
                  type="button"
                  className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  Create new Company
                </button>
              </Link>
              <Link href="/dashboard/offers/create">
                <button
                  type="button"
                  className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  Create new Job Offer
                </button>
              </Link>
              <Link href="/dashboard/categories/create">
                <button
                  type="button"
                  className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  Create new Category
                </button>
              </Link>
            </span>
          </div>
        </>
      )}
      <HeaderNav />
    </div>
  );
}
