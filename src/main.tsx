import React, { FunctionComponent } from "react";
import { render } from "react-dom";

const App: FunctionComponent = function () {
    return <div>Hello!</div>;
};

render(<App />, document.getElementById("react-app-root"));
