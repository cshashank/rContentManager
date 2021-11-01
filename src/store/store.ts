import { configureStore } from '@reduxjs/toolkit'
import poemReducer from "../slices/poemSlice";

export const store = configureStore({
  reducer: {
    poems: poemReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})
