import { Link } from "react-router-dom";
import './header.css'

const Header = (props) => {

    const returnCheckoutString = (list) => {
        if(list && list.length > 0) {
            return `Checkout (${list.length})`;
        } else {
            return "Checkout";
        }
    }

    return (
        <header className="App-header">
            <Link to="/">
                Store
            </Link>
            <Link to="/checkout">
                {
                    returnCheckoutString(props.checkoutList)
                }
            </Link>
        </header>
    );
}

export default Header;