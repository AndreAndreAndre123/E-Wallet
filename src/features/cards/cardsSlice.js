import {createSlice} from "@reduxjs/toolkit";



const cardsSlice = createSlice ({
    name: "cards",
    initialState: {
        cards: []
          
    },
    reducers: {
        cardAdded(state, action) {
            if(state.cards.length >= 4){
                alert("max 4 cards")
                return 
            }else{
                state.cards.push(action.payload)
            }
        },deleteCard : (state, action)=>{
            if(state.cards.length <= 1){
                alert("you have to have 1 card")
                return 
            }else{
                state.cards.splice(action.payload, 1)
            }
            
            
        },activateCard : (state, action)=>{
            state.cards.forEach((card, i) => {
                card.active = false
                if(card.cardNumber === action.payload){
                    card.active = true
                }if(card.active === true){ 
                    let cardIndex = state.cards.indexOf(card)
                    let element = state.cards[cardIndex];
                    state.cards.splice(cardIndex, 1); 
                    state.cards.splice(0, 0 , element);
                }
                
               console.log(card.active, card.cardNumber)

             })
         }
  

    }

})

export const { cardAdded, deleteCard, activateCard } = cardsSlice.actions

export default cardsSlice.reducer