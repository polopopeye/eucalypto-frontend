import axios from "axios";
import { toast } from "react-toastify";
import { CompanyInterface } from "../../../commons/companyInterface";
import { api } from "../apiEndPoints";

const registerCompany = (companyData: CompanyInterface, next?: Function) => {
  axios
    .post(api.company, companyData)
    .then((response) => {
      toast.success("Company Created Successfully");
      if (typeof next === "function") {
        next(response);
      }
    })
    .catch((err) => {
      toast.error(err.message);
    });
};
export default registerCompany;
