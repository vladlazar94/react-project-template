import React, { useState } from "react";
import { render } from "react-dom";
import { css } from "linaria";

export function renderDesktopApp(): void {
    render(<App />, document.getElementById("react-app-root"));
}

function App() {
    const [state, setState] = useState(0);

    return (
        <div className={styles}>
            Desktop App
            <span>{state}</span>
            <button onClick={() => setState(state + 1)}>Click</button>
        </div>
    );
}

const styles = css`
    background-color: darkorange;

    @media (prefers-color-scheme: dark) {
        background-color: pink;
    }
`;
