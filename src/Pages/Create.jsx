

const CreateCard = () => {
    return ( 
        <>
        <h1>Create Card</h1>

        <form>
            <label htmlFor="vendor">vendor</label>
            <select name="" id="vendor">
                <option value="">masterCard</option>
                <option value="">Visa</option>
                <option value="">Amex</option>
            </select>

            <label htmlFor="card-number">Card Number</label>
            <input type="number" id="card-number" />

            <label htmlFor="card-holder">Card Holder</label>
            <input type="text" id="card-holder" />

            <label htmlFor="expire-month">expire month</label>
            <input type="number" id="expire-month" />

            <label htmlFor="expire-year"></label>
            <input type="number" id="expire-year" />

            <label htmlFor="ccv">CCV</label>
            <input type="number" id="ccv" />

        </form>
        
        
        </>
     );
}
 

export default CreateCard;