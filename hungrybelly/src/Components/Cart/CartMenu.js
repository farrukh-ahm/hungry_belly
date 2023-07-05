import React from 'react';
import Modal from '../UI/Modal';


const dummy_order = [
    {id: 1, item: "Sushi", amount: "2", price: 25},
    {id: 2, item: "Biryani", amount: "1", price: 20}
]

const CartMenu = props => {

    const orderMenu = dummy_order.map(item=>{
        return(
            <li key={item.id}>
                <h3>{item.item}</h3>
                <p>{item.price}</p>
                <p>{item.amount}</p>
            </li>
        )
    })

    return(
        <Modal>
            {orderMenu}
        </Modal>
    )

}

export default CartMenu