import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import {
  ArrowNarrowLeftIcon,
  CheckIcon,
  HomeIcon,
  PaperClipIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  ThumbUpIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import JobViewHeader from "./JobViewHeader";
import AlertAlreadyApplied from "./modules/AlertAlreadyApplied";
import HeaderCompany from "./HeaderCompany";
import Badges from "./modules/Badges";
import Link from "next/link";

const JobView = () => {
  const attachments = [
    { name: "resume_front_end_developer.pdf", href: "#" },
    { name: "coverletter_front_end_developer.pdf", href: "#" },
  ];
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

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const user = {
    name: "Whitney Francis",
    email: "whitney@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
  };

  // Random boolean value generator
  const randomBoolean = () => Math.random() >= 0.5;

  const [alreadyApplied, setAlreadyApplied] = useState(false);

  useEffect(() => {
    setAlreadyApplied(randomBoolean());
  }, []);

  return (
    <div>
      <div className="min-h-full pt-16">
        <main className="py-10">
          {/* Page header */}
          <JobViewHeader alreadyApplied={alreadyApplied} />
          {alreadyApplied && <AlertAlreadyApplied />}

          <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
            <div className="space-y-6 lg:col-start-1 lg:col-span-2">
              <HeaderCompany></HeaderCompany>

              {/* Description list*/}
              <section aria-labelledby="applicant-information-title">
                <div className="bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h2
                      id="applicant-information-title"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Job Information
                    </h2>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      Details
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          <img src="https://blog.logrocket.com/wp-content/uploads/2021/08/react-nivo-pie-chart-example.png" />
                        </dt>
                      </div>

                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Application for
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          Backend Developer
                        </dd>
                      </div>

                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Technologies
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          <Badges />
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Salary
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          120,000 - 150,000 EUR
                        </dd>
                      </div>

                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">
                          About
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          Fugiat ipsum ipsum deserunt culpa aute sint do nostrud
                          anim incididunt cillum culpa consequat. Excepteur qui
                          ipsum aliquip consequat sint. Sit id mollit nulla
                          mollit nostrud in ea officia proident. Irure nostrud
                          pariatur mollit ad adipisicing reprehenderit deserunt
                          qui eu.
                        </dd>
                      </div>

                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">
                          Description
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. In, ipsam eos quidem temporibus id quos sint
                          molestias voluptatem exercitationem ullam doloremque
                          cumque earum perspiciatis adipisci illum. Error
                          corporis hic nisi.
                        </dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">
                          Attachments
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          <ul
                            role="list"
                            className="border border-gray-200 rounded-md divide-y divide-gray-200"
                          >
                            {attachments.map((attachment) => (
                              <li
                                key={attachment.name}
                                className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                              >
                                <div className="w-0 flex-1 flex items-center">
                                  <PaperClipIcon
                                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-2 flex-1 w-0 truncate">
                                    {attachment.name}
                                  </span>
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                  <a
                                    href={attachment.href}
                                    className="font-medium text-primary hover:text-primary"
                                  >
                                    Download
                                  </a>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </section>

              {/* Comments*/}
            </div>

            <section
              aria-labelledby="timeline-title"
              className="lg:col-start-3 lg:col-span-1"
            >
              <div className="flex items-center space-x-5 ml-6 w-full">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      className="h-16 w-16 rounded-full"
                      src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
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
                    Ricardo Cooper
                  </h1>
                  <p className="text-sm font-medium text-gray-500">
                    Applied for{" "}
                    <a href="#" className="text-gray-900">
                      Front End Developer
                    </a>{" "}
                    <br></br>
                    On: <b>Company Name SA</b>
                  </p>
                </div>
              </div>

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
                                      <a
                                        href="#"
                                        className="font-medium text-gray-900"
                                      >
                                        {item.target}
                                      </a>
                                    </p>
                                  </div>
                                  <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                    <time dateTime={item.datetime}>
                                      {item.date}
                                    </time>
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
          </div>
        </main>
      </div>
    </div>
  );
};

export default JobView;
