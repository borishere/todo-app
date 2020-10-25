import React, { useEffect } from 'react';
import TodoList from './Todo/TodoList'
import Context from './context'
import AddTodo from "./Todo/AddTodo";
import Loader from "./Loader";
import Modal from './Modal/Modal'

function App() {
    const [todos, setTodos] = React.useState([]);
    const [loading, setloading] = React.useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => setTimeout(() => {
                setTodos(todos)
                setloading(false)
            }, 2000));
    }, [])

    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }

                return todo;
            })
        )
    }

    function removeTodo(id) {
        setTodos(
            todos.filter(todo => todo.id !== id)
        )
    }

    function addTodo(title) {
        setTodos(
            todos.concat([{
                id: Date.now(),
                completed: false,
                title
            }])
        )
    }

    return (
        <Context.Provider value={{ removeTodo }}>
            <div className='wrapper'>
                <h1>Todo app</h1>
                <Modal />
                <AddTodo onCreate={addTodo}></AddTodo>
                {
                    loading && <Loader />
                }
                {
                    todos.length ?
                        <TodoList todos={todos} onToggle={toggleTodo} />
                        :
                        loading ? '' : <h3>No todos found!</h3>
                }
            </div>
        </Context.Provider>
    );
}

export default App;
