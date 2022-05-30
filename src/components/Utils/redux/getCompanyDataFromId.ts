import React from 'react';
import { store } from '../../../app/store';
import { CompanyInterface } from '../../../commons/companyInterface';

const getCompanyDataFromId = (companyId: string) => {
  const personalCompaniesReduxSpace =
    store.getState().company.personalcompanies;

  const allCompaniesReduxSpace = store.getState().company.allCompanies;

  if (personalCompaniesReduxSpace.length) {
    const personalCompany = personalCompaniesReduxSpace.find(
      (x: CompanyInterface) => x.id === companyId
    );

    if (personalCompany) {
      return personalCompany as CompanyInterface;
    }
  }
  if (allCompaniesReduxSpace.length) {
    const company = allCompaniesReduxSpace.find(
      (x: CompanyInterface) => x.id === companyId
    );

    if (company) {
      return company as CompanyInterface;
    }
  }

  return {} as CompanyInterface;
};

export default getCompanyDataFromId;
