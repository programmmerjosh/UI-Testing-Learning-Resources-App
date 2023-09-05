/// <reference types="cypress" />

import Base_PO from "./Base_PO";

class Add_Resource_PO extends Base_PO {
  elements = {
    add_Resource_Button: () => cy.get("#submit-add-resource-button"),
  };

  type_Title(title) {
    cy.get("#title").type(title);
  }
  type_Description(description) {
    cy.get("#description").type(description);
  }
  type_Link(link) {
    cy.get("#link").type(link);
  }

  isBlank_Title() {
    cy.get("#title").should("be.empty");
  }
  isBlank_Description() {
    cy.get("#description").should("be.empty");
  }
  isBlank_Link() {
    cy.get("#link").should("be.empty");
  }

  clickOn_add_Resource_Submit_Button() {
    this.elements.add_Resource_Button().click();
  }
}
export default Add_Resource_PO;
