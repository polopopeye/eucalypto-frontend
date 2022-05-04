import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { store } from 'src/app/store';

import ModifyCompanyDash from 'src/components/Dashboard/companies/ModifyCompanyDash';
import getCompanyDataFromId from 'src/components/Utils/redux/getCompanyDataFromId';
import useCheckUserInfo from 'src/app/firebase/auth/useCheckUserInfo';
import LoadingComponent from 'src/components/Utils/LoadingComponent';

const ModifyCompanyPage = () => {
  const router = useRouter();
  const { companyID } = router.query;

  const [company] = useState(getCompanyDataFromId(companyID as string));

  const checkUserInfo = useCheckUserInfo();
  if (checkUserInfo.loading) return <LoadingComponent />;
  if (!checkUserInfo.isLogedIn) router.push('/signin');

  return (
    <div className="pt-32">
      {company && <ModifyCompanyDash company={company} />}
    </div>
  );
};

export default ModifyCompanyPage;
