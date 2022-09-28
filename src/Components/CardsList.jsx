
import cardsSlice from "../features/cards/cardsSlice";
import { useLocation, useNavigate } from "react-router"
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from "../features/users/usersSlice"
import {useEffect} from "react"
import { Link } from "react-router-dom";

const CardsList = () => {
    const location = useLocation()
    /* console.log(location) */

    const cards = useSelector(state => state.cards.cards)

    /* cards.forEach(element => {
        console.log(element)
    }); */


    const dispatch = useDispatch()
    const {user} = useSelector(state => state.user) 
    

    useEffect(() => {
        if (!user) {
            dispatch(getUser())
        }
        
    }, [])
    console.log(user?.name)
    

    return ( 

        <>
        
            {
                cards.map((card, i) => {
                    
                    return (
                        <div className="eachCard" key={i}>
                            
                            <p>{card.vendor}</p>    
                            <p>{card.cardNumber}</p>
                            
                            <div>
                            <p>{user?.name.first } {user?.name.last}</p>
                            <div>
                            <p>{card.valid}</p>

                            
                            </div>
                            </div>
                            <p>{card.id}</p>
                            



                        </div>




                    )
                })
            }
            <Link to="/create" state={user}>create card</Link>
            
        </>
        
     );
}
 
export default CardsList;