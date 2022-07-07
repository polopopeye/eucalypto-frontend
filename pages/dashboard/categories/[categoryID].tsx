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
  const allParents = Object.keys(store.getState().category);

  const [category, setCategory] = useState(
    undefined as unknown as CategoryInterface
  );

  allParents.forEach((parent: string) => {
    const parentObject = store.getState().category[parent];
    const found = parentObject.find((x: any) => x.id === categoryID);

    if (found && !category) {
      setCategory(found);
    }
  });

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
