import { createSlice } from "@reduxjs/toolkit";

const personalJobOffersSlice = createSlice({
  name: "personalJobOffers",
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

export default personalJobOffersSlice;
