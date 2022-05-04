import { createSlice } from '@reduxjs/toolkit';

const companySlice = createSlice({
  name: 'company',
  initialState: [],
  reducers: {
    setData: (state: any, action: { payload: any }) => {
      return (state = action.payload);
    },
    emptyData: (state: never[]) => {
      return (state = []);
    },
  },
});

export default companySlice;
