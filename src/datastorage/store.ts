import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./features/counter/noteSlice";

export const store = configureStore({
  reducer: { notes: notesReducer },
});
