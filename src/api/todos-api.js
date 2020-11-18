const API_ROOT = 'https://jsonplaceholder.typicode.com/todos';

const api = {
    async getTodos() {
        let response = await fetch(`${API_ROOT}?_limit=5`);
        let todos = await response.json();

        return todos;
    },

    async deleteTodo(id) {
        let response = await fetch(`${API_ROOT}/${id}`, {
            method: 'DELETE'
        });

        return response.ok;
    },

    async addTodo(todo) {
        let response = await fetch(API_ROOT, {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        });

        return response.ok;
    },

    async editTodo(todo) {
        let response = await fetch(`${API_ROOT}/${todo.id}`, {
            method: 'PUT',
            body: JSON.stringify(todo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        });

        return response.ok;
    }
}

export default api;