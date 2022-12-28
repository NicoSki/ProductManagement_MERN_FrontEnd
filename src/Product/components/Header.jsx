import React from "react";
import './Header.css';
import nav from '../../images/nav.svg';
import nav1 from '../../images/nav1.svg';

const Header = () => {
    return(
        <nav>
            <img src={nav} alt="img" id="img" />
                <h1 id="prod">PRODUCTS MANAGEMENT</h1>
            <img src={nav1} alt="img" id="img" />
        </nav>
    );
}

export default Header;