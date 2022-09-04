import {setViewPort, Target} from "../support/views";
import {actAfterSplashScreenHasDisappeared} from "../support/helpers";


describe('the menu', () => {

    beforeEach(() => {
      cy.visit("/")
      setViewPort(Cypress.env("target"))
      cy.eyesOpen({
        appName: 'Spending App',                       // The name of the app under test
        testName: Cypress.currentTest.title,        // The name of the test case
      })
    });

    if (Cypress.env("target") === Target.Desktop) {
      it('renders the menu on the right side of the view', () => {
        cy.eyesCheckWindow({
          tag: "Initial Page",
          target: 'window',
          fully: true
        });
      })

    }
    if (Cypress.env("target") === Target.Mobile) {
      it('navigates to the page for viewing statistics on swiping downwards', () => {
        actAfterSplashScreenHasDisappeared().then(() => {
          cy.get('[data-cy="scroll-navigator"]').realSwipe("toBottom", {length: 50, touchPosition: "top"})
          cy.get('[data-cy="heading-statistics-page"]').should("be.visible");
        })
      })
    }
  }
)
