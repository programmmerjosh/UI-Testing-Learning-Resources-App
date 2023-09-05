@add-resource @regression

Feature: Learning Resources App - Add Resource

    Background: Pre conditions
        Given I navigate to homepage
        And I click on the add resource tab

    Scenario Outline: Valid Resources To Add
        And I type a title '<title>' and a description '<description>'
        And I type a link '<link>'
        And I click on the add resource button
        Then I should have a new learning resource card with the title '<title>'

        Examples:
            | title            | description                  | link                                                       |
            | Josh Blog        | Blog Website created by Josh | https://www.think-write-grow.com                           |
            | Udemy            | My courses on Udemy.com      | https://www.udemy.com/home/my-courses/learning/            |
            | Notes In Spanish | Notes in Spanish podcast     | https://www.notesinspanish.com/category/beginners-podcast/ |
