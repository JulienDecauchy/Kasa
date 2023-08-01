import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Accueil from "../src/Pages/page_accueil";
import Apropos from "../src/Pages/page_apropos";
import Logement from "../src/Pages/page_logement";
import Erreur404 from "../src/Pages/page_erreur404";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      {/* Defining routes path and rendering components as element */}
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="*" element={<Erreur404 />} />
      </Routes>
    </>
  );
}

export default App;