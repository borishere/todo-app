import React, { useContext } from 'react';
import Context from '../context';

function TodoFilter() {
    const { state, dispatch } = useContext(Context);

    function filterClick(e) {
        dispatch({
            type: 'SET_FILTER_VALUE',
            payload: e.target.value
        });
        dispatch({
            type: 'FILTER_TODO'
        });
    }

    return (
        <div className='todo-filter-wrap'>
            <div className='todo-filter-el'>
                <label htmlFor='todo-all'>All</label>
                <input
                    type="radio"
                    value='all'
                    name="todo-filter"
                    id='todo-all'
                    checked={state.filterValue === 'all'}
                    onChange={(e) => filterClick(e)}
                />
            </div>
            <div className='todo-filter-el'>
                <label htmlFor='todo-current'>In progress</label>
                <input
                    type="radio"
                    value='current'
                    name="todo-filter"
                    id='todo-current'
                    checked={state.filterValue === 'current'}
                    onChange={(e) => filterClick(e)}
                />
            </div>
            <div className='todo-filter-el'>
                <label htmlFor='todo-done'>Done</label>
                <input
                    type="radio"
                    value='done'
                    name="todo-filter"
                    id='todo-done'
                    checked={state.filterValue === 'done'}
                    onChange={(e) => filterClick(e)}
                />
            </div>
        </div>
    )
}

export default TodoFilter;