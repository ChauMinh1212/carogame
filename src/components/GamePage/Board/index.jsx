import React from "react";
import PropTypes from "prop-types";
import Square from "../Square";
import "./style.scss";

Board.propTypes = {};

function Board(props) {
  return (
    <div className="board">
      {props.cells.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => props.onClick(index)}
        />
      ))}
    </div>
  );
}

export default Board;
