/* eslint-disable @next/next/link-passhref */

import { useRef, useState } from "react";
import { Dialog } from "@headlessui/react";

import ModalJob from "./ModalJob";
import { store } from "../../../app/store";
import jobModalSlice from "../../../app/slices/modals/jobModalSlice";
import Link from "next/link";
import { JobOfferInterface } from "../../../commons/jobOfferInterface";

export default function ModalContainer() {
  const [jobOffer, setJobOffer] = useState(
    store.getState().modals.jobModal.data as JobOfferInterface
  );
  const [open, setOpen] = useState(store.getState().modals.jobModal.isOpen);

  const cancelButtonRef = useRef(null);

  store.subscribe(() => {
    setJobOffer(store.getState().modals.jobModal.data as JobOfferInterface);
    setOpen(store.getState().modals.jobModal.isOpen);
  });

  return (
    <Dialog
      as="div"
      className="fixed z-10 inset-0 overflow-y-auto"
      initialFocus={cancelButtonRef}
      onClose={() => {
        store.dispatch(
          jobModalSlice.actions.setData({ isOpen: false, data: {} })
        );
      }}
      open={open}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <Dialog.Overlay className="fixed inset-0 bg-primary opacity-60 transition-opacity " />
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div>
            <div className="mt-3 text-center sm:mt-5">
              <div className="mt-2">
                <ModalJob />
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
            <Link href={"/job/" + jobOffer.id}>
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-secondary text-base font-medium text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:col-start-2 sm:text-sm"
                onClick={() => {
                  store.dispatch(
                    jobModalSlice.actions.setData({ isOpen: false, data: {} })
                  );
                }}
              >
                More Information
              </button>
            </Link>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:mt-0 sm:col-start-1 sm:text-sm"
              onClick={() => {
                store.dispatch(
                  jobModalSlice.actions.setData({ isOpen: false, data: {} })
                );
              }}
              ref={cancelButtonRef}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
