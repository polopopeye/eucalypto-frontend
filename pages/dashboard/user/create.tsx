import { useRouter } from 'next/router';
import React from 'react';
import retrieveCategories from 'src/app/backend/category/retrieveCategories';
import useCheckUserInfo from 'src/app/firebase/auth/useCheckUserInfo';
import { store } from 'src/app/store';
import CreateNewUser from 'src/components/Dashboard/user/CreateNewUser';
import LoadingComponent from 'src/components/Utils/LoadingComponent';

const CreateUserPage = () => {
  const router = useRouter();

  const checkUserInfo = useCheckUserInfo();

  if (checkUserInfo.loading) return <LoadingComponent />;
  if (!checkUserInfo.isLogedIn) router.push('/signin');
  if (store.getState().user.role !== 'admin') router.push('/signin');

  retrieveCategories({
    propToFind: 'type',
    value: 'tech',
    saveIn: 'tech',
  });
  console.log('retrieved');

  return (
    <div className="pt-32">
      <CreateNewUser />
    </div>
  );
};

export default CreateUserPage;
