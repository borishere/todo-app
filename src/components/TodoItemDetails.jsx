import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function TodoItemDetails({ todos }) {
    let { id } = useParams();
    let todo = todos.filter(item => item.id === +id)[0];

    return (
        <Container className='text-center'>
            <Jumbotron>
                <h2>Task id: {id}</h2>
                <h3> {todo.title} </h3>
            </Jumbotron>
        </Container>
    )
}

export default TodoItemDetails;