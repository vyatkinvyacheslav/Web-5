
Feature: Search a course
     Scenario: Should search by text
         Given user is on "/client/index.php" page
         When user search by "198"
         Then user is on "/client/hall.php" page