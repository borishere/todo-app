import { ADD_TODO, FILTER_TODO, GET_TODOS, REMOVE_ALERT, REMOVE_TODO, SET_FILTER_VALUE, SET_FIND_VALUE, SET_LOADING, SET_MODAL, SET_NEWTODO_VALUE, SHOW_ALERT, TOGGLE_TODO } from './actions'

const Reducer = (state, { type, payload }) => {
    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                loading: payload
            }
        case GET_TODOS:
            return {
                ...state,
                todos: payload,
                filteredTodos: payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { ...payload }]
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(item => item.id !== payload),
                filteredTodos: state.filteredTodos.filter(item => item.id !== payload)
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(item => {
                    if (item.id === payload) {
                        item.completed = !item.completed;
                    }

                    return item;
                })
            }
        case SET_MODAL:
            return {
                ...state,
                modalOpened: payload
            }
        case SET_NEWTODO_VALUE:
            return {
                ...state,
                addTodoValue: payload
            }
        case SET_FIND_VALUE:
            return {
                ...state,
                findTodoValue: payload
            }
        case SET_FILTER_VALUE:
            return {
                ...state,
                filterValue: payload
            }
        case FILTER_TODO:
            return {
                ...state,
                filteredTodos: state.todos.filter(item => {
                    if (state.filterValue === 'all') {
                        return item.title.includes(state.findTodoValue);
                    }

                    if (state.filterValue === 'current') {
                        return !item.completed && item.title.includes(state.findTodoValue)
                    }

                    if (state.filterValue === 'done') {
                        return item.completed && item.title.includes(state.findTodoValue)
                    }

                    return item;
                })
            }
        case SHOW_ALERT:
            return {
                ...state,
                alerts: [
                    ...state.alerts,
                    {
                        id: Date.now(),
                        type: payload
                    }
                ]
            }
        case REMOVE_ALERT:
            return {
                ...state,
                alerts: state.alerts.filter(item => item.id !== payload)
            }
        default:
            break;
    }
}

export default Reducer;