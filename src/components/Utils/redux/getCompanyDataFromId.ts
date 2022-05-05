import React from 'react';
import { store } from '../../../app/store';
import { CompanyInterface } from '../../../commons/companyInterface';

const getCompanyDataFromId = (companyId: string) => {
  const personalCompany = store
    .getState()
    .company.personalcompanies.find(
      (x: CompanyInterface) => x.id === companyId
    );

  if (personalCompany) {
    return personalCompany as CompanyInterface;
  }

  const company = store
    .getState()
    .company.allCompanies.find((x: CompanyInterface) => x.id === companyId);

  if (company) {
    return company as CompanyInterface;
  }
  return {} as CompanyInterface;
};

export default getCompanyDataFromId;
