import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

HomePage.propTypes = {};

function HomePage({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { player1, player2 } = e.target.elements;
    if (player1.value == "" || player2.value == "") {
      alert("Enter your name to play!");
    } else {
      onSubmit({
        player1: player1.value,
        player2: player2.value,
      });
    }
  };
  return (
    <div className="home">
      <h1>Welcome to my Caro game</h1>
      <p>Enter your name to play!</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Player 1" id="player1" />
        <input type="text" placeholder="Player 2" id="player2" />
        <button type="submit">Start</button>
      </form>
    </div>
  );
}

export default HomePage;
