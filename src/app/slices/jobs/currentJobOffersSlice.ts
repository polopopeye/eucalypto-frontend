import { createSlice } from '@reduxjs/toolkit';
import { JobOfferInterface } from 'src/commons/jobOfferInterface';

const initialStateJobOffers: JobOfferInterface = {
  id: undefined,
  name: undefined,
  company: undefined,
  job: undefined,
  location: undefined,
  remote: undefined,
  description: undefined,
  salary: undefined,
  categories: undefined,
  deadLine: undefined,
  published: undefined,
  applicants: undefined,
  updatedAt: undefined,
  createdAt: undefined,
};

const currentJobOfferSlice = createSlice({
  name: 'currentJobOffer',
  initialState: initialStateJobOffers,
  reducers: {
    setData: (state: any, action: { payload: any }) => {
      return (state = action.payload);
    },
    emptyData: (state) => {
      return (state = initialStateJobOffers);
    },
  },
});

export default currentJobOfferSlice;
