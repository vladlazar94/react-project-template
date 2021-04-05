import React from "react";
import { render } from "react-dom";
import { css } from "linaria";

function renderMobileApp(): void {
    render(<App />, document.getElementById("react-app-root"));
}

function App() {
    return <div className={styles}>Mobile App</div>;
}

const styles = css`
    background-color: blue;
    margin-top: calc(1em + 3em);
`;

export { renderMobileApp };
