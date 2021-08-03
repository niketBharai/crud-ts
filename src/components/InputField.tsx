import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addHandler: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, addHandler }) => {
  return (
    <form className="input" onSubmit={addHandler}>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add whatever you want!"
        className="inputBox"
      />
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
};

export default InputField;
