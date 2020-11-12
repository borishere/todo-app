import React, { useContext } from 'react';
import Context from '../state/context';
import './Modal.css';

function Modal() {
    const { state, dispatch } = useContext(Context);

    return (
        <React.Fragment>
            <button onClick={() => dispatch({ type: 'SET_MODAL', payload: true })}>show modal</button>
            {
                state.modalOpened && (
                    <div className='modal'>
                        <div className='modal-body'>
                            <button className='modal-close' onClick={() => { dispatch({ type: 'SET_MODAL', payload: false }) }}>&#9932;</button>
                            <h1>Modal header</h1>
                            <p>Laudantium natus quam illo exercitationem odio et. Non sint repellat quas voluptas et nihil reprehenderit itaque. Beatae quia deleniti architecto molestiae quod ipsam non corrupti commodi. Quasi veritatis animi similique velit cum optio suscipit et dolor. Eligendi et libero numquam fuga porro rerum atque illum. Dolorem aut omnis qui quia sunt quae corporis corrupti.</p>
                        </div>
                    </div>
                )
            }
        </React.Fragment>
    )
}

export default Modal