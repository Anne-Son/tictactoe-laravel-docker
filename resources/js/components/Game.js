import React, { Component } from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import Square from "./Square";

class Game extends Component {
    constructor() {
        super();
        this.state = {
            board: ["", "", "", "", "", "", "", "", ""],
        };
    }

    clickHandle(index) {
        let player_turn = this.state.player_turn;
        let board = this.state.board;
        board[index] = player_turn;
        player_turn = player_turn == "X" ? "O" : "X";
        console.log("player_turn", player_turn);
        this.setState({
            player_turn: player_turn,
            board: board,
        });
    }

    render() {
        return (
            <main>
                <div className="Game">
                    <div className="board">
                        {this.state.board.map((square, index) => {
                            return (
                                <div
                                    onClick={() => this.clickHandle(index)}
                                    className="square"
                                >
                                    {square}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
        );
    }
}

export default Game;

if (document.getElementById("game")) {
    ReactDOM.render(<Game />, document.getElementById("game"));
}
