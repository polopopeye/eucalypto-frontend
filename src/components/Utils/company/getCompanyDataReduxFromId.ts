import React from "react";
import { store } from "../../../app/store";
import { CompanyInterface } from "../../../commons/companyInterface";

const getCompanyDataReduxFromId = (companyId: string) => {
  const company = store
    .getState()
    .company.find((x: CompanyInterface) => x.id === companyId);
  return company as unknown as CompanyInterface;
};

export default getCompanyDataReduxFromId;
