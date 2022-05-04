import axios from "axios";
import { toast } from "react-toastify";
import { CategoryInterface } from "src/commons/categoryInterface";
import { api } from "../apiEndPoints";

import retrieveCategories from "./retrieveCategories";

const deleteCategory = (categoryData: CategoryInterface, next?: Function) => {
  axios
    .delete(api.categories + "/" + categoryData.id)
    .then((response) => {
      toast.success("Category Deleted Successfully");

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
export default deleteCategory;
