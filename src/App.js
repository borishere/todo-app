import React, { useEffect, useReducer } from 'react';
import TodoList from './Todo/TodoList';
import Context from './context';
import AddTodo from "./Todo/AddTodo";
import Loader from "./Loader";
// import Modal from './Modal/Modal';
import Reducer from './Reducer';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import About from './About';
import TodoItemDetails from './Todo/TodoItemDetails';
import TodoFind from './Todo/TodoFind';
import TodoFilter from './Todo/TodoFilter';

function App() {
    const initialState = {
        todos: [],
        filteredTodos: [],
        loading: true,
        modalOpened: false,
        addTodoValue: '',
        findTodoValue: '',
        filterValue: 'all'

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
            }, 1000));
    }, [])

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <ul className='navbar'>
                <li>
                    <NavLink exact to='/' className='nav-link'>Todo</NavLink>
                </li>
                <li>
                    <NavLink exact to='/about' className='nav-link'>About</NavLink>
                </li>
            </ul>

            <Switch>
                <Route exact path='/'>
                    <Context.Provider value={{ state, dispatch }}>
                        <div className='wrapper'>
                            <h1>Todo app</h1>
                            {/* <Modal /> */}
                            <TodoFilter />
                            <TodoFind />
                            <AddTodo />
                            {
                                state.loading && <Loader />
                            }
                            {
                                state.filteredTodos.length ?
                                    <TodoList todos={state.filteredTodos} />
                                    :
                                    state.loading ? '' : <h3>No todos found!</h3>
                            }
                        </div>
                    </Context.Provider>
                </Route>
                <Route exact path='/about'>
                    <About />
                </Route>
                <Route path='/:id'>
                    <TodoItemDetails todos={state.filteredTodos} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
