$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/articles.feature");
formatter.feature({
  "name": "As a sports user, I would like to read about all articles related to sports",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "Use the search option to find all articles related to ‘sports’. Output the first heading and the last heading returned on the page. Scenario:",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
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
formatter.uri("file:src/test/resources/features/signIn.feature");
formatter.feature({
  "name": "As a QA, I would like to verify all negative scenarios for login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it  Scenario:",
  "description": "  contains is as expected.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "The user is on the web page",
  "keyword": "Given "
});
formatter.step({
  "name": "User navigates to \"Sign in\" page",
  "keyword": "When "
});
formatter.step({
  "name": "User enters negative \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Verify error message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "esnoden0@cam.ac.uk",
        "CFF9nCCL"
      ]
    },
    {
      "cells": [
        "cboothroyd1@nymag.com",
        "iFWu5kLBsqM"
      ]
    },
    {
      "cells": [
        "lfender2@github.com",
        "jdhssjUmuZDeE4"
      ]
    },
    {
      "cells": [
        "plubbock3@time.com",
        "XabKWi4JYsdsad"
      ]
    },
    {
      "cells": [
        "chitter4@guardian.co.uk",
        "X8Kwdf1rP9dg"
      ]
    },
    {
      "cells": [
        "uminshall6@mlb.com",
        "1oyLQUXJTL"
      ]
    },
    {
      "cells": [
        "abowcock5@chronoengine.com",
        "yAT7gsffKNH"
      ]
    },
    {
      "cells": [
        "lsime8@desdev.cn",
        "sU1O45CYaMKB"
      ]
    },
    {
      "cells": [
        "redes9@samsung.com",
        "FQPlzvSsdsd4"
      ]
    },
    {
      "cells": [
        "abarbarya@pbs.org",
        "BNDamAz4NoTfC"
      ]
    },
    {
      "cells": [
        "bvernib@usa.gov",
        "H7yw5CWaRZk"
      ]
    },
    {
      "cells": [
        "apyec@ovh.net",
        "7ggLtFSNRi4"
      ]
    },
    {
      "cells": [
        "cdewilded@nps.gov",
        "DdRmVuLs8Yssw"
      ]
    },
    {
      "cells": [
        "afarnfielde@wp.com",
        "XAg6ERluqsdsdsd"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it  Scenario:",
  "description": "  contains is as expected.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
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
  "name": "User navigates to \"Sign in\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.search_step_definitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters negative \"esnoden0@cam.ac.uk\" and \"CFF9nCCL\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.signIn_step_definitions.user_enters_negative_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify error message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.signIn_step_definitions.verify_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it  Scenario:",
  "description": "  contains is as expected.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
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
  "name": "User navigates to \"Sign in\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.search_step_definitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters negative \"cboothroyd1@nymag.com\" and \"iFWu5kLBsqM\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.signIn_step_definitions.user_enters_negative_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify error message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.signIn_step_definitions.verify_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it  Scenario:",
  "description": "  contains is as expected.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
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
  "name": "User navigates to \"Sign in\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.search_step_definitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters negative \"lfender2@github.com\" and \"jdhssjUmuZDeE4\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.signIn_step_definitions.user_enters_negative_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify error message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.signIn_step_definitions.verify_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it  Scenario:",
  "description": "  contains is as expected.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
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
  "name": "User navigates to \"Sign in\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.search_step_definitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters negative \"plubbock3@time.com\" and \"XabKWi4JYsdsad\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.signIn_step_definitions.user_enters_negative_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify error message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.signIn_step_definitions.verify_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it  Scenario:",
  "description": "  contains is as expected.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
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
  "name": "User navigates to \"Sign in\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.search_step_definitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters negative \"chitter4@guardian.co.uk\" and \"X8Kwdf1rP9dg\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.signIn_step_definitions.user_enters_negative_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify error message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.signIn_step_definitions.verify_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it  Scenario:",
  "description": "  contains is as expected.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
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
  "name": "User navigates to \"Sign in\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.search_step_definitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters negative \"uminshall6@mlb.com\" and \"1oyLQUXJTL\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.signIn_step_definitions.user_enters_negative_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify error message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.signIn_step_definitions.verify_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it  Scenario:",
  "description": "  contains is as expected.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
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
  "name": "User navigates to \"Sign in\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.search_step_definitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters negative \"abowcock5@chronoengine.com\" and \"yAT7gsffKNH\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.signIn_step_definitions.user_enters_negative_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify error message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.signIn_step_definitions.verify_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it  Scenario:",
  "description": "  contains is as expected.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
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
  "name": "User navigates to \"Sign in\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.search_step_definitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters negative \"lsime8@desdev.cn\" and \"sU1O45CYaMKB\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.signIn_step_definitions.user_enters_negative_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify error message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.signIn_step_definitions.verify_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it  Scenario:",
  "description": "  contains is as expected.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
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
  "name": "User navigates to \"Sign in\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.search_step_definitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters negative \"redes9@samsung.com\" and \"FQPlzvSsdsd4\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.signIn_step_definitions.user_enters_negative_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify error message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.signIn_step_definitions.verify_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it  Scenario:",
  "description": "  contains is as expected.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
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
  "name": "User navigates to \"Sign in\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.search_step_definitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters negative \"abarbarya@pbs.org\" and \"BNDamAz4NoTfC\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.signIn_step_definitions.user_enters_negative_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify error message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.signIn_step_definitions.verify_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it  Scenario:",
  "description": "  contains is as expected.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
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
  "name": "User navigates to \"Sign in\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.search_step_definitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters negative \"bvernib@usa.gov\" and \"H7yw5CWaRZk\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.signIn_step_definitions.user_enters_negative_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify error message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.signIn_step_definitions.verify_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it  Scenario:",
  "description": "  contains is as expected.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
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
  "name": "User navigates to \"Sign in\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.search_step_definitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters negative \"apyec@ovh.net\" and \"7ggLtFSNRi4\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.signIn_step_definitions.user_enters_negative_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify error message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.signIn_step_definitions.verify_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it  Scenario:",
  "description": "  contains is as expected.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
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
  "name": "User navigates to \"Sign in\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.search_step_definitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters negative \"cdewilded@nps.gov\" and \"DdRmVuLs8Yssw\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.signIn_step_definitions.user_enters_negative_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify error message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.signIn_step_definitions.verify_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it  Scenario:",
  "description": "  contains is as expected.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
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
  "name": "User navigates to \"Sign in\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.search_step_definitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters negative \"afarnfielde@wp.com\" and \"XAg6ERluqsdsdsd\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.signIn_step_definitions.user_enters_negative_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify error message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.signIn_step_definitions.verify_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/todaysMatches.feature");
formatter.feature({
  "name": "As a business user, I would like to make a record of all teams which are playing today",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "Output all team names with a match today. If there are no matches today, output a message to convey this.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
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
  "name": "User needs to collect info about today\u0027s matches",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bbc_tests.step_definitions.match_steps.userNeedsToCollectInfoAboutTodaySMatches()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});