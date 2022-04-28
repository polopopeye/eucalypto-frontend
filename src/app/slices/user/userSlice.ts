import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { email: undefined },
  reducers: {
    setData: (state, action) => {
      return (state = action.payload);
    },
  },
});

export default userSlice;
