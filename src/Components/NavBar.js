import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
        <ul>
          <Link to="/" class="list">
            Accueil
          </Link>
          <Link to="/apropos" class="list">
            A Propos
          </Link>
          <Link to="/logement" class="list">
            Logement
          </Link>
        </ul>
      </nav>
    );
};

export default NavBar;