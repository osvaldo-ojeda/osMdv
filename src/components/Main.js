import React from "react";
import { Routes, Route } from "react-router-dom";

import Peliculas from "../containers/Peliculas";
import Pelicula from "../containers/Pelicula";
import Login from "../containers/Login";

function Main() {
  return (
    <>
      <main>
        <Routes>
          <Route exact path="/" element={<Peliculas />} />

          <Route path="/search/:search" element={<Peliculas />} />

          <Route path="/pelicula/:id" element={<Pelicula />} />
          
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </>
  );
}

export default Main;
