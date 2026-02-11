import React from "react";
import App from "../App";

export default function Player(props) {
  return (
    <div>
     
        <div className="section text-center">
          <p>{props.name}</p>
          <img
            className="dice-img"
            src={`/dice${props.dicevalue}.png`}
            alt="dice-img"
          />
        </div>
      </div>
  
  );
}
