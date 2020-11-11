import React from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem';
import { ListGroup } from 'react-bootstrap';

function TodoList(props) {
    return (
        <ListGroup>
            {
                props.todos.map((todo, i) => {
                    return <TodoItem todo={todo} key={todo.id} index={i} />
                })
            }
        </ListGroup>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList