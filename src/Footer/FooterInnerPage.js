import React from "react";
import './Footer.scss';
import Logo from "../assets/Svg/Logo";
import Youbetube from "../assets/Svg/Youtube";
import TwitterIcon from "../assets/Svg/TwitterIcon";
import FacebookIcon from "../assets/Svg/FacebookIcon";
import InstagramIcon from "../assets/Svg/InstagramIcon";
import LinkedinIcon from "../assets/Svg/LinkedinIcon";
import ChatIcon from "../assets/Svg/ChatIcon";
const FooterInnerPage = () =>{
    return(
        <>
        <div className="footerinner footer">
            <div className="footer-logo">
                <Logo />
            </div>
            <div className="footer-center-text">
            2020 UnifiedRing. All rights reserved
            </div>

        </div>
        <div className="floating-chat">
        <ChatIcon />
        </div>
        </>
    )
}

export default FooterInnerPage;