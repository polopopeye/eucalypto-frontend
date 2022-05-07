/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { Switch } from '@headlessui/react';
import { useRouter } from 'next/router';

import { JobOfferInterface } from 'src/commons/jobOfferInterface';
import { store } from 'src/app/store';
import retrieveCategories from 'src/app/backend/category/retrieveCategories';
import retrieveCompanyByOwner from 'src/app/backend/company/retrieveCompaniesByOwner';
import { CompanyInterface } from 'src/commons/companyInterface';
import { classNames } from 'src/components/Utils/classnames';
import MultipleSelect from 'src/components/Utils/MultipleSelect';
import deleteJobOffer from 'src/app/backend/jobOffer/deleteJobOffer';
import modifyJobOffer from 'src/app/backend/jobOffer/modifyJobOffer';
import { Editor } from '@tinymce/tinymce-react';

const ModifyJobOffer = () => {
  const router = useRouter();
  const deadLineRef = useRef(null) as any;
  const companyRef = useRef(null) as any;

  const [jobOffer, setJobOffer] = useState({
    ...store.getState().jobs.currentJobOffer,
  } as JobOfferInterface);

  const categories = store.getState().jobs.currentJobOffer.categories || [];
  const [techs, setTechs] = useState([...categories] as Array<string>);

  const [isRemote, setIsRemote] = useState(
    store.getState().jobs.currentJobOffer.remote || false
  );

  const [techMultipleSelect, setTechMultipleSelect] = useState(
    store.getState().category?.tech
  );
  const [companies, setCompanies] = useState(
    store.getState().company.personalcompanies
  );

  const [deadLine, setDeadLine] = useState(
    new Date(store.getState().jobs.currentJobOffer.deadLine || '1/1/2021')
      .toISOString()
      .substring(0, 16)
  );

  store.subscribe(() => {
    setTechMultipleSelect(store.getState().category?.tech);

    setCompanies(store.getState().company.personalcompanies);
    if (companyRef.current)
      companyRef.current.value = store.getState().jobs.currentJobOffer.company;

    setJobOffer({
      ...store.getState().jobs.currentJobOffer,
    });

    const date = new Date(
      store.getState().jobs.currentJobOffer.deadLine as string
    )
      .toISOString()
      .substring(0, 16);
    setDeadLine(date);
    if (deadLineRef.current) deadLineRef.current.value = date as string;

    const categories = store.getState().jobs.currentJobOffer.categories || [];
    setTechs([...categories] as Array<string>);
  });

  return (
    <div>
      <form className="space-y-8 divide-y divide-gray-200">
        <div className="space-y-8 divide-y divide-gray-200">
          <div>
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Modify job Offer
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Modify job offer for your company or organization.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-y-6 gap-x-4 sm:grid-cols-6">
              {companies && (
                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company
                  </label>

                  <div className="mt-1">
                    <select
                      ref={companyRef}
                      id="company"
                      name="company"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      defaultValue={jobOffer.company}
                      onChange={(e) => {
                        jobOffer.company = e.target.value;
                      }}
                    >
                      <option key="" value=""></option>
                      {companies.map((company: CompanyInterface) => (
                        <option key={company.id} value={company.id}>
                          {company.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
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
                    defaultValue={jobOffer.job}
                    onChange={(e) => {
                      jobOffer.job = e.target.value;
                    }}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="fulltime"
                  className="block text-sm font-medium text-gray-700"
                >
                  Time (fullTime? or partTime?) 4h or 8h or 12h or 16h or 20h /
                  week etc...
                </label>
                <div className="mt-1">
                  <input
                    id="fulltime"
                    name="fulltime"
                    type="text"
                    autoComplete="fulltime"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={jobOffer.fulltime}
                    onChange={(e) => {
                      jobOffer.fulltime = e.target.value;
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
                    defaultValue={jobOffer.location}
                    onChange={(e) => {
                      jobOffer.location = e.target.value;
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
                    defaultValue={jobOffer.salary}
                    onChange={(e) => {
                      jobOffer.salary = e.target.value;
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
                      setIsRemote(e.valueOf());
                    }}
                    className={classNames(
                      isRemote ? 'bg-indigo-600' : 'bg-gray-800',
                      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={classNames(
                        isRemote ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                      )}
                    />
                  </Switch>
                </Switch.Group>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Add your description
                </label>
                <div className="mt-1">
                  <Editor
                    // onInit={(evt, editor) => (editorRef.current = editor)}
                    initialValue={jobOffer.description}
                    onChange={(evt, editor) => {
                      jobOffer.description = editor.getContent();
                    }}
                    init={{
                      height: 500,
                      menubar: false,
                      plugins: [
                        ' imagetools advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount',
                        'a11ychecker   casechange formatpainter linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable tinycomments tinymcespellchecker',
                      ],

                      toolbar_mode: 'floating',
                      tinycomments_mode: 'embedded',
                      tinycomments_author: 'Kenneth Suarez',

                      toolbar:
                        ' paste preview | undo redo | media image imagetools | checklist code | formatpainter pageembed table | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat ',
                      content_style:
                        'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
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
                    children={techMultipleSelect as object[]}
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
                    id="deadLine"
                    name="deadLine"
                    defaultValue={deadLine}
                    ref={deadLineRef}
                    min={new Date().toISOString().substring(0, 16)}
                    max="2030-06-14T00:00"
                    onChange={(e) => {
                      const date = new Date(e.target.value)
                        .toISOString()
                        .substring(0, 16);
                      setDeadLine(date);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-red-600 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-200 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={async () => {
                deleteJobOffer(jobOffer, () => {
                  router.push('/dashboard/user');
                });
              }}
            >
              Delete Job Offer
            </button>

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
                toast.warn('Loading...');
                jobOffer.remote = isRemote;
                jobOffer.deadLine = deadLine;

                jobOffer.categories = techs;
                jobOffer.published = false;
                if (jobOffer.createdAt) delete jobOffer.createdAt;
                if (jobOffer.updatedAt) delete jobOffer.updatedAt;

                modifyJobOffer(jobOffer, () => {
                  router.push('/dashboard/user');
                });
              }}
            >
              Save as draft
            </button>
            <button
              type="button"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => {
                toast.warn('Loading...');
                jobOffer.remote = isRemote;
                jobOffer.deadLine = deadLine;
                console.log(
                  '🚀 ~ file: modifyJobOffer.tsx ~ line 347 ~ ModifyJobOffer ~ deadLine',
                  deadLine
                );

                jobOffer.categories = techs;
                jobOffer.published = true;
                if (jobOffer.createdAt) delete jobOffer.createdAt;
                if (jobOffer.updatedAt) delete jobOffer.updatedAt;

                console.log(
                  '🚀 ~ file: modifyJobOffer.tsx ~ line 347 ~ modifyJobOffer ~ jobOffer',
                  jobOffer
                );
                modifyJobOffer(jobOffer, () => {
                  router.push('/dashboard/user');
                });
              }}
            >
              Update Job Offer
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModifyJobOffer;
