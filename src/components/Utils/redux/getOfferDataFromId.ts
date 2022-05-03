import React from "react";
import { store } from "../../../app/store";

import { JobOfferInterface } from "../../../commons/jobOfferInterface";

const getOfferDataFromId = (offerId: string) => {
  const jobOffer = store
    .getState()
    .jobs.allJobOffers.find((x: JobOfferInterface) => x.id === offerId);

  if (jobOffer) {
    return jobOffer as JobOfferInterface;
  } else {
    return {};
  }
};

export default getOfferDataFromId;
