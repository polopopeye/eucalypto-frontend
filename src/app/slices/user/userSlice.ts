import { createSlice } from '@reduxjs/toolkit';
import { UserInterface } from 'src/commons/userInterface';

const user: UserInterface = {
  id: undefined,
  email: undefined,
  coverImg: undefined,
  displayName: undefined,
  completeName: undefined,
  phone: undefined,
  github: undefined,
  web: undefined,
  linkedIn: undefined,
  location: undefined,
  role: 'talent',
  languages: [],
  categories: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState: user,
  reducers: {
    setData: (state, action) => {
      return (state = action.payload);
    },
    emptyData: (state) => {
      return (state = user);
    },
  },
});

export default userSlice;
