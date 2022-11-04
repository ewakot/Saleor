export class MainPage {

  constructor() {
    this.dashboard = '#dashboard-app';
    this.salesBox = '[data-test-id="sales-analytics"]';
  }

  checkDashboardOpen() {
    cy.get(this.dashboard).should('be.visible'); 
  }

  checkSalesBoxVisible() {
    cy.get(this.salesBox).should('be.visible'); 
  }
}

export const mainPage = new MainPage();
