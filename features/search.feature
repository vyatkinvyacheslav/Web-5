
Feature: Booking a movie ticket
     Scenario: Should search by pages
         Given user is on "/index.php" page
         When user search by "a:nth-child(2) > span.page-nav__day-week"
         When user search by "[data-seance-id='198']"
         Then user is on "https://qamid.tmweb.ru/client/hall.php" page
         When user search by ".buying-scheme__chair_standart"
         When user search by ".acceptin-button"
         When user search by ".acceptin-button"
         Then user is on "https://qamid.tmweb.ru/client/ticket.php" page

