import React from 'react';
import styles from '../Cart/CartItem.module.css'


const CartItems= props => {

    const price = parseInt(props.price).toFixed(2);

    return(
        <li className={styles['cart-item']}>
            <div>
                <h2>{props.item}</h2>
                <div className={styles.summary}>
                    <span className={styles.price}>€{price}</span>
                    <span className={styles.amount}>x{props.amount}</span>
                </div>
            </div>
            <div className={styles.actions}>
                <button onClick={props.onAdd}>+</button>
                <button onClick={props.onRemove}>-</button>
            </div>
        </li>
    )

}

export default CartItems