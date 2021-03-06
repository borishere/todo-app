import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { filterTodo, setFilterValue } from '../state/actionCreators';
import Context from '../state/context';

function TodoFilter() {
    const { state, dispatch } = useContext(Context);

    function filterClick(e) {
        dispatch(setFilterValue(e.target.value));
        dispatch(filterTodo());
    }

    return (
        <Form className='todo-filter-wrap mb-3'>
            <Form.Check
                inline
                label='All'
                type='radio'
                className='flex-column-reverse'
                id='todo-all'
                value='all'
                checked={state.filterValue === 'all'}
                onChange={(e) => filterClick(e)}
            />
            <Form.Check
                inline
                label='In progress'
                type='radio'
                className='flex-column-reverse'
                id="todo-current"
                value='current'
                checked={state.filterValue === 'current'}
                onChange={(e) => filterClick(e)}
            />
            <Form.Check
                inline
                label='Done'
                type='radio'
                className='flex-column-reverse'
                id='todo-done'
                value='done'
                checked={state.filterValue === 'done'}
                onChange={(e) => filterClick(e)}
            />
        </Form>
    )
}

export default TodoFilter;