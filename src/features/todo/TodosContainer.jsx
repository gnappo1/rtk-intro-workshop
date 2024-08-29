/* eslint-disable react/prop-types */
import { useEffect } from "react";
import TodoCard from "./TodoCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodosAsync, todosSelector } from "./todoSlice";

const TodosContainer = () => {
  const todos = useSelector(todosSelector);
  const status = useSelector(state => state.todo.status)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, [dispatch]);

  const mappedTodos =
    todos && todos.map((todo) => <TodoCard key={todo.id} {...todo} />);

  if (status === "loading") {
    return <h3>Loading...</h3>
  }

  return (
    <div>
      <h2>Current Todos</h2>
      {mappedTodos}
    </div>
  );
};

export default TodosContainer;
