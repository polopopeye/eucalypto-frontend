import {
  BriefcaseIcon,
  ColorSwatchIcon,
  LocationMarkerIcon,
  MailIcon,
  PencilIcon,
  PhoneIcon,
  UserIcon,
} from '@heroicons/react/outline';
import React from 'react';
import { UserInterface } from 'src/commons/userInterface';
import Badges from 'src/components/Utils/categories/badges';

const UserInfo = (props: { user: UserInterface }) => {
  const { user } = props;
  console.log('🚀 ~ file: userInfo.tsx ~ line 7 ~ UserInfo ~ user', user);
  return (
    <div className="ml-4 mt-4 border border-gray-300 break-words">
      <div className="ml-4 mt-4">
        <div className="grid grid-cols-1  gap-4">
          <div className=" self-center">
            <h3 className="text-2xl leading-6 font-medium text-gray-900">
              {user?.displayName}
            </h3>
          </div>
          <div className="m-auto">
            <img
              className="h-64 w-auto rounded-full"
              src={user?.coverImg}
              alt=""
            />
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
          <BriefcaseIcon
            className="-ml-1 mr-2 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <span>
            Github: <b>{user?.github}</b>
          </span>
        </div>
        <div className="  ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <BriefcaseIcon
            className="-ml-1 mr-2 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <span>
            LinkedIn: <b>{user?.linkedIn}</b>
          </span>
        </div>
        <div className="  ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <LocationMarkerIcon
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
            languages:
            <b>
              {user?.languages?.map((lang) => (
                <>
                  <span key={lang} className="p-1 m-2 bg-secondary rounded-lg">
                    {lang}
                  </span>
                </>
              ))}
            </b>
          </span>
        </div>
        <div className="  ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <ColorSwatchIcon
            className="-ml-1 mr-2 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <span>
            Tecnologies/aptitudes:
            <Badges categoriesId={user?.categories} />
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
    </div>
  );
};

export default UserInfo;
