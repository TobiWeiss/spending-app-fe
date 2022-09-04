import {setViewPort, Target} from "../support/views";
import {actAfterSplashScreenHasDisappeared} from "../support/helpers";

const scrollUpwardsEvent = {
  deltaY: -66.666666,
  wheelDelta: 120,
  wheelDeltaX: 0,
  wheelDeltaY: 120,
  bubbles: true
}

const scrollDownwardsEvent = {
  deltaY: 66.666666,
  wheelDelta: 120,
  wheelDeltaX: 0,
  wheelDeltaY: 120,
  bubbles: true
}


describe('the scroll and swipe based navigation', () => {
    beforeEach(() => {
      cy.visit("/")
      setViewPort(Cypress.env("target"))
    });

    it('navigates to the page for entering spendings on init', () => {
      actAfterSplashScreenHasDisappeared().then(() => {
        cy.get('[data-cy="heading-spending-page"]').should("be.visible");
      })

    })
    if (Cypress.env("target") === Target.Desktop) {
      it('navigates to the page for viewing statistics on scrolling upwards', async () => {
        actAfterSplashScreenHasDisappeared().then(() => {
          cy.document().trigger("mousewheel", scrollUpwardsEvent);
          cy.get('[data-cy="heading-statistics-page"]').should("be.visible");
        })
      })
      it('navigates to the page for viewing the history on scrolling downwards', () => {
        actAfterSplashScreenHasDisappeared().then(() => {
          cy.document().trigger("mousewheel", scrollDownwardsEvent);
          cy.get('[data-cy="heading-history-page"]').should("be.visible");
        })
      })
      it('navigates to the page for spendings after scrolling upwards three times', () => {
        actAfterSplashScreenHasDisappeared().then(() => {
          cy.document().trigger("mousewheel", scrollUpwardsEvent);
          cy.document().trigger("mousewheel", scrollUpwardsEvent);
          cy.document().trigger("mousewheel", scrollUpwardsEvent);
          cy.get('[data-cy="heading-spending-page"]').should("be.visible");
        })
      })
    }
    if (Cypress.env("target") === Target.Mobile) {
      it('navigates to the page for viewing statistics on swiping downwards', () => {
        actAfterSplashScreenHasDisappeared().then(() => {
          cy.get('[data-cy="scroll-navigator"]').realSwipe("toBottom", {length: 50, touchPosition: "top"})
          cy.get('[data-cy="heading-statistics-page"]').should("be.visible");
        })
      })
      it('navigates to the page for viewing the history on swiping upwards', () => {
        actAfterSplashScreenHasDisappeared().then(() => {
          cy.get('[data-cy="scroll-navigator"]').realSwipe("toTop", {length: 50, touchPosition: "bottom"})
          cy.get('[data-cy="heading-history-page"]').should("be.visible");
        })
      })
      it('navigates to the page for spendings after swiping upwnwards three times', () => {
        actAfterSplashScreenHasDisappeared().then(() => {
          cy.get('[data-cy="scroll-navigator"]').realSwipe("toTop", {length: 150, touchPosition: "center"})
          cy.get('[data-cy="heading-history-page"]').should("be.visible");
          cy.get('[data-cy="heading-spending-page"]').should("not.exist");
          cy.get('[data-cy="scroll-navigator"]').realSwipe("toTop", {length: 150, touchPosition: "center"})
          cy.get('[data-cy="heading-statistics-page"]').should("be.visible");
          cy.get('[data-cy="heading-history-page"]').should("not.exist");
          cy.get('[data-cy="scroll-navigator"]').realSwipe("toTop", {length: 150, touchPosition: "center"})
          cy.get('[data-cy="heading-spending-page"]').should("be.visible");
          cy.get('[data-cy="heading-history-page"]').should("not.exist");
        })
      })
    }
  }
)
