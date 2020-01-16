import React from 'react';

import "./Todo.css";

function TodoForm(props) {
    return (
        <form className="todo-form">
            <input
                value={props.inputText}
                onChange={props.handleInput}
                type="text"
                name="todo"
                placeholder="What to do today?"
            />
            <button onClick={props.addTodo}>Add Todo</button>
            <button onClick={props.handleClearTodos}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;