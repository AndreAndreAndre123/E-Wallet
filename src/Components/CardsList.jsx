import { useSelector } from "react-redux"

const CardsList = () => {

    const cards = useSelector(state => state.cards)

    
    

    return ( 

        <>
        {
            cards.map(card => {
                return (
                    <div key={card.id} id={card.id}>
                        <h1>{card.title}</h1>
                        <h2>{card.cardNumber}</h2>
                    </div>
                )
            })
        }
        
        </>
        
     );
}
 
export default CardsList;