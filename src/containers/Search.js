import React,{ useState } from "react";
 import {useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPeliculas } from "../store/peliculas";

const Search = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [search, setSearch] = useState("");
  const [resultSearch, setResultSearch] = useState({});

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setResultSearch({ error: "" });
    // if (location !== "/") {
    //   history("/");
    //
  };
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
      <p>{resultSearch.error ? resultSearch.error : ""}</p>
    </form>
  );
};

export default Search;
