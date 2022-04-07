$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/articles.feature");
formatter.feature({
  "name": "As a sports user, I would like to read about all articles related to sports",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Use the search option to find all articles related to ‘sports’. Output the first heading and the last heading returned on the page. Scenario:",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the web page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.match_steps.theUserIsOnTheWebPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to \"Search BBC\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.search_step_definitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inputs \"sports\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.search_step_definitions.inputs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.search_step_definitions.clicks_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Print first and last headers",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.search_step_definitions.print_first_and_last_headers()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});