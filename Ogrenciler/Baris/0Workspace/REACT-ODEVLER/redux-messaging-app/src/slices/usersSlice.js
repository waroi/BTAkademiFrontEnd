import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  users: [],
  messages: [],
  userDetail: [],
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async (id) => {
  const response = await fetch(`http://localhost:5000/users/${id}`).then(
    (response) => response.json()
  );
  return response;
});

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userMessagesDetail: (state, action) => {
      state.messages = [...state.messages, action.payload];
    },
    userDetail: (state, action) => {
      state.userDetail = [state.userDetail, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const { userMessagesDetail, userDetail } = usersSlice.actions;

export default usersSlice.reducer;
