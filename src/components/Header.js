import React from "react";
import { Link } from "react-router-dom";
import Search from "../containers/Search";
import Log from "../containers/Button";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>osmdb</h1>
      </Link>
      {/* <h2 onClick={refreshPage}>osmdb</h2> */}

      <Search />
      <Log/>
    </header>
  );
};

export default Header;
