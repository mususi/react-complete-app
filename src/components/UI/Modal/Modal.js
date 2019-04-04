import React from 'react';

import classses from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <React.Fragment>
        <Backdrop
            show={props.show}
            clicked={props.modalClosed} />
        <div
            className={classses.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'trasnlateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </React.Fragment>
);

export default React.memo(modal);