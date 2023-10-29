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

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNewNote: (state, action) => {
      state.note.unshift(action.payload);
    },
    deleteNote: (state, action) => {
      state.note = state.note.filter((el) => action.payload !== el.titleOfNote);
    },
  },
});

export const { addNewNote, deleteNote } = noteSlice.actions;

export default noteSlice.reducer;
