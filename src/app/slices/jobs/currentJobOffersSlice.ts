import { createSlice } from '@reduxjs/toolkit';

const currentJobOfferSlice = createSlice({
  name: 'currentJobOffer',
  initialState: {},
  reducers: {
    setData: (state: any, action: { payload: any }) => {
      return (state = action.payload);
    },
    emptyData: (state) => {
      return (state = {});
    },
  },
});

export default currentJobOfferSlice;
