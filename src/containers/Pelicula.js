import React, {useEffect } from "react";

import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { getPelicula } from "../store/peliculas";

const Pelicula = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const search = param.id;

  useEffect(() => {
    dispatch(getPelicula(search));
  }, [dispatch,search]);

  const pelicula = useSelector((state) => state.peliculas);

  return (
    <div>
      <h2>{pelicula.Title}</h2>
      <img src={pelicula.Poster} alt={pelicula.Title} />
    </div>
  );
};

export default Pelicula;
