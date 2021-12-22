import React from "react";
import { Routes, Route } from "react-router-dom";

import Peliculas from "../containers/Peliculas";
import SearchPeliculas from "../containers/SearchPeliculas"
import Pelicula from "../containers/Pelicula";

function Main() {
  return (
    <>
      <main>
        <Routes>
          <Route exact path="/" element={<Peliculas />} />

          <Route path="/search/:search" element={<SearchPeliculas />} />

          <Route path="/pelicula/:id" element={<Pelicula />} />
        </Routes>
      </main>
    </>
  );
}

export default Main;
