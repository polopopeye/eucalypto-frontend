/* eslint-disable @next/next/link-passhref */
import { Dialog } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/outline';
import Link from 'next/link';

import React, { useState } from 'react';
import modifyJobOffer from 'src/app/backend/jobOffer/modifyJobOffer';
import retrieveJobOffers from 'src/app/backend/jobOffer/retrievesJobOffer';
import deleteStatusJobOffer from 'src/app/backend/jobOffer/statusOffer/deleteStatusJobOffer';
import registerStatusJobOffer from 'src/app/backend/jobOffer/statusOffer/registerStatusJobOffer';
import sendMailNewApply from 'src/app/backend/mail/sendMailNewApply';

import useCheckUserInfo from 'src/app/firebase/auth/useCheckUserInfo';
import { store } from 'src/app/store';
import { JobOfferInterface } from 'src/commons/jobOfferInterface';
import { StatusJobOfferInterface } from 'src/commons/statusJobOfferInterface';
import { UserInterface } from 'src/commons/userInterface';
import LoadingComponent from 'src/components/Utils/LoadingComponent';
import getCompanyDataFromId from 'src/components/Utils/redux/getCompanyDataFromId';

function ModalFullfillDataBeforeApply(props: {
  setOpen: any;
  open: any;
  setTechsOffer: any;
  setCategory: any;
}) {
  const { open, setOpen, setTechsOffer, setCategory } = props;

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
              Curriculum Vitae (CV):
            </label>
            <div className="mt-1">
              <select
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
              Linked In:
            </label>
            <div className="mt-1">
              <input
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

const ApplyNowModule = () => {
  const [user, setUser] = useState(store.getState().user as UserInterface);
  const [jobOffer, setJobOffer] = useState(
    store.getState().jobs.currentJobOffer as JobOfferInterface
  );

  const [alreadyApplied, setAlreadyApplied] = useState(
    jobOffer.applicants?.find((applicantId) => applicantId === user.id)
      ? true
      : false
  );

  const [openModalFullfill, setOpenModalFullfill] = useState(true);

  const handleModifyJobOffer = (id: string, applicants: Array<string>) => {
    modifyJobOffer({ id: id, applicants: applicants }, () => {
      retrieveJobOffers({
        prop: 'id',
        value: id,
        reduxSpace: 'currentJobOffer',
      });
    });
  };

  const handleApplyForJob = () => {
    const jobOfferapplicants = jobOffer.applicants
      ? [...jobOffer.applicants, user.id as string]
      : [user.id as string];

    handleModifyJobOffer(jobOffer.id as string, jobOfferapplicants);

    const statusJobOffer = {
      idJob: jobOffer.id as string,
      idUser: user.id as string,
      status: 'default',
      description:
        'Applied to ' + getCompanyDataFromId(jobOffer.company as string).name,
      published: true,
    } as StatusJobOfferInterface;

    registerStatusJobOffer(statusJobOffer);
    sendMailNewApply({ user, jobOffer });
  };
  const handleUnapplyForJob = () => {
    const jobOfferapplicants = jobOffer.applicants?.filter(
      (applicants) => applicants !== user.id
    );

    handleModifyJobOffer(
      jobOffer.id as string,
      jobOfferapplicants?.length ? jobOfferapplicants : ['none']
    );

    deleteStatusJobOffer({
      userId: user.id as string,
      jobId: jobOffer.id as string,
    });
  };

  const checkUserInfo = useCheckUserInfo();
  if (checkUserInfo.loading) return <LoadingComponent />;

  // Updates the state of the component when the user applys for the job
  store.subscribe(() => {
    setJobOffer(store.getState().jobs.currentJobOffer as JobOfferInterface);
    setUser(store.getState().user as UserInterface);
    setAlreadyApplied(
      store
        .getState()
        .jobs.currentJobOffer.applicants?.find(
          (applicantId) => applicantId === user.id
        )
        ? true
        : false
    );
  });

  return (
    <>
      {checkUserInfo.isLogedIn ? (
        <>
          {alreadyApplied ? (
            <>
              <button
                type="button"
                className="w-full inline-flex items-center text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-lg mr-2 font-medium text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                onClick={() => {
                  handleUnapplyForJob();
                }}
              >
                <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Already Applied
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="w-full inline-flex items-center text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-lg mr-2 font-medium text-white bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:bg-secondary"
                onClick={() => {
                  handleApplyForJob();
                }}
              >
                <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Apply Now FALTA CV
              </button>
            </>
          )}
        </>
      ) : (
        // NOT LOGED IN
        <Link href="/signin">
          <button
            type="button"
            className="w-full inline-flex items-center text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-lg mr-2 font-medium text-white bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:bg-secondary"
          >
            <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Apply Now
          </button>
        </Link>
      )}
      <ModalFullfillDataBeforeApply
        setOpen={setOpenModalFullfill}
        open={openModalFullfill}
      />
    </>
  );
};

export default ApplyNowModule;
