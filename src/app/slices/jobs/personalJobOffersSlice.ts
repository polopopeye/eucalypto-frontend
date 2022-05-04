import { createSlice } from '@reduxjs/toolkit';

const personalJobOffersSlice = createSlice({
  name: 'personalJobOffers',
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

export default personalJobOffersSlice;
