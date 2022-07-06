import { useRouter } from 'next/router';
import React from 'react';
import useCheckUserInfo from 'src/app/firebase/auth/useCheckUserInfo';
import CreateNewParentCategory from 'src/components/Dashboard/categories/createNewParentCategory';
import LoadingComponent from 'src/components/Utils/LoadingComponent';

const CreateNewParentCategoryPage = () => {
  const router = useRouter();
  const checkUserInfo = useCheckUserInfo();
  if (checkUserInfo.loading) return <LoadingComponent />;
  if (!checkUserInfo.isLogedIn) router.push('/signin');

  return (
    <div className="p-32">
      <CreateNewParentCategory />
    </div>
  );
};

export default CreateNewParentCategoryPage;
