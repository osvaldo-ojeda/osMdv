import React, { useEffect } from "react";
import search from "../assets/defaultMovies";

import { useSelector, useDispatch } from "react-redux";
import { getPeliculas } from "../store/peliculas";

import { Link } from "react-router-dom";

const Peliculas = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPeliculas(search));
  }, [dispatch]);

  const pelis = useSelector((state) => state.peliculas);
  return (
    <div>
      {pelis.length > 0
        ? pelis.map((peli, id) => (
            <div key={id}>
              <img src={peli.Poster} alt={peli.Title} />
              <h3>{peli.Title}</h3>
              <Link to={`/pelicula/${peli.imdbID}`}>
                <h2>{peli.imdbID}</h2>
              </Link>
            </div>
          ))
        : null}
    </div>
  );
};

export default Peliculas;
