import React, { useContext, useRef } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { addTodo } from '../api/todos-api';
import Context from '../state/context';

function useInputValue(state, dispatch) {
    return {
        bind: {
            value: state.addTodoValue,
            onChange: e => dispatch({ type: 'SET_NEWTODO_VALUE', payload: e.target.value })

        },
        clear: () => dispatch({ type: 'SET_NEWTODO_VALUE', payload: '' }),
        value: () => state.addTodoValue
    }
}

function AddTodo() {
    const { state, dispatch } = useContext(Context);
    const input = useInputValue(state, dispatch);
    const inputEl = useRef(null);

    function submitHandler(e) {
        e.preventDefault();

        if (input.value().trim()) {
            let newTodo = {
                id: Date.now(),
                completed: false,
                title: input.value()
            };

            addTodo(newTodo).then(ok => {
                if (ok) {
                    dispatch({
                        type: 'ADD_TODO',
                        payload: newTodo
                    });

                    dispatch({
                        type: 'SET_FIND_VALUE',
                        payload: ''
                    });

                    dispatch({
                        type: 'SET_FILTER_VALUE',
                        payload: 'all'
                    });

                    dispatch({
                        type: 'FILTER_TODO'
                    });

                    dispatch({
                        type: 'SHOW_ALERT',
                        payload: 'add'
                    });

                }
            });

            input.clear();
        } else {
            inputEl.current.focus();
        }
    }

    return (
        <Form onSubmit={submitHandler}>
            <InputGroup className="mb-3">
                <FormControl
                    className='add-todo-input'
                    ref={inputEl}
                    {...input.bind}
                />
                <InputGroup.Append>
                    <Button
                        type='submit'
                        variant='secondary'
                        className='add-todo-btn'
                    >
                        Add Todo
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    )
}

export default AddTodo