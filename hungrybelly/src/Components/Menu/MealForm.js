import React, { useRef, useState } from 'react';
import Input from '../UI/Input';
import styles from '../Menu/MealForm.module.css'


const MealForm = props => {

    const amountRef = useRef()
    const [formValid, setFormValid] = useState(true)
    const submitHandler = e =>{
        e.preventDefault()
        const amountValue = amountRef.current.value;
        const amountIntValue = +amountValue;
        console.log(`amountvalue: ${amountValue}, amountIntValue:${amountIntValue}`)
        if(amountValue.trim().length===0||amountIntValue<0||amountIntValue>5){
            setFormValid(false)
            return
        }
        props.onFormSubmit(amountIntValue)
    }

    return(
        <form className={styles.form} onSubmit={submitHandler}>
            <Input
                ref={amountRef}
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
            {!formValid && <p>Please enter correct amount</p>}
        </form>
    )

}

export default MealForm