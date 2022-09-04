import Bluebird = require("cypress/types/bluebird");

export const actAfterSplashScreenHasDisappeared = (): Bluebird<any> => {
  return new Cypress.Promise((resolve, reject) => {
    cy.waitUntil(() => {
      return cy.get('[data-cy="splash-screen"]').should('not.exist').then(() =>
        resolve(true)
      )
    })
  })
}
