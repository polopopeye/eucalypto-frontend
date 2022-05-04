import { CheckIcon, ThumbUpIcon, UserIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import retrieveAllCompanies from "src/app/backend/company/retrieveCompanies";
import retrieveUserInfo from "src/app/backend/users/retrieveUserInfo";
import { store } from "src/app/store";
import { classNames } from "src/components/Utils/classnames";
import getCompanyDataFromId from "src/components/Utils/redux/getCompanyDataFromId";

const UserStepsTimeline = (props: { job: string; companyId: string }) => {
  const { companyId } = props;
  const [company, setCompany] = useState(
    getCompanyDataFromId(companyId as string)
  );

  const [isLogedIn, setIsLogedIn] = useState(
    store.getState().user.email ? true : false
  );

  const [user, setUser] = useState(store.getState().user);

  store.subscribe(() => {
    setUser(store.getState().user);
    setCompany(getCompanyDataFromId(companyId as string));
  });

  useEffect(() => {
    if (!company) {
      retrieveAllCompanies();
    }

    if (user.email) {
      setIsLogedIn(true);
      retrieveUserInfo(user.email as string);
    } else {
      setIsLogedIn(false);
    }
  }, []);

  const eventTypes = {
    applied: { icon: UserIcon, bgColorClass: "bg-gray-400" },
    advanced: { icon: ThumbUpIcon, bgColorClass: "bg-primary" },
    completed: { icon: CheckIcon, bgColorClass: "bg-green-500" },
  };
  const timeline = [
    {
      id: 1,
      type: eventTypes.applied,
      content: "Applied to",
      target: "Front End Developer",
      date: "Sep 20",
      datetime: "2020-09-20",
    },
    {
      id: 2,
      type: eventTypes.advanced,
      content: "Advanced to phone screening by",
      target: "Bethany Blake",
      date: "Sep 22",
      datetime: "2020-09-22",
    },
    {
      id: 3,
      type: eventTypes.completed,
      content: "Completed phone screening with",
      target: "Martha Gardner",
      date: "Sep 28",
      datetime: "2020-09-28",
    },
    {
      id: 4,
      type: eventTypes.advanced,
      content: "Advanced to interview by",
      target: "Bethany Blake",
      date: "Sep 30",
      datetime: "2020-09-30",
    },
    {
      id: 5,
      type: eventTypes.completed,
      content: "Completed interview with",
      target: "Katherine Snyder",
      date: "Oct 4",
      datetime: "2020-10-04",
    },
  ];

  const alreadyApplied = false;
  return (
    <section
      aria-labelledby="timeline-title"
      className="lg:col-start-3 lg:col-span-1"
    >
      {isLogedIn && (
        <div className="flex items-center space-x-5 ml-6 w-full">
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                className="h-16 w-16 rounded-full"
                src={user.coverImg}
                alt=""
              />
              <span
                className="absolute inset-0 shadow-inner rounded-full"
                aria-hidden="true"
              />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {user.displayName}
            </h1>
            <p className="text-sm font-medium text-gray-500">
              Applied for{" "}
              <a href="#" className="text-gray-900">
                {props.job}
              </a>{" "}
              <br></br>
              On: <b>{company?.name}</b>
            </p>
          </div>
        </div>
      )}

      <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
        {alreadyApplied ? (
          <>
            {/* Activity Feed */}
            <h2
              id="timeline-title"
              className="text-lg font-medium text-gray-900"
            >
              Timeline
            </h2>
            <div className="mt-6 flow-root">
              <ul role="list" className="-mb-8">
                {timeline.map((item, itemIdx) => (
                  <li key={item.id}>
                    <div className="relative pb-8">
                      {itemIdx !== timeline.length - 1 ? (
                        <span
                          className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div className="relative flex space-x-3">
                        <div>
                          <span
                            className={classNames(
                              item.type.bgColorClass,
                              "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                            )}
                          >
                            <item.type.icon
                              className="w-5 h-5 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p className="text-sm text-gray-500">
                              {item.content}{" "}
                              <a href="#" className="font-medium text-gray-900">
                                {item.target}
                              </a>
                            </p>
                          </div>
                          <div className="text-right text-sm whitespace-nowrap text-gray-500">
                            <time dateTime={item.datetime}>{item.date}</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <div className="mt-6 flex flex-col justify-stretch">
            <div className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              <Link href="/signin"> Apply Now</Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default UserStepsTimeline;
