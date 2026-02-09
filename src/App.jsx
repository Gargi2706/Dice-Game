import { useState } from "react";
import "./App.css";
import Heading from "./components/Heading ";
import Player from "./components/Player";
import Result from "./components/Result";

function App() {
  const [player1, setPlayer1] = useState("1");
  const [player2, setPlayer2] = useState("1");
  const [result, setResult] = useState("");
  const [rolling, setRolling] = useState(false);

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
    if (rolling) return;

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
        setResult("Player 1 Won !!");
      } else if (dice2 > dice1) {
        setResult("Player 2 Won !!");
      } else {
        setResult("Draw !!");
      }

      setRolling(false);
    }, 1200);
  };

  return (
    <>
      <Heading />

      <Player name="Player 1" dicevalue={player1} />
      <Player name="Player 2" dicevalue={player2} />

      <Result  onroll = {rollDice} rolling ={rolling} result={result}  />

      
    </>
  );
}

export default App;
