import React, { useState } from "react";
import Input from "./Input";
import ListElement from "./ListElement";
import { RootState, addNewNote } from "../datastorage/features/notes/noteSlice";
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
    <div className=" flex-col border-2 justify-center items-end mt-10">
      <div className=" flex-col space-y-5 bg-lime-400 p-10 border-2 justify-center items-center rounded-3xl">
        <div>
          <Input
            value={dateOfNote}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleDateChange(e)
            }
            placeholder="Date"
          />
        </div>
        <div>
          <Input
            value={titleOfNote}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleTitleChange(e)
            }
            placeholder="Title"
          />
        </div>
        <div>
          <Input
            value={contentOfNote}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleContentChange(e)
            }
            placeholder="Content"
          />
        </div>
        <div>
          <button onClick={() => addNote()}>add note</button>
        </div>
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
