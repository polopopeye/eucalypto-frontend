/* eslint-disable @next/next/link-passhref */
import { Dialog } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import modifyJobOffer from 'src/app/backend/jobOffer/modifyJobOffer';
import retrieveJobOffers from 'src/app/backend/jobOffer/retrievesJobOffer';
import deleteStatusJobOffer from 'src/app/backend/jobOffer/statusOffer/deleteStatusJobOffer';
import registerStatusJobOffer from 'src/app/backend/jobOffer/statusOffer/registerStatusJobOffer';
import sendMailNewApply from 'src/app/backend/mail/sendMailNewApply';
import modifyUserInBackend from 'src/app/backend/users/modifyUserInBackend';

import useCheckUserInfo from 'src/app/firebase/auth/useCheckUserInfo';
import newUpload from 'src/app/firebase/storage/newUpload';
import { store } from 'src/app/store';
import { JobOfferInterface } from 'src/commons/jobOfferInterface';
import { StatusJobOfferInterface } from 'src/commons/statusJobOfferInterface';
import { UserInterface } from 'src/commons/userInterface';
import LoadingComponent from 'src/components/Utils/LoadingComponent';
import openFileInNewWindow from 'src/components/Utils/openFileInNewWindow';
import getCompanyDataFromId from 'src/components/Utils/redux/getCompanyDataFromId';
import { filetoDataURL } from 'src/components/Utils/toDataUrl';

function ModalFullfillDataBeforeApply(props: { setOpen: any; open: any }) {
  const { open, setOpen } = props;

  const [curriculum, setCurriculum] = useState('');

  const [newCurriculumUpload, setNewCurriculumUpload] = useState(false);

  const [user, setUser] = useState({
    ...store.getState().user,
  } as UserInterface);

  store.subscribe(() => {
    setUser({ ...store.getState().user } as UserInterface);
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
            {!user.curriculum && (
              <>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Upload your Curriculum Vitae
                </label>
                <div className="mt-1">
                  <input
                    className="hidden"
                    type="file"
                    accept=".pdf"
                    id="curriculum"
                    name="curriculum"
                    onChange={async (e) => {
                      filetoDataURL(e.target, (url: any) => {
                        setCurriculum(url);
                        setNewCurriculumUpload(true);
                      });
                    }}
                  />

                  <button
                    onClick={(e) => {
                      if (document && document.getElementById('curriculum')) {
                        document.getElementById('curriculum')!.click();
                      }
                    }}
                    type="button"
                    className="cursor-pointer mb-4 w-full bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Upload CV
                  </button>

                  {curriculum && (
                    <button
                      type="button"
                      className="cursor-pointer text-white w-full bg-primary hover:bg-secondary py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => {
                        openFileInNewWindow(curriculum);
                      }}
                    >
                      View your current Curriculum
                    </button>
                  )}
                </div>
              </>
            )}

            {!user.linkedIn && (
              <>
                <label
                  htmlFor="linkedIn"
                  className="block text-sm font-medium text-gray-700"
                >
                  linkedIn
                </label>
                <div className="mt-1">
                  <input
                    id="linkedIn"
                    name="linkedIn"
                    type="text"
                    autoComplete="linkedIn"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => {
                      user.linkedIn = e.target.value;
                    }}
                  />
                </div>
              </>
            )}
          </div>
          <div className="mt-5 sm:mt-6">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
              onClick={async () => {
                if (user.createdAt) delete user.createdAt;
                if (user.updatedAt) delete user.updatedAt;

                if (!user.curriculum || !user.linkedIn) {
                  if (!curriculum) toast.error('You must upload a curriculum');
                  if (!user.linkedIn)
                    toast.error('You must update your linkedIn url');
                }
                if (user.linkedIn) {
                  if (!user.curriculum) {
                    if (newCurriculumUpload) {
                      newUpload(
                        curriculum as string,
                        'curriculum.pdf',
                        user.id as string,
                        (url: string) => {
                          user.curriculum = url;
                          modifyUserInBackend(user, () => {
                            setOpen(false);
                          });
                        }
                      );
                    }
                  } else {
                    modifyUserInBackend(user, () => {
                      setOpen(false);
                    });
                  }
                }
              }}
            >
              Update Profile / Save data
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

  const [openModalFullfill, setOpenModalFullfill] = useState(false);

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
                id="apply-now"
                type="button"
                className="w-full inline-flex items-center text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-lg mr-2 font-medium text-white bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:bg-secondary"
                onClick={() => {
                  if (!user.curriculum || !user.linkedIn) {
                    setOpenModalFullfill(true);
                  } else {
                    handleApplyForJob();
                  }
                }}
              >
                <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Apply Now
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
