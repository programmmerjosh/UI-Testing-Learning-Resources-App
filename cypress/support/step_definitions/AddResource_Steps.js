/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Add_Resource_PO from "../page_objects/Add_Resource_PO";
import Homepage_PO from "../page_objects/Homepage_PO";

const addResource = new Add_Resource_PO();
const homepage = new Homepage_PO();

Given("I navigate to homepage", () => {
  homepage.navigate("");
});

Given("I click on the add resource tab", () => {
  homepage.clickOn_add_Resource_Tab();
});

When(
  "I type a title {string} and a description {string}",
  (title, description) => {
    addResource.type_Title(title);
    addResource.type_Description(description);
  }
);

When("I type a link {string}", (link) => {
  addResource.type_Link(link);
});

When("I click on the add resource button", () => {
  addResource.clickOn_add_Resource_Submit_Button();
});

Then(
  `I should have a new learning resource card with the title {string}`,
  (title) => {
    cy.get("h3").contains(title).should("have.class", "title");
  }
);
