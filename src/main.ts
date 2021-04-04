function main(): void {
  if (isMobile()) {
    import("./mobile/render-app").then((m) => m.renderMobileApp());
  } else {
    import("./desktop/render-app").then((m) => m.renderDesktopApp());
  }
}

main();

function isMobile(): boolean {
  return window.matchMedia("only screen and (max-width: 760px)").matches;
}
