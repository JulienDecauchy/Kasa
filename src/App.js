import "./assets/sass/main.scss";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Accueil from "../src/Pages/page_accueil";
import Apropos from "../src/Pages/page_apropos";
import Logement from "../src/Pages/page_logement";
import Erreur404 from "../src/Pages/page_erreur404";

function App() {
  return (
    <>
      {/* Defining routes path and rendering components as element */}
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Erreur404 />} />
      </Routes>
    </>
  );
}

export default App;