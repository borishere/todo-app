const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload
            }
        case 'GET_TODOS':
            return {
                ...state,
                todos: action.payload,
                filteredTodos: action.payload
            }
        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos, {
                        id: Date.now(),
                        completed: false,
                        title: action.payload
                    }
                ]
            }
        case 'REMOVE_TODO':
            return {
                ...state,
                todos: state.todos.filter(item => item.id !== action.payload),
                filteredTodos: state.filteredTodos.filter(item => item.id !== action.payload)
            }
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(item => {
                    if (item.id === action.payload) {
                        item.completed = !item.completed;
                    }

                    return item;
                })
            }
        case 'SET_MODAL':
            return {
                ...state,
                modalOpened: action.payload
            }
        case 'SET_NEWTODO_VALUE':
            return {
                ...state,
                addTodoValue: action.payload
            }
        case 'SET_FIND_VALUE':
            return {
                ...state,
                findTodoValue: action.payload
            }
        case 'FIND_TODO':
            return {
                ...state,
                filteredTodos: state.todos.filter(item => item.title.includes(state.findTodoValue))
            }
        default:
            break;
    }
}

export default Reducer;