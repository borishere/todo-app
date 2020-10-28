import React from 'react';
import { useParams } from 'react-router-dom';

function TodoItemDetails({ todos }) {
    let { id } = useParams();
    let todo = todos.filter(item => item.id === +id)[0];

    return (
        <>
            <h2>Task id: {id}</h2>
            <h3> {todo.title} </h3>
        </>
    )
}

export default TodoItemDetails;