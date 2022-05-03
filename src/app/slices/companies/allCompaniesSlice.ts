import { createSlice } from "@reduxjs/toolkit";

const allCompaniesSlice = createSlice({
  name: "allCompanies",
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

export default allCompaniesSlice;
