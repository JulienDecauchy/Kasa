import React from "react";
import mainLogo from '../assets/Logo/Kasa Header_LOGO.png';
import { NavLink } from "react-router-dom";
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
                                <NavLink to="/" class="list">
                                    Accueil
                                </NavLink>
                            </li>
                            <li className={splitLocation[1] === "apropos" ? "underline" : ""}>
                                <NavLink to="/apropos" class="list">
                                    A Propos
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;