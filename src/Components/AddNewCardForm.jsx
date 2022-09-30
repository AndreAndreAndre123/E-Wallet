import { nanoid } from "@reduxjs/toolkit";
import { useLocation, useNavigate } from "react-router"
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { cardAdded } from "../features/cards/cardsSlice";

const AddNewCardForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    
    const { cards } = useSelector(state => state.cards)

    let fullName = `${location.state.name.first} ${location.state.name.last}`
    console.log(cards)

    const addCardOnSubmit = (e) => {
        function containsAnyLetters(str) {
            return /[a-z]/i.test(str);
          }
          
        e.preventDefault()
        const vendor = document.querySelector('#vendor').value
        let cardNumber = document.querySelector('#cardNumber').value
        const cardHolder = document.querySelector('#cardHolder').value
        const valid = document.querySelector('#valid').value
        const ccv = document.querySelector('#ccv').value
        
        if(valid.length < 4){
            alert("Enter correct date (month / year)")
        }
        
        else if(ccv.length < 3 || ccv.length > 3) {
            alert("Enter correct ccv number (3 digits)")
        }
        
        else if(cardNumber.length < 16){
            alert("Enter correct card number (16 digits)")
        }
        
        else if(!vendor){
            alert("Enter vendor")
        }
        else if (containsAnyLetters(cardNumber) || containsAnyLetters(valid) || containsAnyLetters(ccv)){
            alert("Enter only numbers as cardnumber, vendor and ccv")
        }

        else{
            let res = [...cardNumber].map((d, i) => (i) % 4 == 0 ? ' ' + d : d).join('').trim()

            let cardExist = false;
            cards.forEach(c => {
                if (c.cardNumber == res){
                    cardExist = true;
                }
            });
            if(cardExist){
                alert("card already exists")
            }else{
            const card = {
                fullName: cardHolder,
                vendor: vendor,
                cardNumber: res,
                valid: valid,
                ccv: ccv,
                active: false,
                id: nanoid()
            }
            dispatch(
                cardAdded(card)
            )
            
            navigate("/")
            }
            console.log(vendor.innerText)
        }       
    }

    const handleChange = (id) => {
        let inputs = document.querySelector(`#${id}`).value;
        
        let text = document.querySelector(`#${id}Input`)/* .textContent = inputs; */

        if(text.id == "validInput"){
            let newStr = inputs.slice(0,2) + '/' + inputs.slice(2) 
            text.textContent = newStr;
        }
        else if(text.id == "cardNumberInput"){
            let res = [...inputs].map((d, i) => (i) % 4 == 0 ? ' ' + d : d).join('').trim()
            text.textContent = res;

           
            
        }
        else {
            let text = document.querySelector(`#${id}Input`).textContent = inputs;
        }
        
      };
      
      function containsAnyLetters(str) {
        // 👇️ using the `i` flag
        return /[a-z]/i.test(str);
      }
      
     
      
      if (containsAnyLetters('123')) {
        
        console.log('✅ string contains a letter');
      } 


      

    return ( 
        <>
        <Link to="/">My Cards</Link>
        <div className="wholeCardContainer">
        
        <div className="cardContainer">

        <p className="vendorCardStyle" id="vendorInput"></p>
        <p className="cardNumberCardStyle" id="cardNumberInput"></p>

        <div className="nameValid">

        <div className="n">
        <small>Cardholder Name</small>
        <p>{fullName}</p>
        </div>

        <div className="v">
        <small>Valid Thru</small>
        <p id="validInput"></p>
        </div>
        </div>

        </div>
        </div>
        <section>
            
            <form>
                <label htmlFor="cardNumber">Card Number</label>
                <input 
                className="input"
                type="text"
                id="cardNumber" 
                name="cardNumber"
                onChange={() => {handleChange("cardNumber")}}
                maxLength={16}
                   
                
                />
                
                <label htmlFor="cardHolder">Card Holder Name</label>
                <input 
                disabled
                className="input"
                type="text"
                id="cardHolder" 
                name="cardHolder"
                value={fullName} 
                />

                <label htmlFor="valid">Valid thru</label>
                <input 
                type="text"
                className="input"
                id="valid" 
                name="valid"
                maxLength= {4} 
                onChange={() => {handleChange("valid")}}
                
                />
             
                <label htmlFor="ccv">CCV</label>
                <input 
                className="input"
                type="text"
                id="ccv" 
                name="ccv"
                maxLength= {3} 
                
                />

                <label htmlFor="vendor">Select your Vendor</label>
                <select className="input" name="vendor" id="vendor" onChange={() => {handleChange("vendor")}} defaultValue="" required>
                    <option disabled></option>
                    <option value="mastercard">MasterCard</option>
                    <option value="amx">AMX</option>
                    <option value="visa">Visa</option>
                </select>

                <button className="formBtn" onClick={addCardOnSubmit}>Save Card</button>
                
            </form>

        </section>
        </>
     );
}
export default AddNewCardForm;