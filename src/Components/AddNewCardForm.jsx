


import { nanoid } from "@reduxjs/toolkit";
import { useLocation, useNavigate } from "react-router"
import { useSelector, useDispatch } from 'react-redux'
import Home from "../Pages/Home"




import { cardAdded } from "../features/cards/cardsSlice";

const AddNewCardForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);
    const { cards } = useSelector(state => state.cards)

    let fullName = `${location.state.name.first} ${location.state.name.last}`
    console.log(fullName)

    const addCardOnSubmit = (e) => {
        e.preventDefault()
        
        const vendor = document.querySelector('#vendor').value
        let cardNumber = document.querySelector('#cardNumber').value
        const cardHolder = document.querySelector('#cardHolder').value
        const valid = document.querySelector('#valid').value
        const ccv = document.querySelector('#ccv').value

        let res = [...cardNumber].map((d, i) => (i) % 4 == 0 ? ' ' + d : d).join('').trim()

        const card = {
            fullName: cardHolder,
            vendor: vendor,
            cardNumber: res,
            valid: valid,
            ccv: ccv,
            active: true,
            id: nanoid()
        }
        dispatch(
            cardAdded(card)
        )
        navigate("/")
        
  
    }
    console.log(cards)
    

    const handleChange = (id) => {
        let inputs = document.querySelector(`#${id}`).value;
        document.querySelector(`#${id}Input`).textContent = inputs;
      };

    









    
    return ( 


        <>
        <div className="card-pic">
        <p id="vendorInput"></p>
        <p id="cardNumberInput"></p>
        <p>{fullName}</p>
        <p id="validInput"></p>
        <p id="ccvInput"></p>
        </div>

        <section>
            <h2>Add new Card</h2>
            <form>
                <label htmlFor="cardNumber">Card Number</label>
                <input 
                type="text"
                id="cardNumber" 
                name="cardNumber"
                placeholder="cardnumber"
                onChange={() => {handleChange("cardNumber")}}
                
                maxLength= {16}               
                />
                
                <label htmlFor="cardHolder">Card Holder Name</label>
                <input 
                disabled
                type="text"
                id="cardHolder" 
                name="cardHolder"
                value={fullName}
                
                      
                />
                <label htmlFor="valid">Valid thru</label>
                <input 
                type="text"
                id="valid" 
                name="valid"
                placeholder="valid thru"
                onChange={() => {handleChange("valid")}}
                 
                />
             
                <label htmlFor="ccv">CCV</label>
                <input 
                placeholder="ccv"
                type="text"
                id="ccv" 
                name="ccv"
                onChange={() => {handleChange("ccv")}}
                
                />

                <select name="vendor" id="vendor" onChange={() => {handleChange("vendor")}}>
                    <option defaultValue={"vendor"} > vendor</option>
                    <option value="mastercard">MasterCard</option>
                    <option value="amx">AMX</option>
                    <option value="visa">Visa</option>

                </select>

                <button 
                onClick={addCardOnSubmit}
                
                
                >Save Card</button>
            </form>


        </section>
        </>
     );
}
 
export default AddNewCardForm;