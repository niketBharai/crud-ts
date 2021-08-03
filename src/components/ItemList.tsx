import React from "react";
import { Todo } from "../helper";
import Item from "./Item";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ItemList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="lists">
      {todos.map((todo, i) => (
        <Item key={i} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default ItemList;
