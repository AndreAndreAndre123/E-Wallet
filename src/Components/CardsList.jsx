
import cardsSlice from "../features/cards/cardsSlice";
import { useLocation, useNavigate } from "react-router"
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from "../features/users/usersSlice"
import {useEffect} from "react"
import { Link } from "react-router-dom";
import Card from "./Card";
import {cardAdded} from "../features/cards/cardsSlice"

const CardsList = () => {
   
    

    const cards = useSelector(state => state.cards.cards)
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.user) 
    

    useEffect(() => {
        if (!user) {
            dispatch(getUser())
        }
        
       
    }, [])

    useEffect(() => {
        if (cards.length < 1) {
            let newCard = {
                
                vendor: "Bank of André",
                cardNumber: '404 505 101 333 933',
                valid: '0228',
                ccv: '404',
                active: true
            }
            dispatch(cardAdded(newCard))
        }
    }, [])


    
 
    /* console.log(user); */


    return ( 

        <>
        
            {<Link to="/create" state={user}>Add New Card</Link>}
        

        <div className="wholeCardContainer">
    {cards &&  cards.map((card, i) =>{
        return (
        <div key={i} className="cardContainer">
        <Card data={card} user={user} key={i} unikId={i}/>
        </div>
        )
      
    })}
        </div>
    
            
           
            
            
            
        </>
        
     );
}
 
export default CardsList;