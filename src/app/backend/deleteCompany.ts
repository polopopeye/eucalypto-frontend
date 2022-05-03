import axios from "axios";
import { toast } from "react-toastify";
import { CompanyInterface } from "../../commons/companyInterface";
import { api } from "./apiEndPoints";
import qs from "qs";
import retrieveCompanyByOwner from "./retrieveCompaniesByOwner";
import { store } from "../store";

const deleteCompany = (companyData: CompanyInterface, next?: Function) => {
  axios
    .delete(api.company + "/" + companyData.id)
    .then((response) => {
      console.log(
        "🚀 ~ file: deleteCompany.ts ~ line 14 ~ .then ~ response",
        response
      );
      toast.success("Company deleted Successfully");
      retrieveCompanyByOwner(store.getState().user?.id as string, next);
    })
    .catch((err) => {
      toast.error(err.message);
    });
};
export default deleteCompany;
