/* eslint-disable react/prop-types */
import { useState } from "react";
import TodoNoteForm from "./TodoNoteForm";
import TodoNotes from "./TodoNotes";
import TodosContainer from "./TodosContainer";

const TodoPage = () => {
  const [note, setNote] = useState("");

  const handleNewNote = (data) => setNote(data);

  return (
    <div>
      <TodoNoteForm handleNewNote={handleNewNote} />
      <br />
      <TodoNotes note={note} />
      <br />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default TodoPage;
