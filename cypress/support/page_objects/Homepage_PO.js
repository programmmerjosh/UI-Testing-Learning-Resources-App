/// <reference types="cypress" />

import Base_PO from "./Base_PO";

class Homepage_PO extends Base_PO {
  elements = {
    add_Resource_Tab: () => cy.get("#add-resource-tab"),
    stored_Resource_Tab: () => cy.get("#stored-resource-tab"),
  };

  navigateToHomepage() {
    super.navigate("");
  }

  clickOn_add_Resource_Tab() {
    this.elements.add_Resource_Tab().click();
  }

  clickOn_stored_Resource_Tab() {
    this.elements.stored_Resource_Tab().click();
  }
}
export default Homepage_PO;
