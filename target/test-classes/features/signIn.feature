@smoke
Feature: As a QA, I would like to verify all negative scenarios for login
  
  
  
  @wip
  Scenario Outline: Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it  Scenario:
  contains is as expected.
    Given The user is on the web page
    When User navigates to "Sign in" page
    When User enters negative "<username>" and "<password>"
    Then Verify error message


    Examples:
    |username|	password|
    |esnoden0@cam.ac.uk|CFF9nCCL|
    |cboothroyd1@nymag.com|iFWu5kLBsqM|
    |lfender2@github.com|jdhssjUmuZDeE4|
    |plubbock3@time.com|XabKWi4JYsdsad|
    |chitter4@guardian.co.uk|X8Kwdf1rP9dg|
    |uminshall6@mlb.com|1oyLQUXJTL |
    |abowcock5@chronoengine.com|yAT7gsffKNH|
    |lsime8@desdev.cn|sU1O45CYaMKB|
    |redes9@samsung.com	|FQPlzvSsdsd4 |
    |abarbarya@pbs.org|	BNDamAz4NoTfC|
    |bvernib@usa.gov|H7yw5CWaRZk|
    |apyec@ovh.net|7ggLtFSNRi4   |
    |cdewilded@nps.gov|DdRmVuLs8Yssw|
    |afarnfielde@wp.com|XAg6ERluqsdsdsd|