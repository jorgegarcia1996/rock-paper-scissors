import React, { Component } from "react";
import "./Game.css";
import { Hand } from "..";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

class Game extends Component {
  state = {
    playerHand: "",
    cpuHand: "",
    winner: ""
  };

  randomHandType() {
    switch (Math.floor(Math.random() * 3 + 1)) {
      case 1:
        return "hand-scissors";
      case 2:
        return "hand-rock";
      case 3:
        return "hand-paper";
      default:
        break;
    }
  }

  changeHand = hand => {
    this.setState({
      playerHand: hand,
      cpuHand: this.randomHandType(),
    },
    () => this.setState({
      winner: this.setWinner()
    })
    );
  };

  setWinner () {
    let winnerMsg = "";
    const {
      playerHand, cpuHand
    } = this.state;
    if (playerHand === cpuHand) {
      winnerMsg = "Draw!!!";
    } else if(playerHand === "hand-scissors" & cpuHand === "hand-paper" ||
              playerHand === "hand-paper" & cpuHand === "hand-rock" ||
              playerHand === "hand-rock" & cpuHand === "hand-scissors") {
      winnerMsg = "You Win!!!";
    } else {
      winnerMsg = "You Lose!!!";
    }
    return winnerMsg;
  };

  render() {
    return (
      <div className="Game">
        <h1>Select hand</h1>
        <button
          className="scissors hand-select"
          onClick={i => this.changeHand("hand-scissors")}
        >
          <Hand handType="hand-scissors" />
        </button>
        <button
          className="rock hand-select"
          onClick={i => this.changeHand("hand-rock")}
        >
          <Hand handType="hand-rock" />
        </button>
        <button
          className="paper hand-select"
          onClick={i => this.changeHand("hand-paper")}
        >
          <Hand handType="hand-paper" />
        </button>
        <div className="player-result">
          <h1>Player</h1>
          <Hand handType={this.state.playerHand} />
        </div>
        <div className="cpu-result">
          <h1>CPU</h1>
          <Hand handType={this.state.cpuHand} />
        </div>
        <div className="winner">
          <h2>{this.state.winner}</h2>
        </div>
      </div>
    );
  }
}

export default Game;
