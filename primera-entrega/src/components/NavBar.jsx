import React from "react";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="stickyNav">
            <nav>
                <Link to={"#"}><img className="apol-logo" src="/img/apol-logo-white-cut-trans.png" alt="logo"/></Link>
                <div>
                    <li>
                        <NavLink to={""}>Home</NavLink>
                        <NavLink to={""}>Store</NavLink>
                        <NavLink to={""}>Contacto</NavLink>
                    </li>
                </div>
            </nav>
            <CartWidget />
        </div>
    );
}

export default NavBar;