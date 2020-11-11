import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import Context from '../state/context';

function TodoFind() {
    const { state, dispatch } = useContext(Context);

    function findHandler(e) {
        dispatch({
            type: 'SET_FIND_VALUE',
            payload: e.target.value
        });
        dispatch({
            type: 'FILTER_TODO'
        });
    }

    return (
        <Form>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder='Find task'
                    value={state.findTodoValue}
                    onChange={(e) => findHandler(e)}
                />
            </Form.Group>
        </Form>
    )
}

export default TodoFind;