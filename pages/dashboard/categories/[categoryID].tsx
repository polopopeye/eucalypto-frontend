import { useRouter } from 'next/router';
import React, { useState } from 'react';
import useCheckUserInfo from 'src/app/firebase/auth/useCheckUserInfo';
import LoadingComponent from 'src/components/Utils/LoadingComponent';
import { store } from '../../../src/app/store';
import { CategoryInterface } from '../../../src/commons/categoryInterface';

import ModifyCategory from '../../../src/components/Dashboard/categories/modifyCategory';

const ModifyCompanyPage = () => {
  const router = useRouter();
  const { categoryID } = router.query;
  const [category] = useState(
    store
      .getState()
      .category.tech?.find((x: CategoryInterface) => x.id === categoryID)
  );

  const checkUserInfo = useCheckUserInfo();
  if (checkUserInfo.loading) return <LoadingComponent />;
  if (!checkUserInfo.isLogedIn) router.push('/signin');

  return (
    <div className="p-32">
      {category && <ModifyCategory category={category} />}
    </div>
  );
};

export default ModifyCompanyPage;
