import React from 'react';
import Input from '../UI/Input';
import styles from '../Menu/MealForm.module.css'


const MealForm = props => {

    const submitHandler = e =>{
        e.preventDefault()
    }

    return(
        <form className={styles.form} onSubmit={submitHandler}>
            <Input
                label="Amount" 
                input={{
                    id: props.id,
                    type: "number",
                    min: "1",
                    max: "99",
                    step: "1",
                    defaultValue: "1"
                }}
            />
            <button>+Add</button>
        </form>
    )

}

export default MealForm