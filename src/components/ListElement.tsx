import { NewNote } from "./ToDoList";

const ListElement = ({ children }: { children: NewNote }) => {
  return (
    <div>
      <span>{children.dateOfNote}</span>
      <span>{children.titleOfNote}</span>
      <span>{children.contentOfNote}</span>
    </div>
  );
};

export default ListElement;
