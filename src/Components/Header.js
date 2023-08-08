import React from "react";
import mainLogo from '../assets/Logo/Kasa Header_LOGO.png';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    return (
        <header>
            <div className="div_headerflex">
                <div className="div_headerlogo">
                    <img 
                        src={mainLogo}
                        alt="Logo Kasa"
                    />
                </div>
                <div>
                    <nav>
                        <ul>
                            <li className={splitLocation[1] === "" ? "underline" : ""}>
                                <Link to="/" className="list">
                                    Accueil
                                </Link>
                            </li>
                            <li className={splitLocation[1] === "apropos" ? "underline" : ""}>
                                <Link to="/apropos" className="list">
                                    A Propos
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;