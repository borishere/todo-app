import React, { useContext } from 'react';
import Context from '../context';

function TodoFind() {
    const styles = {
        input: {
            fontSize: '20px',
            marginBottom: '20px',
            padding: '7px'
        }
    }

    const { state, dispatch } = useContext(Context);

    function findHandler(e) {
        dispatch({
            type: 'SET_FIND_VALUE',
            payload: e.target.value
        });
        dispatch({
            type: 'FIND_TODO'
        });
    }

    return (
        <input
            type="text"
            value={state.findTodoValue}
            onChange={(e) => findHandler(e)}
            style={styles.input}
            placeholder='Find task'
        />
    )
}

export default TodoFind;