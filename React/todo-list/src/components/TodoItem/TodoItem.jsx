import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
    const { todo, index, completeTodo, removeTodo } = props;
    return (
        <div className={`todo ${todo.isCompleted ? "complete" : ""}`}> 
        {todo.text}
        <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
        </div>
        </div>
    );
};

export default TodoItem;

// export default is mainly used if there is only one component within the jsc file
//  export function is used to export different items in one page
// when imported you need to add {} to the import file if there are many
// '?' = ifelse 
//${} = to add javascript inside of a string 