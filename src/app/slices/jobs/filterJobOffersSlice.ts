import { createSlice } from '@reduxjs/toolkit';

const filteredJobOffersSlice = createSlice({
  name: 'filteredJobOffers',
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

export default filteredJobOffersSlice;
