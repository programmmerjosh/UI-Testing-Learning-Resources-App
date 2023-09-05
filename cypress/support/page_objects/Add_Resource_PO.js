/// <reference types="cypress" />

import Base_PO from "./Base_PO";

class Add_Resource_PO extends Base_PO {
  elements = {
    // comment_TextField: () => cy.get('textarea[name="message"]'),
    add_Resource_Button: () => cy.get("#submit-add-resource-button"),
    // submission_Header_Text: () => cy.xpath("//h1 | //body"),
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

  clickOn_add_Resource_Submit_Button() {
    this.elements.add_Resource_Button().click();
  }
}
export default Add_Resource_PO;
