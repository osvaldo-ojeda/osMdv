import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <button>
      <Link to="/login">ingresar</Link>
    </button>
  );
};

export default Button;
