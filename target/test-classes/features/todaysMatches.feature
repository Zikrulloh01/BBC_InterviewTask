@smoke
Feature: As a business user, I would like to make a record of all teams which are playing today



  Scenario: Output all team names with a match today. If there are no matches today, output a message to convey this.
    Given The user is on the web page
    Then User needs to collect info about today's matches