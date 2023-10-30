import { deleteNote } from "../datastorage/features/notes/noteSlice";
import { NewNote } from "./ToDoList";
import { useDispatch, useSelector } from "react-redux";

const ListElement = ({ children }: { children: NewNote }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center flex-col space-y-5">
      <span>{children.dateOfNote}</span>
      <span>{children.titleOfNote}</span>
      <span>{children.contentOfNote}</span>
      <button onClick={() => dispatch(deleteNote(children.titleOfNote))}>
        x
      </button>
    </div>
  );
};

export default ListElement;
