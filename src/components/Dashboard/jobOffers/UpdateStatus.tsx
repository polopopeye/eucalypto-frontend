import React, { useEffect, useState } from 'react';
import retrieveStatusJobOffer from 'src/app/backend/jobOffer/statusOffer/retrieveStatusJobOffer';
import { store } from 'src/app/store';
import { StatusJobOfferInterface } from 'src/commons/statusJobOfferInterface';

import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/outline';
import deleteStatusJobOffer from 'src/app/backend/jobOffer/statusOffer/deleteStatusJobOffer';
import modifyStatusJobOffer from 'src/app/backend/jobOffer/statusOffer/modifyStatusJobOffer';
import registerStatusJobOffer from 'src/app/backend/jobOffer/statusOffer/registerStatusJobOffer';
import sendMailStatusChanged from 'src/app/backend/mail/sendMailStatusChanged';
import getUserDataFromId from 'src/components/Utils/redux/getUserDataFromId';
import { UserInterface } from 'src/commons/userInterface';

function ModalCreate(props: {
  setOpen: any;
  open: any;
  setStatusJobOffers: any;
  applicantId: string;
}) {
  const { open, setOpen, setStatusJobOffers, applicantId } = props;

  const [statusNewJobOffer, setStatusNewJobOffer] = useState(
    {} as StatusJobOfferInterface
  );

  return (
    <Dialog
      as="div"
      className="fixed z-50 inset-0 overflow-y-auto"
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
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              status:
            </label>
            <div className="mt-1">
              <select
                id="status"
                name="status"
                autoComplete="status-name"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                onChange={(e) => {
                  setStatusNewJobOffer({
                    ...statusNewJobOffer,
                    status: e.target.value,
                  });
                }}
              >
                <option value=""></option>
                <option value="progress">progress</option>
                <option value="completed">completed</option>
                <option value="default">default</option>
              </select>
            </div>

            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              description:
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="description"
                id="description"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="description"
                onChange={(e) => {
                  setStatusNewJobOffer({
                    ...statusNewJobOffer,
                    description: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="mt-5 sm:mt-6">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
              onClick={async () => {
                statusNewJobOffer.idJob =
                  store.getState().jobs.currentJobOffer.id;
                statusNewJobOffer.idUser = applicantId;
                statusNewJobOffer.published = true;

                registerStatusJobOffer(statusNewJobOffer, () => {
                  sendMailStatusChanged({
                    user: getUserDataFromId(applicantId) as UserInterface,
                    jobOffer: store.getState().jobs.currentJobOffer,
                    statusDescription: statusNewJobOffer.description as string,
                  });
                  retrieveStatusJobOffer(
                    {
                      userId: applicantId,
                      jobId: statusNewJobOffer.idJob as string,
                    },
                    (response: any) => {
                      setStatusJobOffers(response);
                      setOpen(false);
                    }
                  );
                });
              }}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

function ModalUpdate(props: {
  statusJobOffer: StatusJobOfferInterface;
  setOpen: any;
  open: any;
  setStatusJobOffers: any;
}) {
  const { statusJobOffer, open, setOpen, setStatusJobOffers } = props;

  const [updatedStatusJobOffer, setUpdatedStatusJobOffer] = useState({
    ...statusJobOffer,
  } as StatusJobOfferInterface);

  return (
    <Dialog
      as="div"
      className="fixed z-50 inset-0 overflow-y-auto"
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
            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700"
              >
                status:
              </label>
              <div className="mt-1">
                <select
                  id="status"
                  name="status"
                  autoComplete="status-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  defaultValue={statusJobOffer.status}
                  onChange={(e) => {
                    setUpdatedStatusJobOffer({
                      ...updatedStatusJobOffer,
                      status: e.target.value,
                    });
                  }}
                >
                  <option value=""></option>
                  <option value="progress">progress</option>
                  <option value="completed">completed</option>
                  <option value="default">default</option>
                </select>
              </div>

              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description:
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="description"
                  id="description"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Description"
                  defaultValue={statusJobOffer.description}
                  onChange={(e) => {
                    setUpdatedStatusJobOffer({
                      ...updatedStatusJobOffer,
                      description: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-6">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
              onClick={async () => {
                if (updatedStatusJobOffer.createdAt)
                  delete updatedStatusJobOffer.createdAt;
                if (updatedStatusJobOffer.updatedAt)
                  delete updatedStatusJobOffer.updatedAt;

                updatedStatusJobOffer.published = true;

                updatedStatusJobOffer.id = statusJobOffer.id;

                modifyStatusJobOffer(updatedStatusJobOffer, () => {
                  setOpen(false);
                  retrieveStatusJobOffer(
                    {
                      jobId: statusJobOffer.idJob as string,
                      userId: statusJobOffer.idUser as string,
                    },
                    (status: Array<StatusJobOfferInterface>) => {
                      setStatusJobOffers(status);
                    }
                  );
                });
              }}
            >
              Modify
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

const UpdateStatus = (props: { applicantId: string }) => {
  const [statusJobOffers, setStatusJobOffers] = useState(
    [] as Array<StatusJobOfferInterface>
  );
  const [currentStatus, setCurrentStatus] = useState(
    {} as StatusJobOfferInterface
  );
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const [jobOffer, setJobOffer] = useState(
    store.getState().jobs.currentJobOffer
  );

  store.subscribe(() => {
    setJobOffer(store.getState().jobs.currentJobOffer);
  });

  useEffect(() => {
    if (jobOffer.id) {
      retrieveStatusJobOffer(
        {
          jobId: jobOffer.id as string,
          userId: props.applicantId as string,
        },
        (status: Array<StatusJobOfferInterface>) => {
          setStatusJobOffers(status);
          console.log(
            '🚀 ~ file: UpdateStatus.tsx ~ line 286 ~ useEffect ~ status',
            status
          );
        }
      );
    }
  }, [props.applicantId, jobOffer]);

  return (
    <>
      {statusJobOffers && (
        <>
          {statusJobOffers
            .sort((a: any, b: any) => {
              return a.createdAt._seconds - b.createdAt._seconds;
            })
            .map((status) => (
              <div
                className="p-4 m-4 grid  grid-cols-2 gap-4 border-2 border-secondary rounded-md"
                key={status.id}
              >
                <div>
                  {status.description} ({status.status})
                </div>
                <div className=" text-right">
                  <a
                    className="cursor-pointer bg-red-500 text-white p-2 m-2 rounded-lg"
                    onClick={() => {
                      deleteStatusJobOffer(
                        {
                          userId: status.id as string,
                        },
                        () => {
                          retrieveStatusJobOffer(
                            {
                              jobId: jobOffer.id as string,
                              userId: props.applicantId as string,
                            },
                            (status: any) => {
                              setStatusJobOffers(status);
                            }
                          );
                        }
                      );
                    }}
                  >
                    delete
                  </a>
                  <a
                    className="cursor-pointer bg-primary text-white p-2 m-2 rounded-lg"
                    onClick={() => {
                      setCurrentStatus(status);
                      setOpenEditModal(true);
                    }}
                  >
                    modify
                  </a>
                </div>
              </div>
            ))}
          <ModalUpdate
            statusJobOffer={currentStatus}
            open={openEditModal}
            setOpen={setOpenEditModal}
            setStatusJobOffers={setStatusJobOffers}
          />
        </>
      )}
      <div className="mt-4 mx-auto w-full text-center">
        <a
          onClick={() => {
            setOpenCreateModal(true);
          }}
          className="cursor-pointer bg-primary text-white p-2 m-2 rounded-lg"
        >
          Create New Status
        </a>
        {/* TODO: DISCARD APROVE APPLICANT */}
        {/* <a
          onClick={() => {
            setOpenCreateModal(true);
          }}
          className="cursor-pointer bg-primary text-white p-2 m-2 rounded-lg"
        >
          DISCARD APPLICANT
        </a>
        <a
          onClick={() => {
            setOpenCreateModal(true);
          }}
          className="cursor-pointer bg-primary text-white p-2 m-2 rounded-lg"
        >
          APROVE APPLICANT
        </a> */}
      </div>
      <ModalCreate
        open={openCreateModal}
        setOpen={setOpenCreateModal}
        setStatusJobOffers={setStatusJobOffers}
        applicantId={props.applicantId}
      />
    </>
  );
};

export default UpdateStatus;
