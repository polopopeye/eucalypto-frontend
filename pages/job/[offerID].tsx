import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import retrieveCategories from 'src/app/backend/category/retrieveCategories';
import retrieveAllCompanies from 'src/app/backend/company/retrieveCompanies';
import retrieveJobOffers from 'src/app/backend/jobOffer/retrievesJobOffer';
import JobView from 'src/components/JobView/JobView';

const Job = () => {
  const router = useRouter();
  const { offerID } = router.query;

  useEffect(() => {
    retrieveJobOffers({
      propOrId: 'id',
      value: offerID as string,
      reduxSpace: 'currentJobOffer',
    });
    retrieveCategories({
      propToFind: 'type',
      value: 'tech',
      saveIn: 'tech',
    });

    retrieveAllCompanies();
  }, [offerID]);

  return (
    <div>
      <JobView />
    </div>
  );
};

export default Job;
