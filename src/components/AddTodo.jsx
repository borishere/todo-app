import React, { useContext, useRef } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import api from '../api/todos-api';
import { addTodo, filterTodo, setFilterValue, setFindValue, setNewTodoValue, showAlert } from '../state/actionCreators';
import Context from '../state/context';

function useInputValue(state, dispatch) {
    return {
        bind: {
            value: state.addTodoValue,
            onChange: e => dispatch(setNewTodoValue(e.target.value))
        },
        clear: () => dispatch(setNewTodoValue('')),
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

            api.addTodo(newTodo).then(ok => {
                if (ok) {
                    dispatch(addTodo(newTodo));
                    dispatch(setFindValue(''));
                    dispatch(setFilterValue('all'));
                    dispatch(filterTodo());
                    dispatch(showAlert('add'));
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