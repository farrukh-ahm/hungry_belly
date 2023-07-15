import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/context';
import styles from '../Header/CartButton.module.css'


const CartButton = props => {

    const ctx = useContext(CartContext);

    const itemAmount = ctx.item.reduce((acc,val)=>{
        return acc+val.amount
    },0)

    return(
        <React.Fragment>
            <button className={styles.button} onClick={props.onOpen}>
                <span className={styles.icon}><CartIcon /></span>
                <span>Your Cart</span>
                <span className={styles.badge}>{itemAmount}</span>
            </button>
        </React.Fragment>
    )

}

export default CartButton