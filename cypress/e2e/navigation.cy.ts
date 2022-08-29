import Bluebird = require("cypress/types/bluebird");
import {setViewPort, Target} from "../support/views";

const scrollUpwards = {
  deltaY: -66.666666,
  wheelDelta: 120,
  wheelDeltaX: 0,
  wheelDeltaY: 120,
  bubbles: true
}

const scrollDownwards = {
  deltaY: 66.666666,
  wheelDelta: 120,
  wheelDeltaX: 0,
  wheelDeltaY: 120,
  bubbles: true
}

const actAfterSplashScreenHasDisappeared = (): Bluebird<any> => {
  return new Cypress.Promise((resolve, reject) => {
    cy.waitUntil(() => {
      return cy.get('[data-cy="splash-screen"]').should('not.exist').then(() =>
        resolve(true)
      )
    })
  })
}


describe('My First Test', () => {
    /*  before(() => {
        cy.visit("/")
      })*/

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
          cy.document().trigger("mousewheel", scrollUpwards);
          cy.get('[data-cy="heading-statistics-page"]').should("be.visible");
        })
      })
      it('navigates to the page for viewing the history on scrolling downwards', () => {
        actAfterSplashScreenHasDisappeared().then(() => {
          cy.document().trigger("mousewheel", scrollDownwards);
          cy.get('[data-cy="heading-history-page"]').should("be.visible");
        })
      })
      it('navigates to the page for spendings after scrolling upwards three times', () => {
        actAfterSplashScreenHasDisappeared().then(() => {
          cy.document().trigger("mousewheel", scrollUpwards);
          cy.document().trigger("mousewheel", scrollUpwards);
          cy.document().trigger("mousewheel", scrollUpwards);
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
      it('navigates to the page for spendings after swiping downwards three times', () => {
        actAfterSplashScreenHasDisappeared().then(() => {
          cy.get('[data-cy="scroll-navigator"]').realSwipe("toTop", {length: 50, touchPosition: "bottom"})
          cy.get('[data-cy="scroll-navigator"]').realSwipe("toTop", {length: 50, touchPosition: "bottom"})
          cy.get('[data-cy="scroll-navigator"]').realSwipe("toTop", {length: 50, touchPosition: "bottom"})
          cy.get('[data-cy="heading-spending-page"]').should("be.visible");
        })
      })
    }
  }
)
