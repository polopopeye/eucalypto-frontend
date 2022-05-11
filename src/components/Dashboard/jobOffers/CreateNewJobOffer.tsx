/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
import React, { RefObject, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { Dialog, Switch } from '@headlessui/react';
import { useRouter } from 'next/router';
import { JobOfferInterface } from 'src/commons/jobOfferInterface';
import { store } from 'src/app/store';
import { CompanyInterface } from 'src/commons/companyInterface';
import { classNames } from 'src/components/Utils/classnames';
import registerJobOffer from 'src/app/backend/jobOffer/registerJobOffer';
import { Editor } from '@tinymce/tinymce-react';
import { TrashIcon } from '@heroicons/react/outline';

function ModalCreateTechnology(props: {
  setOpen: any;
  open: any;
  setTechsOffer: any;
  setCategory: any;
}) {
  const { open, setOpen, setTechsOffer, setCategory } = props;
  const techRef = useRef() as RefObject<HTMLSelectElement>;
  const valueRef = useRef() as RefObject<HTMLInputElement>;

  const [techs, setTechs] = useState(store.getState().category?.tech);

  store.subscribe(() => {
    setTechs(store.getState().category?.tech);
  });

  return (
    <Dialog
      as="div"
      className="fixed z-10 inset-0 overflow-y-auto"
      onClose={() => {
        setOpen(false);
      }}
      open={open}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        {/* This element is to trick the browser into centering the modal contents. */}
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
          <div>
            <label
              htmlFor="tech"
              className="block text-sm font-medium text-gray-700"
            >
              Tech:
            </label>
            <div className="mt-1">
              <select
                ref={techRef}
                id="tech"
                name="tech"
                autoComplete="tech-name"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              >
                <option value=""></option>
                {techs?.map((tech, index) => {
                  return (
                    <option key={tech.id} value={index}>
                      {tech.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <label
              htmlFor="value"
              className="block text-sm font-medium text-gray-700"
            >
              Value (0-100) %:
            </label>
            <div className="mt-1">
              <input
                ref={valueRef}
                type="number"
                name="value"
                id="value"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="value"
              />
            </div>
          </div>
          <div className="mt-5 sm:mt-6">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
              onClick={async () => {
                const techIndex = techRef.current!.value as unknown as number;

                const dataTech = techs && techs[techIndex];
                const value = valueRef.current!.value;

                if (dataTech && value) {
                  setCategory((prevState: any) => {
                    if (prevState) {
                      const isDuplicated = prevState.some(
                        (categoryId: any) => categoryId === dataTech.id
                      );

                      if (isDuplicated) return prevState;

                      if (!isDuplicated) {
                        return [...prevState, dataTech.id];
                      }
                    } else {
                      return [dataTech.id];
                    }
                  });

                  setTechsOffer((prevState: any) => {
                    if (prevState) {
                      const isDuplicated = prevState.some(
                        (tech: any) => tech.id === dataTech.name
                      );

                      if (!isDuplicated) {
                        return [...prevState, { id: dataTech.name, value }];
                      }
                      if (isDuplicated) {
                        toast.error('Technology already added');
                        return prevState;
                      }
                    } else {
                      return [{ id: dataTech.name, value }];
                    }
                  });

                  setOpen(false);
                }
              }}
            >
              Add new technology
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

const CreateNewJobOffer = () => {
  const router = useRouter();

  const [jobOffer, setJobOffer] = useState({} as JobOfferInterface);

  const [isRemote, setIsRemote] = useState(false);
  const [deadLine, setDeadLine] = useState(
    new Date().toISOString().substring(0, 16)
  );

  const [category, setCategory] = useState([]);
  const [techsOffer, setTechsOffer] = useState(
    [] as JobOfferInterface['technologies']
  );

  const [openModalCreateTechnology, setOpenModalCreateTechnology] =
    useState(false);

  const [companies, setCompanies] = useState(
    store.getState().company.personalcompanies
  );

  store.subscribe(() => {
    setCompanies(store.getState().company.personalcompanies);
  });

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
                      id="company"
                      name="company"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                    onChange={(evt, editor) => {
                      jobOffer.description = editor.getContent();
                    }}
                    init={{
                      height: 500,
                      menubar: false,
                      plugins: [
                        ' imagetools advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table code help wordcount',
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
                <hr className="my-2" />
                <a
                  onClick={() => {
                    setOpenModalCreateTechnology(true);
                  }}
                  className="cursor-pointer bg-primary text-white p-2 m-2 rounded-lg"
                >
                  Add new Technology
                </a>

                <div className="mt-1 w-full flex-col rounded-md shadow-sm">
                  {techsOffer?.map((tech, index) => {
                    return (
                      <div
                        key={tech.id}
                        className="border flex rounded-md border-2 w-full border-gray-700"
                      >
                        <div className="px-2 w-full self-center">
                          {tech.id} :
                        </div>
                        <div className="w-full self-center">{tech.value} %</div>
                        <div className="w-full text-right">
                          <button
                            onClick={() => {
                              setTechsOffer((currentState) =>
                                currentState?.filter((tech, i) => i !== index)
                              );
                            }}
                            className="bg-red-300 hover:bg-red-600 right-0 justify-end p-2 m-1 rounded-md"
                          >
                            <TrashIcon className="w-5 h-auto" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
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
                    defaultValue={new Date().toISOString().substring(0, 16)}
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
                jobOffer.deadLine = deadLine;
                jobOffer.remote = isRemote;
                jobOffer.categories = category;
                jobOffer.technologies = techsOffer;
                jobOffer.published = true;

                registerJobOffer(jobOffer, () => {
                  router.push('/dashboard/user');
                });
              }}
            >
              Publish
            </button>
          </div>
        </div>
      </form>
      <ModalCreateTechnology
        open={openModalCreateTechnology}
        setOpen={setOpenModalCreateTechnology}
        setTechsOffer={setTechsOffer}
        setCategory={setCategory}
      />
    </div>
  );
};

export default CreateNewJobOffer;
