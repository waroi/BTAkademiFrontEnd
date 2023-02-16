import { configureStore } from "@reduxjs/toolkit";
import employeesSlice from "../slices/employeesSlice";

const store = configureStore({
  reducer: {
    employee: employeesSlice,
  },
});
export default store;
