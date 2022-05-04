import axios from "axios";
import { toast } from "react-toastify";
import { JobOfferInterface } from "../../../commons/jobOfferInterface";
import { api } from "../apiEndPoints";

const registerJobOffer = (offerData: JobOfferInterface, next?: Function) => {
  axios
    .post(api.jobOffers, offerData)
    .then((response) => {
      toast.success("Job Offer Created Successfully");
      if (typeof next === "function") {
        next(response);
      }
    })
    .catch((err) => {
      toast.error(err.message);
    });
};
export default registerJobOffer;
