import { createSlice, nanoid } from "@reduxjs/toolkit";

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
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          },
        };
      },
    },
  },
});

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
