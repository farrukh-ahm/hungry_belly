import React, {useContext} from 'react';
import Modal from '../UI/Modal';
import CartItems from './CartItems';
import CartContext from '../../store/context';
import styles from '../Cart/CartMenu.module.css';


const CartMenu = props => {

    const ctx = useContext(CartContext)
    const totalAmount = `€${ctx.totalAmount.toFixed(2)}`

    const addItemhandler = item =>{
        ctx.onAdd({...item, amount:1})
    }

    const removeItemHandler = id =>{

        ctx.onRemove(id)

    }

    const orderMenu = ctx.item.map(item=>{
        return(
            <CartItems
                key={item.id}
                id={item.id} 
                item={item.item}
                price={item.price}
                amount={item.amount}
                onAdd={addItemhandler.bind(null, item)}
                onRemove={removeItemHandler.bind(null, item.id)}
            />
        )
    })

    return(
        <Modal onClick={props.onClose}>
            <ul className={styles['cart-items']}>{orderMenu}</ul>
            <div className={styles.total}>
                <span>Total Amount:</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    )

}

export default CartMenu