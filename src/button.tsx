import React, { ReactNode } from "react";
import { css } from "linaria";

export function Button(): ReactNode {
    return <button className={styles}>Click me!</button>;
}

const styles = css`
    background-color: red;
`;
