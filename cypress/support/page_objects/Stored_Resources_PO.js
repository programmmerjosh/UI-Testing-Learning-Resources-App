/// <reference types="cypress" />

import Base_PO from "./Base_PO";

class Stored_Resource_PO extends Base_PO {
  elements = {
    delete_Resource_Button: (number) =>
      cy.get(":nth-child(" + number + ") > div > header > .flat"),
  };

  clickOn_delete_Resource_Button(number) {
    this.elements.delete_Resource_Button(number).click();
  }

  confirm_ResourceDeleted(title) {
    cy.get("h3").contains(title).should("not.exist");
  }
}
export default Stored_Resource_PO;
