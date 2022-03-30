import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "../Styles/Header.module.css";

const Header = () => {
    return(
        <div>
                <div className={Styles.main_Header}>
                    <div className="nav-item">
                        <NavLink to='/home' className={Styles.main_Header_Items} style={ ( {isActive} ) => { return { color: isActive? 'yellow' : 'white'} } }>Products</NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to='/cart' className={Styles.main_Header_Items} style={ ( {isActive} ) => { return { color: isActive? 'yellow' : 'white'} } }>Cart</NavLink>
                    </div>
                </div>
        </div>
    )
}

export default Header;



