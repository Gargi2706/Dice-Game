import { useState } from "react";
import "./App.css";
import Heading from "./components/Heading/Heading";
import Player from "./components/Player";
import Result from "./components/Result";

function App() {
  const [player1, setPlayer1] = useState("1");
  const [player2, setPlayer2] = useState("1");
  const [result, setResult] = useState("");
  const [rolling, setRolling] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [playersReady, setPlayersReady] = useState(false);

  // function handleDice() {
  //   const dice1 = Math.floor(Math.random() * 6 + 1);
  //   const dice2 = Math.floor(Math.random() * 6 + 1);
  //   setPlayer1(dice1);
  //   setPlayer2(dice2);

  //   if (dice1 > dice2) {
  //     setResult("Player 1 Won !!");
  //   } else if (dice2 > dice1) {
  //     setResult("Player 2 Won !!");
  //   } else {
  //     setResult("Draw !!");
  //   }
  // }

  const rollDice = () => {
    if (rolling || gameOver) return;

    setRolling(true);
    setResult("");

    const interval = setInterval(() => {
      setPlayer1(Math.floor(Math.random() * 6) + 1);
      setPlayer2(Math.floor(Math.random() * 6) + 1);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);

      const dice1 = Math.floor(Math.random() * 6) + 1;
      const dice2 = Math.floor(Math.random() * 6) + 1;

      setPlayer1(dice1);
      setPlayer2(dice2);

      if (dice1 > dice2) {
        setResult(`${player1Name} Won !!`);
      } else if (dice2 > dice1) {
        setResult(`${player2Name} Won !!`);
      } else {
        setResult("Draw !!");
      }

      setRolling(false);
      setGameOver(true);
    }, 1200);
  };

        const playAgain = () => {
          setPlayer1(1);
          setPlayer2(1);
          setResult("");
          setGameOver(false);
        };

  const startGame = () => {
    if (!player1Name || !player2Name) {
      alert("Please enter both player names");
      return;
    }
    setPlayersReady(true);
  };

  return (
    <>
      <Heading />

      {!playersReady ? (
        <div className="name-card">
          <h2>Enter Player Names</h2>

          <input
            type="text"
            placeholder="Player 1 Name"
            value={player1Name}
            onChange={(e) => setPlayer1Name(e.target.value)}
          />

          <input
            type="text"
            placeholder="Player 2 Name"
            value={player2Name}
            onChange={(e) => setPlayer2Name(e.target.value)}
          />

          <button onClick={startGame}>Start Game</button>
        </div>
      ) : (
        <>
          <div className="players-container">
            <Player name={player1Name || "Player 1"} dicevalue={player1} />
            <Player name={player2Name || "Player 2"} dicevalue={player2} />
          </div>

          <Result
            onroll={rollDice}
            rolling={rolling}
            result={result}
            gameOver={gameOver}
            onPlayAgain={playAgain}
          />
        </>
      )}
    </>
  );
}

export default App;
