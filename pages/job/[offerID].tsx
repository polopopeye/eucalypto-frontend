import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import retrieveJobOffers from "../../src/app/backend/retrievesJobOffer";
import { store } from "../../src/app/store";
import { JobOfferInterface } from "../../src/commons/jobOfferInterface";
import JobView from "../../src/components/JobView/jobView";

const Job = () => {
  const router = useRouter();
  const { offerID } = router.query;

  return (
    <div>
      <JobView offerId={offerID as string}></JobView>
    </div>
  );
};

export default Job;
