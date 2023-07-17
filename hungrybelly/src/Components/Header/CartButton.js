import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/context';
import styles from '../Header/CartButton.module.css'


const CartButton = props => {

    const [cartHighlight, setCartHighlight] = useState(false)
    const ctx = useContext(CartContext);

    const itemAmount = ctx.item.reduce((acc,val)=>{
        return acc+val.amount
    },0)

    const btnClasses = `${styles.button} ${cartHighlight ? styles.bump:''}`

    useEffect(()=>{

        if(ctx.item.length===0){
            return
        };

        setCartHighlight(true);
        const timer = setTimeout(()=>setCartHighlight(false),300);
        return ()=>{clearTimeout(timer)};


    }, [ctx.item])

    return(
        <React.Fragment>
            <button className={btnClasses} onClick={props.onOpen}>
                <span className={styles.icon}><CartIcon /></span>
                <span>Your Cart</span>
                <span className={styles.badge}>{itemAmount}</span>
            </button>
        </React.Fragment>
    )

}

export default CartButton