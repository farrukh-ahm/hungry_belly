import React from 'react';
import CartButton from './CartButton';
import styles from './Header.module.css'


const Header = props =>{

    return(
        <React.Fragment>
            <header className={styles.header}>
                <h1>Hungry Belly</h1>
                <CartButton onOpen={props.onOpen}/>
            </header>
            <div className={styles['main-image']}>
                <img
                src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="food banner"/>
            </div>
        </React.Fragment>
    )

}

export default Header