import { configureStore } from "@reduxjs/toolkit";
import employeesSlice from "../slices/employeesSlice";
import tasksSlice from "../slices/tasksSlice";

const store = configureStore({
  reducer: {
    employee: employeesSlice,
    task: tasksSlice,
  },
});
export default store;
