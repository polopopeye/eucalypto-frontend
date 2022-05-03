import axios from "axios";
import { toast } from "react-toastify";
import { CompanyInterface } from "../../commons/companyInterface";
import { api } from "./apiEndPoints";
import qs from "qs";
import retrieveCompanyByOwner from "./retrieveCompaniesByOwner";
import { store } from "../store";

const modifyCompany = (companyData: CompanyInterface, next?: Function) => {
  axios
    .put(api.company + "/" + companyData.id, qs.stringify(companyData))
    .then((response) => {
      console.log(
        "🚀 ~ file: modifyCompany.ts ~ line 14 ~ .then ~ response",
        response
      );
      toast.success("Company Updated Successfully");

      retrieveCompanyByOwner(store.getState().user?.id as string, next);
    })
    .catch((err) => {
      toast.error(err.message);
    });
};
export default modifyCompany;
