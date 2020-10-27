import React from 'react';
import { useParams } from 'react-router-dom';

function TodoItemDetails() {
    let { id } = useParams();

    return (
        <>
            <h3>id: {id}</h3>
            <p>Ut vel unde deserunt doloribus id qui. Enim quam ipsam soluta.</p>
        </>
    )
}

export default TodoItemDetails;