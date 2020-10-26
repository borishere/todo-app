import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import Context from '../context'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px',
        padding: '10px',
        fontSize: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px'
    },
    input: {
        marginRight: '10px'
    }
}
function TodoItem({ todo, index }) {
    const { dispatch } = useContext(Context);
    const classes = [];

    if (todo.completed) {
        classes.push('done');
    }

    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input type='checkbox' style={styles.input} checked={todo.completed} onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })} />
                <strong>{index + 1}</strong>
                {todo.title}
            </span>
            <button className='remove-btn' onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })} >&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default TodoItem