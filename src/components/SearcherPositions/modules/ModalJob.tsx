import { useState } from 'react';
import { store } from 'src/app/store';
import { JobOfferInterface } from 'src/commons/jobOfferInterface';

import HeaderCompany from '../../JobView/HeaderCompany';

export default function ModalJob() {
  const [jobOffer, setJobOffer] = useState(
    store.getState().modals.jobModal.data as JobOfferInterface
  );

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4  sm:px-6">
        <HeaderCompany />

        <p className="mt-1 max-w-2xl text-sm text-gray-500">Details</p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Application for
            </dt>
            <dd className="mt-1 text-sm text-gray-900">{jobOffer.job}</dd>
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Salary expectation
            </dt>
            <dd className="mt-1 text-sm text-gray-900">{jobOffer.salary} </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900">
              <img src="https://blog.logrocket.com/wp-content/uploads/2021/08/react-nivo-pie-chart-example.png" />
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
