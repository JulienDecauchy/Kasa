import React from "react";
import mainLogo from '../assets/Logo/Kasa Header_LOGO.png';
import { Link } from "react-router-dom";

function Header() {
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
                            <li>
                                <Link to="/" class="list">
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link to="/apropos" class="list">
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