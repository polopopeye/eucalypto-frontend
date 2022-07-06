import { useRouter } from 'next/router';
import React from 'react';
import useCheckUserInfo from 'src/app/firebase/auth/useCheckUserInfo';
import LoadingComponent from 'src/components/Utils/LoadingComponent';

import CreateNewCategory from '../../../src/components/Dashboard/categories/createNewCategory';

const CreateNewCategoryPage = () => {
  const router = useRouter();
  const checkUserInfo = useCheckUserInfo();
  if (checkUserInfo.loading) return <LoadingComponent />;
  if (!checkUserInfo.isLogedIn) router.push('/signin');

  return (
    <div className="p-32">
      <CreateNewCategory />
    </div>
  );
};

export default CreateNewCategoryPage;
