import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { store } from '../../../src/app/store';
import CreateNewCategory from '../../../src/components/Dashboard/categories/createNewCategory';

const CreateNewCategoryPage = () => {
  const [isLogedIn, setIsLogedIn] = useState(
    store.getState().user?.email ? true : false
  );
  const router = useRouter();

  store.subscribe(() => {
    if (store.getState().user?.email) {
      setIsLogedIn(true);
    } else {
      setIsLogedIn(false);
      router.push('/signin');
    }
  });

  return <div className="pt-32">{isLogedIn && <CreateNewCategory />}</div>;
};

export default CreateNewCategoryPage;
