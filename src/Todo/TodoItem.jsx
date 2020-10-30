import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import Context from '../context'
import { useHistory } from 'react-router-dom';

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
        if (e.target.className === 'todo-item') {
            history.push('/' + todo.id);
        }
    }

    function inputChangeHandler() {
        dispatch({ type: 'TOGGLE_TODO', payload: todo.id })
    }

    return (
        <li
            style={styles.li}
            className='todo-item'
            onClick={(e) => itemClickHandler(e)}
        >
            <span className={classes.join(' ')} style={styles.span}>
                <input type='checkbox'
                    style={styles.input}
                    checked={todo.completed}
                    onChange={inputChangeHandler}
                />
                <strong>{index + 1}.</strong>&nbsp;
                {todo.title}
            </span>
            <button
                className='remove-btn'
                onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}>
                &times;
            </button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default TodoItem