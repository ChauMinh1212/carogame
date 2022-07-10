import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import { useState } from "react";
import GamePage from "./components/GamePage";

function App() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [player, setPlayer] = useState({});
  const handleOnSubmit = (value) => {
    setPlayer(value);
    setIsSubmit(true);
  };
  return (
    <div className="App">
      {!isSubmit ? (
        <HomePage onSubmit={handleOnSubmit} />
      ) : (
        <GamePage player={player} />
      )}
    </div>
  );
}

export default App;
