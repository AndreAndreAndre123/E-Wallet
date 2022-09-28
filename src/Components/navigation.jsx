import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <h1>E-Wallet</h1>
            <div>
                <Link to="/"> home</Link>
                {/* <Link to="/create">create card</Link> */}
            </div>



        </nav>

    )
}

export default Navigation;