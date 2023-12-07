// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// use to grab by data-test-id 
Cypress.Commands.add('getBySel', (selector, ...args) => {
  return cy.get(`[data-testid='${selector}']`, ...args)
});


// Custom command to get response for quotes api to assert against
Cypress.Commands.add('getQuoteResponse', payload => {
  cy.request({
    url: '/api/quote',
    method: 'POST',
    body: payload,
    failOnStatusCode: false
  }).as('quoteResponse');
})