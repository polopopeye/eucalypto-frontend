import React, { useEffect, useState } from "react";

// import AlertMsgAlreadyApplied from "./modules/alertAlreadyApplied";

import Badges from "../Utils/categories/badges";

import getOfferDataFromId from "../Utils/redux/getOfferDataFromId";

import retrieveJobOffers from "src/app/backend/retrievesJobOffer";
import retrieveCategories from "src/app/backend/retrieveCategories";
import UserStepsTimeline from "./modules/userStepsTimeline";
import { JobOfferInterface } from "src/commons/jobOfferInterface";
import { store } from "src/app/store";
import JobViewHeader from "./JobViewHeader";
import HeaderCompany from "./headerCompany";

const JobView = (props: { offerId: string }) => {
  const { offerId } = props;

  const [jobOffer, setJobOffer] = useState(
    getOfferDataFromId(offerId) as JobOfferInterface
  );

  useEffect(() => {
    retrieveJobOffers({
      propOrId: "published",
      value: true,
      reduxSpace: "allJobOffers",
    });

    retrieveCategories({
      propToFind: "type",
      value: "tech",
      saveIn: "tech",
    });
  }, []);

  store.subscribe(() => {
    setJobOffer(getOfferDataFromId(offerId) as JobOfferInterface);
  });

  const [alreadyApplied, setAlreadyApplied] = useState(true);

  return (
    <div>
      {jobOffer.name && (
        <div className="min-h-full pt-16">
          <main className="py-10">
            {/* Page header */}
            <JobViewHeader
              jobOffer={jobOffer}
              alreadyApplied={alreadyApplied}
            />
            {/* {alreadyApplied && <AlertMsgAlreadyApplied />} */}

            <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
              <div className="space-y-6 lg:col-start-1 lg:col-span-2">
                <HeaderCompany companyId={jobOffer.company} />

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
                            {jobOffer.job}
                          </dd>
                        </div>

                        {jobOffer.categories && (
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Technologies
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              <Badges categoriesId={jobOffer.categories} />
                            </dd>
                          </div>
                        )}
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Salary
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {jobOffer.salary}
                          </dd>
                        </div>

                        <div className="sm:col-span-2">
                          <dt className="text-sm font-medium text-gray-500">
                            About
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {jobOffer.description}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </section>
              </div>

              <UserStepsTimeline
                job={jobOffer.job}
                companyId={jobOffer.company}
              />
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

export default JobView;
