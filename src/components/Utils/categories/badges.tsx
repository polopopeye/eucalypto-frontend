import React, { useState } from 'react';

import { store } from '../../../app/store';
import { CategoryInterface } from '../../../commons/categoryInterface';
import LoadingComponent from '../LoadingComponent';

const Badges = (props: { categoriesId?: Array<string> }) => {
  const { categoriesId } = props;

  const [badgesCategories] = useState([] as Array<CategoryInterface>);

  const arrayAllTechs = [] as Array<CategoryInterface>;
  Object.keys(store.getState().category).forEach((parent: string) => {
    arrayAllTechs.push(...store.getState().category[parent]);
  });

  const [categories, setCategories] = useState(arrayAllTechs);

  store.subscribe(() => {
    const arrayAllTechs = [] as Array<CategoryInterface>;
    Object.keys(store.getState().category).forEach((parent: string) => {
      arrayAllTechs.push(...store.getState().category[parent]);
    });

    setCategories(arrayAllTechs);
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
      {badgesCategories
        ?.sort((a: any, b: any) => {
          return b.createdAt._seconds - a.createdAt._seconds;
        })
        .map((category: CategoryInterface, i: number) => (
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
