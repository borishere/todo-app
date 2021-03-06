import React from 'react';
import { useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Context from '../state/context';
import { TodoAlert } from './TodoAlert';

export const TodoAlertsList = () => {
    const { state } = useContext(Context);

    return (
        <div style={{
            position: 'absolute',
            top: '80px',
            right: '10px',
            zIndex: 10
        }}>
            <TransitionGroup component={null}>
                {
                    state.alerts.map((toast, i) => (
                        <CSSTransition
                            key={toast.id}
                            timeout={{ enter: 300 }}
                            classNames='todo-alert'
                        >
                            <TodoAlert
                                id={toast.id}
                                type={toast.type}
                            />
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </div >
    )
}