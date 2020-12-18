import { ADD_TODO, FILTER_TODO, GET_TODOS, REMOVE_ALERT, REMOVE_TODO, SET_FILTER_VALUE, SET_FIND_VALUE, SET_LOADING, SET_MODAL, SET_NEWTODO_VALUE, SHOW_ALERT, TOGGLE_TODO } from './actions';

export const setLoading = payload => ({
    type: SET_LOADING,
    payload
});

export const getTodos = payload => ({
    type: GET_TODOS,
    payload
});

export const addTodo = payload => ({
    type: ADD_TODO,
    payload
});

export const removeTodo = payload => ({
    type: REMOVE_TODO,
    payload
});

export const toggleTodo = payload => ({
    type: TOGGLE_TODO,
    payload
});

export const setModal = payload => ({
    type: SET_MODAL,
    payload
});

export const setNewTodoValue = payload => ({
    type: SET_NEWTODO_VALUE,
    payload
});

export const setFindValue = payload => ({
    type: SET_FIND_VALUE,
    payload
});

export const setFilterValue = payload => ({
    type: SET_FILTER_VALUE,
    payload
});

export const filterTodo = () => ({
    type: FILTER_TODO
});

export const showAlert = payload => ({
    type: SHOW_ALERT,
    payload
});

export const removeAlert = payload => ({
    type: REMOVE_ALERT,
    payload
});


