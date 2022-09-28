import {createSlice} from "@reduxjs/toolkit";



const cardsSlice = createSlice ({
    name: "cards",
    initialState: {
        cards: [{
            fullName: "andre king",
            cardNumber: "4539 0400 1221 4442",
            valid: "27/28",
            ccv: "111",
            vendor: "Mastercard",
            active: true,
            id: "1"
            
          }]
          
    },
    reducers: {
        cardAdded(state, action) {
            if([...state.cards].length >= 4){
                alert("max 4 cards")
                return 
            }else{
                state.cards.push(action.payload)
            }
        },
        deleteCard(state, action) {
            let cardIndex = state.cards.findIndex(card => {
                if (card.cardNumber === action.payload.cardNumber) {
                    return card
                }
            })
            state.cards.splice(cardIndex, 1)
        }

    }

})

export const { cardAdded, deleteCard } = cardsSlice.actions

export default cardsSlice.reducer