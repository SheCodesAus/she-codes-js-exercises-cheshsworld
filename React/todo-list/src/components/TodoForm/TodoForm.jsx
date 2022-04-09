import React, { useState } from "react";
import "./TodoForm.css";

function TodoForm(props) {
    const { addTodo } = props;
    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); // prevents default refresh function
        if (!value) { //if there is no value do not return anything
            return;
        }
        addTodo(value);
        setValue(""); //typed something want to resubmit the form
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            value={value} 
            type="text" 
            placeholder="Add Todo..." 
            onChange={(event) => setValue(event.target.value)}/>
        </form>
    );
}

export default TodoForm;