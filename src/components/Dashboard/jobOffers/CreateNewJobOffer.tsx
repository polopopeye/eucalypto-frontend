/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { store } from "../../../app/store";
import MultipleSelect from "../../Utils/MultipleSelect";
import { imageFiletoDataURL } from "../../Utils/toDataUrl";
import Link from "next/link";
import { toast } from "react-toastify";
import { Switch } from "@headlessui/react";
import { JobOfferInterface } from "../../../commons/jobOfferInterface";
import registerJobOffer from "../../../app/backend/registerJobOffer";
import { Router, useRouter } from "next/router";
import { classNames } from "../../Utils/classnames";

const CreateNewJobOffer = () => {
  const router = useRouter();

  const [jobOffer, setJobOffer] = useState({} as JobOfferInterface);
  const [techs, setTechs] = useState([]);
  const [isRemote, setIsRemote] = useState(false);
  return (
    <div>
      <form className="space-y-8 divide-y divide-gray-200">
        <div className="space-y-8 divide-y divide-gray-200">
          <div>
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Create a new job Offer
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Create a new job offer for your company or organization.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Page offer tittle
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => {
                      setJobOffer({ ...jobOffer, name: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company
                </label>
                <div className="mt-1">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="company"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => {
                      jobOffer.company = e.target.value;
                    }}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="jobOffer"
                  className="block text-sm font-medium text-gray-700"
                >
                  job offer title
                </label>
                <div className="mt-1">
                  <input
                    id="jobOffer"
                    name="jobOffer"
                    type="text"
                    autoComplete="jobOffer"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => {
                      setJobOffer({ ...jobOffer, job: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location
                </label>
                <div className="mt-1">
                  <input
                    id="location"
                    name="location"
                    type="text"
                    autoComplete="location"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => {
                      setJobOffer({ ...jobOffer, location: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="salary"
                  className="block text-sm font-medium text-gray-700"
                >
                  salary
                </label>
                <div className="mt-1">
                  <input
                    id="salary"
                    name="salary"
                    type="text"
                    autoComplete="salary"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => {
                      setJobOffer({ ...jobOffer, salary: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <Switch.Group
                  as="div"
                  className="flex items-center justify-between"
                >
                  <span className="flex-grow flex flex-col">
                    <Switch.Label
                      as="span"
                      className="text-sm font-medium text-gray-900"
                      passive
                    >
                      Remote work
                    </Switch.Label>
                    <Switch.Description
                      as="span"
                      className="text-sm text-gray-500"
                    >
                      Remote work is available
                    </Switch.Description>
                  </span>
                  <Switch
                    checked={isRemote}
                    onChange={(e) => {
                      setJobOffer({ ...jobOffer, remote: e.valueOf() });
                      setIsRemote(e.valueOf());
                    }}
                    className={classNames(
                      isRemote ? "bg-indigo-600" : "bg-gray-200",
                      "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={classNames(
                        isRemote ? "translate-x-5" : "translate-x-0",
                        "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                      )}
                    />
                  </Switch>
                </Switch.Group>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Add your description
                </label>
                <div className="mt-1">
                  <textarea
                    rows={4}
                    name="description"
                    id="description"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => {
                      setJobOffer({ ...jobOffer, description: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Techs and skills
                </label>
                <div className="mt-1 w-full flex rounded-md shadow-sm">
                  <MultipleSelect
                    setVariant={setTechs}
                    variant={techs}
                    children={[
                      { value: "react", label: "react" },
                      { value: "node", label: "node" },
                      { value: "html", label: "html" },
                      { value: "management", label: "management" },
                      { value: "kanban", label: "kanban" },
                    ]}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  End Time of the offer
                </label>
                <div className="mt-1 w-full flex rounded-md shadow-sm">
                  <input
                    type="datetime-local"
                    id="endTime"
                    name="endTime"
                    defaultValue={new Date().toISOString().substring(0, 16)}
                    min={new Date().toISOString().substring(0, 16)}
                    max="2030-06-14T00:00"
                    onChange={(e) => {
                      const date = new Date(e.target.value);
                      setJobOffer({ ...jobOffer, endTime: date });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <Link href="/dashboard/user">
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
            </Link>
            <button
              type="button"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => {
                toast.warn("Loading...");
                jobOffer.categories = techs;
                jobOffer.published = false;
                registerJobOffer(jobOffer, () => {
                  router.push("/dashboard/user");
                });
              }}
            >
              Save as draft
            </button>
            <button
              type="button"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => {
                toast.warn("Loading...");
                jobOffer.categories = techs;
                jobOffer.published = true;
                registerJobOffer(jobOffer, () => {
                  router.push("/dashboard/user");
                });
              }}
            >
              Publish
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateNewJobOffer;
