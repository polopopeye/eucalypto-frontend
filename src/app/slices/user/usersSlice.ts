import { createSlice } from '@reduxjs/toolkit';
import { UserInterface } from 'src/commons/userInterface';

const usersSlice = createSlice({
  name: 'users',
  initialState: [] as Array<UserInterface>,
  reducers: {
    setData: (state, action) => {
      return (state = action.payload);
    },
    emptyData: (state) => {
      return (state = [] as Array<UserInterface>);
    },
  },
});

export default usersSlice;
