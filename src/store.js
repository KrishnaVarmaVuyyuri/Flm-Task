import { configureStore } from "@reduxjs/toolkit";
import companiesReducer from "./slices/companiesSlice";

const store = configureStore({
  reducer: {
    companies: companiesReducer
  }
});

export default store;
