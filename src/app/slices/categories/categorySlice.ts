import { createSlice } from '@reduxjs/toolkit';
import { ReduxCategoriesInterface } from 'src/commons/categoryInterface';

const categoryRedux: ReduxCategoriesInterface = {
  tech: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState: categoryRedux,
  reducers: {
    setData: (state: any, action: { payload: any }) => {
      return (state = action.payload);
    },
    emptyData: (state: ReduxCategoriesInterface) => {
      return (state = categoryRedux);
    },
  },
});

export default categorySlice;
