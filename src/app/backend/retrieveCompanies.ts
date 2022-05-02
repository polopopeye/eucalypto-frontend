import axios from "axios";

import { store } from "../store";
import { api } from "./apiEndPoints";
import { toast } from "react-toastify";

import companySlice from "../slices/companies/companySlice";

const retrieveCompanies = async (userId: string, next?: Function) => {
  const url = api.company + "/" + userId;

  axios
    .get(url)
    .then((response) => {
      const allCompaniesFound = response.data;

      store.dispatch(companySlice.actions.setData(allCompaniesFound));
      if (typeof next === "function") {
        next(response);
      }
    })
    .catch((error) => {
      console.log(error);
      toast.error("Error retrieving Company info");
    });
};

export default retrieveCompanies;
