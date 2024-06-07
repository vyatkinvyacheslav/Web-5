
Feature: Search a course
     Scenario: Should search by text
         Given user is on "https://qamid.tmweb.ru/client/index.php" page
         When user search by "a:nth-child(2) > span.page-nav__day-week"
         When user search by "[data-seance-id='198']"
         Then user is on "https://qamid.tmweb.ru/client/hall.php" page