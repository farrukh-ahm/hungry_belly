import React from 'react';
import Card from '../UI/Card';
import MenuItems from './MenuItems';
import styles from './MealsList.module.css'


const MealList = props => {

    return(
        <section className={styles.meals}>
            <Card>
                <MenuItems />
            </Card>
        </section>
    )

}

export default MealList