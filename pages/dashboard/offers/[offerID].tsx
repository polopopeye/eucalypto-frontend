import { useRouter } from "next/router";
import React, { useState } from "react";
import { store } from "../../../src/app/store";

import { JobOfferInterface } from "../../../src/commons/jobOfferInterface";

import ModifyJobOffer from "../../../src/components/Dashboard/jobOffers/modifyJobOffer";

const ModifyJobOfferPage = () => {
  const router = useRouter();
  const { offerID } = router.query;

  const [isLogedIn, setIsLogedIn] = useState(
    store.getState().user?.email ? true : false
  );

  const [jobOffer, setJobOffer] = useState(
    store
      .getState()
      .jobs.personalJobOffers.find((x: JobOfferInterface) => x.id === offerID)
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
      {isLogedIn && jobOffer && <ModifyJobOffer jobOffer={jobOffer} />}
    </div>
  );
};

export default ModifyJobOfferPage;
