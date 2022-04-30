import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
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

export default companySlice;
