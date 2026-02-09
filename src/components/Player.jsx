import React from 'react'
import App from '../App'

export default function Player(props) {
  return (
    <div>
         <div className="player row justify-content-center mb-4">
       <div className="section col-12 col-md-5 mb-3">
          <p>{props.name}</p>
          <img
            className="dice-img"
            src={`/dice${props.dicevalue}.png`}
            alt="dice-img"
          />
        </div>
        </div>
    </div>
  )
}
