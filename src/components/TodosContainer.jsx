/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import TodoCard from "./TodoCard";

const TodosContainer = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`http://localhost:3000/todos`);

        if (!response.ok) {
          const errorObject = await response.json(); // Extract error details from the response
          throw new Error(errorObject.error || errorObject.message); // Throwing the error will reject the promise
        }

        const data = await response.json();
        setTodos(data);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, []);

  const mappedTodos =
    todos && todos.map((todo) => <TodoCard key={todo.id} {...todo} />);

  return (
    <div>
      <div id="error">{error}</div>
      <h2>Current Todos</h2>
      {mappedTodos}
    </div>
  );
};

export default TodosContainer;
