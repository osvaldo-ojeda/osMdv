import React, { useEffect } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getPeliculas } from "../store/peliculas";

const SearchPeliculas = () => {
  const localtion = useLocation();
  const history = useNavigate();

  const dispatch = useDispatch();
  const param = useParams();
  //   console.log("soy el param", param.search);
  const search = param.search;

  useEffect(() => {
    dispatch(getPeliculas(search))
    // .then((data) => {
    //   if (!data.payload) {
    //     history(localtion.pathname);

    //     //   setResultSearch({
    //     //     error: "noseencontropeli"
    //     //   });
    //   }
    // });
  }, [dispatch, search]);

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

export default SearchPeliculas;
