import React, { useContext } from "react";
import Context from "../context";

function useInputValue(state, dispatch) {
    return {
        bind: {
            value: state.inputValue,
            onChange: e => dispatch({ type: 'SET_INPUT_VALUE', payload: e.target.value })

        },
        clear: () => dispatch({ type: 'SET_INPUT_VALUE', payload: '' }),
        value: () => state.inputValue
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
                Add todo
            </button>
        </form>
    )
}

export default AddTodo