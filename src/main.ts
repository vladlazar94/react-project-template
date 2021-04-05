import { css } from "linaria";

function main(): void {
    registerServiceWorker();

    if (isMobile()) {
        import("./mobile/render-app").then(m => m.renderMobileApp());
    } else {
        import("./desktop/render-app").then(m => m.renderDesktopApp());
    }
}

main();

function isMobile(): boolean {
    return window.matchMedia("only screen and (max-width: 760px)").matches;
}

function registerServiceWorker() {
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker.register("/service-worker.js").catch(console.error);
        });
    }
}

export const AppShellCss = css`
    /* stylelint-disable */
    :global() {
        /* stylelint-enable */
        body {
            background-color: lightblue;
        }

        @media (prefers-color-scheme: dark) {
            body {
                background-color: darkblue;
            }
        }
    }
`;
