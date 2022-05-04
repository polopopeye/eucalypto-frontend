import { createSlice } from '@reduxjs/toolkit';

const allJobOffersSlice = createSlice({
  name: 'allJobOffers',
  initialState: [],
  reducers: {
    setData: (state: any, action: { payload: any }) => {
      return (state = action.payload);
    },
    emptyData: (state: never[]) => {
      return (state = []);
    },
  },
});

export default allJobOffersSlice;
