import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import retrieveCategories from 'src/app/backend/category/retrieveCategories';
import retrieveParentCategories from 'src/app/backend/category/retrieveParentCategories';
import retrieveCompanyByOwner from 'src/app/backend/company/retrieveCompaniesByOwner';
import retrieveJobOffers from 'src/app/backend/jobOffer/retrievesJobOffer';
import useCheckUserInfo from 'src/app/firebase/auth/useCheckUserInfo';
import { store } from 'src/app/store';
import ModifyJobOffer from 'src/components/Dashboard/jobOffers/modifyJobOffer';
import LoadingComponent from 'src/components/Utils/LoadingComponent';

const ModifyJobOfferPage = () => {
  const router = useRouter();
  const { offerID } = router.query;

  const checkUserInfo = useCheckUserInfo();
  if (checkUserInfo.loading) return <LoadingComponent />;
  if (!checkUserInfo.isLogedIn) router.push('/signin');
  retrieveJobOffers({
    prop: 'id',
    value: offerID as string,
    reduxSpace: 'currentJobOffer',
  });
  retrieveParentCategories((allParentCats: any) => {
    allParentCats.forEach((parentCat: any) => {
      retrieveCategories({
        propToFind: 'type',
        value: parentCat.name,
        saveIn: parentCat.name,
      });
    });
  });
  // TODO: This is not necesary to filter for an admin
  retrieveCompanyByOwner(store.getState().user.id as string);

  return (
    <div className="pt-32">
      <ModifyJobOffer />
    </div>
  );
};

export default ModifyJobOfferPage;
