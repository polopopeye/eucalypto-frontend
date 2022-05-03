import filteredJobOffersSlice from "src/app/slices/jobs/filterJobOffersSlice";
import { store } from "src/app/store";

export const filterJobOffers = (valueToSearch: string) => {
  const jobOffers = store.getState().jobs.allJobOffers;

  const filterByProps = [
    "name",
    "id",
    "description",
    "job",
    "location",
    "remote",
    "salary",
    "categories",
    "NOT_FOUND",
  ];

  for (let i = 0; i < filterByProps.length; i++) {
    const prop = filterByProps[i];

    if (prop === "NOT_FOUND") {
      store.dispatch(filteredJobOffersSlice.actions.setData([]));
      return;
    }

    const jobOffersFiltered = jobOffers.filter((jobOffer: any) =>
      jobOffer[prop]
        .toString()
        .toLowerCase()
        .includes(valueToSearch.toLowerCase())
    );
    if (jobOffersFiltered && jobOffersFiltered.length > 0) {
      store.dispatch(filteredJobOffersSlice.actions.setData(jobOffersFiltered));
      return;
    }
  }
};

export const resetFilterJobOffers = () => {
  const jobOffers = store.getState().jobs.allJobOffers;
  store.dispatch(filteredJobOffersSlice.actions.setData(jobOffers));
};
