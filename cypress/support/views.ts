const setDesktopViewPort = () => cy.viewport(1920, 1440);
const setMobileViewPort = () => cy.viewport("iphone-x");

export enum Target {
  Mobile = "mobile",
  Desktop = "desktop"
}

export const setViewPort = (target: Target) => {
  console.info("called")
  target === Target.Mobile
    ? setMobileViewPort()
    : setDesktopViewPort()
}
