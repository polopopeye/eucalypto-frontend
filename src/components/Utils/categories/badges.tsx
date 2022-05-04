import React, { useEffect, useState } from "react";
import retrieveCategories from "../../../app/backend/category/retrieveCategories";
import { store } from "../../../app/store";
import { CategoryInterface } from "../../../commons/categoryInterface";

const Badges = (props: { categoriesId?: Array<string> }) => {
  const { categoriesId } = props;

  const [badgesCategories] = useState([] as Array<CategoryInterface>);

  store.subscribe(() => {
    if (store.getState().category.tech) {
      categoriesId?.forEach((categoryId) => {
        const category = store
          .getState()
          .category.tech?.find((x: CategoryInterface) => x.id === categoryId);

        if (category) {
          if (!badgesCategories.some((x: any) => x.id === category.id)) {
            badgesCategories.push(category);
          }
        }
      });
    }
  });

  useEffect(() => {
    if (store.getState().category.tech) {
      categoriesId?.forEach((categoryId) => {
        const category = store
          .getState()
          .category.tech?.find((x: CategoryInterface) => x.id === categoryId);

        if (category) {
          if (!badgesCategories.some((x: any) => x.id === category.id)) {
            badgesCategories.push(category);
          }
        }
      });
    } else {
      retrieveCategories({
        propToFind: "type",
        value: "tech",
        saveIn: "tech",
      });
    }
  }, []);

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
