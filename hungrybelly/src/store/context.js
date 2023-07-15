import React from 'react';

const CartContext = React.createContext({
    item:[{}],
    totalAmount: 0,
    onAdd: (item)=>{},
    onRemove: (id)=>{},
})


export default CartContext