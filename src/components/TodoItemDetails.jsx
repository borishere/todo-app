import React from 'react';
import { Button, Container, Jumbotron } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function TodoItemDetails({ todos }) {
    let { id } = useParams();
    let todo = todos.filter(item => item.id === +id)[0];
    let history = useHistory();

    const backBtnHandler = () => {
        history.push('/');
    }

    return (
        <Container className='text-center'>
            <Jumbotron>
                <h2>Task id: {id}</h2>
                <h3> {todo.title} </h3>
                <Button
                    variant='primary'
                    className='mt-4'
                    onClick={backBtnHandler}
                >
                    Go back
                </Button>
            </Jumbotron>
        </Container>
    )
}

export default TodoItemDetails;

TodoItemDetails.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
}