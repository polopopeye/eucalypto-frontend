import React, { useState } from 'react';

import { store } from '../../../app/store';
import { CategoryInterface } from '../../../commons/categoryInterface';
import LoadingComponent from '../LoadingComponent';

const Badges = (props: { categoriesId?: Array<string> }) => {
  const { categoriesId } = props;

  const [badgesCategories] = useState([] as Array<CategoryInterface>);

  const [categories, setCategories] = useState(store.getState().category.tech);

  store.subscribe(() => {
    setCategories(store.getState().category.tech);
  });

  if (!categories) return <LoadingComponent />;

  categoriesId?.forEach((categoryId) => {
    const category = categories.find(
      (x: CategoryInterface) => x.id === categoryId
    );

    if (category) {
      if (!badgesCategories.some((x: any) => x.id === category.id)) {
        badgesCategories.push(category);
      }
    }
  });

  return (
    <div>
      {badgesCategories?.map((category: CategoryInterface, i: number) => (
        <span
          key={i}
          className="m-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-primary"
        >
          {category.name}
        </span>
      ))}
    </div>
  );
};

export default Badges;
