Feature: As a sports user, I would like to read about all articles related to sports


  @wip
  Scenario: Use the search option to find all articles related to ‘sports’. Output the first heading and the last heading returned on the page. Scenario:
    Given The user is on the web page
    When User navigates to "Search BBC" page
    And inputs "sports"
    And Clicks search button
    Then Print first and last headers
