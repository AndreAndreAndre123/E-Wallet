import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "../features/cards/cardsSlice"
import userReducer from "../features/users/usersSlice";


export const store = configureStore ({
    reducer:{
        cards: cardsReducer,
        user: userReducer,

    }

})