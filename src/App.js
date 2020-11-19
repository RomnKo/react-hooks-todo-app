import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/Form';

function App() {
    const [todos, setTodos] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        console.log('loaded todos');
        fetch('https://jsonplaceholder.typicode.com/users/1/todos')
            .then((response) => response.json())
            .then((json) => setTodos(json))
    }, []);

    useEffect(() => {
        console.log('resized');
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }

    const addTodo = title => {
        console.log(title);
        const newTodos = [...todos, { title }];
        setTodos(newTodos);
    }

    const completeTodo = index => {
        console.log(index);
        const newTodos = [...todos];
        newTodos[index].complete = (!newTodos[index].complete);
        setTodos(newTodos);
    }

    const removeTodo = index => {
        console.log(index);
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <div className="app">
            <div>JUST (to)DO IT!</div>{windowWidth}
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo} />
                ))}
                <TodoForm addTodo={addTodo} />
            </div>
        </div>
    )
}

export default App;
