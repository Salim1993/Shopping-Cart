import { Link } from "react-router-dom";
import './header.css'

const Header = () => {

    return (
        <header className="App-header">
            <Link to="/">
                Store
            </Link>
            <Link to="/checkout">
                Checkout
            </Link>
        </header>
    );
}

export default Header;