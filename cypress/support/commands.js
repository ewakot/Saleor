Cypress.Commands.add('waitForLoaderToDisappear', () => 
{
  cy.get('[role="progressbar"]').should('not.exist');
})
