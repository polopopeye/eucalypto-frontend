import { useRouter } from "next/router";
import React, { useState } from "react";
import { store } from "../../../src/app/store";
import CreateNewCompany from "../../../src/components/Dashboard/companies/createNewCompany";
import CreateNewJobOffer from "../../../src/components/Dashboard/jobOffers/createNewJobOffer";
import UserSettings from "../../../src/components/Dashboard/user/UserSettings";

const CreateNewJobOfferPage = () => {
  const [isLogedIn, setIsLogedIn] = useState(
    store.getState().user?.email ? true : false
  );
  const router = useRouter();

  store.subscribe(() => {
    if (store.getState().user?.email) {
      setIsLogedIn(true);
    } else {
      setIsLogedIn(false);
      router.push("/signin");
    }
  });

  return <div className="pt-32">{isLogedIn && <CreateNewCompany />}</div>;
};

export default CreateNewJobOfferPage;
