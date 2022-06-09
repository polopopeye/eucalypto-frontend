/* eslint-disable @next/next/link-passhref */
import {
  BriefcaseIcon,
  ColorSwatchIcon,
  LocationMarkerIcon,
  MailIcon,
  PencilIcon,
  PhoneIcon,
  PlusCircleIcon,
  UserIcon,
  ViewListIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';
import React, { useState } from 'react';

import { store } from 'src/app/store';

import LoadingComponent from 'src/components/Utils/LoadingComponent';

const ListUsers = () => {
  const [isAdmin, setIsAdmin] = useState(
    store.getState().user.role === 'admin' ? true : false
  );
  const [users, setUsers] = useState([...store.getState().users]);

  store.subscribe(() => {
    setUsers([...store.getState().users]);
    setIsAdmin(store.getState().user.role === 'admin');
  });

  if (!users) return <LoadingComponent />;

  return (
    <div>
      {isAdmin ? (
        <>
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold text-gray-900">Users</h1>
              <p className="mt-2 text-sm text-gray-700">
                List of all the Users
              </p>
            </div>
          </div>
          {isAdmin && (
            <>
              <div className="m-auto w-full text-right">
                <Link href="/dashboard/user/create">
                  <a
                    type="button"
                    className="relative float-right -mt-24 flex w-64 bg-primary text-white items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium  hover:bg-secondary  "
                  >
                    <PlusCircleIcon className="w-5 h-5 mr-2" />
                    Create new User
                  </a>
                </Link>
              </div>
            </>
          )}

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-2">
            {users
              .sort((a: any, b: any) => {
                return b.createdAt._seconds - a.createdAt._seconds;
              })
              .map((user) => {
                return (
                  <div
                    className="ml-4 mt-4 border border-gray-300 break-words"
                    key={user.id}
                  >
                    <div className="ml-4 mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="m-auto">
                          <img
                            className="h-32 w-auto rounded-full"
                            src={user?.coverImg}
                            alt=""
                          />
                        </div>
                        <div className=" self-center">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">
                            {user?.displayName}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="mx-4 mt-4 grid gap-2 md:grid-cols-1 grid-cols-1  p-4 ">
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
                        <UserIcon
                          className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span>
                          {user?.curriculum ? (
                            <>
                              <a
                                className=" ml-1 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                href={user?.curriculum}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View Curriculum
                              </a>
                            </>
                          ) : (
                            <span>No curriculum uploaded</span>
                          )}
                        </span>
                      </div>
                    </div>
                    <div className=" grid grid-cols-1 justify-items-center mx-16">
                      <button
                        onClick={() => {
                          window.open('/dashboard/user/info/' + user.id);
                        }}
                        className="cursor-pointer w-full bg-primary flex rounded-lg p-2 m-2 justify-center items-center text-white hover:bg-secondary"
                      >
                        <PencilIcon className="h-5 w-5 mr-4" />
                        More Information
                      </button>

                      <Link href={'/dashboard/user/settings/' + user.id}>
                        <div className="cursor-pointer w-full bg-primary flex rounded-lg p-2 m-2 justify-center items-center text-white hover:bg-secondary">
                          <PencilIcon className="h-5 w-5 mr-4" />
                          Edit
                        </div>
                      </Link>
                      <Link href={'/dashboard/user/jobs/' + user.id}>
                        <div className="cursor-pointer w-full  bg-primary flex rounded-lg p-2 m-2 justify-center items-center text-white hover:bg-secondary">
                          <ViewListIcon className="h-5 w-5 mr-4" />
                          View Jobs Applied
                        </div>
                      </Link>
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
