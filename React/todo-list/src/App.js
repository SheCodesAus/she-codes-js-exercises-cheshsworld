import React, { useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoItem from "./components/TodoItem/TodoItem";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
    text: "Learn about React",
    isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
    }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text} ]; // ... updates array
    // What it would it would like if you did not add the three dots before todos
    // [["something", "something else"], "some todo"]
    // With the three dots also called the spread operator 
    // ["something", "something else", "some todo"]
    setTodos(newTodos); //replaces the value
   
  }

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo  = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
    <div className="todo-list">
    <h1>My todo list</h1>
    {todos.map((todo, index) => (
      <TodoItem 
      todo={todo} 
      key={index} 
      index={index} 
      completeTodo={completeTodo} 
      removeTodo={removeTodo}/>
    ))} 
    <TodoForm addTodo={addTodo}/>     
    </div>
    </div>
    );
}

export default App;
