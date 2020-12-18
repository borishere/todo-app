import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { filterTodo, setFindValue } from '../state/actionCreators';
import Context from '../state/context';

function TodoFind() {
    const { state, dispatch } = useContext(Context);

    function findHandler(e) {
        dispatch(setFindValue(e.target.value));
        dispatch(filterTodo());
    }

    return (
        <Form>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder='Find todo'
                    value={state.findTodoValue}
                    onChange={(e) => findHandler(e)}
                />
            </Form.Group>
        </Form>
    )
}

export default TodoFind;