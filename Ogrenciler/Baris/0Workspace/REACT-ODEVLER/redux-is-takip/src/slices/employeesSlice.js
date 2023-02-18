import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
  employeeDetail: [],
};

export const fetchEmployees = createAsyncThunk(
  "employee/fetchEmployees",
  async () => {
    const response = await fetch("http://localhost:5000/employees").then(
      (response) => response.json()
    );
    return response;
  }
);
export const postEmloyees = createAsyncThunk(
  "employee/postEmloyee",
  async (data) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    await fetch("http://localhost:5000/employees", options);
  }
);
export const deleteEmployees = createAsyncThunk(
  "employee/deleteEmployees",
  async (id) => {
    const options = {
      method: "DELETE",
    };
    await fetch(`http://localhost:5000/employees/${id}`, options);
  }
);

export const employeesSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees = [...state.employees, action.payload];
    },
    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter(
        (employee) => employee.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {
      state.employees = action.payload;
    });
    builder.addCase(postEmloyees.fulfilled, (state, action) => {
      state.employees = action.payload;
    });
    builder.addCase(deleteEmployees.fulfilled, (state, action) => {
      state.employees = action.payload;
    });
  },
});

export const { addEmployee, deleteEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
