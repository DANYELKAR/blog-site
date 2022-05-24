import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, name: "Güven" },
  { id: 1, name: "Ali" },
  { id: 2, name: "Musti" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
