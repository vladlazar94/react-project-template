import React, { FunctionComponent } from "react";
import { render } from "react-dom";

export function renderApp() {
    render(<App />, document.getElementById("react-app-root"));
}

const App: FunctionComponent = function () {
    return <div>Hello!</div>;
};
