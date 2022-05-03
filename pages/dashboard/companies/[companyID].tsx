import React, { useState } from "react";
import { useRouter } from "next/router";

import { store } from "src/app/store";

import ModifyCompanyDash from "src/components/Dashboard/companies/ModifyCompanyDash";
import getCompanyDataFromId from "src/components/Utils/redux/getCompanyDataFromId";

const ModifyCompanyPage = () => {
  const router = useRouter();
  const { companyID } = router.query;

  const [isLogedIn, setIsLogedIn] = useState(
    store.getState().user?.email ? true : false
  );

  const [company, setCompany] = useState(
    getCompanyDataFromId(companyID as string)
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
      {isLogedIn && company && <ModifyCompanyDash company={company} />}
    </div>
  );
};

export default ModifyCompanyPage;
