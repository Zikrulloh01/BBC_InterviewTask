$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/todaysMatches.feature");
formatter.feature({
  "name": "As a business user, I would like to make a record of all teams which are playing today",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Output all team names with a match today. If there are no matches today, output a message to convey this.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "When user navigates to the web page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.match_steps.when_user_navigates_to_the_web_page()"
});
formatter.result({
  "status": "passed"
});
});