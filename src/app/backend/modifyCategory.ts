import axios from "axios";
import { toast } from "react-toastify";

import { api } from "./apiEndPoints";
import qs from "qs";

import { CategoryInterface } from "../../commons/categoryInterface";
import retrieveCategories from "./retrieveCategories";

const modifyCategory = (categoryData: CategoryInterface, next?: Function) => {
  axios
    .put(api.categories + "/" + categoryData.id, qs.stringify(categoryData))
    .then((response) => {
      toast.success("Category Updated Successfully");

      retrieveCategories(
        {
          propToFind: "type",
          value: "tech",
          saveIn: "tech",
        },
        next
      );
    })
    .catch((err) => {
      toast.error(err.message);
    });
};
export default modifyCategory;
