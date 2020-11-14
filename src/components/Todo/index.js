import React from 'react'

export default function Todo({
        todo,
        index,
        completeTodo,
        removeTodo
    }) {
    return(
        <div 
            className="todo" 
            style={{textDecoration: todo.complete ? 'line-through': ''}}>
            {todo.title}
            <div className="button-wrapper">
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => removeTodo(index)}>Delete</button>
            </div>
        </div>
    )
}