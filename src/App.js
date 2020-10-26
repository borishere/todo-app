import React, { useEffect, useReducer } from 'react';
import TodoList from './Todo/TodoList'
import Context from './context'
import AddTodo from "./Todo/AddTodo";
import Loader from "./Loader";
import Modal from './Modal/Modal'
import Reducer from './Reducer';

function App() {
    const initialState = {
        todos: [],
        loading: true,
        modalOpened: false,
        inputValue: ''
    }
    const [state, dispatch] = useReducer(Reducer, initialState);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => setTimeout(() => {
                dispatch({
                    type: 'GET_TODOS',
                    payload: todos
                });
                dispatch({
                    type: 'SET_LOADING',
                    payload: false
                });
            }, 2000));
    }, [])

    return (
        <Context.Provider value={{ state, dispatch }}>
            <div className='wrapper'>
                <h1>Todo app</h1>
                <Modal />
                <AddTodo />
                {
                    state.loading && <Loader />
                }
                {
                    state.todos.length ?
                        <TodoList todos={state.todos} />
                        :
                        state.loading ? '' : <h3>No todos found!</h3>
                }
            </div>
        </Context.Provider>
    );
}

export default App;
