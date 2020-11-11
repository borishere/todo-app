import React, { useContext } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import Context from "../state/context";

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

    function submitHandler(e) {
        e.preventDefault();

        if (input.value().trim()) {
            dispatch({
                type: 'ADD_TODO',
                payload: input.value()
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

            input.clear()
        }
    }

    return (
        <Form onSubmit={submitHandler}>
            <InputGroup className="mb-3">
                <FormControl
                    className='add-todo-input'
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