import React from "react";
import ReactDOM from "react-dom";

function Title() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            Multiplayer Tic Tac Toe
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Title;

if (document.getElementById("title")) {
    ReactDOM.render(<Title />, document.getElementById("title"));
}
