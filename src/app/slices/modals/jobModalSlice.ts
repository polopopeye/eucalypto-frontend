import { createSlice } from "@reduxjs/toolkit";

const jobModalSlice = createSlice({
  name: "jobModal",
  initialState: {
    isOpen: false,
    data: {},
  },
  reducers: {
    setData: (state, action) => {
      return (state = action.payload);
    },
  },
});

export default jobModalSlice;
