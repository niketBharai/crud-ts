import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import ItemList from "./components/ItemList";
import { Todo } from "./helper";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [err, setErr] = useState<string>("");

  const addHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      if (todos.length <= 5) {
        setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
        setTodo("");
        setErr("");
      } else {
        alert("Limit Exceeded");
        setTodo("");
      }
    } else {
      setErr("You forgot to add !");
    }
  };

  // console.log(`todos`, todos);

  return (
    <div className="App">
      <h1 className="title">CRUD</h1>
      <InputField todo={todo} setTodo={setTodo} addHandler={addHandler} />
      {err && <h1 className="err">{err}</h1>}
      <ItemList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
