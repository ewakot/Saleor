import { loginPage } from '../pages/loginPage';
import { mainPage } from '../pages/mainPage';
import invalidUser from '../fixtures/invalidUser.json'

const username = Cypress.env('username')
const password = Cypress.env('password')

describe('Login scenarios', () => {
  beforeEach(function () {
    cy.visit('/');
  });

  it('Succesfull login to saleor', () => {
    if (typeof password !== 'string' || !password) {
      throw new Error('Password value is not provided, set using CYPRESS_password=...')
    }

    loginPage.login(username, password);
    cy.waitForLoaderToDisappear();
    mainPage.checkDashboardOpen();
    mainPage.checkSalesBoxVisible();
  })

  it('Unsuccesfull login to saleor', () => {
    loginPage.login(invalidUser.username, invalidUser.password);
    loginPage.checkErrorMessageVisible();
  })
})