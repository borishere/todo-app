const API_ROOT = 'https://jsonplaceholder.typicode.com/todos';

export async function getTodos() {
    let response = await fetch(`${API_ROOT}?_limit=5`);
    let todos = await response.json();

    return todos;
}

export async function deleteTodo(id) {
    let response = await fetch(`${API_ROOT}/${id}`, {
        method: 'DELETE'
    });

    return response.ok;
}

export async function addTodo(todo) {
    let response = await fetch(API_ROOT, {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    });

    return response.ok;
}