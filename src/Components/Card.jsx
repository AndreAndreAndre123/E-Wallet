
import cardsSlice from "../features/cards/cardsSlice";
import { useLocation, useNavigate } from "react-router"
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from "../features/users/usersSlice"
import {useEffect} from "react"
import { Link } from "react-router-dom";
import {cardAdded, deleteCard, activateCard} from "../features/cards/cardsSlice"

const Card = ({data, user, unikId }) => {

    const dispatch = useDispatch()
    
    

const cards = useSelector(state => state.cards.cards)

    let { cardNumber, valid, vendor } = data
    
    return (
        <>
        <p className="vendorCardStyle">{vendor}</p>

        {!data?.active && 
            <div className="btnDiv">
                <button className="btn" onClick={()=>{dispatch(deleteCard(unikId))}}>delete card</button>
                <button className="btn" onClick={()=>{dispatch(activateCard(data.cardNumber))}}>activate card</button>
            </div>}

        {
            data?.active && 
            <small className="cardIsActive">Card is Active</small>

        }
            <p className="cardNumberCardStyle">{cardNumber}</p>

                <div className="nameValid">
                    <div className="n">
                        <small>Cardholder Name</small>
                        <p className="nameCardStyle">{user && user.name.first + " " + user.name.last}</p>
                    </div>

                    <div className="v">
                        <small>Valid Thru</small>
                        <p className="validCardStyle">{valid.slice(0,2) + '/' + valid.slice(2)}</p>
                    </div>
                </div>
        </>
      );
}
 
export default Card;