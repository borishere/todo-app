import React from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem';

const styles = {
    ul: {
        padding: 0,
        listStyle: 'none'
    }
}

function TodoList(props) {
        return (
        <ul style={styles.ul}>
            {
                props.todos.map((todo, i) => {
                    return <TodoItem todo={todo} key={todo.id} index={i} itemOnChange={props.onToggle}/>
                })
            }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList