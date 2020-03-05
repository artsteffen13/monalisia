import React from 'react';
import './navigation.css';

const Modal = (props) => {
    return (
        <div onClick={props.close} className="modal" style={{display: props.modal ? 'inherit' : 'none'}}>

        </div>
    );
};

export default Modal;