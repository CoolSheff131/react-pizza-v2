import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
};

export const filterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
  },
});

export const { setCategoryId, setSort, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
