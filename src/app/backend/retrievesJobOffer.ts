import axios from "axios";

import { store } from "../store";
import { api } from "./apiEndPoints";
import { toast } from "react-toastify";

import personalJobOffersSlice from "../slices/jobs/personalJobOffersSlice";
import filteredJobOffersSlice from "../slices/jobs/filterJobOffersSlice";
import allJobOffersSlice from "../slices/jobs/allJobOffersSlice";

interface propToFindJobOffers {
  propOrId: string;
  value: string | number | boolean;
  reduxSpace?: "filteredJobOffers" | "personalJobOffers" | "allJobOffers";
}
const retrieveJobOffers = async (
  props: propToFindJobOffers,
  next?: Function
) => {
  const url = api.jobOffers + "/" + props.propOrId + "/" + props.value;

  axios
    .get(url)
    .then((response) => {
      const jobOffersFound = response.data;
      if (
        props.reduxSpace === "personalJobOffers" ||
        props.reduxSpace === undefined
      ) {
        store.dispatch(personalJobOffersSlice.actions.setData(jobOffersFound));
      }
      if (props.reduxSpace === "filteredJobOffers") {
        store.dispatch(filteredJobOffersSlice.actions.setData(jobOffersFound));
      }
      if (props.reduxSpace === "allJobOffers") {
        store.dispatch(allJobOffersSlice.actions.setData(jobOffersFound));
      }

      if (typeof next === "function") {
        next(response);
      }
    })
    .catch((error) => {
      console.log(error);
      toast.error("Error retrieving Company info");
    });
};

export default retrieveJobOffers;
