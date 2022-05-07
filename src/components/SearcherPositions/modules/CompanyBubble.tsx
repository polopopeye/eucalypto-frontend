import React from 'react';

import jobModalSlice from 'src/app/slices/modals/jobModalSlice';
import { JobOfferInterface } from 'src/commons/jobOfferInterface';
import { store } from 'src/app/store';
import Badges from 'src/components/Utils/categories/badges';
import currentJobOfferSlice from 'src/app/slices/jobs/currentJobOffersSlice';

export default function CompanyBubble(prop: { jobOffer: JobOfferInterface }) {
  const { jobOffer } = prop;

  const textColor = 'red';
  return (
    <div
      style={{
        backgroundColor: 'black',
        cursor: 'pointer',
      }}
      className={'companyBubble'}
      onClick={() => {
        store.dispatch(
          jobModalSlice.actions.setData({ isOpen: true, data: jobOffer })
        );
        store.dispatch(currentJobOfferSlice.actions.setData(jobOffer));
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          height: '100%',
          flexDirection: 'column',
          transition: 'opacity 0.1s ease',
        }}
      >
        <p
          style={{
            color: textColor,
            fontSize: 14,
            marginBottom: 6,
            fontWeight: 1000,
            maxWidth: 150,
            textAlign: 'center',
          }}
        >
          {jobOffer.job}
        </p>
        <p
          style={{
            color: textColor,
            fontSize: 14,

            textAlign: 'center',
          }}
        >
          {jobOffer.salary}
        </p>

        <p
          style={{
            color: textColor,
            fontSize: 11,
            textAlign: 'center',
          }}
        >
          <Badges categoriesId={jobOffer.categories as Array<string>} />
        </p>
      </div>
    </div>
  );
}
