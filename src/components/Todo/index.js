import React from 'react'

export default function Todo({
        todo,
        index,
        completeTodo,
        removeTodo
    }) {
    return(
        <div className="todo">
            <span style={{ textDecoration: todo.complete ? 'line-through' : '' }}>
                {todo.title}</span>
            <div className="button-wrapper">
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => removeTodo(index)}>Delete</button>
            </div>
        </div>
    )
}