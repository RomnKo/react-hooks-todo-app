import React, { useState } from 'react';

export default function TodoForm({addTodo}) {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault(e);
        if(value) {
            addTodo(value);
            setValue('');
        };
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="What you wanna todo?" />
        </form>
    )
}
