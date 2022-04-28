import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setData: (state, action) => {
      return (state = action.payload);
    },
  },
});

export default userSlice;
