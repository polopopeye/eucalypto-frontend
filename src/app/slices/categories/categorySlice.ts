import { createSlice } from '@reduxjs/toolkit';
import { ReduxCategoriesInterface } from 'src/commons/categoryInterface';

const categoryRedux: ReduxCategoriesInterface = {
  tech: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState: categoryRedux,
  reducers: {
    setData: (state, action) => {
      return (state = action.payload);
    },
    emptyData: (state) => {
      return (state = categoryRedux);
    },
  },
});

export default categorySlice;
