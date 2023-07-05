import React from 'react';
import ReactDOM from 'react-dom'
import styles from '../UI/Modal.module.css'


const Backdrop = props => {

    return(
        <div className={styles.backdrop}></div>
    )

}

const ModalOverlay = props => {

    return(
        <div className={styles.modal}>
            <div>{props.children}</div>
        </div>
    )

}

const ModalCall = document.getElementById("modal")

const Modal = props => {

    return(
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop />, ModalCall)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, ModalCall)}
        </React.Fragment>
    )

}

export default Modal