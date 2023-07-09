import React from 'react';

const CartContext = React.createContext({
    item:[{}],
    totalAmount: '',
    onAdd: (item)=>{},
    onRemove: (id)=>{},
})


export default CartContext