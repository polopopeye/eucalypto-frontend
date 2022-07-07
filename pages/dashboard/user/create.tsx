import { useRouter } from 'next/router';
import React from 'react';
import retrieveCategories from 'src/app/backend/category/retrieveCategories';
import retrieveParentCategories from 'src/app/backend/category/retrieveParentCategories';
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

  retrieveParentCategories((allParentCats: any) => {
    allParentCats.forEach((parentCat: any) => {
      retrieveCategories({
        propToFind: 'type',
        value: parentCat.name,
        saveIn: parentCat.name,
      });
    });
  });
  console.log('retrieved');

  return (
    <div className="p-32">
      <CreateNewUser />
    </div>
  );
};

export default CreateUserPage;
