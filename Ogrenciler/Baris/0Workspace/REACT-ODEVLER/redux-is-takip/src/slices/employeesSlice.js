import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
};

export const fetchEmployees = createAsyncThunk(
  "employee/fetchEmployees",
  async () => {
    const response = fetch("http://localhost:5000/employees").then((response) =>
      response.json()
    );
    return response;
  }
);

export const employeesSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter(
        (employee) => employee.employeeId !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {
      state.employees = action.payload;
    });
  },
});

export const { deleteEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
