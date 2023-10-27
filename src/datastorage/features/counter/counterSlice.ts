import { createSlice } from "@reduxjs/toolkit";
import { NewNote } from "../../../components/ToDoList";

export interface RootState {
  notes: {
    note: NewNote[];
  };
}

interface NoteArr {
  note: NewNote[];
}

const initialState: NoteArr = {
  note: [],
};

export const counterSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNewNote: (state, action) => {
      state.note.unshift(action.payload);
    },
  },
});

export const { addNewNote } = counterSlice.actions;

export default counterSlice.reducer;
