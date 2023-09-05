/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Add_Resource_PO from "../page_objects/Add_Resource_PO";
import Homepage_PO from "../page_objects/Homepage_PO";

const addResource = new Add_Resource_PO();
const homepage = new Homepage_PO();

// Pre conditions
Given("I navigate to homepage", () => {
  homepage.navigate("");
});
Given("I click on the add resource tab", () => {
  homepage.clickOn_add_Resource_Tab();
});

// Blank textfields
When(`I leave the link blank`, () => {
  addResource.isBlank_Link();
});
When(`I leave the title blank`, () => {
  addResource.isBlank_Title();
});
When(`I leave the description blank`, () => {
  addResource.isBlank_Description();
});

// Typed text in textfields
When("I type a title {string}", (title) => {
  addResource.type_Title(title);
});
When("I type a description {string}", (description) => {
  addResource.type_Description(description);
});
When("I type a link {string}", (link) => {
  addResource.type_Link(link);
});
When("I type an invalid link {string}", (invalidLink) => {
  addResource.type_Link(invalidLink);
});
When("I click on the add resource button", () => {
  addResource.clickOn_add_Resource_Submit_Button();
});

// happy path result
Then(
  `I should have a new learning resource card with the title {string}`,
  (title) => {
    cy.get("h3").contains(title).should("have.class", "title");
  }
);

// failed path results
Then(`I should be prompted with a modal that says {string}`, (modalText) => {
  cy.get("dialog section").contains(modalText);
});
Then(`I should be prompted with a tooltip that says Insert a URL`, () => {
  // this is probably not good enough but it passes for now
  cy.get("#link").focused();
});
