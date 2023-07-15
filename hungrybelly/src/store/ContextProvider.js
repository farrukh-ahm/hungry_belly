import React, { useState } from 'react';
import CartContext from "./context";


const defaultCart = {item:[], totalAmount: 0}

const CartProvider = props =>{

    const [addCart, setAddCart] = useState(defaultCart)

    const onItemAdd = item =>{

        const updatedAmount = addCart.totalAmount + item.price * item.amount
        const existingItemIndex = addCart.item.findIndex(x=>x.id===item.id)
        const existingItem = addCart.item[existingItemIndex]
        let updatedMeal

        if(existingItem){
            updatedMeal = [...addCart.item];
            updatedMeal[existingItemIndex].amount = existingItem.amount + item.amount 
        }

        else{
            updatedMeal = [...addCart.item, item]
        }
        
        console.log(updatedMeal)
        console.log(`AddCart: ${addCart.item}`)
        setAddCart((prevState)=>{
            return{item:[...updatedMeal], totalAmount: updatedAmount}
        })

        return{defaultCart}
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