import React, { useEffect, useReducer } from 'react';
import TodoList from './components/TodoList';
import Context from './state/context';
import AddTodo from "./components/AddTodo";
import Loader from "./components/Loader";
// import Modal from './Modal/Modal';
import Reducer from './state/Reducer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './components/About';
import TodoItemDetails from './components/TodoItemDetails';
import TodoFind from './components/TodoFind';
import TodoFilter from './components/TodoFilter';
import { Col, Container, Row } from 'react-bootstrap';
import { TodoNavbar } from './components/TodoNavbar';
import { TodoAlertsList } from './components/TodoAlertsList';

function App() {
    const initialState = {
        todos: [],
        filteredTodos: [],
        loading: true,
        modalOpened: false,
        addTodoValue: '',
        findTodoValue: '',
        filterValue: 'all',
        alerts: []
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
            <TodoNavbar />
            <Switch>
                <Route exact path='/'>
                    <Context.Provider value={{ state, dispatch }}>
                        <Container fluid='md' className='text-center'>
                            <TodoAlertsList />
                            <Row>
                                <Col>
                                    <TodoFilter />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <TodoFind />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <AddTodo />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {
                                        state.loading && <Loader />
                                    }
                                    {
                                        state.filteredTodos.length ?
                                            <TodoList todos={state.filteredTodos} />
                                            :
                                            state.loading ? '' : <h3>No todos found!</h3>
                                    }
                                </Col>
                            </Row>
                        </Container>
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
