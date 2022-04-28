import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: undefined,
    coverImg: undefined,
    displayName: undefined,
  },
  reducers: {
    setData: (state, action) => {
      return (state = action.payload);
    },
  },
});

export default userSlice;
