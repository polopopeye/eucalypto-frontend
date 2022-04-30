import axios from "axios";

import { store } from "../store";
import { api } from "./apiEndPoints";
import { toast } from "react-toastify";

import companySlice from "../slices/companies/companySlice";

const retrieveCompanies = (userId: string) => {
  const url = api.company + "/" + userId;

  axios
    .get(url)
    .then((response) => {
      const allCompaniesFound = response.data;
      console.log(
        "🚀 ~ file: retrieveCompanies.ts ~ line 22 ~ .then ~ allCompaniesFound",
        allCompaniesFound
      );

      // let newCompanyToAppendToRedux = [] as any;

      // allCompaniesFound.forEach((company: any) => {
      //   if (
      //     !newCompanyToAppendToRedux.some(
      //       (element: any) => element.id === company.id
      //     )
      //   ) {
      //     newCompanyToAppendToRedux.push({
      //       id: company.id,
      //       name: company.name,
      //     });
      //   }
      // });

      store.dispatch(companySlice.actions.setData(allCompaniesFound));
    })
    .catch((error) => {
      console.log(error);
      toast.error("Error retrieving user info");
    });
};

export default retrieveCompanies;
