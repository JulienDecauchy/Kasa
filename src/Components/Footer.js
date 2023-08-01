import React from "react";
import secondLogo from '../assets/Logo/Kasa Footer_LOGO.png';

function Footer() {
    return (
        <div>
            <div>
                <img 
                    src={secondLogo}
                    alt="Logo Kasa"
                />
            </div>
            <div>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;