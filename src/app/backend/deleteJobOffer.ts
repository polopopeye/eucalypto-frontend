import axios from "axios";
import { toast } from "react-toastify";

import { api } from "./apiEndPoints";
import qs from "qs";

import { CategoryInterface } from "../../commons/categoryInterface";

import retrieveJobOffers from "./retrievesJobOffer";
import { store } from "../store";

const deleteJobOffer = (jobOfferData: CategoryInterface, next?: Function) => {
  axios
    .delete(api.jobOffers + "/" + jobOfferData.id)
    .then((response) => {
      toast.success("Job Offer Deleted Successfully");

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
export default deleteJobOffer;
