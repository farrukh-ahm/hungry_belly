import React, { useContext } from 'react';
import MealForm from './MealForm';
import CartContext from '../../store/context';
import styles from '../Menu/MenuItems.module.css';


const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];


const MenuItems = props => {

    const ctx = useContext(CartContext)

    const menu = DUMMY_MEALS.map(item=>{

      const onAddItem = amount => {
        ctx.onAdd({
          id:item.id,
          item: item.name,
          amount: amount,
          price: item.price
        })
      }
      return(
          <li className={styles.meal} key={item.id}>
              <div>
                  <h3>{item.name}</h3>
                  <div className={styles.description}>{item.description}</div>
                  <div className={styles.price}>{`€${item.price.toFixed(2)}`}</div>
              </div>
              <div>
                  <MealForm id={item.id} onFormSubmit={onAddItem}/>
              </div>
          </li>
      )
    })

    return(
        <React.Fragment>
            <ul>
                {menu}
            </ul>
        </React.Fragment>
    )

}

export default MenuItems