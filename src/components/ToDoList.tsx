import React, { useState } from "react";
import Input from "./Input";
import ListElement from "./ListElement";
import {
  RootState,
  addNewNote,
} from "../datastorage/features/counter/noteSlice";
import { useDispatch, useSelector } from "react-redux";

export interface NewNote {
  dateOfNote: string;
  titleOfNote: string;
  contentOfNote: string;
}

const ToDoList = () => {
  const [dateOfNote, setDateOfNote] = useState<string>("");
  const [titleOfNote, setTitleOfNote] = useState<string>("");
  const [contentOfNote, setContentOfNote] = useState<string>("");
  const dispatch = useDispatch();
  const notes = useSelector((state: RootState) => state.notes.note);

  const addNote = () => {
    if (
      dateOfNote.trim() !== "" &&
      titleOfNote.trim() !== "" &&
      contentOfNote.trim() !== ""
    ) {
      const newNote: NewNote = {
        dateOfNote,
        titleOfNote,
        contentOfNote,
      };
      dispatch(addNewNote(newNote));

      setDateOfNote("");
      setTitleOfNote("");
      setContentOfNote("");
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateOfNote(e.target.value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleOfNote(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContentOfNote(e.target.value);
  };

  return (
    <div>
      <div>
        <Input
          value={dateOfNote}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleDateChange(e)
          }
          placeholder="Date"
        />
        <Input
          value={titleOfNote}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleTitleChange(e)
          }
          placeholder="Title"
        />
        <Input
          value={contentOfNote}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleContentChange(e)
          }
          placeholder="Content"
        />
        <button onClick={() => addNote()}>add note</button>
      </div>
      <div>
        {notes.map((note, idx) => (
          <ListElement key={idx}>{note}</ListElement>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
