import { createSlice } from "@reduxjs/toolkit";

const filteredJobOffersSlice = createSlice({
  name: "filteredJobOffers",
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

export default filteredJobOffersSlice;
