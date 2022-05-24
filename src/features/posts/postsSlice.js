import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning redux",
    content: "I have heard amazing things about that redux tools :)",
  },
  {
    id: "2",
    title: "crypto summit",
    content:
      "Learning own your money for financial freedom so i think crpyto is the best way",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
