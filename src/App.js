import "./App.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Accueil from "../src/Pages/page_accueil";
import Apropos from "../src/Pages/page_apropos";
import Logement from "../src/Pages/page_logement";
import Erreur404 from "../src/Pages/page_erreur404";

function App() {
  return (
    <div className="container">
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

      {/* Defining routes path and rendering components as element */}
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="*" element={<Erreur404 />} />
      </Routes>
    </div>
  );
}

export default App;