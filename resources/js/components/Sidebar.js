import React from "react";
import ReactDOM from "react-dom";

function Sidebar() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card sidebar p-xl-4">
                        <button class="cntBtn">Connect</button>
                        <button class="crtBtn">Create</button>
                        <label htmlFor="">Available Games</label>
                        <ul>
                            <li>no games</li>
                        </ul>
                        <button className="jnBtn">Join</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;

if (document.getElementById("sidebar")) {
    ReactDOM.render(<Sidebar />, document.getElementById("sidebar"));
}
