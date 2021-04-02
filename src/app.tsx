import React from "react";
import { render } from "react-dom";
import { css } from "linaria";

export function renderApp(): void {
    render(<App />, document.getElementById("react-app-root"));
}

function App() {
    return <div className={styles}>Hello!</div>;
}

const styles = css`
    background-color: pink;
`;
