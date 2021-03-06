import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import Context from '../state/context'
import { useHistory } from 'react-router-dom';
import { Button, ListGroup } from 'react-bootstrap';
import api from '../api/todos-api';
import { removeTodo, showAlert, toggleTodo } from '../state/actionCreators';

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px',
        padding: '20px',
        fontSize: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px'
    },
    span: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '25px',
        height: '25px',
        margin: '0 10px 0 0'
    }
}
function TodoItem({ todo, index }) {
    const { dispatch } = useContext(Context);
    const classes = [];

    let history = useHistory();

    if (todo.completed) {
        classes.push('done');
    }

    function itemClickHandler(e) {
        if (e.target.classList.contains('todo-item')) {
            history.push('/' + todo.id);
        }
    }

    function toggleTodoHandler(todo) {
        let toggledTodo = {
            ...todo,
            completed: !todo.completed
        };

        api.editTodo(toggledTodo).then(ok => {
            if (ok) {
                dispatch(toggleTodo(todo.id));
            }
        });
    }

    function removeBtnHandler() {
        api.deleteTodo(todo.id).then(ok => {
            if (ok) {
                dispatch(removeTodo(todo.id))
                dispatch(showAlert('remove'))
            }
        });
    }

    return (
        <ListGroup.Item
            style={styles.li}
            variant='secondary'
            className='todo-item'
            onClick={(e) => itemClickHandler(e)}
        >
            <span className={classes.join(' ')} style={styles.span}>
                <input type='checkbox'
                    style={styles.input}
                    checked={todo.completed}
                    onChange={() => toggleTodoHandler(todo)}
                />
                <strong>{index + 1}.</strong>&nbsp;
                {todo.title}
            </span>
            <Button
                className='remove-btn'
                variant='danger'
                onClick={removeBtnHandler}
            >
                &times;
            </Button>
        </ListGroup.Item>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default TodoItem