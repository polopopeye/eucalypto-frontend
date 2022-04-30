import { createSlice } from "@reduxjs/toolkit";
import { UserInterface } from "../../../commons/userInterface";

const usersSlice = createSlice({
  name: "users",
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

export default usersSlice;
