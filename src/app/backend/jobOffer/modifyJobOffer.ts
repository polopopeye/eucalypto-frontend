import axios from "axios";
import { toast } from "react-toastify";

import { api } from "../apiEndPoints";
import qs from "qs";

import { JobOfferInterface } from "../../../commons/jobOfferInterface";
import retrieveJobOffers from "./retrievesJobOffer";
import { store } from "../../store";

const modifyJobOffer = (jobOfferData: JobOfferInterface, next?: Function) => {
  axios
    .put(api.jobOffers + "/" + jobOfferData.id, qs.stringify(jobOfferData))
    .then((response) => {
      toast.success("JobOffer Updated Successfully");

      if (store.getState().user?.role === "admin") {
        retrieveJobOffers(
          {
            propOrId: "published",
            value: true,
          },
          next
        );
      } else {
        retrieveJobOffers(
          {
            propOrId: "aplicants",
            value: store.getState().user?.id as string,
          },
          next
        );
      }
    })
    .catch((err) => {
      toast.error(err.message);
    });
};
export default modifyJobOffer;
