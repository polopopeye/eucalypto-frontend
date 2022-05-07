/* eslint-disable @next/next/link-passhref */
import {
  MailIcon,
  PencilIcon,
  PhoneIcon,
  ViewListIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';
import React, { useState } from 'react';

import { store } from 'src/app/store';

import Badges from 'src/components/Utils/categories/badges';
import LoadingComponent from 'src/components/Utils/LoadingComponent';

const ListUsers = () => {
  const [isAdmin] = useState(
    store.getState().user.role === 'admin' ? true : false
  );
  const [users, setUsers] = useState(store.getState().users);

  store.subscribe(() => {
    setUsers(store.getState().users);
  });

  if (!users) return <LoadingComponent />;

  return (
    <div>
      {isAdmin ? (
        <>
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold text-gray-900">
                Users / Talents
              </h1>
              <p className="mt-2 text-sm text-gray-700">
                List of all the Users
              </p>
            </div>
          </div>
          <div className="-ml-4 -mt-4   justify-between items-center flex-wrap sm:flex-nowrap">
            {users.map((user) => {
              return (
                <div className="ml-4 mt-4 border border-gray-300" key={user.id}>
                  <div className="ml-4 mt-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-32 w-auto rounded-full"
                          src={user?.coverImg}
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          {user?.displayName}
                        </h3>
                        <p className="text-sm text-gray-500">
                          <a href="#"> {user?.email}</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" ml-4 mt-4 grid gap-2 grid-cols-2  p-4 ">
                    <div className=" ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <PhoneIcon
                        className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span>
                        Phone: <b>{user?.phone}</b>
                      </span>
                    </div>
                    <div className="  ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <MailIcon
                        className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span>
                        Email: <b>{user?.email}</b>
                      </span>
                    </div>
                    <div className="  ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <MailIcon
                        className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span>
                        Github: <b>{user?.github}</b>
                      </span>
                    </div>
                    <div className="  ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <MailIcon
                        className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span>
                        LinkedIn: <b>{user?.linkedIn}</b>
                      </span>
                    </div>
                    <div className="  ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <MailIcon
                        className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span>
                        Location: <b>{user?.location}</b>
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
                          {user?.languages?.map((lang) => (
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
                        <Badges categoriesId={user?.categories} />
                      </span>
                    </div>
                    <div className="  ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <MailIcon
                        className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span>
                        curriculum:
                        {user?.curriculum ? (
                          <a
                            className="mt-4 ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            href={user?.curriculum}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Curriculum
                          </a>
                        ) : (
                          <span>No curriculum uploaded</span>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="w-full ml-3 relative inline-flex items-center px-4 py-2 border shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="grid grid-cols-1 md:grid-cols-3 w-full">
                      <div></div>
                      <div></div>
                      <div className="grid grid-cols-2">
                        <Link href={'/dashboard/user/settings/' + user.id}>
                          <div className="cursor-pointer bg-primary flex rounded-lg p-2 m-2 justify-center items-center text-white hover:bg-secondary">
                            <PencilIcon className="h-5 w-5 mr-4" />
                            Edit
                          </div>
                        </Link>

                        <Link href={'/dashboard/user/jobs/' + user.id}>
                          <div className="cursor-pointer bg-primary flex rounded-lg p-2 m-2 justify-center items-center text-white hover:bg-secondary">
                            <ViewListIcon className="h-5 w-5 mr-4" />
                            View Jobs Applied
                          </div>
                        </Link>
                      </div>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div>YOU ARE NOT ADMIN</div>
      )}
    </div>
  );
};

export default ListUsers;
