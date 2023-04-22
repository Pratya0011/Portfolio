import { configureStore } from '@reduxjs/toolkit';
import reducer from '../features/portfolioSlice'


export const store = configureStore({
  reducer: {
    portfolioSlice: reducer
  }
});
