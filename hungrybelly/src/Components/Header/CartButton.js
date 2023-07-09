import React from 'react';
import CartIcon from '../Cart/CartIcon';
import styles from '../Header/CartButton.module.css'


const CartButton = props => {

    return(
        <React.Fragment>
            <button className={styles.button} onClick={props.onOpen}>
                <span className={styles.icon}><CartIcon /></span>
                <span>Your Cart</span>
                <span className={styles.badge}>20</span>
            </button>
        </React.Fragment>
    )

}

export default CartButton