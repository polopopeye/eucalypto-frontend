import { useRouter } from "next/router";
import React, { useState } from "react";
import { store } from "../../../src/app/store";
import { CategoryInterface } from "../../../src/commons/categoryInterface";
import { CompanyInterface } from "../../../src/commons/companyInterface";
import ModifyCategory from "../../../src/components/Dashboard/categories/modifyCategory";
import CreateNewCompany from "../../../src/components/Dashboard/companies/createNewCompany";
import ModifyCompany from "../../../src/components/Dashboard/companies/modifyCompany";
import CreateNewJobOffer from "../../../src/components/Dashboard/jobOffers/createNewJobOffer";
import UserSettings from "../../../src/components/Dashboard/user/UserSettings";

const ModifyCompanyPage = () => {
  const router = useRouter();
  const { categoryID } = router.query;

  const [isLogedIn, setIsLogedIn] = useState(
    store.getState().user?.email ? true : false
  );

  const [category, setCategory] = useState(
    store
      .getState()
      .category.tech?.find((x: CategoryInterface) => x.id === categoryID)
  );

  store.subscribe(() => {
    if (store.getState().user?.email) {
      setIsLogedIn(true);
    } else {
      setIsLogedIn(false);
      router.push("/signin");
    }
  });

  return (
    <div className="pt-32">
      {isLogedIn && category && <ModifyCategory category={category} />}
    </div>
  );
};

export default ModifyCompanyPage;
