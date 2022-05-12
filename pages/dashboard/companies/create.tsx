import { useRouter } from 'next/router';
import React, { useState } from 'react';
import useCheckUserInfo from 'src/app/firebase/auth/useCheckUserInfo';
import { store } from 'src/app/store';
import CreateNewCompany from 'src/components/Dashboard/companies/createNewCompany';
import LoadingComponent from 'src/components/Utils/LoadingComponent';

const CreateNewCompanyPage = () => {
  const router = useRouter();
  const checkUserInfo = useCheckUserInfo();
  if (checkUserInfo.loading) return <LoadingComponent />;
  if (!checkUserInfo.isLogedIn) router.push('/signin');

  return (
    <div className="pt-32">
      <CreateNewCompany />
    </div>
  );
};

export default CreateNewCompanyPage;
