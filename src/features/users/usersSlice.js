import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Güven" },
  { id: "1", name: "Musti" },
  { id: "2", name: "Ali" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
