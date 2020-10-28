import React, { useContext } from "react";
import Context from "../context";

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
                type: 'FIND_TODO'
            });

            input.clear()
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                className='add-todo-input'
                {...input.bind}
            />
            <button
                type="submit"
                className='add-todo-btn'
            >
                Add task
            </button>
        </form>
    )
}

export default AddTodo