import React, { useState } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { getPeliculas } from "../store/peliculas";

const Header = () => {
  const localtion = useLocation();
  console.log("location", localtion.pathname);

  const history = useNavigate();

  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [resultSearch, setResultSearch] = useState({});

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setResultSearch({ error: "" });
    // if (location !== "/") {
    //   history("/");
    // }
  };

  // const refreshPage = () => {
  //   dispatch(getPeliculas(pelis));
  // };

  function refreshPage() {
    history("");
    window.location.reload(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
    if (!search) {
      return setResultSearch({ error: "escribialgo" });
    }

    dispatch(getPeliculas(search))
      .then((data) => {
        if (!data.payload) {
          setResultSearch({
            error: "noseencontropeli"
          });
        }
      })
      .then(() => history(`/search/${search}`));
  };

  return (
    <header>
      <Link to="/">
        <h1>osmdb</h1>
      </Link>
      {/* <h2 onClick={refreshPage}>osmdb</h2> */}

      <form onSubmit={handleSubmit}>
        <input
          onBlur={() => {
            setResultSearch({ error: "" });
          }}
          placeholder="buscar"
          type="text"
          value={search}
          onChange={handleSearchChange}
        ></input>
      </form>
      <p>{resultSearch.error ? resultSearch.error : ""}</p>
    </header>
  );
};

export default Header;
