import React from 'react';
import CartContext from "./context";


const CartProvider = props =>{

    const onItemAdd = props =>{

    }

    const onItemRemove = props => {

    }

    const cartContext={
        item:[{id: '1', item: 'Biryani', price:10, amount: '1'}, {id: '2', item: 'Prawn', price: 12, amount: '1'}],
        totalAmount: 500,
        onAdd: onItemAdd,
        onRemove: onItemRemove
    }

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )

}

export default CartProvider