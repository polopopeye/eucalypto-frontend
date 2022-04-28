import { createSlice } from "@reduxjs/toolkit";

const emailRegisterModalSlice = createSlice({
  name: "emailRegisterModal",
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

export default emailRegisterModalSlice;
