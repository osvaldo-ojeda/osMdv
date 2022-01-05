import React, { useEffect } from "react";
import search from "../assets/defaultMovies";

import { useSelector, useDispatch } from "react-redux";
import { getPeliculas } from "../store/peliculas";

import { Link, useParams } from "react-router-dom";

const Peliculas = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const noImg =
    "https://mystickermania.com/cdn/stickers/simpsons-stickers/sticker_2122-512x512.png";
  const searchMovie = param.search;

  let movies = searchMovie ? searchMovie : search;
  useEffect(() => {
    dispatch(getPeliculas(movies));
  }, [dispatch, movies]);

  const pelis = useSelector((state) => state.peliculas);

  return (
    <div>
      {pelis.length > 0
        ? pelis.map((peli, id) => (
            <div key={id}>
              <img
                src={peli.Poster === "N/A" ? noImg : peli.Poster}
                alt={peli.Title}
              />
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
