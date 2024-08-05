import { configureStore } from "@reduxjs/toolkit";
import { tourReducer } from "./slices/tour-slice";

export const store = configureStore({
  reducer: {
    tours: tourReducer,
  },
});
