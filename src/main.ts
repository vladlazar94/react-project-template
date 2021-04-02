async function main() {
    const { renderApp } = await import("./app");

    renderApp();
}

main();
