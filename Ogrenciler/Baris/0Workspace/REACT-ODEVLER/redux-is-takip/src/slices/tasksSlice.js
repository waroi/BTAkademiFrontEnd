import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const fetchTasks = createAsyncThunk("task/fetchTasks", async () => {
  const response = await fetch("http://localhost:5000/tasks").then((response) =>
    response.json()
  );
  return response;
});

export const tasksSlices = createSlice({
  name: "task",
  initialState,
  reducers: {
    deleteTaskFromState: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
  },
});

export const { deleteTaskFromState } = tasksSlices.actions;
export default tasksSlices.reducer;
