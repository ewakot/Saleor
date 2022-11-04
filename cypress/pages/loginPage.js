export class LoginPage {

  constructor() {
    this.emailInput = '[data-test-id="email"]';
    this.passwordInput = '[data-test-id="password"]';
    this.submitButton = '[data-test-id="submit"]';
    this.errorMessage = '[data-test-id="login-error-message"]';
  }

  login(username, password) {
    cy.get(this.emailInput).clear().type(username);
    cy.get(this.passwordInput).clear().type(password);
    cy.get(this.submitButton).click();
  }

  checkErrorMessageVisible() {
    cy.get(this.errorMessage).should('be.visible');
  }
}

export const loginPage = new LoginPage();
