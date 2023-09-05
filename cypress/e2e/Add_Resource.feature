@add-resource @regression

Feature: Learning Resources App - Add Resource

    Background: Pre conditions
        Given I navigate to homepage
        And I click on the add resource tab

    Scenario Outline: Valid Resources To Add
        And I type a title '<title>'
        And I type a description '<description>'
        And I type a link '<link>'
        And I click on the add resource button
        Then I should have a new learning resource card with the title '<title>'

        Examples:
            | title            | description                  | link                                                       |
            | Josh Blog        | Blog Website created by Josh | https://www.think-write-grow.com                           |
            | Udemy            | My courses on Udemy.com      | https://www.udemy.com/home/my-courses/learning/            |
            | Notes In Spanish | Notes in Spanish podcast     | https://www.notesinspanish.com/category/beginners-podcast/ |

    Scenario Outline: Invalid Resources To Add - Omit URL
        And I type a title '<title>'
        And I type a description '<description>'
        And I leave the link blank
        And I click on the add resource button
        Then I should be prompted with a modal that says '<modalText>'

        Examples:
            | title            | description                              | modalText                                          |
            | Josh Blog        | Blog Website created by Josh without url | Unfortunately, at least one input value is invalid |
            | Udemy            | My courses on Udemy.com without url      | Unfortunately, at least one input value is invalid |
            | Notes In Spanish | Notes in Spanish podcast without url     | Unfortunately, at least one input value is invalid |

    Scenario Outline: Invalid Resources To Add - Omit Title
        And I leave the title blank
        And I type a description '<description>'
        And I type a link '<link>'
        And I click on the add resource button
        Then I should be prompted with a modal that says '<modalText>'

        Examples:
            | description                                | link                                                       | modalText                                          |
            | Blog Website created by Josh without title | https://www.think-write-grow.com                           | Unfortunately, at least one input value is invalid |
            | My courses on Udemy.com without title      | https://www.udemy.com/home/my-courses/learning/            | Unfortunately, at least one input value is invalid |
            | Notes in Spanish podcast without title     | https://www.notesinspanish.com/category/beginners-podcast/ | Unfortunately, at least one input value is invalid |

    Scenario Outline: Invalid Resources To Add - Omit Description
        And I type a title '<title>'
        And I leave the description blank
        And I type a link '<link>'
        And I click on the add resource button
        Then I should be prompted with a modal that says '<modalText>'

        Examples:
            | title            | link                                                       | modalText                                          |
            | Josh Blog        | https://www.think-write-grow.com                           | Unfortunately, at least one input value is invalid |
            | Udemy            | https://www.udemy.com/home/my-courses/learning/            | Unfortunately, at least one input value is invalid |
            | Notes In Spanish | https://www.notesinspanish.com/category/beginners-podcast/ | Unfortunately, at least one input value is invalid |

    Scenario Outline: Invalid Resources To Add - Insert text instead of URL
        And I type a title '<title>'
        And I type a description '<description>'
        And I type an invalid link '<invalidLink>'
        And I click on the add resource button
        Then I should be prompted with a tooltip that says Insert a URL

        Examples:
            | title            | description                                   | invalidLink      |
            | Josh Blog        | Blog Website created by Josh with invalid URL | Random text here |
            | Udemy            | My courses on Udemy.com with invalid URL      | oneLongWordHere  |
            | Notes In Spanish | Notes in Spanish podcast with invalid URL     | a                |