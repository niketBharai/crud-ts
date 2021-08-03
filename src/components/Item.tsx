import React from "react";
import { Todo } from "../helper";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Item: React.FC<Props> = ({ todo, todos, setTodos }) => {
  return (
    <div>
      <h2>M</h2>
    </div>
  );
};

export default Item;
