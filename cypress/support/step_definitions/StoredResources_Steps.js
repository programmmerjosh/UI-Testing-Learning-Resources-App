/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Stored_Resources_PO from "../page_objects/Stored_Resources_PO";
import Homepage_PO from "../page_objects/Homepage_PO";

const storedResources = new Stored_Resources_PO();
const homepage = new Homepage_PO();

Given("I click on the stored resource tab", () => {
  homepage.clickOn_stored_Resource_Tab();
});

// action(s)
When(`I click on delete button number {int}`, (number) => {
  storedResources.clickOn_delete_Resource_Button(number);
});

// happy path result
Then(
  `The learning resource with the title {string} no longer exist`,
  (title) => {
    storedResources.confirm_ResourceDeleted(title);
  }
);
