import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import retrieveCategories from 'src/app/backend/category/retrieveCategories';
import retrieveParentCategories from 'src/app/backend/category/retrieveParentCategories';
import retrieveAllCompanies from 'src/app/backend/company/retrieveCompanies';
import retrieveJobOffers from 'src/app/backend/jobOffer/retrievesJobOffer';
import useCheckUserInfo from 'src/app/firebase/auth/useCheckUserInfo';
import JobView from 'src/components/JobView/JobView';
import LoadingComponent from 'src/components/Utils/LoadingComponent';

const Job = () => {
  const router = useRouter();
  const { offerID } = router.query;

  const checkUserInfo = useCheckUserInfo();
  if (checkUserInfo.loading) return <LoadingComponent />;

  retrieveAllCompanies();
  retrieveParentCategories((allParentCats: any) => {
    allParentCats.forEach((parentCat: any) => {
      retrieveCategories({
        propToFind: 'type',
        value: parentCat.name,
        saveIn: parentCat.name,
      });
    });
  });
  if (offerID) {
    retrieveJobOffers({
      prop: 'id',
      value: offerID as any,
      reduxSpace: 'currentJobOffer',
    });
  }

  return (
    <div>
      <JobView />
    </div>
  );
};

export default Job;
