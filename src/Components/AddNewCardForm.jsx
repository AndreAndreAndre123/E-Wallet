import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { nanoid } from "@reduxjs/toolkit";
import { cardAdded } from "../features/cards/cardsSlice";

import {selectUser} from "../features/users/usersSlice";

/* import { getUser } from "../features/users/usersSlice";
console.log(getUser); */

const AddNewCardForm = () => {

    const dispatch = useDispatch()

    const [cardNumber, setCardnumber] = useState("")

    const onCardNumberChange = e => setCardnumber(e.target.value)

    const onCardSaved = (e) => {
        e.preventDefault()
        if(cardNumber) {
            dispatch(
                cardAdded({
                    id: nanoid(),
                    cardNumber,
                })
            )
            
            setCardnumber("")
        }
        
    }

  
        
        
    

    return ( 
        <section>
            <h2>Add new Card</h2>
            <p id="realtime"></p>
            <form>
                <label htmlFor="cardNumber">Card Number</label>
                <input 
                type="number"
                id="cardNumber" 
                name="cardNumber"
                value={cardNumber}
                onChange={onCardNumberChange}                
                />

                <button 
                onClick={onCardSaved}
                
                >Save Card</button>
            </form>


        </section>



     );
}

 
export default AddNewCardForm;