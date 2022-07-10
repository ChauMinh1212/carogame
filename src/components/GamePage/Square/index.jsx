import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
Square.propTypes = {};

function Square({ onClick, value }) {
  return (
    <div
      className={`square ${value === "x" && "red"} ${value === "o" && "blue"}`}
      onClick={onClick}
    >
      {value}
    </div>
  );
}

export default Square;
