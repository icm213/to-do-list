import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./features/counter/counterSlice";

export const store = configureStore({
  reducer: { notes: notesReducer },
});
