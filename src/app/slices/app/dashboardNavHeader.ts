import { createSlice } from '@reduxjs/toolkit';

const dashboardNavHeaderSlice = createSlice({
  name: 'dashboardNavHeader',
  initialState: 'Jobs Offers',
  reducers: {
    setData: (state, action) => {
      return (state = action.payload);
    },
  },
});

export default dashboardNavHeaderSlice;
