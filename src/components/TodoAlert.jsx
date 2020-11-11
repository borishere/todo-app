import React from 'react';
import { useContext } from 'react';
import { Toast } from 'react-bootstrap';
import Context from '../state/context';

export const TodoAlert = ({ id, index, type }) => {
    const { dispatch } = useContext(Context);

    const closeAlert = () => {
        dispatch({ type: 'REMOVE_ALERT', payload: id })
    }

    let alertText;

    switch (type) {
        case 'add':
            alertText = 'todo added!'
            break;
        case 'remove':
            alertText = 'todo removed!'
            break;
        default:
            alertText = ''
    }

    return (
        <Toast
            autohide
            delay={3000}
            animation={false}
            onClose={closeAlert}
            className='todo-alert'
            style={{ minWidth: '150px' }}
        >
            <Toast.Header>
                <strong className='mr-auto'>Todo app</strong>
            </Toast.Header>
            <Toast.Body>
                {alertText}
            </Toast.Body>
        </Toast>
    )
}