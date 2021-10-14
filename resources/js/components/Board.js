import React, { useState } from "react";
import ReactDOM from "react-dom";

function Board(props) {
    return <div className="board" {...props} />;
}

export default Board;

// if (document.getElementById("board")) {
//     ReactDOM.render(<Board />, document.getElementById("board"));
// }
