import { createSlice } from "@reduxjs/toolkit";
import { JobOfferInterface } from "../../../commons/jobOfferInterface";

const jobModalSlice = createSlice({
  name: "jobModal",
  initialState: {
    isOpen: false,
    data: {} as any,
  },
  reducers: {
    setData: (state, action) => {
      return (state = action.payload);
    },
  },
});

export default jobModalSlice;
