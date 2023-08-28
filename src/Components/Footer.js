import React from "react";
import secondLogo from '../assets/Logo/Kasa Footer_LOGO.png';

function Footer() {
    return (
        <footer>
            <div className="div_footerflex">
                <div>
                    <img 
                        src={secondLogo}
                        alt="Logo Kasa"
                    />
                </div>
                <div>
                    <p>© 2020 Kasa. All<br/> rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;