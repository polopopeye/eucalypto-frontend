import { createSlice } from "@reduxjs/toolkit";

const allJobOffersSlice = createSlice({
  name: "allJobOffers",
  initialState: [],
  reducers: {
    setData: (state, action) => {
      return (state = action.payload);
    },
    emptyData: (state) => {
      return (state = []);
    },
  },
});

export default allJobOffersSlice;
