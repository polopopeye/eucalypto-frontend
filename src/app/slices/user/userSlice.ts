import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: undefined,
    coverImg: undefined,
    displayName: undefined,
    completeName: undefined,
    phone: undefined,
    github: undefined,
    web: undefined,
    linkedIn: undefined,
    location: undefined,
    role: "talent",
    languages: [],
    categories: [],
  },
  reducers: {
    setData: (state, action) => {
      return (state = action.payload);
    },
  },
});

export default userSlice;
