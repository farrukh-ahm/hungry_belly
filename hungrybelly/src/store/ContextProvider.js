import React, { useReducer, useState } from 'react';
import CartContext from "./context";


const CartProvider = props =>{

    const [addCart, setAddCart] = useState({item: [{id:1, item:'Biryani', price:10, amount:'2'}], totalAmount: ''})

    const onItemAdd = item =>{
        const newItem = [...addCart.item, item]
        console.log(newItem)
        setAddCart((prevState)=>{
            console.log(prevState)
            return{...prevState, item:[...newItem]}
        })
    }

    const onItemRemove = props => {

    }

    
    const cartContext={
        item:addCart.item,
        totalAmount: addCart.totalAmount,
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