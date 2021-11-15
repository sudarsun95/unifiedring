import React from "react";
import Logo from '../assets/Svg/Logo';
import PhoneIcon from '../assets/Svg/PhoneIcon';
import './Header.scss';
const Header = () =>{
    return(
<header className="HeaderBg">
        <div className="container-fluid">
        <div className="Header">
           <Logo />
           <div className="HeaderRightSection">
            <PhoneIcon />
           </div>
           </div>

            </div>
            </header>
    )
}

export default Header;