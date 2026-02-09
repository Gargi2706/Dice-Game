import React from 'react'

export default function Result(props) {
  return (
    <div>
      <button onClick={props.onroll} disabled={props.rolling} alt="dice-img">
        {props.rolling ? "Rolling..." : "Roll Dice"}
      </button>
      <h2>{props.result}</h2>
    </div>
  )
}
