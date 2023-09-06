@stored-resources @regression

Feature: Learning Resources App - Stored Resources

    Background: Pre conditions
        Given I navigate to homepage
        And I click on the stored resource tab

    Scenario Outline: Working Delete Resources Button
        When I click on delete button number <number>
        Then The learning resource with the title '<title>' no longer exist

        Examples:
            | number | title          |
            | 1      | Official Guide |
            | 2      | Google         |