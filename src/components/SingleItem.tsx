import React from "react";
import { Todo } from "../helper";
import { MdEdit, MdDelete, MdDoneAll } from "react-icons/md";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleItem: React.FC<Props> = ({ todo, todos, setTodos }) => {
  return (
    <form className="item">
      <span className="itemTitle">{todo.todo}</span>
      <div>
        <span className="icon">
          <MdEdit />
        </span>
        <span className="icon">
          <MdDelete />
        </span>
        <span className="icon">
          <MdDoneAll />
        </span>
      </div>
    </form>
  );
};

export default SingleItem;
