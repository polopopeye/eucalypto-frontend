import React from 'react';
import { store } from '../../../app/store';
import { CompanyInterface } from '../../../commons/companyInterface';

const getCompanyDataFromId = (companyId: string) => {
  const company = store
    .getState()
    .company.allCompanies.find((x: CompanyInterface) => x.id === companyId);

  if (company) {
    return company as unknown as CompanyInterface;
  } else {
    const personalCompany = store
      .getState()
      .company.personalcompanies.find(
        (x: CompanyInterface) => x.id === companyId
      );

    if (personalCompany) {
      return personalCompany as unknown as CompanyInterface;
    } else {
      false;
    }
  }
};

export default getCompanyDataFromId;
