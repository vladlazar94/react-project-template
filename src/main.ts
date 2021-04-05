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
            navigator.serviceWorker.register("/service-worker.js");
        });
    }
}
