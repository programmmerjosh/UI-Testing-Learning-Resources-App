@add-resource @regression

Feature: Learning Resources App - Add Resource

    Background: Pre conditions
        Given I navigate to homepage
        And I click on the add resource tab

    Scenario: Valid Resource To Add
        When I type a title
        And I type a description
        And I type a link
        And I click on the add resource button
        Then I should have a new learning resource card with the title "Josh Blog"