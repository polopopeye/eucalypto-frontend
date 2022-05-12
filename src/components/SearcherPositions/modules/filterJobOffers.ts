import filteredJobOffersSlice from 'src/app/slices/jobs/filterJobOffersSlice';
import { store } from 'src/app/store';
import getCompanyDataFromId from 'src/components/Utils/redux/getCompanyDataFromId';

export const filterJobOffers = (valueToSearch: string) => {
  const jobOffers = store.getState().jobs.allJobOffers;
  const categories = store.getState().category.tech;
  const companies = store.getState().company.allCompanies;

  if (!jobOffers) {
    store.dispatch(filteredJobOffersSlice.actions.setData([]));
    return;
  }

  // The order is important: first filter by category, then by company, then by job title
  const filterByProps = [
    'categories',
    'company',
    'job',
    'remote',
    'id',
    'description',
    'location',
    'salary',
    'NOT_FOUND',
  ];

  for (let i = 0; i < filterByProps.length; i++) {
    const prop = filterByProps[i];

    if (prop === 'NOT_FOUND') {
      store.dispatch(filteredJobOffersSlice.actions.setData([]));
      return;
    }

    if (prop === 'categories') {
      const categoriesFound = categories?.filter((category: any) =>
        category.name
          .toString()
          .toLowerCase()
          .includes(valueToSearch.toLowerCase())
      );
      if (categoriesFound?.length) {
        const jobOffersFiltered = jobOffers.filter((jobOffer: any) =>
          categoriesFound.every((category: any) =>
            jobOffer.categories.includes(category.id)
          )
        );
        if (jobOffersFiltered) {
          store.dispatch(
            filteredJobOffersSlice.actions.setData(jobOffersFiltered)
          );
          return;
        }
      }
    }

    if (prop === 'company') {
      const companiesFound = companies?.filter((company: any) =>
        company.name
          .toString()
          .toLowerCase()
          .includes(valueToSearch.toLowerCase())
      );
      if (companiesFound?.length) {
        const jobOffersFiltered = jobOffers.filter((jobOffer: any) =>
          companiesFound.every((company: any) =>
            jobOffer.company.includes(company.id)
          )
        );
        if (jobOffersFiltered) {
          store.dispatch(
            filteredJobOffersSlice.actions.setData(jobOffersFiltered)
          );
          return;
        }
      }
    }

    if (prop === 'remote') {
      const isRemote = valueToSearch.toLowerCase() === 'remote' ? true : false;
      if (isRemote) {
        const jobOffersFiltered = jobOffers.filter(
          (jobOffer: any) => jobOffer.remote === true
        );
        if (jobOffersFiltered) {
          store.dispatch(
            filteredJobOffersSlice.actions.setData(jobOffersFiltered)
          );
          return;
        }
      }
    }

    if (
      prop === 'location' ||
      prop === 'job' ||
      prop === 'description' ||
      prop === 'salary'
    ) {
      const jobOffersFiltered = jobOffers.filter((jobOffer: any) =>
        jobOffer[prop]
          .toString()
          .toLowerCase()
          .includes(valueToSearch.toLowerCase())
      );
      if (jobOffersFiltered) {
        store.dispatch(
          filteredJobOffersSlice.actions.setData(jobOffersFiltered)
        );
        return;
      }
    }
  }
};

export const resetFilterJobOffers = () => {
  const jobOffers = store.getState().jobs.allJobOffers;
  store.dispatch(filteredJobOffersSlice.actions.setData(jobOffers));
};
