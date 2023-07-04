import React from 'react';
import MealsSummary from './MealsSumamry';
import MealList from './MealsList';


const Menu = props => {

    return(
        <React.Fragment>
            <MealsSummary />
            <MealList />
        </React.Fragment>
    )

}

export default Menu